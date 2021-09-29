<i18n>
{
  "en": {
    "players": "Players"
  },
  "fr": {
    "players": "Joueurs"
  }
}
</i18n>

<template>
  <div class="mx-auto" style="max-width: 800px">
    <h1 class="text-center text-5xl mb-5">{{ $t("players") }}</h1>
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
    ...mapState(["data"]),
    players() {
      return this.data.players;
    }
  }
};
</script>

<style lang="scss" scoped></style>
