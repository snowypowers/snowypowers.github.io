<template lang="pug">
.section.flex.col.center#contact
  h1 Contact
  #contacticons.flex.center
    a(href="https://github.com/snowypowers")
      i.fa.fa-github-square.pri-darken-text
    a(href="https://www.linkedin.com/in/jun-xiang-yak-7b387687/")
      i.fa.fa-linkedin-square.pri-darken-text
    a(href="mailto:yakjunxiang@gmail.com" title="yakjunxiang@gmail.com")
      i.fa.fa-envelope.pri-darken-text
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus">
#contacticons
  font-size: 80px
  > a

    margin: 16px

</style>
