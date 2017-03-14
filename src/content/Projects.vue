<template lang="pug">
.flex-container#home
  h1 Welcome to Projects




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
    this.$parent.$data.sections = ["1","2",'3','4']
  }
}
</script>

<style lang="stylus">

</style>
