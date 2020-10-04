<template>
  <v-row dense>
    <v-col cols="10">
      <v-radio-group
        v-model="selected"
        :label="qa.question"
        :successMessages="successMessages"
        :errorMessages="errorMessages"
        dense
      >
        <v-radio
          v-for="(candidate, index) in qa.candidates"
          :key="index"
          :label="candidate"
        ></v-radio>
      </v-radio-group>
    </v-col>
    <v-col cols="2">
      <v-img
        v-if="selected == qa.answer"
        src="https://www.uwbucks.org/wp-content/uploads/2018/07/Happy-kid-png-19.png"
        max-height="80"
        contain
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  props: ["qa", "value"],
  data() {
    return {
      selected: -1,
      successMessages: [],
      errorMessages: [],
    };
  },
  watch: {
    selected() {
      this.qa.selected = this.selected;
      if (this.qa.selected == this.qa.answer) {
        this.successMessages = ["Good job!"];
        this.errorMessages = [];
      } else {
        this.successMessages = [];
        this.errorMessages = ["Try again"];
      }
    },
  },
  methods: {},
};
</script>