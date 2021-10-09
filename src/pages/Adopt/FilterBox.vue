<template>
  <div class="row justify-center text-dark" style="background-color: rgb(99, 63, 50, 0.15)">
    <div class="col-10 q-py-md">
      <div class="row justify-between items-end q-gutter-y-sm">
        <div class="col-5">
          <div class="text-bold">Espèces</div>
          <q-option-group
            v-model="searchAnimal.species"
            :options="options.species"
            label="Espece"
            inline
            color="dark"
          />
        </div>

        <div class="col-6">
          <div class="text-bold">Sexe</div>
          <q-option-group
            v-model="searchAnimal.gender"
            :options="options.gender"
            label="Sexe"
            color="dark"
            inline
          />
        </div>

        <div class="col-5">
          <div class="text-bold">Age</div>
          <q-range v-model="searchAnimal.age" :min="0" :max="5" color="dark" markers />
          <div class="text-subtitle2 text-center">
            Entre {{ ages[searchAnimal.age.min] }}
            et {{ ages[searchAnimal.age.max] }}
          </div>
        </div>

        <div class="col-6 row justify-end items-end">
          <div class="col-10">
            <div class="text-bold">Ville</div>
            <q-input v-model="searchAnimal.localisation" color="dark" outlined dense />
            <q-select
              clearable
              v-model="searchAnimal.localisation"
              use-input
              hide-selected
              outlined
              fill-input
              label="Entrez une adresse"
              :options="options.villes"
            >
              <!-- <template v-slot:option="scope">
                <q-item v-bind="scope.itemProps">
                  <q-item-section avatar>
                    <q-icon name="fal fa-city" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{formatAddress(scope.opt)}}</q-item-label>
                  </q-item-section>
                </q-item>
              </template>-->
            </q-select>
          </div>

          <q-checkbox class="col-2" v-model="searchAnimal.sos" label="SOS" color="dark" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import villes from "src/model/ville.js";

const ages = ["2 mois", "6 mois", "1 an", "3 ans", "5 ans", "10 ans et +"];

const options = {
  species: [
    {
      label: "🐶 Chien",
      value: "chien",
    },
    {
      label: "🐱 Chat",
      value: "chat",
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
      label: "Indiférrent",
      value: "indiferrent",
    },
  ],
  villes: villes,
};

export default defineComponent({
  name: "Filter",
  props: ["searchAnimal"],
  setup() {
    return {
      options,
      ages,
    };
  },
});
</script>