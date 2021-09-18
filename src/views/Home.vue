<i18n>
{
  "en": {},
  "fr": {}
}
</i18n>

<template>
  <div class="text-center mx-auto" style="max-width: 800px">
    <h1 class="text-white font-light text-8xl">Équipe à Lus</h1>
    <div>
      <div v-for="player in players" :key="player.number" class="mt-12">
        <div class="flex items-baseline text-graduate text-white">
          <div class="text-6xl text-left w-20 mr-4">{{ player.number }}</div>
          <div class="text-4xl">
            <router-link
              :to="{ name: 'player', params: { playerNumber: player.number } }"
            >
              {{ player.name }}
            </router-link>
          </div>
        </div>
        <QrCode :value="getQrCodeUrlForPlayer(player)" class="mx-auto hidden" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";

export default {
  name: "Home",
  computed: {
    ...mapState(["data"]),
    playerKey() {
      return this.$route.query.player;
    },
    players() {
      return this.data?.players || [];
    }
  },
  methods: {
    ...mapActions(["getData"]),
    getQrCodeUrlForPlayer(player) {
      return `${window.location.origin}${window.location.pathname}${window.location.hash}players/${player.number}`;
    }
  },
  mounted() {
    this.getData();
  },
  components: { QrCode }
};
</script>

<style lang="scss" scoped></style>
