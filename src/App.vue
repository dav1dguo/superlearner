<template>
  <v-app>
    <v-app-bar app dense dark color="blue darken - 3">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Super Learner</v-toolbar-title>
      <!-- <router-link to="/"> Super Learner </router-link> -->

      <v-spacer></v-spacer>
      <v-menu offset-y v-if="user">
        <template v-slot:activator="{ on }">
          <v-btn color="primar" dark v-on="on">{{ user.email }}</v-btn>
        </template>
        <v-list>
          <v-list-item to="/profile?">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="onSignout">
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-else to="/SignIn">Sign in</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/activities">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Activities</v-list-item-title>
          </v-list-item>

          <v-list-item to="/myVids">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Videos</v-list-item-title>
          </v-list-item>

          <v-list-item to="/myStudents">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Students</v-list-item-title>
          </v-list-item>

           <v-list-item to="/watchTVids">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Watch a Teacher's Videos</v-list-item-title>
          </v-list-item>

          <v-list-item to="/host">
            <v-list-item-icon>
              <v-icon>mdi-host</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Host</v-list-item-title>
          </v-list-item>

          <v-list-item to="/participant">
            <v-list-item-icon>
              <v-icon>mdi-participant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Participant</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      drawer: false,
      group: null,
      user: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
    });
  },
  methods: {
    onSignout(e) {
      e.stopPropagation();
      firebase.auth().signOut();
    },
  },
};
</script>
