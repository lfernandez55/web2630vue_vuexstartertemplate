<template>
  <div>
  <h2>Another Result</h2>
  <p>Counter is (not using getter): {{ this.$store.state.counter }}</p> 
  <p>Double Counter is (using getter works like computed function) {{counter}}</p>
  <hr>
  <p>foo getter: {{nameMe}} // another foo getter {{getCountFromFoo}}</p>
  </div>

</template>

<script>
export default {
  computed:{
    counter(){
      return this.$store.getters.doubleCounter
    },
    nameMe(){
      return this.$store.getters.getName
    },
    getCountFromFoo(){
      return this.$store.getters.getCountFromFoo
    }
  }
}
</script>