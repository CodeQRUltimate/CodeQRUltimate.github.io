<i18n>
{
  "en": {
    "contactUs": "Contact us",
    "lineups": "Lineups",
    "players": "Players"
  },
  "fr": {
    "contactUs": "Contactez-nous",
    "lineups": "Alignements",
    "players": "Joueurs"
  }
}
</i18n>

<template>
  <div style="text-shadow: 0 0 0.25rem #000">
    <div class="bg-black text-white overflow-y-scroll hidden">
      <!-- This is just to make sure these classes are loaded since they're applied on the body -->
    </div>
    <div
      class="flex items-center fixed top-0 right-0 left-0 bg-black text-graduate z-40 md:hidden"
    >
      <button @click="isMenuCollapsed = false" class="p-4">
        <i class="fas fa-bars"></i>
      </button>
      <router-link :to="{ name: 'home' }" class="inline-block text-xl">{{
        generalData.teamName || "Code QR Ultimate"
      }}</router-link>
    </div>
    <div
      class="flex flex-col items-baseline fixed top-0 left-0 md:right-0 bottom-0 w-80 max-w-full bg-black shadow-xl text-graduate z-40 transform transition-transform md:flex-row md:w-auto md:bottom-auto md:-translate-x-0"
      :class="{ '-translate-x-full': isMenuCollapsed }"
    >
      <div class="flex items-center w-full md:w-auto">
        <router-link
          :to="{ name: 'home' }"
          class="inline-block p-4 mr-4 text-xl flex-grow"
          >Code QR Ultimate</router-link
        >
        <button @click="isMenuCollapsed = true" class="ml-auto p-4 md:hidden">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>
      <div class="flex flex-col flex-grow w-full md:flex-row md:w-auto">
        <router-link
          :to="{ name: 'lineups' }"
          class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
          active-class="text-opacity-100 border-r border-white md:border-r-0 md:border-b"
          >{{ $t("lineups") }}</router-link
        >
        <router-link
          :to="{ name: 'players' }"
          class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
          active-class="text-opacity-100 border-r border-white md:border-r-0 md:border-b"
          >{{ $t("players") }}</router-link
        >
        <router-link
          :to="{ name: 'contact-us' }"
          class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
          active-class="text-opacity-100 border-r border-white md:border-r-0 md:border-b"
          >{{ $t("contactUs") }}</router-link
        >
        <div class="md:ml-auto">
          <button
            v-if="locale === 'en'"
            @click="setLocale('fr')"
            class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
          >
            Français
          </button>
          <button
            v-if="locale === 'fr'"
            @click="setLocale('en')"
            class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
          >
            English
          </button>
        </div>
      </div>
    </div>
    <div class="h-20" style="height: 62px"></div>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      isMenuCollapsed: true,
    };
  },
  watch: {
    $route() {
      this.isMenuCollapsed = true;
    },
  },
  computed: {
    ...mapState(["locale"]),
    ...mapGetters(["generalData"]),
  },
  methods: {
    ...mapActions(["getData", "setLocale"]),
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<style lang="scss">
.text-graduate {
  font-family: "Graduate", cursive;
}

.text-shadow-swag-sm {
  text-shadow: 1px 1px 0px #312e81, 2px 2px 0px #ecc94b;
}

.text-shadow-swag {
  text-shadow: 2px 2px 0px #312e81, 4px 4px 0px #ecc94b;
}
</style>
