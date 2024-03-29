<i18n>
{
  "en": {
    "backToLineups": "Back to lineups",
    "results": "Results"
  },
  "fr": {
    "backToLineups": "Retour aux alignements",
    "results": "Résultats"
  }
}
</i18n>

<template>
  <div class="mx-auto" style="max-width: 800px">
    <BodyBackgroundImage
      :url="
        playerHovered
          ? resolveUrl(playerHovered.imageUrl)
          : resolveUrl(data.teamImageUrl)
      "
    />
    <LinkBack :to="{ name: 'lineups' }">
      {{ $t("backToLineups") }}
    </LinkBack>
    <div
      class="mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white"
      style="backdrop-filter: blur(8px)"
    >
      <h1 class="text-center md:text-3xl mb-5">{{ lineupName }}</h1>
      <div v-if="lineup.resultsUrl" class="text-center">
        <a
          :href="lineup.resultsUrl"
          target="_blank"
          class="inline-block border border-white border-opacity-50 hover:border-opacity-100 transition-colors duration-200 mb-5 px-3 py-2 rounded"
          >{{ $t("results") }}</a
        >
      </div>
      <div
        v-for="player in players"
        :key="player.number"
        @mouseover="playerHovered = player"
      >
        <router-link
          :to="{
            name: 'player',
            params: { playerNumber: player.number },
            query: { lineup: lineup.key },
          }"
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
import LinkBack from "../components/LinkBack.vue";

export default {
  name: "QrLineup",
  data() {
    return {
      playerHovered: null,
    };
  },
  computed: {
    ...mapState(["route", "data"]),
    ...mapGetters(["generalData", "resolveUrl", "getDataList", "getString"]),
    players() {
      if (!this.lineup) return [];

      return this.getDataList(this.lineup.playerNumbers).map(
        this.getPlayerByNumber
      );
    },
    lineup() {
      return this.data.lineups.find(
        (x) => x.key === this.route.params.lineupKey
      );
    },
    lineupName() {
      return this.lineup ? this.getString(this.lineup, "name") : "";
    },
  },
  methods: {
    getPlayerByNumber(playerNumber) {
      return this.data.players.find((x) => x.number == playerNumber);
    },
  },
  components: { LinkBack, BodyBackgroundImage },
};
</script>

<style lang="scss" scoped></style>
