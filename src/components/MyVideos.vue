<template>
  <div>
    <div v-for="(item, i) in videos" :key="i">
      <v-icon large @click="onDeleteVideo(item)"> mdi-delete ></v-icon>
      <iframe
        width="560"
        height="315"
        :src="item.videoURL"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

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
      user: { email: "" },
      videos: [],
      videoURL: "",
      links: [
        "https://www.youtube.com/embed/oYk0iU2r9VQ",
        "https://www.youtube.com/embed/wWnsVUNOVcY",
        "https://www.youtube.com/embed/2cIXoWpAgTk",
      ],
    };
  },
  created() {
    let self = this;
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      firebase
        .firestore()
        .collection("teachers")
        .doc(this.user.email)
        .collection("videos")
        .onSnapshot(function (querySnapshot) {
          self.videos = [];
          querySnapshot.forEach(function (doc) {
            self.videos.push({ videoURL: doc.data().videoURL, id: doc.id });
          });
        });
    });
  },
  methods: {
    onDeleteVideo(video) {
      firebase
        .firestore()
        .collection("teachers")
        .doc(this.user.email)
        .collection("videos")
        .doc(video.id)
        .delete()
        .then(function () {
          console.log("Succesfully removed");
        });
    },

    onAddVid() {
      firebase
        .firestore()
        .collection("teachers")
        .doc(this.user.email)
        .collection("videos")
        .add({ videoURL: this.videoURL });
    },
  },
};
</script>