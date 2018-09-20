// I wanted to use this piece of functionality in multiple 
// places so made it a seperate helper function 

const sortArray = function(weatherData, sort){
    // update the order of store weather data ** need to see if I can create as helper function
    switch(sort) {
        case 'sortByAZ':
            return weatherData.sort((a, b) => a._name.localeCompare(b._name))
        case 'sortByTemp':
            // I noticed that sometimes when I was selecting the sort by temp button it
            // wouldn't update the array - The issue was with the array sort speed
            // After updating it to ascending I tested adding a 'reverse' to the sorted array and now works great!
            return weatherData.sort((a, b) => a._weatherTemp - b._weatherTemp).reverse()
        case 'sortByLastUpdate':
            return weatherData.sort((a, b) => new Date(b._weatherLastUpdated) - new Date(a._weatherLastUpdated))
        default:
            return weatherData.sort((a, b) => a._name.localeCompare(b._name))
    }
    
  }
  export default sortArray