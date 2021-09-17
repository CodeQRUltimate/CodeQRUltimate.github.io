import Vue from "vue";
import Vuex from "vuex";
import i18n from "../i18n";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    locale: i18n.locale.substring(0, 2),
    data: {
      players: []
    }
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
    async getData({ commit }) {
      const response = await fetch("/json/data.json");
      const data = await response.json();

      commit("DATA_SET", data);
    }
  }
});
