<template>
  <div id="app">
    <app-header/>
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
