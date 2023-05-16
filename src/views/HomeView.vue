<template>
  <main>
    <Carte 
      v-for="depense in depenses" 
      :key="depense.id"
    >
      <template #titre>
        <h2>{{ depense.nature }}</h2>
      </template>
      <p><em>{{ depense.intitule }}</em></p>  
  </Carte>
  
  <nav>
    <RouterLink id="prec" v-if="page != 1" :to="{name: 'home', query: {page: page - 1}}">Page précédente</RouterLink>
    <RouterLink id="suiv" v-if="avecSuivante" :to="{name: 'home', query: {page: page + 1}}">Page suivante</RouterLink>
  </nav>
  </main>
</template>

<script>
import Carte from '@/components/CarteAvecSlots.vue'

export default {
  components: {
    Carte
  }, 
  props:{
    page: {
      type: Number,
      default: 1,
    }
  },
  data(){
    return {
      depensesBase: [
        {
          "id": 1,
          "intitule": "Consultation docteur Machin",
          "nature": "generaliste",
          "date": "2022-03-31",
          "depense": 25,
          "remboursements": [
            {
              "date": "2022-04-03",
              "origine": "ro",
              "montant": 18
            },
            {
              "date": "2022-04-07",
              "origine": "mut",
              "montant": 5.5
            }
          ]
        },
        {
          "id": 2,
          "intitule": "Achat médicaments",
          "nature": "pharmacie",
          "date": "2022-03-31",
          "depense": 7,
          "remboursements": [
            {
              "date": "2022-04-07",
              "origine": "mut",
              "montant": 7
            }
          ]
        },
        {
          "id": 3,
          "intitule": "Consultation Docteur Bidule",
          "nature": "dentiste",
          "date": "2022-03-15",
          "depense": 68,
          "remboursements": [
            {
              "date": "2022-03-20",
              "origine": "ro",
              "montant": 24
            },
            {
              "date": "2022-03-27",
              "origine": "mut",
              "montant": 38.5
            }
          ]
        },
        {
          "nature": "generaliste",
          "depense": 25,
          "date": "2022-04-29",
          "intitule": "Consultation rhume Arthur",
          "id": 4,
          "remboursements": []
        },
        {
          "id": 5,
          "intitule": "Semelles Alice",
          "nature": "podologue",
          "date": "2022-05-25",
          "depense": 180,
          "remboursements": [
            {
              "date": "2022-07-20",
              "origine": "ro",
              "montant": 60
            },
            {
              "date": "2022-07-22",
              "origine": "mut",
              "montant": 90
            }
          ]
        },
        {
          "nature": "generaliste",
          "depense": 25,
          "date": "2022-06-15",
          "intitule": "Consultation otite Alice",
          "id": 6,
          "remboursements": [
            {
              "date": "2022-06-20",
              "origine": "ro",
              "montant": 17
            },
            {
              "date": "2022-06-23",
              "origine": "mut",
              "montant": 7
            }
          ]
        }
      ]
    }
  },
  computed:{
    depenses(){
      const NB = 2;
      return this.depensesBase.slice((this.page - 1) * NB, this.page * NB)
    },
    avecSuivante(){
      const nbDepenses = this.depensesBase.length;
      const nbPages = Math.ceil(nbDepenses / 2); 
      return this.page < nbPages;
    }
  }
}
</script>
<style scoped>
  nav {
    display: flex;
    align-items: flex-start;
    
  }
  #prec{
    flex: 1;
    justify-items: left;
    text-align: left;
  }
  #suiv{
    flex: 1;
    justify-items: right;
    text-align: right;
  }
</style>