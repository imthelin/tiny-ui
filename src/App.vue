<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TheProgress :achieve-value="66" :target-value="34"></TheProgress>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheProgress from './components/progress'

export default {
  name: 'App',
  components: {
    TheProgress
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #0b1a3f;
  padding: 10px;
  position: relative;
}
</style>
