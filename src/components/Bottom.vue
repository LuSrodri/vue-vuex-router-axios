<template>
    
  <v-bottom-navigation
      app
      background-color=white
      color=red
      v-model="value"
  >
            <v-btn v-for="item in draweritens" :key="item.title" @click="$router.push(item.url)"
            style = "background-color:white" 
            class="black--text">
              {{item.title}}
              <v-icon >{{item.icon}}</v-icon>
            </v-btn>
  </v-bottom-navigation>

</template>


<script>
export default {
  name: 'Bottom',

  components:{
  },

  data: () => ({
    draweritens: [
      {
        title:"Home",
        url:"/",
        icon:"mdi-home",
      },
      {
        title:"Movies",
        url:"/Movies",
        icon:"mdi-movie-open",
      },
      {
        title:"Series",
        url:"/Series",
        icon:"mdi-filmstrip",
      },
      {
        title:"TOP",
        url:"/TOP",
        icon:"mdi-movie-star",
      },
    ],

  selecteditem: 0,
  }),
};
</script>