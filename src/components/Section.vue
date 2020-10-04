<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="section.videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div v-html="htmlFromDescription"></div>

    <Qna v-for="(qa, index) in section.qas" :key="index" :qa="qa"></Qna>
  </div>
</template>

<script>
import Qna from "@/components/Qna.vue";
import marked from "marked";

export default {
  components: {
      Qna
  },
  props: ["section"],
  data() {
    return {};
  },
  computed: {
    htmlFromDescription() {
      return marked(this.section.description);
    },
  },
};
</script>