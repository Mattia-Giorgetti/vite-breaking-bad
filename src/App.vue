<template>
  <HeaderComponent />
  <SearchComponent />
  <main class="container-md p-4">
    <CharFoundComponent :foundNum="characterListArray.length" />
    <CharacterList :characters="characterListArray" :onLoad="onLoad" />
  </main>
</template>

<script>
import axios from "axios";
import CharacterList from "./components/CharacterList.vue";
import CharFoundComponent from "./components/CharFoundComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";

export default {
  components: { HeaderComponent, SearchComponent, CharFoundComponent, CharacterList },
  data() {
    return {
      apiURL: "https://www.breakingbadapi.com/api/characters",
      characterListArray: [],
      onLoad: false,
    };
  },
  methods: {
    getAPIChar() {
      this.onLoad = true;
      axios.get(this.apiURL).then((result) => {
        this.characterListArray = [...result.data];
        this.onLoad = false;
        // console.log(this.characterListArray);
      });
    },
  },
  created() {
    this.getAPIChar();
  },
};
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
main {
  background-color: white;
}
</style>
