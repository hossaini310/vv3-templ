<template>
  <div class="text-xl">
    <p>Pssst. This is the <span class="font-bold">About</span> view</p>
    <p class="text-xl">{{ store.aboutContent }}</p>
  </div>
</template>
<script setup>
import useDefaultStore from '@/stores/defaultStore.js';
const store = useDefaultStore();
</script>
