// I wanted to capture the error and update states a bit better 
// I found a good article online and put my own spin on it
// @https://medium.com/@lachlanmiller_52885/a-pattern-to-handle-ajax-requests-in-vuex-2d69bc2f8984

// import axios for api call
import axios from 'axios'
// 
import { store } from '../store/store'

const asyncAPI = (mutationType, weatherUrl, cityUrl) => {
  store.commit(mutationType + '_LOADING')
  axios(weatherUrl)
    .then(weatherResponse => {
      axios(cityUrl)
       .then(cityResponse => {
         store.commit(mutationType + '_SUCCESS', weatherResponse.data.data)
       }).catch(error => {
        store.commit(mutationType + '_ERROR', error)
      })
    })
    .catch(error => {
      store.commit(mutationType + '_ERROR', error)
    })
}
export default asyncAPI