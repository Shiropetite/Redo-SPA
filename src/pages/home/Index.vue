<template>
  <div class="header">
    <div class="header-background">
      <q-img class="fit bg-grey-10" spinner-color="primary" style="z-index: 0;" src="header.jpg">
        <div class="fit"></div>
      </q-img>
    </div>
    <div
      :class="$q.screen.lt.sm ? 'search-row--mobile' : 'search-row--laptop'"
      class="search-row row justify-center"
    >
      <spa-search-box />
    </div>
    <div
      :class="$q.screen.lt.sm ? 'title--mobile' : 'title--laptop'"
      class="title row justify-center"
    >
      <div class="col-md-8 col-xs-10 text-center">
        Aidez nous à reconstruire des vies brisées,
        <span class="text-bold text-secondary">la SPA</span> protecrice des animaux depuis 1845
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import SearchBox from "./components/SearchBox.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    spaSearchBox: SearchBox,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss">
.header {
  &-background {
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .search-row {
    position: absolute;
    width: 100%;

    &--mobile {
      bottom: 0;
    }

    &--laptop {
      top: 190px;
    }
  }

  .title {
    position: absolute;
    width: 100%;
    color: rgba(255, 255, 255, 0.85);

    &--mobile {
      font-size: 1.5em;
      bottom: 200px;
    }

    &--laptop {
      font-size: 1.8em;
      top: 400px;
    }
  }
}
</style>
