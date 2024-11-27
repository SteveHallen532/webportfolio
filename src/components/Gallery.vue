<template>
    <section id="gallery-section">
        <v-container v-if="loading == false">
            <v-row class="pt-lg-16">
                <v-col cols="12" class="pt-0 pb-8">
                    <h1 class="pb-2 text-center">{{ project.Title }}</h1>
                </v-col>
                <v-col cols="6" :md="cols" :xl="colsXl" class="pt-0 pb-4 text-center justify-center" v-for="(item, index) in gallery" :key="index">

                    <v-dialog width="auto">
                        <template v-slot:activator="{ props }">
                            <img v-bind="props" class="img-btn" :src="getImgUrl(index)" @click="setCarousellIndex(index)" :alt="$t('message.gallery.alt')">
                        </template>

                        <template v-slot:default="{ isActive }">
                            <v-card>
                                <!-- caroussel instead of image -->

                                    <v-btn
                                    id="close-carousel"
                                    icon="mdi-close"
                                    variant="text"
                                    size="x-large"
                                    @click="isActive.value = false"
                                    ></v-btn>

                                    <v-carousel
                                    :class="size"
                                    v-model="carouselIndex"
                                    cycle
                                    height="auto"
                                    hide-delimiter-background
                                    show-arrows="hover"
                                    >
                                    <v-carousel-item v-for="(item, index) in gallery" :key="index"
                                    :src="getImgUrl(index)"
                                    cover
                                    >
                                    </v-carousel-item>
                                </v-carousel>
                                    
                                <!-- <img :src="getImgUrl(index)" alt="Imagen del proyecto"> -->

                            </v-card>
                        </template>
                    </v-dialog>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue'
    import { ProjectsService } from '../services/ProjectsService.js'
    import { useRoute, useRouter } from 'vue-router'

    
    //Constants
    const router = useRouter();
    const route = useRoute();
    const id = ref('');
    const size = ref('');
    const project = ref({});
    const gallery = ref([]);
    const loading = ref(true);
    const mobile = ref(Boolean);
    const cols = ref('');
    const colsXl = ref('');
    const carouselIndex = ref('');
    const DeskTopImgsDiv = ref('');
    
    //Functions
    const setCarousellIndex = (i) => {
        carouselIndex.value = i;
    }
    const getImgUrl = (i) => {
        return new URL(`${gallery.value[i]}`, import.meta.url).href
    }

    const getUrlQueryParams = async () => {    
    //router is async so we wait for it to be ready
    await router.isReady()
    //once its ready we can access the query params
    id.value = route.query.id
    size.value = route.query.size
    getProject()
    };

    const getProject = () => {
        project.value = ProjectsService.getProyect(id.value)

        switch (size.value) {
        case 'MovileImgs':
            cols.value = 2;
            colsXl.value = 1;
            gallery.value = [...project.value.MovileImgs];
            break;
        case 'DeskTopImgs':
            cols.value = 3;
            colsXl.value = 2;
            DeskTopImgsDiv.value = 'DeskTopImgsDiv';
            gallery.value = [...project.value.DeskTopImgs];
            break;
        }
        loading.value = false;
    }

    //Life cicle hooks
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
    font-weight: 300;
}
.DeskTopImgs{
    width: 1100px;
}
.MovileImgs{
    width: 300px;
}
.img-btn{
    width: 100%;
    height: auto;
    cursor: pointer;
}
.img-btn:hover{
    transform: scale(1.01);
}
#close-carousel{
    position: absolute;
    right: 1px;
    top:1px;
    z-index: 5;
}
#gallery-section{
    min-height: 100vh;
    max-height: fit-content;
    background-color: #f2f0f7;
}
@media (max-width: 500px) {
    .img-btn{
        width: 44vw;
        height: auto;
        cursor: pointer;
    }
    .DeskTopImgs{
        width: 90vw;
        max-height: 50vw;
    }
}
</style>