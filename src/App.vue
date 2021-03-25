<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="ui-container">
      <div @click="showMsg" class="title"><span>进度条展示: </span></div>
      <TheProgress :achieve-value="66" :target-value="34"></TheProgress>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TheProgress from './components/progress'

export default {
  name: 'App',
  components: {
    TheProgress
  },
  methods: {
    showMsg() {
      this.$message({
        type: 'warn',
        message: 'hello plugin'
      })
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #1f3a7d;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 10px;
  .ui-container {
    color: rgb(238, 239, 240);
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 20px;
    margin: 0 auto;
    box-shadow: inset 0 0 25px rgba(50, 114, 187, 0.5);
    .title{
      text-align: left;
      font-size: 2rem;
    }
  }
}
</style>
