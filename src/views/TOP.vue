<template>
  <v-row>
    <v-col cols="12">
      <h1 style="color: gold">TOP</h1>
      <h2 >Total itens: {{countt}}</h2>
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
  data(){
    return{
      countt:0
    }
  },
  name: "Home",
  components: {
    Modelcard,
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    postsCount() {
      return this.$store.getters.postsCount;
    },
  },
  mounted() {
    this.$store.state.parameter = "top"
    this.$store.dispatch("getPosts");
    this.countt = this.postsCount
  },
};
</script>
