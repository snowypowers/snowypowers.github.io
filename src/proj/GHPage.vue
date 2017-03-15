<template lang="pug">
Showcase( :projName="title", :projLink="link", :projSite="site")
  img.round-sq(slot="splash" src="../assets/avatar.jpg")
  p(slot="oneliner") Personal Portfolio Page
  p(slot="desc").
   This is a personal website built while trying to learn VueJS. I took advantage of Github hosting for static sites. VueJS may not be the best framework for simple apps like this because there is almost no interactivity but mere serving of pages. I also took the chance to try out flexboxes in CSS.
  p(slot="others")
</template>

<script>
import Showcase from '../content/Showcase.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'Portfolio Website',
      link: 'https://github.com/snowypowers/snowypowers.github.io',
      site: 'https://snowypowers.github.io/'
    }
  },
  components: {Showcase}
}
</script>

<style lang="stylus">

</style>
