import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('DefaultId', {
  state: () => {
    return {
      aboutContent: 'Something about the app. (From Pinia-Store)',
      homeContent:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sapiente? (From Pinia-Store)',
    };
  },
  actions: {},
  getters: {},
});
