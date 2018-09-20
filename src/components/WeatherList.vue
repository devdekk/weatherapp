<template>

    <div>

    <weather-error v-show="hasErrors"></weather-error>
    <weather-load v-show="isLoading"></weather-load>
    
    <div class="weatherList">

      <transition-group name="list" enter-active-class="animated bounceInRight" 
                                    leave-active-class="animated bounceOutLeft">
        <ul class="list-group mb-3 row"  v-for="(item,key) in filteredList" :key="key">
          <li class="list-group-item" @click="updateListChild(item._name)">
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
          <transition name="child" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <weather-list-child v-show="keyInChildList(item._name)" :item=item></weather-list-child>
          </transition>
        </ul>
      </transition-group>
    </div>

    </div>
</template>

<script>
// Import axios for calling API
import axios from 'axios'
// Import config data
import config from '../config'

// Updated how I was accessing my getters by adding mapGetters
// This provides better readability for multiple getters 
// and still allows adding of more computed properties if need be
import { mapGetters} from 'vuex'

// Created new components for error and load states
import WeatherError from './WeatherError.vue'
import WeatherLoad from './WeatherLoad.vue'
import WeatherListChild from './WeatherListChild.vue'

export default {
  name: 'WeatherList',
  created() {
    this.$store.dispatch('GET_DATA')
  },
  computed:{
    ...mapGetters([
      'filteredList',
      'hasErrors',
      'isLoading',
      'getListChildren'
    ])
  },
  components: {
    WeatherError,
    WeatherLoad,
    WeatherListChild
  },
  methods: {
    getImage: function(item){
      // Get image icons which are located in assets
      return require('../assets/weathericons/' + item._weatherConditionIcon + '.png')
    },
    // Function to parse JSON timestamp and display first 5 characters
    timeSinceUpdate: function(timestamp){
        return new Date(timestamp).toTimeString().substr(0,5)
    },
    // This will call a mutation to add or remove the key in a store array
    // I initially used the array list key but decided to use the city/suburb name as the key
    // This will ensure the childs state is kept the same even if the search/sort state is updated
    updateListChild(key){
      this.$store.commit('UPDATE_LIST_CHILD', key)
    },
    // Function to show child item if it is in store array
    keyInChildList(key){
      return this.getListChildren.includes(key)
    }
  }
}
</script>

<style >
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

#taskBar{
    padding: 15px;
}

.cityData{
  margin-top: 10px;
  height: 3em;
  background-color: white;
  box-shadow: 3px 2px #888888;
}

ul li {
    margin-bottom: 2px;
    color: #3E5252;
    height: 10em;
    box-shadow: 3px 2px #888888;
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