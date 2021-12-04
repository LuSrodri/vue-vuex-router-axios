<template>
  <v-app>

    <Systembar></Systembar>

    <Appbar></Appbar>

    <Drawer></Drawer>
  
    <v-main>
      <v-content>
      <router-view></router-view>
      </v-content>
    </v-main>

    <Footer></Footer>

    <Bottom></Bottom>

  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar"
import Drawer from "@/components/Drawer"
import Systembar from "@/components/Systembar"
import Footer from "@/components/Footer"
import Bottom from "@/components/Bottom"
export default {
  name: 'App',
  components:{
    Appbar,
    Drawer,
    Systembar,
    Footer,
    Bottom
  },

  data: () => ({
  }),
};
</script>


