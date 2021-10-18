<i18n>
{
  "en": {
    "age": "Age",
    "backToLineup": "Back to lineup",
    "backToPlayers": "Back to players",
    "emojis": "Emojis",
    "favoriteThrow": "Favourite throw",
    "favoriteUltimateMemory": "Ultimate memory",
    "recommendedArtist": "Recommended artist",
    "recommendedRestaurant": "Recommended restaurant",
    "zodiacSign": "Zodiac sign"
  },
  "fr": {
    "age": "Âge",
    "backToLineup": "Retour à l'alignement",
    "backToPlayers": "Retour aux joueurs",
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
  <div class="mx-auto" style="max-width: 800px;">
    <BodyBackgroundImage v-if="player" :url="resolveUrl(player.imageUrl)" />
    <LinkBack
      v-if="lineupKey"
      :to="{ name: 'lineup', params: { lineupKey } }"
      >{{ $t("backToLineup") }}</LinkBack
    >
    <LinkBack v-else :to="{ name: 'players' }">{{
      $t("backToPlayers")
    }}</LinkBack>
    <div
      class="mb-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white"
      style="backdrop-filter: blur(8px);"
    >
      <div v-if="player">
        <div class="flex flex-col md:flex-row">
          <div
            class="self-center md:self-start flex-shrink-0 bg-white rounded-lg text-center p-1 mb-6 md:mb-0 md:mr-6 max-w-full"
          >
            <div
              class="relative rounded-lg w-full h-full bg-cover bg-center max-w-full"
              :style="{
                'background-image':
                  'url(\'' + resolveUrl(player.imageUrl) + '\')',
                width: '4in',
                height: '6in'
              }"
            >
              <div class="flex flex-col h-full text-graduate text-left">
                <div class="mt-auto mb-8">
                  <div class="border-t-2 border-b-2 border-white">
                    <div class="bg-primary text-lg md:text-xl pl-3">
                      {{ player.firstName }}
                    </div>
                    <div class="bg-black pl-3">
                      <div
                        v-if="player.lastName.length <= 10"
                        class="text-2xl md:text-4xl leading-tight"
                      >
                        {{ player.lastName }}
                      </div>
                      <div v-else class="text-xl md:text-2xl leading-loose">
                        {{ player.lastName }}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute bottom-0 right-0 flex items-center justify-around text-5xl md:text-5xl leading-none mb-6 mr-2 rounded-full border-2 border-white bg-black w-20 h-20 md:w-24 md:h-24"
                >
                  {{ player.number }}
                </div>
                <div
                  class="absolute top-0 right-0 flex items-center justify-around text-5xl md:text-5xl leading-none rounded-bl-lg border-l-2 border-b-2 border-white"
                >
                  <a :href="qrCodeUrl" target="_blank">
                    <QrCode
                      :value="qrCodeUrl"
                      :options="{ errorCorrectionLevel: 'high', width: 125 }"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="text-lg">
            <div v-if="player.instagramUsername" class="mb-4">
              <a
                :href="'https://www.instagram.com/' + player.instagramUsername"
                target="_blank"
              >
                <i class="fa fa-lg fa-instagram"></i>
              </a>
            </div>
            <div
              v-for="item in descriptionItems"
              :key="item[0]"
              class="item mb-4"
            >
              <div class="font-semibold">
                {{ item[0] }}
              </div>
              <div v-html="item[1]" class=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapState, mapGetters, mapActions } from "vuex";
import QrCode from "@chenfengyuan/vue-qrcode";
import BodyBackgroundImage from "../components/BodyBackgroundImage.vue";
import LinkBack from "../components/LinkBack.vue";

export default {
  name: "Player",
  computed: {
    ...mapState(["route"]),
    ...mapGetters(["player", "resolveUrl", "getString"]),
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
        items.push([
          this.$t("zodiacSign"),
          this.getString(this.player.zodiacSign)
        ]);
      }
      if (this.player.topEmojis && this.player.topEmojis.length > 0) {
        items.push([this.$t("emojis"), this.player.topEmojis.join(" ")]);
      }
      if (this.player.recommendedRestaurant) {
        items.push([
          this.$t("recommendedRestaurant"),
          `<a href="${this.player.recommendedRestaurant.url}" target="_blank" class="underline">${this.player.recommendedRestaurant.name}</a>`
        ]);
      }
      if (this.player.recommendedArtist) {
        items.push([
          this.$t("recommendedArtist"),
          `<a href="${this.player.recommendedArtist.url}" target="_blank" class="underline">${this.player.recommendedArtist.name}</a>`
        ]);
      }
      if (this.player.favoriteThrow) {
        items.push([
          this.$t("favoriteThrow"),
          this.getString(this.player.favoriteThrow)
        ]);
      }
      if (this.player.favoriteUltimateMemory) {
        items.push([
          this.$t("favoriteUltimateMemory"),
          this.getString(this.player.favoriteUltimateMemory)
        ]);
      }

      return items;
    },
    lineupKey() {
      return this.route.query.lineup;
    }
  },
  methods: {
    ...mapActions(["checkMemeRedirection"])
  },
  mounted() {
    this.checkMemeRedirection();
  },
  components: { LinkBack, BodyBackgroundImage, QrCode }
};
</script>

<style scoped lang="scss"></style>
