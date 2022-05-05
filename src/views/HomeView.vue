<template>
  <div class="mt-14">
    <WelcomeComp title="Hello There"></WelcomeComp>
    <div class="mt-8 text-xl">
      <span>{{store.homeContent}}</span>
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <img src="@/assets/icons/logo.svg" class="w-40 h-auto" alt="" />
    </div>
  </div>
</template>

<script setup>
import WelcomeComp from '@/components/WelcomeComp.vue';
import { useDefaultStore } from '@/stores/defaultStore.js';
const store = useDefaultStore();
</script>
