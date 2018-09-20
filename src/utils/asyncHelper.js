// I wanted to capture the error and update states a bit better 
// I found a good article online and put my own spin on it
// @https://medium.com/@lachlanmiller_52885/a-pattern-to-handle-ajax-requests-in-vuex-2d69bc2f8984

// import axios for api call
import axios from 'axios'

import { store } from '../store/store'
// Add arrayHelper to combine weather and city arrays
import combinedArray from './arrayHelper'

const asyncAPI = (mutationType, weatherUrl, cityUrl) => {
  // Set Loading State
  store.commit(mutationType + '_LOADING')
  // Weather API call
  axios(weatherUrl)
    .then(weatherResponse => {
      // City API call
      axios(cityUrl)
       .then(cityResponse => {
        // When both API's are loaded commit combined array to store
         store.commit(mutationType + '_SUCCESS', combinedArray(weatherResponse.data.data, cityResponse.data.records))
       }).catch(error => {
        store.commit(mutationType + '_ERROR', error)
      })
    })
    .catch(error => {
      // Set Error state
      store.commit(mutationType + '_ERROR', error)
    })
}
export default asyncAPI