<script setup>
import NavbarComp from '@/components/NavbarComp.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container mx-auto text-center">
    <NavbarComp></NavbarComp>
    <div class="d-flex justify-content-center"><RouterView /></div>
  </div>
</template>
