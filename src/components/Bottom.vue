<template>
    
  <v-bottom-navigation
      app
      background-color=salmon
      color=#32CD32
      v-model="selectedBottombarItem"
  >
            <v-btn v-for="item in draweritens" :key="item.title" @click="$router.push(item.url)"
            style = "background-color:pink" 
            class="red--text">
              {{item.title}}
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