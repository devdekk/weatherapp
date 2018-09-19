// import config file and async helper that will call API
import config from '../config';
import doAsync from '../asyncHelper'

export default {

    // Mutations called from WeatherSort.vue

    UPDATE_SORT(store,sort){
        // only update sort store if different sort is selected
        // I noticed clicking on sort buttons multiple times was messing with sort so I added this extra check
        if (store.selectedSort !== sort){
            store.selectedSort = sort;

            // update the order of store weather data ** need to see if I can create as helper function
            switch(sort) {
                case 'sortByAZ':
                    store.weatherData = store.weatherData.sort((a, b) => a._name.localeCompare(b._name))
                    break
                case 'sortByTemp':
                    this.weatherData = store.weatherData.sort((a, b) => b._weatherTemp - a._weatherTemp)
                    break
                case 'sortByLastUpdate':
                    this.weatherData = store.weatherData.sort((a, b) => new Date(b._weatherLastUpdated) - new Date(a._weatherLastUpdated))
                    break
                default:
                store.weatherData = store.weatherData.sort((a, b) => a._name.localeCompare(b._name))
            }
        }   
    },

    // Mutations called from WeatherSearch.vue

    UPDATE_SEARCH(store, searches){
        // update store search criteria 
        store.countrySearch = searches.country
        store.conditionSearch = searches.condition
    },

    // Mutations called from WeatherList.vue && WeatherNav.vue

    GET_DATA(store){
        // reset store store data as it will need to be empty when refresh is called
        store.weatherData = []
        store.errors = []

        // call API from Helper
        doAsync('UPDATE_API',config.ProxyAPI + config.WeatherAPI, config.ProxyAPI + config.CityAPI)
    },

    UPDATE_API_SUCCESS(store, data){
        store.weatherData = data
        store.isLoading = false
    },

    UPDATE_API_ERROR(store, e){
        store.hasErrors = true
        store.errors.push(e)
    },

    // Set load store a new boolean value
    UPDATE_API_LOADING(store){
        store.isLoading = true
    }

}