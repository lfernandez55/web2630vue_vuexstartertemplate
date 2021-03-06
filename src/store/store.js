import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter.js'
import foo from './modules/foo.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        counter,
        foo
    },

    state: {
        value: 0
        // ,
        // counterx: 0
    },
    getters,
    actions,
    mutations
    //instead of putting these shared resources here
    //we can put them in separate getters.js, mutations.js and
    // actions.js files
    // getters: {
    //     value: state => {
    //         return state.value
    //     }
    // },
    // mutations: {
    //     updateVAlue: (state, payload) => {
    //         state.value = payload
    //     }
    // },
    // actions: {
    //     updateValue ({commit}, payload){
    //         commit('updateValue',payload)
    //     }
    // }

    //all of the below is now in store/modules/counter.js
    // state: {
    //     counter: 0
    // },
    // getters: {
    //     doubleCounter: state => {
    //         return state.counter * 2
    //     },
    //     stringThing: state => {
    //         return state.counter + " Hoky Pokey"
    //     }
    // },
    // mutations: {
    //     increment: (state,arg) => {
    //         state.counter = state.counter + arg;
    //     },
    //     decrement: state => {
    //         state.counter--
    //     }
    // },
    // actions: {
    //     // increment: context => {
    //     //     //context gives us access to commit dispatch state and getters
    //     //     context.commit('increment')
    //     // }
    //     //the below is the same as above but better when u just want to use commit:
    //     increment: ({commit}, arg) => {
    //         commit('increment', arg)  // this means run the mutation method named 'increment'
    //     },
    //     decrement: ({commit}) => {
    //         commit('decrement')
    //     }
    // }
})