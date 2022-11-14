<template>
  <div>
    <h2 class="text-white mb-0">Found {{ foundNum }} characters</h2>
  </div>
</template>

<script>
export default {
  name: "CharFoundComponent",
  props: {
    foundNum: Number,
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
div {
  background-color: $black;
  padding: 1rem;

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }
}
</style>
