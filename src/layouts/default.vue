<template lang="pug">
main
  nav.flex.items-center.justify-between.flex-wrap
    div.flex.items-center.mr-6
      a(href="/")
        HomeIcon.h-8.w-8.text-blue-500
div.container.mx-auto
  router-view
</template>

<script lang="ts" setup>
import { HomeIcon } from "@heroicons/vue/solid";
</script>
