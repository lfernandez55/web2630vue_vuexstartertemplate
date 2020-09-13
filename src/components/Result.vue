<template>
  <div>
  <p>Counter is: {{ this.$store.state.counter }}</p> 
  <p>Counter is {{counter}}</p>

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