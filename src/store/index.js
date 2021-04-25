import Vue from "vue";
import Vuex from "vuex";
import films from "../assets/Films.js";

Vue.use(Vuex);

export default new Vuex.Store({
  //  STATE
  state: {
    movies: films(),
    filters: {
      search: "",
      available: true,
    },
  },
  //  MUTATIONS
  mutations: {
    SetSearch(state, value) {
      state.filters.search = value;
      console.log(value);
    },
    SetAvailable(state) {
      state.filters.available = !state.filters.available;
      console.log(state.filters.available);
    },
  },
  actions: {},
  getters: {
    FilteredMovies(state){
      let peliculas = state.movies;
      let peliculasTemp = [];
      if (state.filters.search.length > 2) {
        for ( const movie of peliculas ) {
          if(movie.available === state.filters.available) {
            if(movie.title.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase())){
              peliculasTemp.push(movie);
            }
          }
        }
        peliculas = peliculasTemp;
        return peliculas;
      }else{
        for ( const movie of peliculas ) {
          if(movie.available === state.filters.available) {
            if(movie.title.toLocaleLowerCase().includes(state.filters.search.toLocaleLowerCase())){
              peliculasTemp.push(movie);
            }
          }
        }
        peliculas = peliculasTemp;
        return peliculas;
      }
    },
  },
});
