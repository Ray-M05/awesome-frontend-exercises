<template>
  <div id="app">
    <h1>Welcome to the Awesome Frontend Exercises</h1>
    <p>This is a Vue.js application designed to help you improve your frontend skills.</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    }
  },
  mounted() {
    this.greet();
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>