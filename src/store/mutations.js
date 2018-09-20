// import config file and async helper that will call API
import config from '../config';
import doAsync from '../utils/asyncHelper'
import sortArray from '../utils/sortHelper'

export default {

    // Mutations called from WeatherSort.vue

    UPDATE_SORT(store,sort){
        // only update sort store if different sort is selected
        // I noticed clicking on sort buttons multiple times was messing with sort so I added this extra check
        if (store.selectedSort !== sort){
            store.selectedSort = sort
            store.weatherData = sortArray(store.weatherData, store.selectedSort)
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
        // reset store data
        store.weatherData = []
        store.errors = []
        store.hasErrors = false
        store.isLoading = false
        store.openListChild = []

        // call API from Helper
        doAsync('UPDATE_API',config.ProxyAPI + config.WeatherAPI, config.ProxyAPI + config.CityAPI)
    },

    // Mutations that are called from API

    UPDATE_API_SUCCESS(store, weatherData){
        // Add sorted array to store
        store.weatherData = sortArray(weatherData, store.selectedSort)
        store.isLoading = false
    },

    // Set error state and disable loading state
    UPDATE_API_ERROR(store, e){
        store.hasErrors = true
        store.errors.push(e)
        store.isLoading = false
    },

    // Set loading state
    UPDATE_API_LOADING(store){
        store.isLoading = true
    },

    // Add or remove list child from store array
    UPDATE_LIST_CHILD(store, key){

        if (store.openListChild.includes(key)){
            var index = store.openListChild.indexOf(key)
            store.openListChild.splice(index, 1);
        }else{
            store.openListChild.push(key)
        }
    }

}