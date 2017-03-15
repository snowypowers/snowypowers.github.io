<template lang="pug">
.flex-container#home
  div.text-center#avatar
    img.round-sq(src="../assets/avatar.jpg")
  div#desc
    h1 Yak Jun Xiang
    p.
      I am a Singaporean software developer who loves to tinker around with random technologies. Checkout my projects!
    p Besides work, I loves games and anime. And yes, purple is my favorite color.
    p Scroll down to read more or use the links above to navigate!
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$parent.$data.sections = []
  }
}
</script>

<style lang="stylus" scoped>
#home
  height: 100%
  display: flex
  flex-flow: row wrap
  align-items: center
  justify-content: center

#avatar
  flex: 1
  margin: 25px 50px

#desc
  flex: 1
  min-width: 300px
  margin: 25px
</style>
