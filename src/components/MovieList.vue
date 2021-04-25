<template>
  <div id="movie-list">
<MovieItem
v-for="(movie, index) in films"
:key="index"
:title="movie.title"
:movieId="movie.id"
:description="movie.description"
:available="movie.available"
></MovieItem>
<div id="zero-movies" v-if="films.length<1">There are no movies matching your search ...  </div>
  </div>
</template>
<!--
<script>
import MovieItem from '../components/MovieItem.vue';
import Vuex from 'vuex';

export default {
    name: 'MovieList',
    components:{
        MovieItem
    },
  computed: {
    ...Vuex.mapGetters({films:"FilteredMovies"})
  } 
}
</script>

<style>
#movie-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
}

#zero-movies{
  border: 1px solid rgba(224, 12, 12, 0.678);
  background-color: rgb(82, 78, 78);
  width: 50%;
  line-height: 50px;
}
</style>
-->
<script src="../scripts/movie-list.js"></script>
<style src="../styles/movie-list.css" scoped></style>