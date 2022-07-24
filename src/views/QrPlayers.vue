<i18n>
{
  "en": {
    "lineup": "Lineup",
    "players": "Players"
  },
  "fr": {
    "lineup": "Alignement",
    "players": "Joueurs"
  }
}
</i18n>

<template>
  <div>
    <BodyBackgroundImage
      :url="
        playerHovered
          ? resolveUrl(playerHovered.imageUrl)
          : resolveUrl(data.teamImageUrl)
      "
    />
    <div
      class="mx-auto mt-5 mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white"
      style="max-width: 600px; backdrop-filter: blur(8px)"
    >
      <div
        v-for="player in players"
        :key="player.number"
        @mouseover="playerHovered = player"
      >
        <router-link
          :to="{ name: 'player', params: { playerNumber: player.number } }"
          class="block text-graduate hover:bg-white hover:bg-opacity-25 rounded transition-colors duration-200"
        >
          <span
            class="inline-block text-2xl md:text-4xl w-8 md:w-12 text-right mr-4"
            >{{ player.number }}</span
          >
          <span class="md:text-xl mr-2">{{ player.firstName }}</span>
          <span class="md:text-xl">{{ player.lastName }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BodyBackgroundImage from "../components/BodyBackgroundImage.vue";

export default {
  name: "QrPlayers",
  data() {
    return {
      playerHovered: null,
    };
  },
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["resolveUrl"]),
    lineups() {
      return this.data.lineups;
    },
    players() {
      return this.data.players;
    },
  },
  components: { BodyBackgroundImage },
};
</script>

<style lang="scss" scoped></style>
