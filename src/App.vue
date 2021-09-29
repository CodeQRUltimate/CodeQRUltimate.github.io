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
  font-family: "Roboto", sans-serif;
}

.text-graduate {
  font-family: "Graduate", cursive;
}

.text-shadow-swag-sm {
  text-shadow: 1px 1px 0px #312e81, 2px 2px 0px #ecc94b;
}

.text-shadow-swag {
  text-shadow: 2px 2px 0px #312e81, 4px 4px 0px #ecc94b;
}
</style>
