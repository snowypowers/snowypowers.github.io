<template lang="pug">
#info.container.px-4.block
    h1.font-bold Yak Jun Xiang
    p @snowypowers
    p Software Engineer

    div.flex.flex-col
      a.button(href="about") About
      a.button(href="projects") Projects
      a.button(href="contact") Contact
</template>

<script lang="ts">
export default {
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>

<route>
{
  name: "home",
}
</route>
