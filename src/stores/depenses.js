import { defineStore } from 'pinia'
import DepensesService from '../services/depenses';

export const useDepensesStore = defineStore('depenses', {
  state() {
    return {
      items: null
    }
  },
  getters: {
    depense() {
      return (id) => this.items.find( dep => dep.id == id )
    }
  },
  actions:{
    async fetchItems(){
      const httpResponse = await DepensesService.getAll()
      this.items = httpResponse.data;
    },
    async ajouteRemboursement(depenseId, remboursement){
      const httpResponse = await DepensesService.addRemboursement(depenseId,remboursement)
      const remboursementAjoute = httpResponse.data;
      const depense = this.depenses.find( dep => dep.id == depenseId);
      depense.remboursements.push(remboursementAjoute);
    }
  }
})