const state = {
    counter: 0
}

const getters = {
    doubleCounter: state => {
        return state.counter * 2
    },
    stringThing: state => {
        return state.counter + " Hoky Pokey"
    }
}

const mutations = {
    increment: (state,arg) => {
        state.counter = state.counter + arg;
    },
    decrement: state => {
        state.counter--
    }
}

const actions = {
        // increment: context => {
        //     //context gives us access to commit dispatch state and getters
        //     context.commit('increment')
        // }
        //the below is the same as above but better when u just want to use commit:
        increment: ({commit}, arg) => {
            commit('increment', arg)  // this means run the mutation method named 'increment'
        },
        decrement: ({commit}) => {
            commit('decrement')
        }
}

export default {
    state, getters, mutations, actions
}