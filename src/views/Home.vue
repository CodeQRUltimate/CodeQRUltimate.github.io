<i18n>
{
  "en": {
    "allPlayers": "View all players"
  },
  "fr": {
    "allPlayers": "Voir tous les joueurs"
  }
}
</i18n>

<template>
  <div class="mx-auto" style="max-width: 800px">
    <h1 class="text-center font-light text-8xl">{{ data.teamName }}</h1>
    <div class="bg-white rounded-lg text-center p-3 mr-5 mb-10">
      <img :src="data.teamImageUrl" class="rounded-lg" />
      <a :href="qrCodeUrl" class="inline-block rounded hover:bg-gray-100 mt-3">
        <QrCode :value="qrCodeUrl" />
      </a>
    </div>
    <div class="text-xl mb-10">
      <router-link :to="{ name: 'players' }">
        {{ $t("allPlayers") }}
      </router-link>
    </div>
    <div>
      <div v-for="{ year, lineups } in lineupsByYear" :key="year" class="mb-10">
        <h2 class="text-3xl border-b mb-5">{{ year }}</h2>
        <div v-for="lineup in lineups" :key="year + lineup.name" class="mb-5">
          <router-link
            :to="{ name: 'lineup', params: { lineupKey: lineup.key } }"
            class="text-xl"
          >
            {{ lineup.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";

export default {
  name: "Home",
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["lineupsByYear"]),
    playerKey() {
      return this.$route.query.player;
    },
    players() {
      return this.data?.players || [];
    },
    qrCodeUrl() {
      return window.location.origin;
    }
  },
  methods: {
    getPlayersForLineup(lineup) {
      return lineup.playerNumbers.map(this.getPlayerByNumber);
    },
    getPlayerByNumber(playerNumber) {
      return this.players.find(x => x.number === playerNumber);
    }
  },
  components: { QrCode }
};
</script>

<style lang="scss" scoped></style>
