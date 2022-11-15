<template>
  <div class="container-lg">
    <LoaderComponent v-if="store.onLoad" />
    <Transition name="slide-fade">
      <div class="row" v-if="!store.onLoad">
        <div
          class="mycol p-3"
          v-for="(item, index) in store.characterListArray"
          :key="item.id"
        >
          <CardComponent :character="item" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
import LoaderComponent from "./LoaderComponent.vue";

export default {
  name: "CharacterListComponent",
  components: { CardComponent, LoaderComponent },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.mycol {
  width: calc(100% / 5);

  @media screen and (max-width: 992px) {
    width: calc(100% / 3);
  }
  @media screen and (max-width: 768px) {
    width: calc(100% / 2);
  }
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
