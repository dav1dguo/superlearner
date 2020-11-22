<template>
  <div>
    <v-text-field
      v-model="teacherId"
      dense
      label="Enter teacher ID"
    ></v-text-field>
    <v-btn
      color="primary"
      :to="{ name: 'StudentVideos', params: { teacherId: teacherId } }"
    >
      Join
    </v-btn>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      teacherId: "bob@gmail.com",
    };
  },
};
</script>