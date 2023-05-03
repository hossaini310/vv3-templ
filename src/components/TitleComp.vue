<template>
  <div>
    <h1 class="mt-10 text-3xl font-bold">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
