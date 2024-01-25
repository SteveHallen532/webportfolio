// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({ index : 'home'}),
  persist: true,
  actions: {
    change(word) {
      this.index = word;
    },
    
  },
})
