<i18n>
{
  "en": {},
  "fr": {}
}
</i18n>

<template>
  <div class="text-center mx-auto" style="max-width: 400px">
    <h1 class="mb-6 font-light text-5xl">Équipe à Lus</h1>
    <h2 class="mb-4 text-3xl">Code QR des joueurs</h2>
    <div>
      <div v-for="player in players" :key="player.number" class="mt-12">
        <p>
          Le lien [{{ getQrCodeUrlForPlayer(player) }}], représenté par le code QR
          ci-dessous, sera redirigé vers [{{ player.memeUrl }}].
        </p>
        <QrCode :value="getQrCodeUrlForPlayer(player)" class="mx-auto" />
        <router-link :to="{ name: 'player', params: { playerNumber: player.number } }">Aller au joueur</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from  "vuex";
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
    },
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
