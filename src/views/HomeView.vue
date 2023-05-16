<template>
  <main>
    
    <div
      v-for="depense in depenses"
      :key="depense.id"
    >
     <RouterLink :to="{name:'depense', params:{ id: depense.id } }">
      <Carte>
        <template #titre>
          <h2>{{ depense.nature }}</h2>
        </template>
        <p><em>{{ depense.intitule }}</em></p>
      </Carte>
    </RouterLink>
    </div>
  <nav>
    <RouterLink id="prec" v-if="page != 1" :to="{name: 'home', query: {page: page - 1}}">Page précédente</RouterLink>
    <RouterLink id="suiv" v-if="avecSuivante" :to="{name: 'home', query: {page: page + 1}}">Page suivante</RouterLink>
  </nav>
  </main>
</template>

<script>
import { depenses } from '@/stores/depenses';
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
      depensesBase: depenses 
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