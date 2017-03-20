<template lang="pug">
#app.primary.neutral.lighten
  #head.primary.neutral.darken.flex.center
    i.fa.fa-snowflake-o.white-text#special-snowflake
  Splash
  About
  Projects
  Contact
  #foot.primary.neutral.darken.flex.col.center.white-text
    p Created with VueJS
    p Coded by snowypowers
</template>

<script>
import Splash from './Splash.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    Splash,
    About,
    Projects,
    Contact,
  }
}
</script>

<style lang="stylus">
@require 'css/base'
@require 'css/colors'

#head
  width: 100%
  height: 5vh
  justify-content: flex-end

#special-snowflake
  margin: 0 16px
  &:hover
    color: sec

#foot
  width: 100%
  padding-top: 16px
  padding-bottom: 48px
</style>
