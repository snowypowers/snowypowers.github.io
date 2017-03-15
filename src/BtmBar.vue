<template lang="pug">
#btmbar
  .flex-container.text-center.flex-center
    .navDot(v-for="(item, index) in sections", :key="index")
      i(class="material-icons", :title="item", v-if="currentSection == item") radio_button_checked
      i.clickable(class="material-icons", v-else, @click="navTo(item)", :title="item") radio_button_unchecked

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
  },
  computed: {
    currentSection() {
      let paths = this.$route.fullPath.split('/')
      if (paths.length == 3) {
        return paths[2]
      } else {
        return ""
      }
    }
  },
  methods: {
    navTo: function(id) {
      if (id[0] == "#") {
        let tag = id.substr(1)
        console.log(tag)
        this.$router.push({path: this.$route.path, hash: tag})
      } else {
        let p = this.$route.path.split('/')
        p[p.length-1] = id
        this.$router.push({path: p.join('/')})
      }
    }
  }
}
</script>

<style lang="stylus">
.navDot
  padding: 8px 8px

.clickable
  cursor: pointer
</style>
