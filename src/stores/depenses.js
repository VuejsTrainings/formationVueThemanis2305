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
      // Les 2 lignes suivantes devraient être réactivées si on utlisait une vraie API 
      //const httpResponse = await DepensesService.addRemboursement(depenseId,remboursement)
      //const remboursementAjoute = httpResponse.data;
      // La ligne suivante devrait elle être désactivée. Elle simule le retour de l'objet ajouté au niveau de l'API
      const remboursementAjoute = remboursement;
      // A partir d'ici, le traitement est inchangé
      const depense = this.items.find( dep => dep.id == depenseId );
      depense.remboursements.push(remboursementAjoute);
    }
  }
})