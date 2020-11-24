<template>
  <div>
    <dashboard heading="Popular Shows" category="rating"></dashboard>
    <div v-for="genre in getAllGenres" :key="genre">
        <dashboard :heading="genre+' Shows'" :category=genre></dashboard>
    </div>
    
  </div>
</template>

<script>
import Dashboard from '@/components/dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard
  },
  computed:{
    getAllGenres(){
      return this.$store.getters.getAllGenres;
    }
  }
}
</script>
