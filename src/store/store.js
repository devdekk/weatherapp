import Vue from 'vue';
// import Vuex for store functionality
import Vuex from 'vuex';

// I found a tip in the below video to break down getters, mutations and actions into their own seperate files
// I think the code is cleaner and would be beneficial on larger applications
// https://www.youtube.com/watch?v=5z8joUGkGKE&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo&index=5
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// use Vuex functionality through out application
Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        weatherData: [],
        selectedSort: '',
        countrySearch: '',
        conditionSearch: '',
        errors: []
    },
    getters,
    mutations,
    actions

});