<i18n>
{
  "en": {},
  "fr": {}
}
</i18n>

<template>
  <div class="mx-auto" style="max-width: 800px">
    <h1 class="text-center text-5xl mb-5">{{ lineupName }}</h1>
    <router-link :to="{ name: 'home' }" class="inline-block mb-5">
      <i class="fa fa-chevron-left mr-2"></i>Retour à l'accueil
    </router-link>
    <div v-for="player in players" :key="player.number">
      <router-link
        :to="{ name: 'player', params: { playerNumber: player.number } }"
        class="text-graduate"
      >
        <span class="inline-block text-4xl w-16 text-right mr-4">{{
          player.number
        }}</span>
        <span class="text-xl mr-2">{{ player.firstName }}</span>
        <span class="text-xl">{{ player.lastName }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["route", "data"]),
    players() {
      if (!this.lineup) return [];

      return this.lineup.playerNumbers.map(this.getPlayerByNumber);
    },
    lineup() {
      return this.data.lineups.find(x => x.key === this.route.params.lineupKey);
    },
    lineupName() {
      return this.lineup ? this.lineup.name : "";
    }
  },
  methods: {
    getPlayerByNumber(playerNumber) {
      return this.data.players.find(x => x.number === playerNumber);
    }
  }
};
</script>

<style lang="scss" scoped></style>
