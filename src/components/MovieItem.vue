<template>
  <div id="movie-item">
    <h3 class="movie-title">{{title}}</h3>
    <p class="movie-description">{{description}}</p>
    <!-- <small class="small-text" v-if="available">available</small>
    <small class="small-text small-text-not" v-else-if="!available">not available</small> -->
  </div>
</template>

<script src="../scripts/movie-item.js"></script>
<style src="../styles/movie-item.css" scoped></style>
