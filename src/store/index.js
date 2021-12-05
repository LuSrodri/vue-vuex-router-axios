// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  parameter:'movies',
  posts: []
}

//to handle state
const getters = {
  postsCount: state => {
    return state.posts.d.length
  }
}

//to handle actions
const actions = {
  getPosts({ commit }) {
    var options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: { q: state.parameter },
      headers: { 'x-rapidapi-host': 'imdb8.p.rapidapi.com', 'x-rapidapi-key': '8a228d67a9msh2730af094091770p154764jsn567d96812284' }
    };

    axios.request(options).then(function (response) {
      commit('SET_POSTS', response.data)
    }).catch(function () {
      console.log("Erro");
    });
  }
}

//to handle mutations
const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})