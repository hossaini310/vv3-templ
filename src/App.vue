<template>
  <div class="container mx-auto text-center">
    <NavbarComp></NavbarComp>
    <router-view></router-view>
  </div>
</template>
<script setup>
import NavbarComp from '@/components/NavbarComp.vue';
</script>
