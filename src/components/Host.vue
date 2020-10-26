<template>
  <div>
    <youtube
      :video-id="videoId"
      ref="youtube"
      :playerVars="playerVars"
      @playing="onPlaying"
      @paused="onPaused"
      @ready="onReady"
    />
    <v-text-field
      v-model="youtubeUrl"
      dense
      label="YouTube url, e.g., https://www.youtube.com/watch?v=Z2vzrQWny_c"
    ></v-text-field>
    <v-switch v-model="controlOthers" label="Control Guests" />
    Send your guests the following URL for them to join your video:
    <v-btn color="primary" v-clipboard="copyParticipantUrl">
      Copy to clipboard
    </v-btn>
    <v-text-field :value="participantUrl" readonly></v-text-field>
    <!-- <v-snackbar v-model="snackbar" : timeout="timeout">
      {{ participantUrl }} was copied to clipboard.
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </div>
</template>

<script>
import firebase from "firebase";
// import { set } from 'vue/types/umd';
export default {
  components: {},
  data() {
    return {
      youtubeUrl: "https://www.youtube.com/watch?v=Z2vzrQWny_c",
      playerVars: { autoplay: 0, mute: 1 },
      play: true,
      controlOthers: true,
      user: { email: "" },
      lastSyncedPlayerTime: 0,
      intervalHandle: null,
      snackbar: null,
      timeout: 4000,
    };
  },
  computed: {
    videoId() {
      let videoId = this.$youtube.getIdFromUrl(this.youtubeUrl);
      return videoId;
    },
    participantUrl() {
      return "https://superlearner.web.app/participant/" + this.user.email;
    },
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
    onReady() {},
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
    copyParticipantUrl() {
      this.snackbar = true;
      return this.participantUrl;
    },
  },
};
</script> 