<template>
  <div class="characterCard">
    <img class="img-fluid" :src="character.img" :alt="character.name" />
    <h3 class="text-center text-white">{{ character.name }}</h3>
    <h4 class="text-center">{{ character.category }}</h4>
    <p class="text-center pt-2">{{ character.status }}</p>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: { character: Object },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.characterCard {
  background-color: $blue;
  padding: 1rem;
  height: 450px;

  h3 {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.8rem;
    margin-bottom: 0;
  }
  h4,
  p {
    font-size: 0.9rem;
    margin-bottom: 0;
    color: gray;
  }
}
</style>
