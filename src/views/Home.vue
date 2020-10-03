<template>
  <div>
    <v-row dense>
      <v-col v-for="(lesson, index) in lessons" :key="index">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" :src="lesson.img">
          </v-img>

          <v-card-text class="text--primary">{{ lesson.name }}</v-card-text>
          <v-card-actions>
            <v-btn
              color="orange"
              text
              :to="{ name: 'lessons', params: { id: lesson.location } }"
              >Explore</v-btn
            >
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lessons: [
        {
          name: "Washing hands",
          location: "washHands.yaml",
          img:
            "https://clipartix.com/wp-content/uploads/2019/03/washing-hands-clipart-2019-27.png",
        },
        {
          name: "Putting on a mask",
          location: "lesson.yaml",
          img:
            "https://cdn.datta.store/auxapi/files/image/mask-only_eY8DKCk.png",
        },
        {
          name: "Math",
          location: "washHands.yaml",
          img: "http://images.clipartpanda.com/score-clipart-jcx846jcE.jpeg",
        },
        {
          name: "Fitness",
          location: "washHands.yaml",
          img:
            "https://www.clipartmax.com/png/middle/17-175096_physical-fitness-test-clipart-fitness-clip-art.png",
        },
        {
          name: "Explore new places",
          location: "lesson.yaml",
          img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        },
      ],
    };
  },
  components: {},
};
</script>

