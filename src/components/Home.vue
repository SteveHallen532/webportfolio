<template>
    <div v-if="!loading">
      <section id="home-section" class="px-3 px-sm-5 d-flex align-center section">
          <v-container class="text-center">
              <v-row class="pt-3">
                  <v-col cols="12" sm="4" offset-xl="1">
                    <img id="myselfImg" src="../../public/assets/backgrounds/673dccba38310bab0a441d906b97353f2.png" alt="picture of myself">
                  </v-col>
                  <v-col cols="12" sm="8" xl="5" offset-xl="1" class="text-center text-sm-right">
                    <h2>{{ $t('message.home.title') }} <b class="purple-text">Virginia Yerien,</b></h2>
                    <h1 id="home-title-2">{{ $t('message.home.title2') }}</h1> 
                    <p class="paragraph py-2 py-sm-16 pt-lg-10 mb-3">{{ $t('message.home.p') }}</p>
                    <v-btn variant="outlined" id="btn-cv" class="light  mb-4" @click="downloadPdf('../assets/CV/CV-VirginiaYerien.pdf')">{{ $t('message.home.resumeBtn') }}</v-btn>
                  </v-col>
              </v-row>
          </v-container>
      </section>

      <section id="portfolio-section" class="px-3 px-sm-5 d-flex align-center section">
          <v-container class="fill-height">
              <v-responsive class="align-center text-center">
              <v-row>
                <v-col cols="12" md="6" xl="4" offset-xl="1" class="text-left">
                  <h2 class="pb-5">{{ $t('message.home.portfolioTitle') }}</h2>
                  <p class="paragraph text-left">{{ $t('message.home.portfolioP') }}</p>
                  <p class="paragraph text-left pb-5">{{ $t('message.home.portfolioP2') }}</p>
                  <v-btn id="btn-portfolio-all" variant="outlined" class="light d-none d-lg-block mt-11 mt-xl-9" @click="navigate('portfolio'), changeIndex('portfolio')">{{ $t('message.home.portfolioBtn') }}</v-btn>
                
                </v-col>

                  <v-col cols="12" md="6" xl="6" class="pt-0 pb-8">

                    <v-carousel
                      cycle
                      :height="height"
                      hide-delimiter-background
                      show-arrows="hover"
                    >
                      <v-carousel-item v-for="(item, index) in projects" :key="index"
                      :src="getImgUrl(index)"
                      cover
                      >
                        <v-btn v-if="mobile" class="dark dark-carousel-btn-mobile" size="large" :icon="icon" @click="navigate('description?id=' + item.id), changeIndex('portfolio')"></v-btn>
                        <v-btn v-if="!mobile" class="btn-portfolio dark dark-carousel-btn-desk"  :text="$t('message.home.detailsBtn')" @click="navigate('description?id=' + item.id), changeIndex('portfolio')"></v-btn>
                      </v-carousel-item>
                    </v-carousel>

                  </v-col>

                  <v-col cols="12" class="pt-0 pb-16 pb-lg-0">
                    <v-btn id="btn-portfolio-all2" variant="outlined" class="light d-inline d-lg-none" @click="navigate('portfolio'), changeIndex('portfolio')">{{ $t('message.home.portfolioBtn') }}</v-btn>
                  </v-col>
              </v-row>
              </v-responsive>
          </v-container>
      </section>

      <section id="contact-section" class="section px-3 px-sm-5 pt-10 pt-sm-5 d-flex align-center">
          <v-container class="fill-height">
              <v-responsive class="align-center text-center">
              <v-row>
                  <v-col cols="12" class="pb-0">
                    <h2>{{ $t('message.contact.title') }}</h2>
                    <h3>{{ $t('message.contact.subtitle') }}</h3>
                  </v-col>
                  
                  <v-col cols="12" lg="6" xl="4" offset-xl="2" class="mt-3 py-0 py-lg-3">
                    <p class="paragraph pb-1 pb-lg-3">{{ $t('message.contact.p') }}</p>
                    <v-sheet class="mx-auto background-transparent">
                      <v-form fast-fail action="https://formsubmit.co/virginiayer@gmail.com" method="POST">

                        <v-text-field
                          variant="outlined"
                          name="name"
                        
                          :label="$t('message.contact.placeholderName')"
                        
                        ></v-text-field>

                        <v-text-field
                          variant="outlined"
                          name="email"
                        
                          label="e-mail"
                        
                        ></v-text-field>

                        <v-textarea
                          variant="outlined"
                          name="msg"
                        
                          :label="$t('message.contact.placeholderMessage')"
                      
                        ></v-textarea>

                        <v-btn type="submit" block class="mt-2 btn-portfolio dark">{{ $t('message.contact.btn') }}</v-btn>

                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_cc" value="virginiayer@gmail.com">
                        <input type="hidden" name="_next" value="http://127.0.0.1:3000/success">
                      </v-form>
                    </v-sheet>
                  </v-col>

                  <v-col cols="12" lg="6" xl="4" class="py-0 py-lg-3">
                    <v-col cols="12" class="mb-16 pb-16">
                      <p class="paragraph pb-1 pb-lg-3">{{ $t('message.contact.p2') }}</p>
                      <a href="https://linkedin.com/in/virginia-yerien">
                        <v-btn class="mx-5 btn-icon" icon="mdi-linkedin" elevation="16" size="x-large"></v-btn>
                      </a>
                      <a href="https://github.com/VikyYerien">
                        <v-btn class="mx-5 btn-icon" icon="mdi-github" elevation="16" size="x-large"></v-btn>
                      </a>
                    </v-col>
                  </v-col>

              </v-row>
              </v-responsive>
          </v-container>
      </section>
    </div>
</template>
  
<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, onUnmounted } from 'vue';
  import { ProjectsService } from '../services/ProjectsService.js';
  import { useAppStore } from '../store/app'

  //Internal variables
  const index = useAppStore();
  const router = useRouter();
  const projects = ref({});
  const loading = ref(true);
  const height = ref('');
  const icon = ref('');
  const mobile = ref(Boolean)

  //Functions
     const scrolling = (e) => {
      
      const el = e.target.documentElement;
      const contact = el.clientHeight + el.scrollTop > el.scrollHeight*0.75;
      const home = el.clientHeight + el.scrollTop < el.scrollHeight*0.5;
      if (contact && (index.index != 'contact')) {
        changeIndex('contact')
      }
      if (home && (index.index != 'home')) {
        changeIndex('home')
      }

   }
  const changeIndex = (newIndex) => { index.change(newIndex) }
  const navigate = (url) => {
    router.push('/' + url);
  }
  const getProjects = () => {
    projects.value = ProjectsService.getProyectsListFirst3();
    loading.value = false;
  }
  const getImgUrl = (i) => {
        return new URL(`${projects.value[i].CarouselImgs[0]}`, import.meta.url).href
  }
  function downloadPdf(pdfUrl) {
    const link = document.createElement('a');
    link.href = new URL(`${pdfUrl}`, import.meta.url).href;
    link.target = '_blank';
    link.download = 'CV-VirginiaYerien.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
    
  //Hooks
  onMounted(
        () => {
          window.addEventListener("scroll", scrolling)
          if(Number(screen.width) <= 500) {
                height.value = 'auto';
                icon.value = 'mdi-eye'
                mobile.value = true;
            } else if(Number(screen.width) > 500) {
                height.value = '500';
                mobile.value = false;
            }
          getProjects()
        } 
    )
    onUnmounted(
        () => {
          window.removeEventListener("scroll", scrolling)
        } 
    )
</script>
  
  <style scoped>
  h1{
    font-size: 70px;
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 30px;
    font-weight: lighter;
    font-style: italic;
  }
  p {
    font-weight: 300;
  }
  #btn-cv {
    height: 6vh;
  }
  #contact-section{
    background-image: url('../assets/backgrounds/fondo2.png');
  }
  #home-section{
    background-image: url('../assets/backgrounds/fondo.png');
  }
  #myselfImg{
    width: 100%;
    border-radius: 50%;
  }
  #portfolio-section {
    background-image: url('../assets/backgrounds/fondo3.png');
  }
  .dark-carousel-btn-desk{
    width: fit-content;
    position: relative;
    bottom:5px;
    display:block; 
    margin-right: auto;
    margin-left: auto;
  }
  .btn-icon:hover{
    padding: 5px;
    background-color: #5E35B1;
    color: white;
    transition: background-color 0.5s;
  }
  .btn-portfolio{
    padding: 5px;
    margin-top: 400px;
  }
  .paragraph {
    font-size: 20px;
  }
  .section {
    width: 100vw;
    min-height: 100vh;
    background-size: cover;                
    background-repeat: no-repeat;
    background-position: center center;
  }

  @media (max-width: 600px) {
    h1{
    font-size: 30px;
    }
    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 20px;
      font-weight: lighter;
      font-style: italic;
    }
    p {
      transform: scale(0.9);
    }
    #home-section{
      background-image: url('../assets/backgrounds/fondoMobile.png');
    }
    #contact-section{
      background-image: url('../assets/backgrounds/fondoMobile2.png');
    }
    #myselfImg{
      width: 65%;
    }
    #portfolio-section {
      padding-top: 40px;
      background-color: #f6f3fb;
    }
    .btn-portfolio{
      padding: 5px;
      margin-top: 400px;
    }
    .background-transparent{
      background: transparent;
    }
    .dark-carousel-btn-mobile{
      border-radius: 50%;
      position: absolute;
      top: 2px;
      right: 2px;
    }
    .purple-text {
      color:#5E35B1;
    }
    .section {
      width: 100vw;
      height: fit-content;
    }
  }
  
  @media (min-width: 601px) and (max-width: 1100px) {
    #home-title-2{
      font-size: 30px;
    }
    #home-section{
      height: 100vh;
      background-image: url('../assets/backgrounds/fondoMobile.png');
    }
    #contact-section{
      background-image: url('../assets/backgrounds/fondoMobile2.png');
    }
    h1{
    font-size: 45px;
    }
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 35px;
      font-weight: lighter;
      font-style: italic;
    }
  }
</style>
