<template>
  <div>
    <iframe
      v-for="(link, i) in videos"
      :key="i"
      width="560"
      height="315"
      :src="link"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <v-text-field
      v-model="videoURL"
      dense
      label="Copy and paste your video's URL here"
    ></v-text-field>
    <v-btn color="primary" @click="onAddVid"> Upload </v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      videoURL: "",
      videos: [],
      links: [
        "https://www.youtube.com/embed/oYk0iU2r9VQ",
        "https://www.youtube.com/embed/wWnsVUNOVcY",
        "https://www.youtube.com/embed/2cIXoWpAgTk",
      ],
    };
  },
  created() {
    let self = this;
    let fs = firebase.firestore();
    fs.collection("videos").onSnapshot(function (querySnapshot) {
      self.videos = [];
      querySnapshot.forEach(function (doc) {
        self.videos.push(doc.data().videoURL);
      });
      console.log("Current data: ", self.videos.join(", "));
    });
  },
  methods: {
    onAddVid() {
      firebase
        .firestore()
        .collection("videos")
        .add({ videoURL: this.videoURL });
    },
  },
};
</script>