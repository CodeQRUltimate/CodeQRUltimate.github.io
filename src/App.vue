<i18n>
{
  "en": {
    "lineups": "Lineups",
    "players": "Players"
  },
  "fr": {
    "lineups": "Alignements",
    "players": "Joueurs"
  }
}
</i18n>

<template>
  <div style="text-shadow: 0 0 .25rem #000;">
    <div class="bg-black text-white overflow-y-scroll hidden">
      <!-- This is just to make sure these classes are loaded since they're applied on the body -->
    </div>
    <div
      class="flex items-baseline fixed top-0 right-0 left-0 bg-black text-graduate z-40"
    >
      <router-link :to="{ name: 'home' }" class="inline-block px-4 mr-4 text-xl"
        >Code QR Ultimate</router-link
      >
      <router-link
        :to="{ name: 'lineups' }"
        class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
        active-class="text-opacity-100 border-b border-white"
        >{{ $t("lineups") }}</router-link
      >
      <router-link
        :to="{ name: 'players' }"
        class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
        active-class="text-opacity-100 border-b border-white"
        >{{ $t("players") }}</router-link
      >
      <div class="ml-auto">
        <button
          v-if="$root.$i18n.locale !== 'fr'"
          @click="$root.$i18n.locale = 'fr'"
          class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
        >
          Français
        </button>
        <button
          v-if="$root.$i18n.locale !== 'en'"
          @click="$root.$i18n.locale = 'en'"
          class="inline-block p-4 text-white text-opacity-50 hover:text-opacity-75 transition-colors duration-200"
        >
          English
        </button>
      </div>
    </div>
    <div class="h-20" style="height:62px"></div>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["getData"])
  },
  async mounted() {
    await this.getData();
  }
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
body {
  font-family: "Lora", serif;
}

.text-graduate {
  font-family: "Graduate", cursive;
}

.text-shadow-swag-sm {
  text-shadow: 1px 1px 0px #312e81, 2px 2px 0px #ecc94b;
}

.text-shadow-swag {
  text-shadow: 2px 2px 0px #312e81, 4px 4px 0px #ecc94b;
}

.backdrop-blur {
  backdrop-filter: blur(8px);
}
</style>
