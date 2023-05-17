import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      logged: false
    }
  },
  actions:{
    logIn(){
        this.logged = true;
    },
    logOut(){
        this.logged = false;
    }
  }
})