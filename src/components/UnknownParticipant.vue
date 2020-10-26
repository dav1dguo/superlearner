<template>
  <div>
    <v-text-field
      v-model="roomId"
      dense
      label="Your host's room ID, e.g., bob@gmail.com"
    ></v-text-field>
    <v-btn
      color="primary"
      :to="{ name: 'Participant', params: { roomId: roomId } }"
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
      roomId: "bob@gmail.com",
    };
  },
};
</script>