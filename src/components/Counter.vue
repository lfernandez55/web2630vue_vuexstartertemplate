<template>
  <div>
    <h2>Counter</h2>
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
export default {
  methods: {
    increment () {
      this.$store.state.counter++
    },
    decrement () {
      this.$store.state.counter--
    }
  }
}
</script>