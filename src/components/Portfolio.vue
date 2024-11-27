<template>
    <v-container v-if="!loading">
        <v-row>
            <v-col v-for="(item, index) in projects" :key="index" cols="12" sm="6" lg="4" xl="3" class="mb-10 mb-lg-1 d-flex justify-center">
                <ProjectThumbnail :url="'description?id=' + item.id" :title="item.Title" :description="item.Subtitle" :imgUrl="getImgUrl(index)" />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue'
    import ProjectThumbnail from './ProjectThumbnail.vue'
    import { ProjectsService } from '../services/ProjectsService.js'

    //Consts
    const projects = ref([{}])
    const loading = ref(true)

    //Hooks
    onMounted(
        () => {
            getProjects();
            scrollToTop()
        } 
    )

    //Functions
    const getImgUrl = (i) => {
        return new URL(`${projects.value[i].CarouselImgs[0]}`, import.meta.url).href
    }
    const getProjects = () => {
        projects.value = ProjectsService.getProyectsList();
        loading.value = false
    } 
    const scrollToTop = () => {
        window.scrollTo(0,0);
    }
</script>
  
<style scoped>

</style>
