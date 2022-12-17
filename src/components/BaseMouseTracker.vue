<template>
  <div></div>
</template>

<script>
export default {
  name: "BaseMouseTracker",
  data() {
    return {
      x: 0,
      y: 0,
    };
  },
  methods: {
    saveCursorPosition(event) {
      this.x = (event.clientX / window.innerWidth).toFixed(2);
      this.y = (event.clientY / window.innerHeight).toFixed(2);
      document.documentElement.style.setProperty("--cursor-x", this.x);
      document.documentElement.style.setProperty("--cursor-y", this.y);
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.saveCursorPosition);
  },
  destroyed() {
    document.removeEventListener("mousemove", this.saveCursorPosition);
  },
};
</script>

<style lang="scss">
:root {
  --cursor-x: 0.5;
  --cursor-y: 0.5;
}
</style>
