<template lang="pug">
.flex-container#showcase

  #line1
    div.text-center#splash
      slot(name="splash")
    .flex-col#details(style="padding: 20px")
      h1#name {{ projName }}
      div#linkouts
        a#link( :href="projLink" v-if="projLink" style="margin-left=0px")
          i.fa.fa-github(aria-hidden="true")
          p Repo
        a#site( :href="projSite" v-if="projSite")
          i.fa.fa-share(aria-hidden="true")
          p Website
      div#oneliner
        slot(name="oneliner")
  #line2
    div#desc
      slot(name="desc")
    div#others
      slot(name="others")
</template>

<script>
export default {
  name: 'Showcase',
  props: ['projName', 'projLink', 'projSite'],
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
#showcase
  display: flex
  flex-flow: column wrap

#line1, #line2
  display: flex
  flex-flow: row wrap
  justify-content: center
  align-items: center

#details
  flex: 1 1 auto

#splash
  flex: 0 1 400px
  width: 400px
  padding: 20px

#name
  font-size: 48px

#link, #site
  display: inline
  font-size: 24px
  margin: 0 8px
  > p
    font-size: @font-size
    display: inline
  > i
    font-size: @font-size

#oneliner
  font-size: 24px
  color: grey


</style>
