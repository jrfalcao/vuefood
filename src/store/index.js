import Vue from 'vue'
import Vuex from 'vuex'

import Companies from './modules/companies'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        Companies
    }
})

export default store;
