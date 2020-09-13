<template>
  <div>
  <h2>Another Result</h2>
  <p>Counter is (not using getter): {{ this.$store.state.counter }}</p> 
  <p>Double Counter is (using getter works like computed function) {{counter}}</p>
  <hr>
  </div>

</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.getters.doubleCounter
    }
  }
}
</script>