<template>
  <div>
    <Dashboard heading="Popular Shows" category="rating"></Dashboard>
    <Dashboard heading="Comedy Shows" category="Comedy"></Dashboard>
    <Dashboard heading="Drama Shows" category="Drama"></Dashboard>
    <Dashboard heading="Action Shows" category="Action"></Dashboard>
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
