<template>
  <div class="container-lg py-4">
    <form @submit.prevent="searchCharacter">
      <label for="searchCategory"></label>
      <select id="searchCategory" v-model="store.searchCategory">
        <option selected value="">select category</option>
        <option :value="category" v-for="(category, index) in categoryOptns" :key="index">
          {{ category }}
        </option>
      </select>
      <button class="ms-5" type="submit">Search</button>
      <button class="mx-4" type="reset" @click="resetResearch()">Reset</button>
    </form>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  name: "SearchComponent",
  data() {
    return {
      store,
      categoryOptns: ["Breaking Bad", "Better Call Saul"],
    };
  },
  methods: {
    searchCharacter() {
      this.$emit("filtercharacter");
    },
    resetResearch() {
      store.searchCategory = "";
      this.$emit("filtercharacter");
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
select {
  padding: 0.5rem;
  border-radius: 5px;
}
button {
  border: 1px solid white;
  padding: 0.4rem 1rem;
  border-radius: 5px;
  background-color: $blue;
  color: white;
  transition: 0.4s ease;

  &:hover {
    background-color: white;
    border: 1px solix $blue;
    color: $blue;
  }
}
</style>
