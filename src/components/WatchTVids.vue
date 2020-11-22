<template>
  <div>
    <v-text-field
      v-model="roomId"
      dense
      label="Enter teacher ID"
    ></v-text-field>
    <v-btn
      color="primary"
      :to="{ name: 'studentVideos', params: { teacherId: teacherId } }"
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