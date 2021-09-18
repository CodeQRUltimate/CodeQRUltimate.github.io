<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["getData"])
  },
  async mounted() {
    await this.getData();
  }
};
</script>

<style lang="scss">
body {
  background-color: #312e81;
}

.text-graduate {
  font-family: "Graduate", cursive;
}
</style>
