<template lang="pug">
.flex-container#home
  h1 About Me
  div.tall#a a
  div.tall#b b
  div.tall#c c
  div.tall#d d
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.$parent.$data.sections = ["#a","#b",'#c','#d']
  }
}
</script>

<style lang="stylus">
#home
  display:block

.tall
  height: 1000px
</style>
