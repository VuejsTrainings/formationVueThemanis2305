import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state() {
    return {
      count :0
    }
  },
  getters: {
    doubleCount(){
      return this.count * 2
    }
  }, 
  actions: {
    increment() {
      this.count++
    }
  }
})
