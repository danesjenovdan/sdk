<template>
  <div id="app">
    <div class="app-container">
      <router-view/>
    </div>
    <the-footer :key="$route.fullPath"></the-footer>
  </div>
</template>

<script>
import TheFooter from '@/components/Footer';

export default {
  name: 'App',

  components: { TheFooter },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow:300,400,500,700|Overpass+Mono:400,700&subset=latin-ext');

/* font-family: 'Barlow', sans-serif;
font-family: 'Overpass Mono', monospace; */

body {
  background-color: #efcddc;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Overpass Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0;

  width: 100%;
}
.app-container {
  max-width: 1126px; /* + 100px for padding */
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  margin: auto;
}

.highlight {
  color: #7147dd;
}

#footer {
  margin-top: 60px;
}
</style>
