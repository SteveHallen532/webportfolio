<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="center">
                <div class="icon-container">
                    <transition name="icon-animation">
                        <div class="circle">
                        <div class="background-white">
                            <v-icon color="success" size="130">mdi-check-circle</v-icon>
                        </div>
                        </div>
                    </transition>
                </div>
            </v-col>
            <v-col class="text-center">
                <h1 class="mt-5 mb-2 text-center">Gracias por tu un mensaje!</h1>
                <h3 class="mb-2 text-center">Responderé lo más pronto posible.</h3>
                <v-btn class="dark text-center" @click="navigateHome()">volver al inicio</v-btn>
            </v-col>
        </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

  //Internal variables
  const router = useRouter();

  //Functions
  const navigateHome = () => {
    router.push('/');
  }
  </script>
  
  <style scoped>
  .background-white {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: white;
  }
  .center{
    display: flex;
    align-content: center;
    justify-content: center;
  }
  
  .icon-container {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: lightgreen;
    opacity: 0;
    animation: icon-animation 1.5s forwards;
  }
  
  @keyframes icon-animation {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  