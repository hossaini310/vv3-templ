<template>
  <div
    class="mx-3 mb-12 mt-6 flex grid-cols-3 justify-center rounded-full bg-gray-200 px-10 py-6 sm:grid"
  >
    <RouterLink class="flex items-center" to="/">
      <Icon icon="logos:vue" class="mr-2 h-auto w-12" />
      <span class="hidden font-extrabold sm:block sm:text-xl">Vue Template</span>
    </RouterLink>
    <nav class="flex items-center justify-center text-xl">
      <RouterLink
        :class="route.path == '/' ? 'font-extrabold text-emerald-500' : ''"
        to="/"
        class="decoration-emerald-30 focus: mr-5 rounded-xl px-5 decoration-emerald-300 underline-offset-8"
        >Home
      </RouterLink>
      <RouterLink
        :class="route.path == '/about' ? 'font-extrabold text-emerald-500' : ''"
        to="/about"
        class="decoration-emerald-30 mr-5 rounded-xl px-5 decoration-emerald-300 underline-offset-8"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
</script>
