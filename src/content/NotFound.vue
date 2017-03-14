<template lang="pug">
.flex-container.text-center#notfound
  h1 Lost?
  p Find your way using the links at the top
  button( @click="rewind") Rewind
</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
    }
  },
  methods: {
    rewind: function() {
      this.$router.go(-1)
    }
  },
  mounted() {
    this.$parent.$data.sections = []
  }
}
</script>

<style lang="stylus">
#notfound
  display: flex
  height: 100%
  flex-direction: column
  justify-content: center
  align-items: center
  flex: 1
</style>
