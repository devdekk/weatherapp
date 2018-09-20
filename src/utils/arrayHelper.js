// Function to combine the two arrays that are returned from the API's
const combinedArray = function(weatherData, cityData){

    // Parse through two arrays and add linked data to weatherData array
    for (let i = 0; i < weatherData.length; i++){

        for(let j = 0; j < cityData.length; j++){
            // If the city names match add on linked data
            if (weatherData[i]._name.toLowerCase() == cityData[j].fields.city.toLowerCase()){
                weatherData[i].population = cityData[j].fields.population
                weatherData[i].latitude = cityData[j].fields.latitude
                weatherData[i].longitude = cityData[j].fields.longitude  
            }
        }
    }
    return weatherData 
  }
  export default combinedArray