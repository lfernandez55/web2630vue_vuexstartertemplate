<template>
  <div>
  <h2>Result</h2>
  <p>Counter is (not using getter): {{ this.$store.state.counter }}</p> 
  <p>Double Counter (using getter -- works like computed function) is {{counter}}</p>
  <p>String Thing: {{stringThing}}</p>
  <hr>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters([
      'doubleCounter',
      'stringThing'
    ])

    // counter(){
    //   return this.$store.getters.doubleCounter
    // },
    // stringMaThing(){
    //   return this.$store.getters.stringThing
    // }
  }
}
</script>