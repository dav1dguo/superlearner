<template>
  <div>
       <youtube
      :video-id="videoId"
      ref="youtube"
      :playerVars="playerVars"
      @ready="onReady"
    />
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
      playerVars: { autoplay: 1, mute: 1},
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
      this.$refs.youtube.player.seekTo(this.requestedStartSec, true);
    },
  },
  methods: {
    onReady() {
      setTimeout(this.syncState, 3000);
    },
    syncState(){
      this.$refs.youtube.player.seekTo(this.requestedStartSec, true);
      if(this.play) {
        this.$refs.youtube.player.playVideo();
      }else{
        this.$refs.youtube.player.pauseVideo();
      }
    }
  },
  computed: {},
};
</script>