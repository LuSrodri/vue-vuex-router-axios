<template>
  <v-row>
    <v-col cols="12">
      <h1 style="color: red">Movies</h1>
      <v-row>
        <v-col v-for="movie in posts.d" :key="movie.id" cols="4">
          <Modelcard :movie="movie"></Modelcard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Modelcard from "../components/Modelcard.vue";

export default {
  name: "Home",
  components: {
    Modelcard,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },
};
</script>
