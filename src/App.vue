<template lang="pug">
  #app
    TopBar.primary-color(v-bind:pages="pages")
    #main.secondary-color
      router-view
    BtmBar.primary-color(v-bind:sections="sections")
</template>

<script>
import TopBar from './TopBar.vue'
import BtmBar from './BtmBar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pages: [
        {text: "About", link: "/about"},
        {text: "Projects", link: "/projects"},
        {text: "Contact", link: "/contact"}
      ],
      sections: [
        "#sect1",
        "#sect2",
        "#sect3",
        "#sect4"
      ]
    }
  },
  components: {
    TopBar,
    BtmBar
  }
}
</script>

<style lang="stylus">
pri-bg = #552B72
//pri-bg = #A48DB4
pri-text = white
sec-bg = #DAD6DD
sec-text = black

body
  margin: 0 0
  font-size: 16px
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

.primary-color
  background-color: pri-bg
  color: pri-text

.secondary-color
  background: sec-bg
  color: sec-text

.placeholder
  background: sec-bg
  color: black

button
  background-color: pri-bg
  border: none
  color: pri-text
  font-size: 24px
  padding: 8px 8px
  &:hover
    background-color: lighten(@background-color, 10%)

#app
  display: flex
  flex-direction: column
  height: 100vh

#topbar, #btmbar
  height: 10vh
  display: flex

#main
  flex: 1
  overflow-y: scroll

.flex-container
  flex: 1
  display: flex
  margin: 0 auto
  @media (min-width:768px)
    width: 700px
  @media (min-width:1080px)
    width: 1000px

.flex-center
  justify-content: center
  align-items: center

.text-center
  text-align: center

img.circle
  border-radius: 50%
  margin: auto
</style>
