<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/movie-finder">Movie Finder</router-link> 
      <router-link to="/modal-slot">Money Exchange</router-link> 
      <router-link to="/form">Contact Form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
}

#nav a {
  font-size:20px;
  color: gold;
  text-decoration: none;
}
#nav a:hover{
  text-decoration-line: underline;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
