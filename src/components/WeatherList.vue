<template>
    <div class="weatherList">
      <transition-group name="list" enter-active-class="animated bounceInRight" 
                                    leave-active-class="animated bounceOutLeft">
        <ul class="list-group mb-3 row"  v-for="(item,key) in filteredList" :key="key">
          <li class="list-group-item" >
              <div class="row">
                <div class="col-sm-2">
                    <img :src="getImage(item)">
                </div>
                <div class="col-sm-8">
                    <h6>{{ item._name }} - {{ item._country._name }} </h6>
                    <div class="row">
                      <div class="col-sm-12">
                          <h6 class="text-muted"> {{ item._weatherCondition }} </h6>
                          <div class="row">
                            <div class="col-sm-12">
                                <h1>{{ item._weatherTemp }}°</h1>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="col-sm-2">
                    <small  class="text-muted"> Last Updated at {{ timeSinceUpdate(item._weatherLastUpdated) }}</small>
                </div>
              </div>
          </li>
        </ul>
      </transition-group>
    </div>
</template>

<script>
// Import axios for calling API
import axios from 'axios'
// Import config data
import config from '../config'

export default {
  name: 'WeatherList',
  data() {
    return {
      weatherAPI: '',
      proxyAPI: '',
      weatherData: [],
      dataHolder: [],
      errors: [],
      imagePrefix: '',
      countrySearch: '',
      conditionSearch: '',
      selectedSort: '',
      viaJs: ''
    }
  },
  props: {
    // Parameters passed into this component
    selectedSortValue: {
      type: String
    },
    lastUpdateValue: {
      type: String
    },
    countrySearchValue: {
      type: String
    },
    conditionSearchValue: {
      type: String
    }
  },
  watch: {
    // Watch for updates on sort, refresh and searches
    selectedSortValue(newSort) {
      this.selectedSort = newSort
      this.getWeatherData(this.selectedSort)
    },
    lastUpdateValue(){
      this.getWeatherData(this.selectedSort)
    },
    countrySearchValue(newCountrySerch) {
      this.countrySearch = newCountrySerch
    },
    conditionSearchValue(newConditionSearch) {
      this.conditionSearch = newConditionSearch
    }
  },
  created() {
    // Import config
    this.proxyAPI = config.ProxyAPI
    this.weatherAPI = config.WeatherAPI
    this.imagePrefix = config.ImagePrefix

    // Get Weather list with selected sort
    this.getWeatherData(this.selectedSort)
  },
  computed: {
    // List of weather data that will update when either input filters(suburbSearch & conditionSearch) are updated
    filteredList: function() {
      return this.weatherData.filter(item => {
         return item._country._name.toLowerCase().includes(this.countrySearch.toLowerCase()) && 
          item._weatherTemp !== undefined && 
         (item._weatherCondition !== undefined &&
            item._weatherCondition.toLowerCase().includes(this.conditionSearch.toLowerCase()))
      })
    }
    
  },
  methods: {
    getImage: function(item){
      // Get image icons which are located in assets
      return require('../assets/weathericons/' + item._weatherConditionIcon + '.png')
    },
    getWeatherData: function(sort){
      // Reset array 
      this.weatherData = []
      // Set selected sort
      this.selectedSort = sort
      
      // Making request through proxy as I'm not getting Access-Control-Allow-Origin header from server
      axios.get(this.proxyAPI + this.weatherAPI)
      .then(response => {
        
        // Add API data to local array
        this.dataHolder = response.data.data
        // Sort depending on what sort is selected
        this.sortList(sort)
          
      })
      // Catch errors from API call
      .catch(e => {
        this.errors.push(e)
      })
    },
    // Function that is called when WeatherSearch searches are updated
    updateSearch(country,condition){
      this.countrySearch = country
      this.conditionSearch = condition
    },
    // Function that is called when WeatherSort sort is updated
    updateSort(sort){
      this.getWeatherData(sort)
    },
    // Function that refreshes page data from WeatherNav button
    refreshPage(){
      this.getWeatherData(this.selectedSort)
    },
    // Function to sort depending on what sort tab is selected
    sortList: function(sort){
      switch(sort) {
          case 'sortByAZ':
              this.weatherData = this.sortByAZ(this.dataHolder)
              break
          case 'sortByTemp':
              this.weatherData = this.sortByTemp(this.dataHolder)
              break
          case 'sortByLastUpdate':
              this.weatherData = this.sortByLastUpdate(this.dataHolder)
              break
          default:
              this.weatherData = this.sortByAZ(this.dataHolder)
        }
    },
    sortByAZ: function(data){
      // Sort alphabetically (localCompare handles unicode characters) - Ascending
      return data.sort((a, b) => a._name.localeCompare(b._name))

      // Sort alphabetically (localCompare handles unicode characters) - Descending
      //return data.sort((a, b) => b._name.localeCompare(a._name))
    },
    sortByTemp: function(data){
      // Sort by temp - Descending
      return data.sort((a, b) => b._weatherTemp - a._weatherTemp)

      // Sort by temp - Ascending
      //return data.sort((a, b) => a._weatherTemp - b._weatherTemp)
    },
    sortByLastUpdate: function(data){
      // Sort by last update time comparing the timestamp from server
      return data.sort((a, b) => new Date(b._weatherLastUpdated) - new Date(a._weatherLastUpdated))
    },
    // Function to parse JSON timestamp and display first 5 characters
    timeSinceUpdate: function(timestamp){
        return new Date(timestamp).toTimeString().substr(0,5)
    }
  }
}
</script>

<style >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#taskBar{
    padding: 15px;
}

ul li {
    margin-bottom: 2px;
    color: #3E5252;
    height: 10em;
    box-shadow: 3px 2px #888888;;
  }

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>