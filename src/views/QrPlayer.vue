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
  <div class="mx-auto" style="max-width: 800px">
    <BaseMouseTracker />
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
      style="backdrop-filter: blur(8px)"
    >
      <div v-if="player">
        <div class="player-card-container flex flex-col md:flex-row">
          <div
            class="player-card relative overflow-hidden self-center md:self-start flex-shrink-0 bg-white rounded-lg text-center p-1 mb-6 md:mb-0 md:mr-6 max-w-full"
          >
            <div
              class="player-card-shine absolute top-0 left-0 right-0 bottom-0 z-10"
            ></div>
            <div
              class="relative rounded-lg w-full h-full bg-cover bg-center max-w-full"
              :style="{
                'background-image':
                  'url(\'' + resolveUrl(player.imageUrl) + '\')',
                width: '4in',
                height: '6in',
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
                  class="absolute top-0 right-0 flex items-center justify-around text-5xl md:text-5xl leading-none rounded-bl-lg border-l-2 border-b-2 border-white bg-white"
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
                <i class="fab fa-lg fa-instagram"></i>
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
import BaseMouseTracker from "../components/BaseMouseTracker.vue";

export default {
  name: "QrPlayer",
  computed: {
    ...mapState(["route", "data"]),
    ...mapGetters([
      "player",
      "resolveUrl",
      "getDataList",
      "getString",
      "getZodiacSign",
    ]),
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
          this.player.zodiacSign +
            " " +
            this.getString(this.getZodiacSign(this.player.zodiacSign), "name"),
        ]);
      }

      const topEmojis = this.getDataList(this.player.topEmojis);
      if (this.player.topEmojis.length > 0) {
        items.push([this.$t("emojis"), topEmojis.join(" ")]);
      }

      if (this.player.recommendedRestaurantUrl) {
        items.push([
          this.$t("recommendedRestaurant"),
          `<a href="${this.player.recommendedRestaurantUrl}" target="_blank" class="underline">${this.player.recommendedRestaurantName}</a>`,
        ]);
      }

      if (this.player.recommendedArtistUrl) {
        items.push([
          this.$t("recommendedArtist"),
          `<a href="${this.player.recommendedArtistUrl}" target="_blank" class="underline">${this.player.recommendedArtistName}</a>`,
        ]);
      }

      if (this.player.favoriteThrow) {
        items.push([
          this.$t("favoriteThrow"),
          this.getString(this.player.favoriteThrow),
        ]);
      }

      if (this.player.favoriteUltimateMemory) {
        items.push([
          this.$t("favoriteUltimateMemory"),
          this.getString(this.player.favoriteUltimateMemory),
        ]);
      }

      return items;
    },
    lineupKey() {
      return this.route.query.lineup;
    },
  },
  methods: {
    ...mapActions(["checkMemeRedirection"]),
  },
  mounted() {
    this.checkMemeRedirection();
  },
  components: { LinkBack, BodyBackgroundImage, QrCode, BaseMouseTracker },
};
</script>

<style scoped lang="scss">
.player-card-container {
  perspective: 1500px;
}

.player-card {
  transition: transform 0.1s ease-out;
  transform: rotateY(calc(15deg * (var(--cursor-x) - 0.5)))
    rotateX(calc(-15deg * (var(--cursor-y) - 0.5)));
}

.player-card-shine {
  background: radial-gradient(
    circle,
    rgba(
      252,
      211,
      77,
      calc(
        0.15 *
          (
            max(var(--cursor-x) - 0.5, -1 * (var(--cursor-x) - 0.5)) +
              max(var(--cursor-y) - 0.5, -1 * (var(--cursor-y) - 0.5))
          )
      )
    ),
    transparent,
    transparent
  );
  transform: translateX(calc(-100% * (var(--cursor-x) - 0.5)))
    translateY(calc(-100% * (var(--cursor-y) - 0.5)));
}
</style>
