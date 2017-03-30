<template lang="pug">
.section.flex.col.center#about
  h1 About
  .content.white
    div.flex.center
      img.round-sq#avatar(src="./assets/avatar.jpg")
    h3 Me
    p I am a Singaporean software developer who likes tinkering with code and learning new stuff. You can find my tinkering projects on Github. This website is a way for me to learn about VueJS and also some color design.
    p And I use Windows. Yes, that is an important point in the world of coding. I try to stay within windows for all my developments purposes other than hosting servers, which I use Ubuntu provided on their platforms (AWS, DO).
    p In my free time, I watch anime, e-sports streams and play some indie games.

    h3 Skills
    p I mainly code in Python and Javascript nowadays. I have experience in typed languages, coming from Java background and also touched C++ for graphics work.
    p For Javascript, I have worked with npm, Babel, Webpack and understand the workflow. My UI framework of choice is VueJS because of its ease and clear documentation.

</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>
#avatar
  width: 300px
.inline-block
  display: inline-block
</style>
