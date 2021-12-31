<template lang="pug">
SimpleCard
  template(v-slot:head)
    .flex
      a.text-lg(:href="project.link") {{project.title}}
      div.flex.flex-grow.w-2
      div.mx-2.font-mono.text-xs( v-for="(item, index) in project.tags", :key="index") {{ item.toUpperCase() }}
  template(v-slot:body)
    p {{project.desc}}
</template>

<script lang="ts">
export default defineComponent({
  name: "ProjectCard",
  data() {
    return {};
  },
});
</script>

<script lang="ts" setup>
import { defineComponent } from "vue";
import SimpleCard from "./SimpleCard.vue";

defineProps(["project"]);
</script>
