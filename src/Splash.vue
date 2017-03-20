<template lang="pug">
#splash.flex.col.center
  .content.flex.col.center
    #avatar
      img.round-sq(src="./assets/avatar.jpg")
    h1 Jun Xiang
    p Hi! I am a software developer in Singapore and welcome to my page!
    div
      a.button.secondary.neutral(href="#about") About
      a.button.secondary.neutral(href="#projects") Projects
      a.button.secondary.neutral(href="#contact") Contact
    i#down.fa.fa-angle-down
</template>

<script>

export default {
  name: 'Splash',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
#splash
  height: 95vh

#avatar
  max-width: 400px

#down
  font-size: 40px

</style>
