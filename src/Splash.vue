<template lang="pug">
#splash.flex.col.center
  .content.flex.col.center
    h1 Jun Xiang
    p @snowypowers
    p Hi! I am a software developer in Singapore and welcome to my page!
    #icons
      a(href="https://github.com/snowypowers")
        i.fa.fa-github-square.pri-darken-text
      a(href="https://www.linkedin.com/in/jun-xiang-yak-7b387687/")
        i.fa.fa-linkedin-square.pri-darken-text
    div
      a.button.primary.neutral.lighten(href="#about") About
      a.button.primary.neutral.lighten(href="#projects") Projects
      a.button.primary.neutral.lighten(href="#contact") Contact
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

#icons
  font-size: 32px
  > a
    margin: 8px 8px

</style>
