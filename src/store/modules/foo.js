const state = {
    name: 'luke'
}


const getters = {
    getName: state => {
        return state.name 
    },
    getNameThing: state => {
        return state.name + " the duke"
    },
    getCountFromFoo: (state, getters, rootState) => {
        return rootState.counter.counter
        //the above is:  rootState.name of module (counter).parameter in module (counter)
    }
}

const mutations = {
    changeName: (state,arg) => {
        state.name = arg;
    }
}

const actions = {
    changeIt: ({commit}, arg) => {
        commit('changeName', arg)  // this means run the mutation method named 'increment'
    }
}


export default {
    state, getters, mutations, actions
}