<i18n>
{
  "en": {
  },
  "fr": {
  }
}
</i18n>

<template>
  <div
    class="mx-auto mt-5 mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white"
    style="max-width: 600px; backdrop-filter: blur(8px)"
  >
    <BodyBackgroundImage :url="resolveUrl(generalData.teamImageUrl)" />

    <div>
      <div v-for="{ year, lineups } in lineupsByYear" :key="year" class="mb-10">
        <h2 class="text-3xl border-b mb-5">{{ year }}</h2>
        <div v-for="lineup in lineups" :key="lineup.key" class="mb-5">
          <router-link
            :to="{ name: 'lineup', params: { lineupKey: lineup.key } }"
            class="md:text-xl"
          >
            {{ getString(lineup, "name") }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BodyBackgroundImage from "../components/BodyBackgroundImage.vue";

export default {
  name: "QrLineups",
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["generalData", "lineupsByYear", "resolveUrl", "getString"]),
    playerKey() {
      return this.$route.query.player;
    },
    players() {
      return this.data?.players || [];
    },
  },
  methods: {
    getPlayerByNumber(playerNumber) {
      return this.players.find((x) => x.number === playerNumber);
    },
  },
  components: { BodyBackgroundImage },
};
</script>

<style lang="scss" scoped></style>
