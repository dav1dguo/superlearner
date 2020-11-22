<template>
  <div>
    <div v-for="(item, i) in videos" :key="i">
      <iframe
        width="560"
        height="315"
        :src="item.videoURL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  props: ["teacherId"],
  data() {
    return {
      videos: [],
    };
  },
  created() {
    let self = this;
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      firebase
        .firestore()
        .collection("teachers")
        .doc(self.teacherId)
        .collection("videos")
        .onSnapshot(function (querySnapshot) {
          self.videos = [];
          querySnapshot.forEach(function (doc) {
            self.videos.push({ videoURL: doc.data().videoURL, id: doc.id });
          });
        });
    });
  },
  methods: {},
};
</script>