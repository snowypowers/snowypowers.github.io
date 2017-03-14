<template lang="pug">
.flex-container#home
  div.text-center#avatar
    img.circle(src="../assets/logo.png")
  div.text-center#desc
    h1 This is me
    p.
      I am a Singaporean software developer who loves to tinker around with random technologies. Checkout my projects!
    p Besides work, I loves games and anime. And yes, purple is my favorite color.
    p Navigate using the links above, surf the subsections with circles below
    p This page is built with VueJS
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

#desc
  flex: 1
  min-width: 300px
</style>
