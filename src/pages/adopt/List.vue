<template>
  <div class="animal-list text-dark">
    <q-btn
      label="Filtre"
      flat
      no-caps
      icon="tune"
      @click="drawerOpen = !drawerOpen"
      class="filter-btn"
      bg-color="white"
    />
    <div>
      <q-drawer show-if-above v-model="drawerOpen" side="left" bordered>
        <spa-filter-box :searchAnimal="searchAnimal" @close-drawer="drawerOpen = false" />
      </q-drawer>

      <div :class="drawerOpen ? 'justify-end' : 'justify-center'" class="row q-py-xl">
        <div class="col-xs-12 col-sm-10">
          <div class="row justify-center q-gutter-y-lg q-gutter-x-md">
            <div
              v-for="animal in animalsFiltered"
              :key="animal.id"
              :style="$q.screen.lt.md ? 'width: 250px' : 'width: 250px'"
            >
              <spa-animal-card :animal="animal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from "vue";
import FilterBox from "./components/FilterBox.vue";
import AnimalCard from "./components/AnimalCard.vue";
import animals from "src/model/animals";
import { AnimalFilterBuilder } from "src/composables/useFilter";

export default defineComponent({
  name: "PageIndex",
  props: ["selected"],
  components: {
    SpaFilterBox: FilterBox,
    SpaAnimalCard: AnimalCard,
  },
  setup(props) {
    const searchAnimal = ref({
      species: props.selected ? props.selected : null,
      location: null,
      buildingName: null,
      name: null,
      gender: "indifferent",
      age: "indifferent",
      sos: false,
    });

    let animalsFiltered: Ref<any[]> = ref([]);

    watch(
      () => searchAnimal,
      () => {
        const filter = new AnimalFilterBuilder(searchAnimal.value, [...animals]);
        animalsFiltered.value = filter.buildAll();
      },
      { deep: true, immediate: true }
    );

    return {
      searchAnimal,
      animalsFiltered,
      drawerOpen: ref(false)
    };
  },
});
</script>
<style lang="scss">
.animal-list {
  margin-top: 65px;

  .filter-btn {
    position: absolute;
    top: 22px;
  }
}
</style>