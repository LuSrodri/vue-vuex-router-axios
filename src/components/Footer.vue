<template>
    
     <v-footer
    app 
    class="flex"
    flat
    tile
    color=red
    padless
  >
      <v-icon left>mdi-movie-open</v-icon>
      <v-toolbar-title>GOOD MOVIES - {{ new Date().getFullYear() }}</v-toolbar-title>
      <v-spacer></v-spacer>

        <br>

          <v-btn
            dark
            class="mx-1"
            icon 
            href = "https://github.com/LuSrodri" target="_blank"   
            title = "Github"
            >
              <v-icon size="35px">mdi-github</v-icon>
          </v-btn>

          <v-btn
            dark
            class="mx-1"
            icon 
            href = "https://www.linkedin.com/in/lucas-santos-rodrigues-322371184/" target="_blank"    
            title = "LinkedIn"
            >
              <v-icon size="35px">mdi-linkedin</v-icon>
          </v-btn>
  </v-footer>
</template>