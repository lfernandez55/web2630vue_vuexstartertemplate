import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2
        },
        stringThing: state => {
            return state.counter + " Hoky Pokey"
        }
    },
    mutations: {
        increment: state => {
            state.counter++
        },
        decrement: state => {
            state.counter--
        }
    },
    actions: {
        // increment: context => {
        //     //context gives us access to commit dispatch state and getters
        //     context.commit('increment')
        // }
        //the below is the same as above but better when u just want to use commit:
        increment: ({commit}) => {
            commit('increment')
        },
        decrement: ({commit}) => {
            commit('decrement')
        }
    }
})