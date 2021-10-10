import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { uniq } from "lodash";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: {
      params: {},
      name: ""
    },
    locale: i18n.locale.substring(0, 2),
    data: {
      dataOrigin: "",
      players: [],
      lineups: []
    }
  },
  getters: {
    playerNumber: state => Number(state.route.params.playerNumber),
    player: (state, getters) =>
      state.data.players.find(x => x.number === getters.playerNumber),
    shouldRedirectToMemeUrl: state => state.route.name === "playerMeme",
    lineupsByYear: state =>
      uniq(state.data.lineups.map(x => x.year)).map(year => ({
        year: year,
        lineups: state.data.lineups.filter(x => x.year === year)
      })),
    resolveUrl: state => url => url?.replace("~", state.data.dataOrigin) ?? ""
  },
  mutations: {
    LOCALE_SET: (state, locale) => {
      state.locale = locale;
    },
    DATA_SET: (state, data) => {
      state.data = data;
    }
  },
  actions: {
    setLocale({ commit }, locale) {
      commit("LOCALE_SET", locale);
      i18n.locale = locale;
      dayjs.locale(locale);
    },
    async getData({ commit, dispatch }) {
      const response = await fetch(
        "https://raw.githubusercontent.com/CodeQRUltimate/CodeQRUltimate.github.io/data/data.json"
      );
      const data = await response.json();
      commit("DATA_SET", data);
      await dispatch("checkMemeRedirection");
    },
    checkMemeRedirection({ getters }) {
      if (getters.player && getters.shouldRedirectToMemeUrl) {
        window.location = getters.player.memeUrl;
      }
    }
  }
});
