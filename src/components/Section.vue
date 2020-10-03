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
  </div>
</template>

<script>
import marked from "marked";

export default {
  components: {
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