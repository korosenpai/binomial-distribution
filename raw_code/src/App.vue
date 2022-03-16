<template>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'bDistribution'}">Distribuzione binomiale</router-link>
    </nav> -->

    <Sidebar />

    <router-view/>

</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import {SIDEBAR_WIDTH_COLLAPSED} from './components/sidebar/state'

export default {
  components: {
    Sidebar
  },

  data() {
    return {
      SIDEBAR_WIDTH_COLLAPSED
    }
  }
}
</script>


<style>
:root {
    --bg-color: #eee;
    --sidebar-bg-color: #13867b;
    --sidebar-item-hover: #2b9288;
    --sidebar-item-active: #11786e

    /* --sidebar-item-hover: #38a169; */
    /* --sidebar-item-active: #276749; */

    /* --sidebar-item-hover: rgba(255, 255, 255, 0.1);
    --sidebar-item-active: rgba(0, 0, 0, 0.1) */
}

@font-face {
  font-family: "arial-rounded-mt";
  src: url("./assets/fonts/arial-rounded-mt.ttf")
}

body {
  /* background: #202020; */
  background: var(--bg-color);
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 32px;
}

h3 {
  font-size: 18px;
}

p {
  font-size: 14px;
}

#app {



  font-family: arial-rounded-mt,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--sidebar-bg-color);
  margin-left: 30px; /* for the sidebar*/
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;

  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: #42b983;
}

.white-box {
  background-color: white;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
