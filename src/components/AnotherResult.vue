<template>
  <div>
  <h2>Another Result</h2>
  <p>Counter is: {{ this.$store.state.counter }}</p> 
  <p>Counter is {{counter}}</p>
  <hr>
  </div>

</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.state.counter
    }
  }
}
</script>