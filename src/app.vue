<template>
  <div id="app">
    <template v-if="!$route.meta.hideNavigation">
      <AppHeader/>
    </template>    
    <router-view/>
  </div>
</template>
<script>
import AppHeader from '@/components/header.vue'
export default {
  name: 'Home',
  components: {
    AppHeader
  }
}
</script>
