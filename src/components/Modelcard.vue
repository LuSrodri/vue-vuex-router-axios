<template>
    <v-card  style="text-align: center"
    outlined color="red garken-2">
        <v-card-title style="color: Black" class="justify-center">
            {{movie.l}}
        </v-card-title>
        <v-img
        contain
        :src=movie.i.imageUrl
        height="250px"></v-img>
        <br/>
        <!-- <div>
            <v-btn style = "background-color:#008000"
            class="white--text"
            :href=food.link
            target="_blank"> Link da receita </v-btn>
        </div> -->
        <br/>
        <p
        class="texto"
        >{{movie.q}}</p>
        
    </v-card>
</template>

<script>
export default {
    props: ["movie"]
}
</script>

<style>
.texto{
 color: white;
 text-align: center;
 max-width: 90%;
 justify-self: center;
 margin-left: 5%;
 margin-right: 5%;
 
}
</style>