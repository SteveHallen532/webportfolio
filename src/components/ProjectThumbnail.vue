<template>
    
    <div id="img-div">
        <h2 v-if="mobile" class="text-center purple-text">{{ title }}</h2>
        <img :src=imgUrl alt="foto del proyecto">
        <h3 v-if="!mobile" class="text-center">{{ title }}</h3>
        <p class="text-center">{{ description }}</p>
        <v-btn class="dark" @click="navigate(url)">VER DETALLES</v-btn>
    </div>
</template>
  
<script setup>
import { defineProps, ref, onMounted} from 'vue'
    import { useRouter } from 'vue-router';

    defineProps({
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        imgUrl : {
            type: String,
            required: true,
        }
    });

    //Internal variables
    const router = useRouter();
    const mobile = ref(Boolean)
    
    //Functions
    const navigate = (url) => {
        router.push('/' + url);
    }
    //Hooks
    onMounted(
        () => {
        if(Number(screen.width) <= 500) {
                mobile.value = true;
            } else if(Number(screen.width) > 500) {
                mobile.value = false;
            }
        } 
    )

</script>
  
<style scoped>
img{
    position: absolute;
    visibility:visible;
    opacity:1;
    transition: all 0.5s;
}
h3, p{
    padding-top: 2vh;
}
p{
    visibility:hidden;
    opacity:0;
    transition:visibility 0.5s, opacity 0.5s;
    font-weight: 300;
}
.dark{
    display:block; 
    margin: 80px auto 15px auto;
}

@media (max-width: 500px) {
    #img-div{
        height: 35vh;
        width: 92vw;   
        color: #e4ddf0;
    }
    img{
        height: auto;
        width: 92vw;  
    }
    h3{
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
    }
    .dark{
        margin-top: 40%;
    }
}

@media (min-width: 500px) {
    img{
        margin-top: 15px;
        width: 350px;
        height: auto;
    }
    #img-div{
        padding: 5px;
        background-color: transparent;
        transition: all 0.5s;
        height: auto;
        width: 350px;   
    }
    #img-div:hover{
    background-image:  none;
    background-color:  #e4ddf0;
    }
    #img-div:hover > .dark{
        visibility:visible;
        opacity:1;
    }
    #img-div:hover > h3 {
        display:block;
        visibility:visible;
        opacity:1;
    }
    #img-div:hover > p{
        display:block;
        visibility:visible;
        opacity:1;
    }
    .dark, h3{
        visibility:hidden;
        opacity:0;
        transition:visibility 0.5s, opacity 0.5s;
    }
    #img-div:hover > img {
        visibility:hidden;
        opacity:0;
    }
}
</style>
