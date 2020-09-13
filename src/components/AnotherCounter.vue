<template>
  <div>
    <h2>Another Counter (using mapped actions -- actions are only really used when making an api call)</h2>
    <button
      class="btn btn-primary"
      @click="increment(50)"
    >Increment</button>
    <button
      class="btn btn-primary"
      @click="decrement"
    >Decrement</button>
        <button
      class="btn btn-primary"
      @click="changeIt('SNOOZER')"
    >ChangeIt</button>
  </div>
</template>

<script>
// import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'


export default {
  methods: {
    //   ...mapMutations([
    //       'increment',
    //       'decrement' 
    //       ////the above are whatever they are called in store.js/mutations
    //   ])

    // increment () {
    //   this.$store.commit('increment')
    // },
    // decrement () {
    //   this.$store.commit('decrement')
    // }
      ...mapActions([
          'increment',
          'decrement',
          'changeIt' 
          ////the above are whatever they are called in store.js/mutations
      ])

  }
}
</script>