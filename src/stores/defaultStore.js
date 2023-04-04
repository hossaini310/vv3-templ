import { defineStore } from 'pinia';

const useDefaultStore = defineStore('DefaultId', {
  state: () => ({
    aboutContent: 'Something about the app. (From Pinia-Store)',
    homeContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sapiente? (From Pinia-Store)',
  }),
  actions: {},
  getters: {},
});

export default useDefaultStore;
