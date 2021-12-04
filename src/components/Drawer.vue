<template>
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
        left
        color="white"
      >
        <v-list>
          <v-list-item class="px-3">
            <v-list-item-avatar>
              <v-img src="https://media-exp1.licdn.com/dms/image/C4D03AQGuK-gMADwhyw/profile-displayphoto-shrink_400_400/0/1613523800434?e=1643846400&v=beta&t=udSTbvgHBy-uGR3Uq2y-q3Ewb5VLK2sB4U_LfqaGQ3w"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h12">
                Lucas Santos
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
        <v-list-item-group v-model="selecteditem" color="red">
          <v-list-item v-for="item in draweritens" :key="item.title" link @click="$router.push(item.url)">

            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            
          </v-list-item>
        </v-list-item-group>
      </v-list>
        
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',

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