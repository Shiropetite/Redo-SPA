<template>
  <q-page style="padding-top: 65px">
    <spa-filter-box :searchAnimal="searchAnimal" />

    <div class="row justify-center q-py-xl">
      <div class="col-10">
        <div class="row justify-center q-gutter-y-lg q-gutter-x-md">
          <div
            v-for="animal in animalsFiltered"
            :key="animal.id"
            :style="$q.screen.lt.md ? 'max-width: 200px': 'width: 250px'"
          >
            <spa-animal-card :animal="animal" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, watch, unref } from "vue";
import FilterBox from "./FilterBox.vue";
import AnimalCard from "./AnimalCard.vue";
import animals from "src/model/animals";

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
      localisation: null,
      refuge: null,
      gender: "indiferrent",
      age: {
        min: 0,
        max: 5,
      },
      sos: false,
    });

    let animalsFiltered = ref([]);

    watch(
      () => searchAnimal,
      () => {
        // species
        if (searchAnimal.value.species) {
          if (searchAnimal.value.species === "chat") {
            animalsFiltered.value = [...animals.cats];
          } else {
            animalsFiltered.value = [...animals.dogs];
          }
        } else {
          animalsFiltered.value = [...animals.cats, ...animals.dogs];
        }

        // gender
        if (searchAnimal.value.gender !== "indiferrent") {
          animalsFiltered.value = animalsFiltered.value.filter(
            (animal) => animal.gender === searchAnimal.value.gender
          );
        }

        // sos
        if (searchAnimal.value.sos) {
          animalsFiltered.value = animalsFiltered.value.filter(
            (animal) => animal.sos
          );
        }

        // age
        const tab = [
          { year: 0, month: 2 },
          { year: 0, month: 6 },
          { year: 1 },
          { year: 3 },
          { year: 5 },
          { year: 99 },
        ];

        animalsFiltered.value = animalsFiltered.value.filter((animal) => {
          const today = new Date();
          let age =
            today.getUTCFullYear() - parseInt(animal.birthDate.split("/")[2]);

          let month =
            today.getUTCMonth() + 1 - parseInt(animal.birthDate.split("/")[1]);

          if (month < 0) {
            age--;
            month = 12 - Math.abs(month);
          }

          let condition = true;
          if (tab[searchAnimal.value.age.min].month && age === 0) {
            condition &&= tab[searchAnimal.value.age.min].month <= month;
          }
          condition &&= tab[searchAnimal.value.age.min].year <= age;

          if (tab[searchAnimal.value.age.min].max && age === 0) {
            condition &&= tab[searchAnimal.value.age.min].month >= month;
          }
          condition &&= tab[searchAnimal.value.age.max].year >= age;
          return condition;
        });
      },
      { deep: true, immediate: true }
    );

    return {
      searchAnimal,
      animalsFiltered,
    };
  },
});
</script>
