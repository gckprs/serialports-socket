<template>
  <div id="app">
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: 'app',
  data() {
    return {
      socket: io('localhost:3000')
    }
  },
  components: {
  },
  mounted() {
    this.socket.on('data', (data) => {
      console.log(data)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
