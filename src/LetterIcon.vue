<template lang="pug">
.circle.secondary.neutral
  p.cap {{ cap }}
  p.rest {{ text }}
</template>

<script>
export default {
  name: 'LetterIcon',
  props:['text'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    cap() {
      return this.text[0].toUpperCase()
    }
  }
}
</script>

<style lang="stylus">
.circle
  -webkit-transition-duration: 0.4s
  width: 50px
  height: 50px
  border-radius: 50%
  display:flex
  flex-flow: column
  align-items: center
  justify-content: center
  &:hover
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.24), 0 8px 20px 0 rgba(0,0,0,0.19)

.cap
  margin: 2px 0 0 0
  padding: 0
  font-size: 40px

.rest
  font-size: 0
  &:hover
    font-size: 20px
</style>
