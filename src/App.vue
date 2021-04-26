<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/movie-finder">Movie Finder</router-link> 
      <router-link to="/modal-slot">Money Exchange</router-link> 
      <router-link to="/form">Contact Form</router-link>
    </div>
    <transition name="view">
    <router-view/>
    </transition>
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

.view-enter-active, .view-leave-active{
transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter, .view-leave-to {
opacity: 0;
transform: translateY(-30px);
}
.view-enter-to, .view-leave {
   opacity: 1;
   transform: translateY(0px);
}
</style>
