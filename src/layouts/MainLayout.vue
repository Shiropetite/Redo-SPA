<template>
  <q-layout view="lHh Lpr lFf">
    <spa-header />

    <div>
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view />
      </transition>
    </div>
  </q-layout>
</template>

<script>
import Header from "components/Header.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    spaHeader: Header,
  },
  setup() {
    return {};
  },
});
</script>
