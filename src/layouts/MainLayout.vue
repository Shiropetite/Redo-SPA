<template>
  <q-layout view="hHh LpR FfF">
    <router-view name="header" />

    <div>
      <router-view />
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    return {};
  },
});
</script>
