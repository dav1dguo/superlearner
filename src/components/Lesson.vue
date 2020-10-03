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

export default {
  components: {
    Section,
  },
  props: ["id"],
  data() {
    return {
      lesson: null,
      yaml: `
sections:    
- videoUrl: https://www.youtube.com/embed/lOzfz9VnUTY
  description: |
    Applies the dark theme variant to the component. This will default the
      components color to
     
    Another pragraph.
    
    A list:
    
    - item1
    - item2
      - item21
      - item22
    -item3
    
    Final paragrah.
    
  qas:
  - question: Applies the dark theme variant to the component. This will default the
      components color to
    candidates:
    - answer1
    - answer2
    answer: 1
  - question: question text2
    candidates:
    - answer21
    - answer22
    answer: 0
    `,
    };
  },
  created() {
    this.loadYaml(this.id);
  },
  methods: {
    loadYaml(id) {
      console.log(id);
      let obj = yaml.load(this.yaml);
      this.addQaSelected(obj);
      this.lesson = obj;
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