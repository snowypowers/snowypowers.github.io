<template lang="pug">
  #app
    TopBar
    div#main
      div(style="background-color: pink; height: 1000px")
    BtmBar
</template>

<script>
import TopBar from './TopBar.vue'
import BtmBar from './BtmBar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TopBar,
    BtmBar
  }
}
</script>

<style lang="stylus">
body
  margin: 0 0
#app
  display: flex
  flex-direction: column
  height: 100vh
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

#topbar, #btmbar
  background-color: grey
  height: 10vh

#main
  flex: 1
  overflow-y: scroll

.flex-container
  @media (min-width:700px)
    margin: 0 auto
    width: 700px

.text-center
  text-align: center

h1, h2
  font-weight: normal


ul
  list-style-type: none
  padding: 0


li
  display: inline-block
  margin: 0 10px


a
  color: #42b983

</style>
