import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { chain, keys, uniq } from "lodash";
import * as XLSX from "xlsx";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultLocale: "fr",
    locale: "fr",
    route: {
      params: {},
      name: "",
    },
    data: {
      general: [],
      players: [],
      lineups: [],
      images: [],
      zodiacSigns: [],
    },
  },
  getters: {
    generalData: (state) => state.data.general[0] || {},
    playerNumber: (state) => Number(state.route.params.playerNumber),
    player: (state, getters) =>
      state.data.players.find((x) => x.number == getters.playerNumber),
    shouldRedirectToMemeUrl: (state) => state.route.name === "playerMeme",
    lineupsByYear: (state) =>
      uniq(state.data.lineups.map((x) => x.year)).map((year) => ({
        year: year,
        lineups: state.data.lineups.filter((x) => x.year === year),
      })),
    getDataList: () => (obj) =>
      (obj.toString() || "").split(",").map((x) => x.trim()),
    resolveUrl: (_, getters) => (url) =>
      url?.replace("~", getters.generalData.dataOrigin) ?? "",
    getString: (state) => (obj, prop) =>
      obj[prop + "_" + (state.locale || state.defaultLocale).toUpperCase()] ||
      obj[prop + "_" + state.defaultLocale.toUpperCase()],
    getZodiacSign: (state) => (zodiacSign) =>
      state.data.zodiacSigns.find((x) => x.key === zodiacSign),
    imagesByDate: (state) =>
      chain(state.data.images)
        .sortBy((x) => x.date)
        .groupBy((x) => x.date)
        .value(),
    imageDates: (state, getters) => keys(getters.imagesByDate),
  },
  mutations: {
    LOCALE_SET: (state, locale) => {
      state.locale = locale;
    },
    DATA_SET: (state, data) => {
      state.data = data;
    },
  },
  actions: {
    setLocale({ commit }, locale) {
      locale = locale.toLowerCase();

      commit("LOCALE_SET", locale);
      i18n.locale = locale;
      dayjs.locale(locale);
    },
    async getData({ commit, dispatch }) {
      const response = await fetch(
        "https://raw.githubusercontent.com/CodeQRUltimate/CodeQRUltimate.github.io/data/data.xlsx"
      );
      const responseBuffer = await response.arrayBuffer();
      const workbook = XLSX.read(responseBuffer, { cellDates: true });
      const data = {};

      workbook.SheetNames.forEach((name) => {
        const worksheet = workbook.Sheets[name];
        data[name] = XLSX.utils.sheet_to_json(worksheet);
      });

      commit("DATA_SET", camelizeKeys(data));
      await dispatch("checkMemeRedirection");
    },
    checkMemeRedirection({ getters }) {
      if (getters.player && getters.shouldRedirectToMemeUrl) {
        window.location = getters.player.memeUrl;
      }
    },
  },
});

const camelizeKeys = (o) => {
  var newO, origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === "object") {
        value = camelizeKeys(value);
      }
      return value;
    });
  } else {
    newO = {};
    for (origKey in o) {
      // eslint-disable-next-line no-prototype-builtins
      if (o.hasOwnProperty(origKey)) {
        newKey = (
          origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
        ).toString();
        value = o[origKey];
        if (
          value instanceof Array ||
          (value !== null && value.constructor === Object)
        ) {
          value = camelizeKeys(value);
        }
        newO[newKey] = value;
      }
    }
  }
  return newO;
};
