<template lang="pug">
.flex-container#home
  h1 ???




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

<style lang="stylus">

</style>
