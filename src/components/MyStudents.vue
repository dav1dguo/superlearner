<template>
  <div>
    <v-list dense>
      <v-list-item v-for="(item, i) in emails" :key="i">
        <v-list-item-icon>
          <v-icon small @click="onDeleteEmail(item)"> mdi-delete ></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.email"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-text-field
      v-model="email"
      dense
      label="Enter a participant's email"
    ></v-text-field>
    <v-btn color="primary" @click="onAddEmail"> Add </v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data: () => ({
    email: "",
    emails: [],
    user: { email: "" },
  }),
  created() {
    let self = this;
    firebase.auth().onAuthStateChanged((user) => {
      this.user = user;
      let fs = firebase.firestore();
      fs.collection("teachers")
        .doc(this.user.email)
        .collection("students")
        .onSnapshot(function (querySnapshot) {
          self.emails = [];
          querySnapshot.forEach(function (doc) {
            // console.log(doc);
            self.emails.push({ email: doc.data().email, id: doc.id });
          });
        });
    });
  },
  methods: {
    onDeleteEmail(item) {
      console.log(item.id);
      firebase
        .firestore()
        .collection("teachers")
        .doc(this.user.email)
        .collection("students")
        .doc(item.id)
        .delete()
        .then(function () {
          console.log("Succesfully removed");
        });
    },
    onAddEmail() {
      firebase
        .firestore()
        .collection("teachers")
        .doc(this.user.email)
        .collection("students")
        .add({ email: this.email });
    },
  },
};
</script>