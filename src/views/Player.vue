<template>
  <div class="bg-primary mx-auto px-3" style="max-width: 800px">
    <router-link to="/" class="font-bold p-2 inline-block"
      >Retour à l'équipe</router-link
    >

    <div v-if="player">
      <div class="flex items-end text-graduate mr-10">
        <div class="text-shadow-swag text-9xl leading-none">
          {{ player.number }}
        </div>
        <div class="flex-grow ml-2">
          <div class="text-3xl -mb-4">{{ player.firstName }}</div>
          <div class="text-5xl -mb-1">{{ player.lastName }}</div>
        </div>
      </div>
      <div class="border-t border-b-4 border-white pb-1 mb-6"></div>
      <div class="flex flex-col md:flex-row">
        <div class="self-center bg-white rounded-lg text-center p-3 mb-6 mr-6">
          <img :src="player.imageUrl" class="rounded-lg max-w-sm" />
          <a
            :href="qrCodeUrl"
            class="inline-block rounded hover:bg-gray-100 mt-3"
          >
            <QrCode :value="qrCodeUrl" />
          </a>
        </div>
        <div>
          <p v-html="player.description" class="text-xl text-wrap mb-4"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";

export default {
  name: "Player",
  computed: {
    ...mapGetters(["player"]),
    qrCodeUrl() {
      return `${window.location.origin}/players/${this.player.number}?qr=1`;
    }
  },
  components: { QrCode }
};
</script>

<style scoped lang="scss"></style>
