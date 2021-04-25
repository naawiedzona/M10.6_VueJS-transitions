<template>
  <div id="movie-finder">
    <h3 id="find-text">Find the best movies: </h3>
    <input id="movie-title-input" type="text" placeholder="movie's title" v-model="searchInput">
    <div id="disponibilidad">
      
      <input type="radio" :value="true" v-model="availableInput"/> Available
      <input type="radio" :value="false" v-model="availableInput"/> Sold Out
    </div>
  </div>
</template>

<script src="../scripts/movie-finder.js"></script>
<style src="../styles/movie-finder.css" scoped></style>