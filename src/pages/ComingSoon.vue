<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <q-img src="logo.png" width="200px" />
      <div class="q-pt-xl text-h2" style="opacity:.4">Coming Soon ...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComingSoon'
})
</script>
