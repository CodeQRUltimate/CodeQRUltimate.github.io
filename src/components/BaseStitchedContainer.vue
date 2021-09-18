<template>
  <div class="shadow-md rounded-lg">
    <div class="p-2 bg-yellow-500 rounded-lg">
      <div class="border-2 border-primary bg-primary rounded-lg">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseStitchedContainer"
};
</script>
