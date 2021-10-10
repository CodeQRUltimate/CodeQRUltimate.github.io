<i18n>
{
  "en": {
    "age": "Age",
    "emojis": "Emojis",
    "favoriteThrow": "Favourite throw",
    "favoriteUltimateMemory": "Ultimate memory",
    "recommendedArtist": "Recommended artist",
    "recommendedRestaurant": "Recommended restaurant",
    "zodiacSign": "Zodiac sign"
  },
  "fr": {
    "age": "Âge",
    "emojis": "Emojis",
    "favoriteThrow": "Lancer de choix",
    "favoriteUltimateMemory": "Souvenir d'Ultimate",
    "recommendedArtist": "Artiste recommandé",
    "recommendedRestaurant": "Restaurant recommandé",
    "zodiacSign": "Signe du Zodiac"
  }
}
</i18n>

<template>
  <div class="bg-primary mx-auto px-3" style="max-width: 800px">
    <router-link :to="{ name: 'players' }" class="font-bold p-2 inline-block"
      >Retour aux joueurs</router-link
    >

    <div v-if="player">
      <div class="flex items-end text-graduate mr-10">
        <div class="text-shadow-swag text-9xl leading-none">
          {{ player.number }}
        </div>
        <div class="flex-grow ml-2">
          <div class="text-3xl -mb-4">{{ player.firstName }}</div>
          <div v-if="player.lastName.length <= 10" class="text-6xl -mb-3">
            {{ player.lastName }}
          </div>
          <div v-else class="text-5xl -mb-1">{{ player.lastName }}</div>
        </div>
      </div>
      <div class="border-t border-b-4 border-white pb-1 mb-6"></div>
      <div class="flex flex-col md:flex-row">
        <div
          class="self-center flex-shrink-0 bg-white rounded-lg text-center p-3 mb-6 mr-6 max-w-full"
        >
          <div
            class="rounded-lg w-full h-full bg-cover bg-center max-w-full"
            :style="{
              'background-image':
                'url(\'' + resolveUrl(player.imageUrl) + '\')',
              width: '4in',
              height: '6in'
            }"
          ></div>
          <a
            :href="qrCodeUrl"
            class="inline-block rounded hover:bg-gray-100 mt-3"
          >
            <QrCode
              :value="qrCodeUrl"
              :options="{ errorCorrectionLevel: 'high' }"
            />
          </a>
        </div>
        <div>
          <div
            v-for="item in descriptionItems"
            :key="item[0]"
            class="flex mb-2"
          >
            <div class="font-semibold w-32 mr-2 flex-shrink-0">
              {{ item[0] }}
            </div>
            <div v-html="item[1]" class=""></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters, mapActions } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";

export default {
  name: "Player",
  computed: {
    ...mapGetters(["player", "resolveUrl"]),
    qrCodeUrl() {
      return `${window.location.origin}/#/players/${this.player.number}/meme`;
    },
    playerAge() {
      return dayjs().diff(dayjs(this.player.birthDate), "years");
    },
    descriptionItems() {
      let items = [];

      if (this.player.birthDate) {
        items.push([this.$t("age"), this.playerAge]);
      }
      if (this.player.zodiacSign) {
        items.push([this.$t("zodiacSign"), this.player.zodiacSign]);
      }
      if (this.player.topEmojis && this.player.topEmojis.length > 0) {
        items.push([this.$t("emojis"), this.player.topEmojis.join(" ")]);
      }
      if (this.player.recommendedRestaurant) {
        items.push([
          this.$t("recommendedRestaurant"),
          this.player.recommendedRestaurant
        ]);
      }
      if (this.player.recommendedArtist) {
        items.push([
          this.$t("recommendedArtist"),
          this.player.recommendedArtist
        ]);
      }
      if (this.player.favoriteThrow) {
        items.push([this.$t("favoriteThrow"), this.player.favoriteThrow]);
      }
      if (this.player.favoriteUltimateMemory) {
        items.push([
          this.$t("favoriteUltimateMemory"),
          this.player.favoriteUltimateMemory
        ]);
      }

      return items;
    }
  },
  watch: {
    $route() {
      this.checkMemeRedirection();
    }
  },
  methods: {
    ...mapActions(["checkMemeRedirection"])
  },
  components: { QrCode }
};
</script>

<style scoped lang="scss"></style>
