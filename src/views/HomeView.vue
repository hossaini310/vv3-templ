<template>
  <div class="mt-14">
    <WelcomeComp title="Hello There"></WelcomeComp>
    <div class="mt-8 text-xl">
      <span>{{ store.homeContent }}</span>
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <Icon icon="logos:vue" class="h-auto w-40" />
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <label for="fontAwesome" class="s mr-3 text-xl">Font Awesome Icon: </label>
      <Icon name="fontAwesome" icon="fa6-solid:calculator" class="h-auto w-8" />
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <label for="GoogleMaterialIcon" class="mr-3 text-xl">Google Material Icon: </label>
      <Icon name="GoogleMaterialIcon" icon="ic:baseline-android" class="h-auto w-8" />
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <label for="FluentUIIcon" class="mr-3 text-xl">Fluent UI Icon: </label>
      <Icon name="FluentUIIcon" icon="fluent:alert-badge-24-filled" class="h-auto w-8" />
    </div>
  </div>
</template>

<script setup>
import WelcomeComp from '@/components/WelcomeComp.vue';
import { useDefaultStore } from '@/stores/defaultStore.js';
import { Icon } from '@iconify/vue';

const store = useDefaultStore();
</script>
