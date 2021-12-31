<template lang="pug">
#about.block
  PageTitle About
  img.mx-auto.rounded-full#avatar(src="../assets/avatar.jpg")
  #qns.block
    QuestionCard(v-for="f in faqs", :faq="f")

</template>

<script lang="ts">
export default defineComponent({
  name: "AboutPage",
  data() {
    return {
      faqs: [
        {
          question: "Interests",
          answer: "Mechanical keyboards, software and anime",
        },
        {
          question: "What do I do for a living?",
          answer: "Software engineering in California",
        },
        {
          question: "What is this made of?",
          answer: "Vite, Vue3 and TailwindCSS",
        },
      ],
    };
  },
});
</script>

<script lang="ts" setup>
import { defineComponent } from "vue";
import QuestionCard from "../components/QuestionCard.vue";
import PageTitle from "../components/PageTitle.vue";
</script>

<style scoped>
#avatar {
  width: 300px;
}
</style>
