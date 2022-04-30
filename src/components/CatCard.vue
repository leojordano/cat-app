<template>
    
    <div class="m-1 max-w-auto rounded-2xl relative cursor-pointer" id="card">
        <span class="absolute rounded-2xl opacity-40 top-0 left-0 w-full h-full bg-slate-700"></span>
        <img class="w-fit rounded-2xl h-fit object-cover" :src="image.url" alt="">
        <h1 class="absolute text-white font-bold uppercase bottom-3 left-3">{{ name }}</h1>
    </div>

</template>

<script>
export default {
    props: {
        name: '',
        // breed: '',
        // age: 0,
        image: null,
    },

    mounted() {
        console.log(this.image)
    }
}
</script>

<style scoped>
    #card {
        max-width: 200px;
        max-height: 300px;
        overflow: hidden;
    }

    img {
        transition: all .5s ease-in-out;
        transition-delay: 0.1s;
        z-index: 1;
    }

    span {
        z-index: 10;
        transition: all .2s ease-in-out;
    }

    h1 {
        z-index: 11;
    }

    #card:hover img {
        transform: scale(1.05);
    }

    #card:hover span {
        opacity: 0;
    }
</style>