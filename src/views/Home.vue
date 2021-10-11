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
    style="max-width: 800px; backdrop-filter: blur(8px);"
  >
    <BodyBackgroundImage :url="resolveUrl(data.teamImageUrl)" />

    <h1
      class="text-center text-graduate text-shadow-swag text-3xl md:text-7xl mb-4"
    >
      {{ data.teamName }}
    </h1>
    <div class="bg-white rounded-lg text-center p-1 mb-10">
      <img :src="resolveUrl(data.teamImageUrl)" class="rounded-lg" />
      <a :href="qrCodeUrl" class="inline-block rounded hover:bg-gray-100 mt-3">
        <QrCode
          :value="qrCodeUrl"
          :options="{ errorCorrectionLevel: 'high' }"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";
import BodyBackgroundImage from "../components/BodyBackgroundImage.vue";

export default {
  name: "Home",
  computed: {
    ...mapState(["data"]),
    ...mapGetters(["resolveUrl"]),
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
  components: { BodyBackgroundImage, QrCode }
};
</script>

<style lang="scss" scoped></style>
