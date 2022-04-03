<script setup>
import { RouterView } from 'vue-router';
import NavbarComp from '@/components/NavbarComp.vue';
</script>

<template>
  <div class="container mx-auto text-center">
    <NavbarComp></NavbarComp>
    <div class="d-flex justify-content-center"><RouterView /></div>
  </div>
</template>
