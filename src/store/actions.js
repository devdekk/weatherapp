export default {
    
    // Action referencing async Mutation called from WeatherList.vue

    // reference updateWeatherData mutation - added to actions as it is an async call
    updateWeatherData(context){
        context.commit('updateWeatherData');
    }
}