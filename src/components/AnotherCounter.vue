<template>
  <div>
    <h2>Another Counter (using mapped mutations)</h2>
    <button
      class="btn btn-primary"
      @click="increment"
    >Increment</button>
    <button
      class="btn btn-primary"
      @click="decrement"
    >Decrement</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
      ...mapMutations([
          'increment',
          'decrement' 
          ////the above are whatever they are called in store.js/mutations
      ])

    // increment () {
    //   this.$store.commit('increment')
    // },
    // decrement () {
    //   this.$store.commit('decrement')
    // }
  }
}
</script>