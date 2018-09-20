import Vue from 'vue';
// import Vuex for store functionality
import Vuex from 'vuex';

// I found a tip in the below video to break down getters, mutations and actions into their own seperate files
// I think the code is much cleaner and would become integral for larger application management
// https://www.youtube.com/watch?v=5z8joUGkGKE&list=PL55RiY5tL51pT0DNJraU93FhMzhXxtDAo&index=5
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// use Vuex functionality through out application
Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        // state to manage weatherData
        weatherData: [],
        // state to manage selected sort menu item
        selectedSort: '',
        // states to manage search items
        countrySearch: '',
        conditionSearch: '',
        // states to manage errors and loading
        errors: [],
        hasErrors: false,
        isLoading: false,
        openListChild: []

    },
    getters,
    mutations,
    actions

});