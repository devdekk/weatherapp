// import config file and axios for API call
import axios from 'axios';
import config from '../config';

export default {

    // Mutations called from WeatherSort.vue

    updateSort(state,sort){
        // only update sort state if different sort is selected
        // I noticed clicking on sort buttons multiple times was messing with sort so I added this extra check
        if (state.selectedSort !== sort){
            state.selectedSort = sort;

            // update the order of store weather data ** need to see if I can create as helper function
            switch(sort) {
                case 'sortByAZ':
                    state.weatherData = state.weatherData.sort((a, b) => a._name.localeCompare(b._name))
                    break
                case 'sortByTemp':
                    this.weatherData = state.weatherData.sort((a, b) => b._weatherTemp - a._weatherTemp)
                    break
                case 'sortByLastUpdate':
                    this.weatherData = state.weatherData.sort((a, b) => new Date(b._weatherLastUpdated) - new Date(a._weatherLastUpdated))
                    break
                default:
                state.weatherData = state.weatherData.sort((a, b) => a._name.localeCompare(b._name))
            }
        }   
    },

    // Mutations called from WeatherSearch.vue

    updateSearch(state, searches){
        // update store search criteria 
        state.countrySearch = searches.country
        state.conditionSearch = searches.condition
    },

    // Mutations called from WeatherList.vue && WeatherNav.vue

    updateWeatherData(state){
        // reset state store data as it will need to be empty when refresh is called
        state.weatherData = []
        state.errors = []

        // retreive weather data from API
        axios.get(config.ProxyAPI + config.WeatherAPI)
        .then(response => {
            state.weatherData = response.data.data;
            state.loading = false
        })
        .catch(e => {
            // add errors to store so it can be used to display error state
            state.errors.push(e)
        })
    },

    // Set load state a new boolean value
    updateLoad(state, value){
        state.loading = value
    }

}