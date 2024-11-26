<template>
  <v-app-bar  
  color="deep-purple-lighten-2" 
  >
    <v-spacer></v-spacer>
    <ul>
      <li>
        <router-link :to="{name: 'Home', hash: '#home-section'}" :class="{ selectedIndex: index.index == 'home' }" @click="changeIndex('home')" >{{ $t('message.appBar.home') }}</router-link>
      </li>
      <li>
        <router-link to="/portfolio" :class="{ selectedIndex: index.index == 'portfolio' }" @click="changeIndex('portfolio')">{{ $t('message.appBar.portfolio') }}</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Home', hash: '#contact-section'}" :class="{ selectedIndex: index.index == 'contact' }" @click="changeIndex('contact')">{{ $t('message.appBar.contact') }}</router-link>
      </li>
    </ul>
    <div class="locale-changer ms-5 me-2">
      <v-icon
        color="white"
        icon="mdi-translate"
        size="small"
      ></v-icon>
      <select v-model="$i18n.locale" @change="onLocaleChange($i18n.locale)">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
      </select>
    </div>
  </v-app-bar>
</template>

<script setup>
  import { useAppStore } from '../../store/app';

  // Global variables
  const index = useAppStore();

  // Internal variables

  // Functions
  const changeIndex = (newIndex) => {
    index.change(newIndex);
  };

  // Persist language on change
  const onLocaleChange = (value) => {
    localStorage.setItem('locale', value);  // Guardar en localStorage
  };

  window.onpopstate = function () {
    let href = document.location.href;
    if (href.includes('contact')) {
      changeIndex('contact');
    } else if (href.includes('portfolio') || href.includes('description') || href.includes('gallery')) {
      changeIndex('portfolio');
    } else {
      changeIndex('home');
    }
  };
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
  select{
    color: white;
    background-color: transparent;
    padding: 3px;
    margin: auto 5px auto 5px;
  }
  select:hover{
    cursor: pointer;
  }
  select:focus{
    outline: none;
  }
  select option {
    background-color: #bbb2cb;
  }
  .selectedIndex {
    color:#5E35B1;
    font-weight:bold;
    font-size: larger;
  }
  @media (min-width: 500px) {
    a:hover {
      color:#5E35B1;
  }
  }
</style>
