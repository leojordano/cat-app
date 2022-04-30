<script>
  import CatCard from './components/CatCard.vue';

  const API_URL = 'https://api.thecatapi.com/v1/breeds'
  const API_KEY = 'a4db134d-684c-40bd-8e51-8cd106b27c2d'

  export default {
    components: {
      CatCard
    },

    data() {
      return {
        msg: 'Hello World!',
        cats: [],
      }
    },

    created() {
      this.fetchCats()
    },

    methods: {
      async fetchCats() {
        try {
          const res = await fetch(API_URL, { headers: { 'x-api-key': API_KEY } })
          const data = await res.json()

          this.cats = data
        } catch (error) {
          console.log(error)
        }
      }

    },

    watch: {
      cats(newCats) {
        console.log(newCats)
      }
    }

  }
</script>

<template>
  <div 
    v-masonry="containerId" 
    transition-duration="0.3s" 
    item-selector=".item" 
    class="flex justify-center items-center container-full min-h-screen mx-auto px-20 py-20 h-full w-full bg-zinc-700"
  >

      <CatCard v-masonry-tile class="item" v-for="( cat, index ) in cats" :key="index" :image="cat.image" :name="cat.name" />

  </div>
</template>

<style>

</style>
