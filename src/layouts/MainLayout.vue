<template>
  <q-layout view="lHh Lpr lFf">
    <router-view name="header" />

    <div>
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view />
      </transition>
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
