<template>
    <v-container v-if="!loading">
        <v-row>
            <v-col v-for="(item, index) in projects" :key="index" cols="12" md="4" xl="3" class="mb-10 mb-lg-0">
                <ProjectThumbnail :url="'description?id=' + item.id" :title="item.Title" :description="item.Subtitle" :imgUrl="getImgUrl(index)" />
            </v-col>
            <v-col v-for="(item, index) in projects" :key="index" cols="12" md="4" xl="3" class="mb-10">
                <ProjectThumbnail :url="'description?id=' + item.id" :title="item.Title" :description="item.Subtitle" :imgUrl="getImgUrl(index)" />
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
    import { ref, onMounted } from 'vue'
    import ProjectThumbnail from './ProjectThumbnail .vue'
    import { ProjectsService } from '../services/ProjectsService.js'

    //Consts
    const projects = ref([{}])
    const loading = ref(true)

    //Hooks
    onMounted(
        () => {
            getProjects();
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
</script>
  
<style scoped>

</style>
