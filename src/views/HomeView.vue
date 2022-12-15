<template>
  <div class="mt-14">
    <WelcomeComp title="Hello There"></WelcomeComp>
    <div class="mt-8 text-xl">
      <span>{{ store.homeContent }}</span>
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <Icon icon="logos:vue" class="w-40 h-auto" />
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <label for="fontAwesome" class="text-xl mr-3 s">Font Awesome Icon: </label>
      <Icon name="fontAwesome" icon="fa6-solid:calculator" class="w-8 h-auto" />
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <label for="GoogleMaterialIcon" class="text-xl mr-3">Google Material Icon: </label>
      <Icon name="GoogleMaterialIcon" icon="ic:baseline-android" class="w-8 h-auto" />
    </div>
    <div class="flex flex-wrap justify-center mt-10">
      <label for="FluentUIIcon" class="text-xl mr-3">Fluent UI Icon: </label>
      <Icon name="FluentUIIcon" icon="fluent:alert-badge-24-filled" class="w-8 h-auto" />
    </div>
  </div>
</template>

<script setup>
import WelcomeComp from '@/components/WelcomeComp.vue';
import { useDefaultStore } from '@/stores/defaultStore.js';
import { Icon } from '@iconify/vue';

const store = useDefaultStore();
</script>
