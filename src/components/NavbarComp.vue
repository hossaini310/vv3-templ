<template>
  <div class="mt-8 mb-12">
    <nav class="text-2xl">
      <RouterLink
        to="/"
        class="rounded-2xl py-1 px-5 mr-5 hover:underline decoration-teal-30 active:bg-teal-50 focus:underline underline-offset-8 decoration-teal-300"
        >Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="rounded-2xl py-1 px-5 mr-5 hover:underline decoration-teal-30 active:bg-teal-50 focus:underline underline-offset-8 decoration-teal-300"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
