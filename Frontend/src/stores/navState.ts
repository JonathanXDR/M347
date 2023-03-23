import { defineStore } from 'pinia'

export const useNavStore = defineStore('navState', {
  state: () => ({
    navOpen: true
  }),
  actions: {
    toggleNav() {
      console.log('toggleNav' + this.navOpen)
      this.navOpen = !this.navOpen
    }
  }
})
