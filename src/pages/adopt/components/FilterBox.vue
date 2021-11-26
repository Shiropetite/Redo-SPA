<template>
  <div class="q-pa-md text-dark filter-drawer">
    <div class="row justify-between items-center text-bold">
      <div>
        <q-icon class="q-pr-sm" name="tune" size="sm" />Filtre
      </div>
      <q-btn dense flat no-caps icon="close" @click="closeDrawer" />
    </div>

    <div class="row justify-center q-pt-md">
      <q-select
        class="col-12"
        v-model="searchAnimal.location"
        dense
        label="Commune"
        use-input
        outlined
        input-debounce="0"
        :options="villesOptions"
        @filter="filterFn"
        clearable
        options-selected-class="text-primary"
      >
        <template v-slot:option="scope">
          <q-item clickable v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-icon color="dark" name="pets" />
            </q-item-section>
            <q-item-section class="text-dark">
              <q-item-label>{{ scope.opt }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey-9 text-italic">Aucun refuge ne se trouve ici</q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>

    <q-expansion-item class="q-pt-sm" label="Espèces">
      <q-option-group v-model="searchAnimal.species" :options="options.species" color="primary" />
    </q-expansion-item>

    <q-expansion-item class="q-pt-sm" label="Sexe">
      <q-option-group v-model="searchAnimal.gender" :options="options.gender" color="primary" />
    </q-expansion-item>

    <q-expansion-item class="q-pt-sm" label="Age">
      <q-option-group v-model="searchAnimal.age" :options="options.age" color="primary" />
    </q-expansion-item>

    <q-checkbox v-model="searchAnimal.sos" label="SOS" color="dark" />
  </div>
</template>
<script>
import refuge from "src/model/refuge";
import { defineComponent, ref } from "vue";

const options = {
  species: [
    {
      label: "Chien",
      icon: 'dog',
      value: "dog",
    },
    {
      label: "Chat",
      icon: 'cat',
      value: "cat",
    },
  ],
  gender: [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Femelle",
      value: "female",
    },
    {
      label: "Indifférent",
      value: "indifferent",
    },
  ],
  age: [
    {
      label: "Junior",
      value: "junior",
    },
    {
      label: "Adulte",
      value: "adult",
    },
    {
      label: "Senior",
      value: "senior",
    },
    {
      label: "Indifférent",
      value: "indifferent",
    },
  ],
};

export default defineComponent({
  name: "Filter",
  props: ["searchAnimal"],
  setup(props, { emit }) {
    const closeDrawer = () => {
      emit('closeDrawer');
    };

    const villes = Object.keys(refuge);
    const villesOptions = ref([]);

    const filterFn = async (val, update, abort) => {
      if (val.length < 1) {
        abort();
        return;
      }

      update(() => {
        let optionList = villes.filter((v) =>
          v.toLowerCase().startsWith(val.toLowerCase())
        );

        villesOptions.value = optionList;
      });
    };
    return {
      closeDrawer,
      options,
      filterFn,
      villesOptions,
    };
  },
});
</script>
