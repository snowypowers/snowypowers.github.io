<template lang="pug">
#btmbar
  .flex-container.text-center.flex-center
    .navDot(v-for="(item, index) in sections", :key="index")
      i(class="material-icons") radio_button_unchecked

</template>

<script>
export default {
  name: 'BtmBar',
  props: {
    sections: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
.navDot
  padding: 8px 8px
</style>
