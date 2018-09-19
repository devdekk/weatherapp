<template>
  <div id="app">
    <weather-nav> </weather-nav>
    <div class="container">
      <weather-search></weather-search>
        
      <weather-sort></weather-sort>

      <weather-list></weather-list>
    </div>
  </div>
</template>

<script>
// Import bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import WeatherNav from './components/WeatherNav.vue'
import WeatherSearch from './components/WeatherSearch.vue'
import WeatherSort from './components/WeatherSort.vue'
import WeatherList from './components/WeatherList.vue'

export default {
  name: 'app',
  components: {
    WeatherNav,
    WeatherSearch,
    WeatherSort,
    WeatherList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

}
body{
  background-color: #f4f4f4;
}
</style>
