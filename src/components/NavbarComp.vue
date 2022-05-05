<template>
  <div class="mt-8 mb-12">
    <nav class="text-xl">
      <RouterLink
        to="/"
        class="rounded-xl py-1 px-5 mr-5 hover:underline decoration-emerald-30 active:bg-emerald-50 focus:underline underline-offset-8 decoration-emerald-300"
        >Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="rounded-xl py-1 px-5 mr-5 hover:underline decoration-emerald-30 active:bg-emerald-50 focus:underline underline-offset-8 decoration-emerald-300"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
