<template>
  <div class="bg-primary">
    <router-link to="/" class="text-white font-bold p-2 inline-block"
      >Retour à l'équipe</router-link
    >

    <div v-if="player">
      <div class="flex flex-wrap justify-center items-end">
        <BaseStitchedContainer class="mr-5">
          <img
            :src="player.imageUrl"
            class="rounded-lg"
            style="max-height: 75vh;"
          />
        </BaseStitchedContainer>
        <div class="text-white">
          <div class="text-graduate mr-10">
            <div class="player-number text-9xl text-white leading-none">
              {{ player.number }}
            </div>
            <div class="text-6xl ml-2">{{ player.name }}</div>
          </div>
          <div class="border-t border-b-4 border-white pb-1 ml-2 mb-4"></div>
          <p class="text-xl ml-2 mb-4">{{ player.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Player",
  computed: {
    ...mapGetters(["player"])
  }
};
</script>

<style scoped lang="scss">
.player-number {
  text-shadow: 2px 2px 0px #312e81, 4px 4px 0px #ecc94b;
}
</style>
