<template>
    <div class="container">
      <clip-loader></clip-loader>
    </div>
</template>

<script>

// Add spinner by using vue-spinner
// @https://github.com/greyby/vue-spinner
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'WeatherLoad',
  components: {
    ClipLoader
  }
}
</script>
