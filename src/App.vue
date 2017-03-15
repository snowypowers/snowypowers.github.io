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
pri-bg = #755FA2
pri-text = white
pri-head = #9B26AF
sec-bg = white
sec-text = black
sec-head = #9B26AF
// pri-bg = black
// pri-text = white
// pri-head = #424242
// sec-bg = #9E9E9E
// sec-text = black
// sec-head = #424242

body
  margin: 0 0
  font-size: 16px
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: black

h1, h2, h3, h4
  color: sec-head

.primary-color
  background-color: pri-bg
  color: pri-text
  > h1, h2, h3, h4
    color: pri-head

.secondary-color
  background: sec-bg
  color: sec-text
  > h1, h2, h3, h4
    color: sec-head

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
  //min-height: 100vh
  height: 100vh

#topbar, #btmbar
  height: 5vh
  display: flex

// #btmbar
//   width: 100%
//   position: fixed
//   top:90vh
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

.flex-col
  display: flex
  flex-flow: column wrap

.flex-center
  justify-content: center
  align-items: center

.text-center
  text-align: center

img
  width: 100%
  height: auto
img.circle
  border-radius: 50%
  margin: auto

img.round-sq
  border-radius: 10%
  margin: auto

</style>
