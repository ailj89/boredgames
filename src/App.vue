<template>
 <h2>Hello World</h2>
 <my-view element="div"> 
  Hello from Vue

 </my-view>
</template>

<script setup lang="ts">
import MyView from '@/components/MyView.vue'
</script>

<style scoped>
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
