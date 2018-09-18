export default {

    // Getters called from WeatherList.vue

    // getter to retreive store weather data with search filters applied
    // updated getter name to match in component so I could map easily
    filteredList(state){
        return state.weatherData.filter(item => {
            return item._country._name.toLowerCase().includes(state.countrySearch.toLowerCase()) && 
             item._weatherTemp !== undefined && 
            (item._weatherCondition !== undefined &&
               item._weatherCondition.toLowerCase().includes(state.conditionSearch.toLowerCase()))
         })
    },

    // getters to retreive error and loading states
    hasErrors(state){
        return state.errors.length > 0
    },

    isLoading(state){
        return state.loading
    },

    // Getters called from WeatherSort.vue

    // getter to retreive selected sort menu
    selectedSortMenu(state){
        return state.selectedSort
    }
    
}