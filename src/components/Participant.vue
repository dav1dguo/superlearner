<template>
  <div>
    <youtube :video-id="videoId" ref="youtube" />

  </div>
</template>

<script>
import firebase from "firebase";
export default {
  components: {},
  props: ["roomId"],
  data() {
    return {
      videoId: "",
      play: true,
      requestedStartSec: 0,
    };
  },
  created() {
    let self = this;
    let fs = firebase.firestore();
    fs.collection("rooms")
      .doc(this.roomId)
      .onSnapshot(function (doc) {
        // if (doc.data() == null) {
        //   return;
        // }
        console.log("Current data: ", doc.data());
        self.videoId = doc.data().videoId;
        self.requestedStartSec = doc.data().requestedStartSec;
        self.play = doc.data().play;
      });
  },
  watch: {
    play() {
      if (this.play) {
        this.$refs.youtube.player.playVideo();
      } else {
        this.$refs.youtube.player.pauseVideo();
      }
    },
    requestedStartSec() {
      console.log("requestedStartSec: ", this.requestedStartSec);
      console.log("player: ", this.$refs.youtube.player);
      this.$refs.youtube.player.seekTo(this.requestedStartSec, true);
    },
  },
  methods: {},
  computed: {},
};
</script>