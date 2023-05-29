import { defineStore } from 'pinia';
import { ref } from 'vue';

const useDefaultStore = defineStore('DefaultId', () => {
  const aboutContent = ref('Implementiert von © Hosain Hossaini, HTL Wien West 2023');
  const homeContent = ref('This is a template for a Vue 3 project using the Vite build tool.');
  const counter = ref(0);

  const increaseCounter = () => {
    counter.value += 1;
  };

  return { aboutContent, homeContent, counter, increaseCounter };
});

export default useDefaultStore;
