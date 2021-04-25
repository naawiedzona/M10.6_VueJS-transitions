<template>
  <div id="movie-finder-page">
    <div id="header">
    <h1 id="app-title">Movie finder</h1>
    <img src="../../src/assets/movies-app.jpg" alt="">
    </div>
    <MovieFinder></MovieFinder>
   <MovieList></MovieList>
  </div>
</template>

<script>
import MovieList from '../components/MovieList';
import MovieFinder from '../components/MovieFinder'


export default {
  name: 'App',
   components: {
    MovieList,
    MovieFinder
  },
}
</script>

<script src="../scripts/movie-finder-page.js"></script>
<style src="../styles/movie-finder-page.css"></style>