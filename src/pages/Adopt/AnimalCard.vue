<template>
  <q-card>
    <img :src="animal.image" :style="$q.screen.lt.md ? 'height: 140px': 'height: 160px'" />

    <q-item clickable class="column">
      <q-btn
        v-if="animal.sos"
        color="primary"
        label="SOS"
        class="absolute"
        style="top: 0; right: 10px; transform: translateY(-50%);"
      />
      <q-item-section>
        <div class="row q-gutter-x-xs items-center">
          <q-item-label>{{animal.name}}</q-item-label>
          <q-icon :name="animal.gender" />
        </div>
      </q-item-section>
      <q-item-label caption class="row q-pt-sm q-gutter-y-xs">
        <div class="col-12">{{animal.refuge.name}}</div>
        <div class="row items-center">
          <q-icon name="room" />
          <div class="q-pl-xs">{{animal.refuge.postalCode}} {{animal.refuge.commune}}</div>
        </div>
      </q-item-label>
    </q-item>
  </q-card>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["animal"],
  setup() {},
});
</script>
