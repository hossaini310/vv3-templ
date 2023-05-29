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
        to="/"
        class="decoration-emerald-30 mr-5 rounded-xl px-5 decoration-emerald-300 underline-offset-8 focus:font-extrabold focus:text-emerald-500"
        >Home
      </RouterLink>
      <RouterLink
        to="/about"
        class="decoration-emerald-30 mr-5 rounded-xl px-5 decoration-emerald-300 underline-offset-8 focus:font-extrabold focus:text-emerald-500"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';
</script>
