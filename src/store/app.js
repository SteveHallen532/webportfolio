// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    index: 'home',
    lang: 'en',
  }),
  persist: true,
  actions: {
    change(word) {
      this.index = word;
    },
    setLanguage(lang) {
      this.lang = lang;
    }
  },
});