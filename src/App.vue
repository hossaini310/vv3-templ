<template>
  <div class="container mx-auto text-center">
    <NavbarComp></NavbarComp>
    <RouterView />
  </div>
</template>
<script setup>
import NavbarComp from '@/components/NavbarComp.vue';
import { RouterView } from 'vue-router';
</script>
