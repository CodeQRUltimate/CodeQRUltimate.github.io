<template>
  <div>
    <div class="flex bg-primary text-white">
      <div class="flex w-full max-w-prose mx-auto">
        <button
          class="p-4"
          :class="{ invisible: !previousImageDate }"
          @click="currentDate = previousImageDate"
          :disabled="!previousImageDate"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="flex-grow py-4 text-center text-graduate">
          {{ currentDateString }}
        </div>
        <button
          class="p-4"
          :class="{ invisible: !nextImageDate }"
          @click="currentDate = nextImageDate"
          :disabled="!nextImageDate"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <div class="max-w-screen-lg mx-auto p-2">
      <div class="flex justify-around">
        <div v-for="(imageColumn, i) in imageColumns" :key="i" class="flex-1">
          <div v-for="image in imageColumn" :key="image.key" class="p-2">
            <img :src="resolveUrl(image.url)" class="h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { mapGetters } from "vuex";

var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export default {
  name: "QrGallery",
  data() {
    return {
      currentDate: dayjs().format("YYYY-MM-DD"),
      windowWidth: 1000,
    };
  },
  computed: {
    ...mapGetters(["imagesByDate", "imageDates", "resolveUrl"]),
    currentImageDateIndex() {
      return this.imageDates.indexOf(this.currentDate);
    },
    previousImageDate() {
      if (this.currentImageDateIndex === 0) return null;

      return this.imageDates[this.currentImageDateIndex - 1];
    },
    nextImageDate() {
      if (this.currentImageDateIndex === this.imageDates.length - 1)
        return null;

      return this.imageDates[this.currentImageDateIndex + 1];
    },
    currentImages() {
      return this.imagesByDate[this.currentDate] || [];
    },
    currentDateString() {
      return dayjs(this.currentDate).format("LL");
    },
    imageColumnCount() {
      if (this.windowWidth < 640) return 1;
      if (this.windowWidth < 768) return 2;
      if (this.windowWidth < 1024) return 3;
      return 4;
    },
    imageColumns() {
      const columns = [];

      for (var i = 0; i < this.imageColumnCount; i++) {
        columns.push([]);
      }

      let colIndex = -1;
      for (let image of this.currentImages) {
        columns[++colIndex % this.imageColumnCount].push(image);
      }

      return columns;
    },
  },
  methods: {
    resizeListener() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    if (this.imageDates.length > 0) {
      this.currentDate = this.imageDates[0];
    }

    window.addEventListener("resize", this.resizeListener);
    this.resizeListener();
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeListener);
  },
};
</script>

<style scoped lang="scss"></style>
