<template>
    <v-container v-if="loading == false">
        <v-row class="pt-lg-16">
            <v-col cols="12" md="4" xl="3" offset-xl="1" class="pt-0 pb-8">
                <h1 class="pb-2">{{ project.Title }}</h1>
                <h3 class="pb-2">{{ project.Subtitle }}</h3>
                <p>{{ project.Description }}</p>
                <br>
                <div v-if="project.Url">
                    <h3>Dale un vistazo!</h3>
                    <p>Url: <a :href="getUrl()">{{ project.Url }}</a></p>
                    <p v-if="project.User">User: {{ project.User }}</p>
                    <p v-if="project.Pass">Password: {{ project.Pass }}</p>
                </div>
                <v-btn v-if="!mobile" class="dark mt-16 mr-4" @click="navigate('gallery?id=' + project.id + '&size=MovileImgs')">Galería MOBILE</v-btn>
                <v-btn v-if="!mobile" class="dark mt-16" @click="navigate('gallery?id=' + project.id + '&size=DeskTopImgs')">Galeria DESKTOP</v-btn>
            </v-col>
            <v-col cols="12" md="6" class="pt-0 pb-8">

                <v-carousel 
                class="carousel"
                cycle
                height="auto"
                hide-delimiter-background
                show-arrows="hover"
                >
                    <v-carousel-item v-for="(item, index) in project.CarouselImgs" :key="index"
                    :src="getImgUrl(index)"
                    cover
                    ></v-carousel-item>

                </v-carousel>

            </v-col>
            <v-col v-if="mobile" cols="6" class="text-center">
                <v-btn class="dark" @click="navigate('gallery?id=' + project.id + '&size=MovileImgs')">Galería MOBILE</v-btn>
            </v-col>
            <v-col v-if="mobile" cols="6" class="text-center">
                <v-btn class="dark" @click="navigate('gallery?id=' + project.id + '&size=DeskTopImgs')">Galeria DESKTOP</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue'
    import { ProjectsService } from '../services/ProjectsService.js'
    import { useRoute, useRouter } from 'vue-router'

    //Constants
    const router = useRouter();
    const route = useRoute();
    const id = ref('');
    const project = ref({});
    const loading = ref(true)
    const mobile = ref(Boolean)
    
    //Functions
    const getImgUrl = (i) => {
        return new URL(`${project.value.CarouselImgs[i]}`, import.meta.url).href
    }

    const getUrl = () => {
        return new URL(`${project.value.Url}`, import.meta.url).href
    }
    
    const getUrlQueryParams = async () => {    
    //router is async so we wait for it to be ready
    await router.isReady()
    //once its ready we can access the query params

    id.value = route.query.id
    getProject()
    };

    const getProject = () => {
        project.value = ProjectsService.getProyect(id.value)
        loading.value = false;
    }

    //:url="'description?id=' + item.id"
    const navigate = (url) => {
        router.push('/' + url);
    }

    //Hooks
    onMounted(
        () => {
            if(Number(screen.width) <= 500) {
                mobile.value = true;
            } else {
                mobile.value = false;
            }
            getUrlQueryParams()
        } 
    )

    

</script>
  
<style scoped>
p{
    font-weight: lighter;
}
.carousel{
    width: 60vw;
    height: auto;
}
@media (max-width: 500px) {
    .carousel{
        width: 90vw;
    }
}
</style>