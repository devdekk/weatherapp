export default {

    // Getters called from WeatherList.vue

    // getter to retreive store weather data with search filters applied
    // updated getter name to match in component so I could map easily
    filteredList(store){
        return store.weatherData.filter(item => {
            return item._country._name.toLowerCase().includes(store.countrySearch.toLowerCase()) && 
             item._weatherTemp !== undefined && 
            (item._weatherCondition !== undefined &&
               item._weatherCondition.toLowerCase().includes(store.conditionSearch.toLowerCase()))
         })
    },

    // getters to retreive error and loading states
    hasErrors(store){
        return store.hasErrors
    },

    isLoading(store){
        return store.isLoading
    },

    // Getters called from WeatherSort.vue

    // getter to retreive selected sort menu
    selectedSortMenu(store){
        return store.selectedSort
    }
    
}