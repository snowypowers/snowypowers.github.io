<template lang="pug">
.project-card.flex
  .card-body
    .upper.flex
      h3 {{ project.title }}
      .tag.primary.darken.white-text( v-for="(item, index) in project.tags", :key="index") {{ item.toUpperCase() }}
    div
      p {{ project.desc }}
  .card-tail
    a.pri-darken-text( :href="project.link")
      i.fa.fa-github
</template>

<script>
export default {
  name: 'ProjectCard',
  props:['project'],
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
.project-card
  width: 100%
  align-items: stretch
  &:hover
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)

.upper
  width: 100%
  justify-content: flex-start
  align-items: center

.tag
  padding: 4px
  margin: 4px
  border-radius: 4px

.card-body
  padding: 4px
  flex: 1
  height: 100%
  > h3
    margin: 0
    display: inline

.card-tail
  padding: 4px
  height: 100%
  font-size: 40px
  > a
    margin: 8px

</style>
