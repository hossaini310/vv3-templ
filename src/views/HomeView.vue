<template>
  <div class="mt-14">
    <div class="mt-8 text-xl">
      <span>{{ store.homeContent }}</span>
    </div>

    <TitleComp title="icones.js.org Icons"></TitleComp>

    <div class="mt-10 flex flex-wrap justify-center">
      <label for="fontAwesome" class="s mr-3 text-xl">Font Awesome Icon: </label>
      <Icon name="fontAwesome" icon="fa6-solid:calculator" class="h-auto w-8 text-gray-700" />
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <label for="GoogleMaterialIcon" class="mr-3 text-xl">Google Material Icon: </label>
      <Icon
        name="GoogleMaterialIcon"
        icon="ic:baseline-android"
        class="h-auto w-8 text-emerald-500"
      />
    </div>
    <div class="mt-10 flex flex-wrap justify-center">
      <label for="FluentUIIcon" class="mr-3 text-xl">Fluent UI Icon: </label>
      <Icon
        name="FluentUIIcon"
        icon="fluent:alert-badge-24-filled"
        class="h-auto w-8 text-[#f5e132]"
      />
    </div>

    <div class="mt-10">
      <button
        class="rounded-full bg-emerald-500 px-6 py-2 font-bold text-white active:bg-emerald-600"
        @click="increaseCounter()"
      >
        Counter: <span>{{ store.counter }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import TitleComp from '@/components/TitleComp.vue';
import useDefaultStore from '@/stores/defaultStore.js';
import { Icon } from '@iconify/vue';

const store = useDefaultStore();

const increaseCounter = () => store.increaseCounter();
</script>
