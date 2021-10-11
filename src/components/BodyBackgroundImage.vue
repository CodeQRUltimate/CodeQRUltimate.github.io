<template>
  <component v-if="url" :is="'style'">
    body { background-image: url({{ url }}); background-color: #000 !important;
    background-position: center; background-size: cover; background-attachment:
    fixed; background-blend-mode: luminosity;
    <!-- transition: background-image .15s ease-in-out; -->
    }
  </component>
</template>

<script>
export default {
  name: "BodyBackgroundImage",
  props: {
    url: String
  }
};
</script>

<style scoped lang="scss"></style>
