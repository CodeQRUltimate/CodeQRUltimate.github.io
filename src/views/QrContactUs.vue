<i18n>
{
  "en": {
    "body": "Message",
    "contactUs": "Contact us",
    "send": "Send",
    "subject": "Subject"
  },
  "fr": {
    "body": "Message",
    "contactUs": "Contactez-nous",
    "send": "Envoyer",
    "subject": "Sujet"
  }
}
</i18n>

<template>
  <div class="mx-auto" style="max-width: 600px">
    <BodyBackgroundImage :url="resolveUrl(generalData.teamImageUrl)" />
    <div
      class="my-5 p-3 md:rounded-lg bg-black bg-opacity-50 md:border border-opacity-50 border-white"
      style="backdrop-filter: blur(8px)"
    >
      <h1 class="text-center text-2xl md:text-3xl mb-5">
        {{ $t("contactUs") }}
      </h1>
      <div class="mb-4">
        <label for="subject" class="inline-block mb-1">{{
          $t("subject")
        }}</label>
        <input
          id="subject"
          type="text"
          v-model="subject"
          class="border border-white border-opacity-50 rounded bg-white bg-opacity-10 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors transition-shadow duration-200 w-full px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="body" class="inline-block mb-1">{{ $t("body") }}</label>
        <textarea
          id="body"
          rows="5"
          v-model="body"
          class="border border-white border-opacity-50 rounded bg-white bg-opacity-10 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors transition-shadow duration-200 w-full px-3 py-2"
        ></textarea>
      </div>
      <a
        :href="`mailto:${generalData.contactEmail}?subject=${subject}&body=${body}`"
        target="_blank"
        class="border border-white border-opacity-50 hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 focus:bg-white focus:border-opacity-100 focus:bg-opacity-20 focus:outline-none focus:ring focus:ring-white focus:ring-opacity-25 transition-colors duration-200 inline-block px-3 py-2 rounded"
        >{{ $t("send") }}</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import BodyBackgroundImage from "../components/BodyBackgroundImage.vue";

export default {
  name: "QrContactUs",
  data() {
    return {
      subject: "",
      body: "",
    };
  },
  computed: {
    ...mapState(["route"]),
    ...mapGetters(["generalData", "resolveUrl", "getString"]),
  },
  components: { BodyBackgroundImage },
};
</script>

<style lang="scss" scoped></style>
