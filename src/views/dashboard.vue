<template>
  <div>
    <dashboard heading="Popular Shows" category="rating"></dashboard>
    <dashboard heading="Comedy Shows" category="Comedy"></dashboard>
    <dashboard heading="Drama Shows" category="Drama"></dashboard>
    <dashboard heading="Action Shows" category="Action"></dashboard>
  </div>
</template>

<script>
import Dashboard from '@/components/dashboard.vue'

export default {
  name: 'Home',
  components: {
    Dashboard
  }
}
</script>
