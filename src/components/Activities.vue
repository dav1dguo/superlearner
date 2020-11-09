<template>
  <div>
    <iframe
      v-for="(link, i) in links"
      :key="i"
      width="560"
      height="315"
      :src="link"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "https://www.youtube.com/embed/oYk0iU2r9VQ",
        "https://www.youtube.com/embed/wWnsVUNOVcY",
        "https://www.youtube.com/embed/2cIXoWpAgTk",
      ],
    };
  },
};
</script>