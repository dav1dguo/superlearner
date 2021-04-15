<template>
  <div>
    <Section
      v-for="(section, index) in lesson.sections"
      :key="index"
      :section="section"
    />
    </div>
</template>

<script>
import yaml from "js-yaml";
import Section from "@/components/Section.vue";
import firebase from "firebase";
import axios from "axios";

export default {
  components: {
    Section,
  },
  props: ["id"],
  data() {
    return {
      lesson: { sections: [] },
    };
  },
  created() {
    this.loadYaml(this.id);
  },
  methods: {
    loadYaml(id) {
      let self = this;
      let storageRef = firebase.storage().ref(id);
      storageRef.getDownloadURL().then(function (url) {
        axios
          .get(url)
          .then((res) => {
            // console.log(res.data);
            let obj = yaml.load(res.data);
            self.addQaSelected(obj);
            self.lesson = obj;
            // console.log(self.lesson);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    },

    addQaSelected(lesson) {
      for (let section of lesson.sections) {
        for (let qa of section.qas) {
          qa.selected = -1;
        }
      }
    },
  },
};
</script>