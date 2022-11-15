<template>
  <div>
    <h2 class="text-white mb-0">
      Found {{ store.characterListArray.length }} characters
    </h2>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "CharFoundComponent",
  data() {
    return {
      store,
    };
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
