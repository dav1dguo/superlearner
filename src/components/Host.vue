<template>
  <div>
    <youtube
      :video-id="videoId"
      ref="youtube"
      :player-vars="playerVars"
      @playing="onPlaying"
      @paused="onPaused"
      @ready="onReady"
    />
    <v-text-field
      v-model="videoId"
      dense
      label="Video ID, e.g., eyCHJjEwVEk"
    ></v-text-field>
    <v-switch v-model="controlOthers" label="Control Guests" />
    Guests can use the following URL to join your video:
    http://superlearner.web.app/participant/{{ user.email }}
  </div>
</template>

<script>
import firebase from "firebase";
// import { set } from 'vue/types/umd';
export default {
  components: {},
  data() {
    return {
      videoId: "Z2vzrQWny_c",
      playerVars: { showinfo: 0, ecver: 2 },
      play: true,
      controlOthers: false,
      user: { email: "" },
      lastSyncedPlayerTime: 0,
      intervalHandle: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  watch: {},
  methods: {
    onPlaying() {
      console.log("playing");
      clearInterval(this.intervalHandle);
      this.play = true;
      this.notifyServer();
    },
    onPaused() {
      console.log("paused");
      this.play = false;
      this.notifyServer();
      this.intervalHandle = setInterval(this.timeChange, 1000);
    },
    onReady() {
      console.log("ready");
    },
    timeChange() {
      // console.log("timeChange")
      if (!this.controlOthers) {
        return;
      }
      let self = this;
      this.$refs.youtube.player.getCurrentTime().then(function (sec) {
        if (self.lastSyncedPlayerTime != sec) {
          self.notifyServer();
        }
      });
    },
    notifyServer() {
      if (!this.controlOthers) {
        return;
      }
      let self = this;
      this.$refs.youtube.player.getCurrentTime().then(function (sec) {
        console.log(sec);
        console.log(self.user.email);
        firebase
          .firestore()
          .collection("rooms")
          .doc(self.user.email)
          .set({
            videoId: self.videoId,
            requestedStartSec: sec,
            play: self.play,
          })
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
        self.lastSyncedPlayerTime = sec;
      });
    },
  },
  computed: {},
};
</script> 