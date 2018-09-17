export default {

    // Getters called from WeatherList.vue

    // getter to retreive store weather data with search filters applied
    getFilteredList(state){
        return state.weatherData.filter(item => {
            return item._country._name.toLowerCase().includes(state.countrySearch.toLowerCase()) && 
             item._weatherTemp !== undefined && 
            (item._weatherCondition !== undefined &&
               item._weatherCondition.toLowerCase().includes(state.conditionSearch.toLowerCase()))
         })
    }
}