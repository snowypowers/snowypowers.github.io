<template lang="pug">
.section.flex.col.center#projects
  h1 Projects
  .content.white.no-padding
    projectCard(v-for="(item, index) in projects", :key="index", :project="item")

</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          title: "Color My Life (VueColor)",
          tags: ["js",'Vue'],
          desc: "A site to test and view a complementary color palette.",
          link: "https://github.com/snowypowers/vuecolor"
        },
        {
          title: "Random Flower Website",
          tags: ["js", 'Vue'],
          desc: "A VueJS version of our website made for Hearthstone AI",
          link: "https://github.com/snowypowers/randomflower-vue"
        },
        {
          title: "ShootyWooty",
          tags: ["java", 'libgdx', "SCH PROJ"],
          desc: "A multiplayer android game made with LibGDX",
          link: "https://github.com/snowypowers/ShootyWooty"
        },
        {
          title: "ferrographics",
          tags: ["C++", 'opengl', "SCH PROJ"],
          desc: "A particle animation for ferrofluids using Smoothed Particle Hydrodynamics",
          link: "https://github.com/snowypowers/ferrographics"
        },
      ]
    }
  },
  components: {
    ProjectCard
  }
}
</script>

<style lang="stylus">

</style>
