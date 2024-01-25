<template>
  <v-app-bar  
  color="deep-purple-lighten-2" 
  >
    <v-spacer></v-spacer>
    <ul>
      <li>
        <router-link :to="{name: 'Home', hash: '#home-section'}" :class="{ selectedIndex: index.index == 'home' }" @click="changeIndex('home')" >Home</router-link>
      </li>
      <li>
        <router-link to="/portfolio" :class="{ selectedIndex: index.index == 'portfolio' }" @click="changeIndex('portfolio')">Portfolio</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Home', hash: '#contact-section'}" :class="{ selectedIndex: index.index == 'contact' }" @click="changeIndex('contact')">Contacto</router-link>
      </li>
    </ul>
  </v-app-bar>
</template>

<script setup>
  import { useAppStore } from '../../store/app'

  //global variables
  const index = useAppStore();
  //internal variables
  
  //functions
  const changeIndex = (newIndex) => { index.change(newIndex) }

  window.onpopstate = function () {
      let href = document.location.href;
      if(href.includes('contact')) {
        changeIndex('contact')
      } else if(href.includes('portfolio') || href.includes('description') || href.includes('gallery')) {
        changeIndex('portfolio')
      } else {
        changeIndex('home')
      }
    }
</script>

<style scoped>
  li {
    display:inline;
    padding-left:5px;
    padding-right:10px;
  }
  a {
    color:white;
    text-decoration:none;
  }
  a:hover {
      color:#5E35B1;
  }
  .selectedIndex {
    color:#5E35B1;
    font-weight:bold;
    font-size: larger;
  }
</style>
