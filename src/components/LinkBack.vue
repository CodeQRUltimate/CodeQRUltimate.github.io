<template>
  <router-link
    :to="to"
    class="border border-white border-opacity-50 hover:border-opacity-100 transition-colors duration-200 inline-block backdrop-blur my-5 px-3 py-2 rounded"
    ><i class="fa fa-chevron-left mr-2" aria-hidden="true"></i><slot
  /></router-link>
</template>

<script>
export default {
  name: "LinkBack",
  props: {
    to: Object,
  },
};
</script>

<style scoped lang="scss"></style>
