<template>
  <div>
  <h2>Result</h2>
  <p>Counter is (not using getter): {{ this.$store.state.counter }}</p> 
  <p>Double Counter (using getter -- works like computed function) is {{counter}}</p>
  <p>String Thing: {{stringMaThing}}</p>
  <hr>
  </div>

</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.getters.doubleCounter
    },
    stringMaThing(){
      return this.$store.getters.stringThing
    }
  }
}
</script>