<template>
  <div class="q-pa-sm" style="border-radius: 5px; background-color: rgba(255, 255, 255, 0.95);">
    <div class="row justify-center q-gutter-sm items-center">
      <div>
        <div class="text-bold text-dark">Quel animal vous tente ?</div>
        <q-btn @click="selected = 'dog'" :class="selected === 'dog' ? 'bg-primary' : ''" flat dense>
          <img src="dog.png" style="height: 90px; border-radius: 5px" />
        </q-btn>
        <q-btn @click="selected = 'cat'" :class="selected === 'cat' ? 'bg-primary' : ''" flat dense>
          <img src="cat.png" style="height: 90px; border-radius: 5px" />
        </q-btn>
      </div>

      <!-- <q-input label="Votre adresse" outlined dense /> -->
      <q-btn
        class="fit"
        label="Adopter"
        color="primary"
        no-caps
        :to="`/adopter-animaux/${selected}`"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBox",
  setup() {
    return {
      selected: ref(""),
    };
  },
});
</script>