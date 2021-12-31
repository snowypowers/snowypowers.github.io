<template lang="pug">
SimpleCard
  template(v-slot:head)
    p.text-lg {{faq.question}}
  template(v-slot:body)
    p {{faq.answer}}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SimpleCard from "./SimpleCard.vue";
export default defineComponent({
  name: "QuestionCard",
});
</script>

<script lang="ts" setup>
defineProps({
  faq: {
    type: Object,
    default: () => ({ question: "", answer: "" }),
  },
});
</script>
