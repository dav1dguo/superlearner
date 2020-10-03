import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import router from './router'

Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyBQmGTQFJFIqNfDgT0yVQSYAR9R_B0Lrk4",
  authDomain: "david-eric-919f0.firebaseapp.com",
  databaseURL: "https://david-eric-919f0.firebaseio.com",
  projectId: "david-eric-919f0",
  storageBucket: "david-eric-919f0.appspot.com",
  messagingSenderId: "1081822423493",
  appId: "1:1081822423493:web:3bb194fa900803227f43ac"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
