<template lang="pug">
#topbar
  .flex-container.text-center.flex-center
    .spacing
    .navItem
      router-link( to="/" tag="button") Home
    .navItem(v-for="(item, index) in pages", :key="index")
      router-link( :to="{path: item.link}" tag="button") {{ item.text }}
    .spacing
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    pages: {
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
.navItem
  margin: 0 8px
  flex: 1 1 auto

.spacing
  flex: 2 10 10%
</style>
