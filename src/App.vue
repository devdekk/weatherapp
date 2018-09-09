<template>
  <div id="app">
    <weather-nav v-on:refreshPage="refreshPage"> </weather-nav>
    <div class="container">
      <weather-search v-on:emitSearch="updateSearch"> </weather-search>
        
      <weather-sort v-on:emitSelectedSort="updateSort"> </weather-sort>

      <weather-list :selectedSortValue="selectedSort" :lastUpdateValue="lastUpdate"
                    :countrySearchValue="countrySearch" :conditionSearchValue="conditionSearch">
      </weather-list>
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
  data() {
    return {
      countrySearch: '',
      conditionSearch: '',
      selectedSort: '',
      lastUpdate: ''
    }
  },
  components: {
    WeatherNav,
    WeatherSearch,
    WeatherSort,
    WeatherList
  },
  methods: {
    updateSearch(country,condition){
      this.countrySearch = country
      this.conditionSearch = condition
    },
    updateSort(sort){
      this.selectedSort = sort
    },
    refreshPage(){
      this.lastUpdate = new Date().getTime().toString()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f4f4f4;
  color: #2c3e50;

}
</style>
