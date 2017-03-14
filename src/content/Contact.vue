<template lang="pug">
.flex-container.text-center#contacts
  .flex-container#icons
    .icon-container(v-for="(item,index) in links", :key="index")
      i( :class="item.class", :href="item.href", aria-hidden="true")
  p(style="align-self: flex-end") Icons taken from Font Awesome

</template>

<script>
export default {
  name: 'NotFound',
  data () {
    return {
      links: [
        {class: "fa fa-github-square", href: "https://github.com/snowypowers"},
        {class: "fa fa-linkedin-square", href: "https://www.linkedin.com/in/jun-xiang-yak-7b387687/"},
        {class: "fa fa-envelope", href: "mailto:yakjunxiang@gmail.com"}
      ]
    }
  },
  mounted() {
    this.$parent.$data.sections = []
  }
}
</script>

<style lang="stylus">
#contacts
  display: flex
  height: 100%
  flex-direction: column
  justify-content: space-around
  align-items: center
  flex: 1

#icons
  width: 100%
  flex-flow: row wrap
  justify-content:space-around
  align-items: center

.icon-container > i.fa
  font-size: 200px
  margin: 30px 30px
</style>
