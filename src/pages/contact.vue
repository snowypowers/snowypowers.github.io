<template lang="pug">
#contact.block
  PageTitle Contact
  div.flex.flex-wrap.justify-center
    div.block.m-4(v-for="l in links")
      a.m-4(:href="l.href")
        component.h-20.w-auto(:is="l.icon")
      p.text-center {{l.desc}}
</template>

<script lang="ts">
export default defineComponent({
  name: "ContactPage",
  data() {
    return {
      links: [
        {
          href: "https://github.com/snowypowers",
          desc: "Github",
          icon: CodeIcon,
        },
        {
          href: "https://www.linkedin.com/in/jun-xiang-yak-7b387687/",
          desc: "LinkedIn",
          icon: LinkIcon,
        },
        {
          href: "mailto:yakjunxiang@gmail.com",
          desc: "Email",
          icon: MailIcon,
        },
      ],
    };
  },
});
</script>

<script lang="ts" setup>
import { MailIcon, CodeIcon, LinkIcon } from "@heroicons/vue/solid";
import { defineComponent } from "vue";
import PageTitle from "../components/PageTitle.vue";
</script>
