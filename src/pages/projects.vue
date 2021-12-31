<template lang="pug">
#projects.block
  PageTitle Projects
  .content.white.no-padding
    projectCard(v-for="(item, index) in projects", :key="index", :project="item")

</template>

<script lang="ts">
export default defineComponent({
  name: "ProjectsPage",
  data() {
    return {
      projects: [
        {
          title: "Neon-JS",
          tags: ["TS"],
          desc: "Javascript libraries that allow the applications to interact with NEO blockchain",
          link: "https://github.com/cityofzion/neon-js",
        },
        {
          title: "Ansy",
          tags: ["TS", "Svelte"],
          desc: "NEO blockchain paper wallet webpage",
          link: "https://github.com/snowypowers/ansy",
        },
        {
          title: "Teru - Telegram Bot for SG Weather",
          tags: ["Go"],
          desc: "A Telegram bot for SG Weather written in Go, integrating data API from NEA and NLP powers from API.ai",
          link: "https://github.com/snowypowers/teru",
        },
        {
          title: "Color My Life (VueColor)",
          tags: ["js", "Vue"],
          desc: "A site to test and view a complementary color palette. This was done as a learning and exploration tool for color design.",
          link: "https://github.com/snowypowers/vuecolor",
        },
        {
          title: "Random Flower Website",
          tags: ["js", "Vue"],
          desc: "A VueJS version of our website made for Hearthstone AI. Random Flower was a venture into making a business out of E-sports analytics. ",
          link: "https://github.com/snowypowers/randomflower-vue",
        },
        {
          title: "ShootyWooty",
          tags: ["java", "libgdx"],
          desc: "A multiplayer android game made with LibGDX. This was a school project done to explore concurrency and its issues. ",
          link: "https://github.com/snowypowers/ShootyWooty",
        },
        {
          title: "ferrographics",
          tags: ["C++", "opengl"],
          desc: "A particle animation for ferrofluids using Smoothed Particle Hydrodynamics. This was a school project done for Graphics and Visualisations module.",
          link: "https://github.com/snowypowers/ferrographics",
        },
      ],
    };
  },
});
</script>

<script lang="ts" setup>
import { defineComponent } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import PageTitle from "../components/PageTitle.vue";
</script>

<style></style>
