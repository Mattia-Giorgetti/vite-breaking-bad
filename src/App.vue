<template>
  <HeaderComponent />
  <SearchComponent @filtercharacter="getAPIChar" />
  <main class="container-md p-4">
    <CharFoundComponent />
    <CharacterList />
  </main>
</template>

<script>
import axios from "axios";
import CharacterList from "./components/CharacterList.vue";
import CharFoundComponent from "./components/CharFoundComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import { store } from "./store";

export default {
  components: { HeaderComponent, SearchComponent, CharFoundComponent, CharacterList },
  data() {
    return {
      store,
      endPoint: "characters",
    };
  },
  methods: {
    getAPIChar() {
      store.errorMsg = "";
      let urlApi = store.apiURL + this.endPoint;
      if (store.searchCategory == "Better Call Saul") {
        urlApi = urlApi + "?category=Better+Call+Saul";
      } else if (store.searchCategory == "Breaking Bad") {
        urlApi = urlApi + "?category=Breaking+Bad";
      }
      store.onLoad = true;
      axios.get(urlApi).then((result) => {
        store.characterListArray = [...result.data];
        store.onLoad = false;
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
