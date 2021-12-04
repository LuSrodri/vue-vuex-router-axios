<template>
    <v-app-bar
      app
      fixed
      color=white
      scroll-target="#scrolling-techniques">
      
      <v-icon left>mdi-movie-open</v-icon>
      <v-toolbar-title>GOOD MOVIES</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-for="item in draweritens" :key="item.title" >
            <v-btn @click="$router.push(item.url)"
            style = "background-color:red" 
            class="white--text">
              {{item.title}}
            </v-btn>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: 'Appbar',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/",
      },
      {
        title:"Movies",
        url:"/Movies",
      },
      {
        title:"Series",
        url:"/Series",
      },
      {
        title:"TOP",
        url:"/TOP",
      },
    ],

  selecteditem: 0,
  }),
};
</script>