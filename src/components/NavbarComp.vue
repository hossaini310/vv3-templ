<template>
  <div class="mt-8 mb-12">
    <nav class="text-xl">
      <RouterLink
        to="/"
        class="decoration-emerald-30 mr-5 rounded-xl py-1 px-5 decoration-emerald-300 underline-offset-8 hover:underline focus:underline active:bg-emerald-50"
        >Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="decoration-emerald-30 mr-5 rounded-xl py-1 px-5 decoration-emerald-300 underline-offset-8 hover:underline focus:underline active:bg-emerald-50"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
