<template>
  <div class="text-xl">
    <p class="text-xl">{{ store.aboutContent }}</p>
  </div>
</template>
<script setup>
import useDefaultStore from '@/stores/defaultStore.js';
const store = useDefaultStore();
</script>
