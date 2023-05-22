<template>
    <div v-if="depense">
        <h1>{{ nature }}, le {{ date }}</h1>
        <nav>
            <RouterLink :to="{name:'depense-details'}">Détails</RouterLink>
            <RouterLink :to="{name:'depense-nouveau-remboursement'}">Nouveau remboursement</RouterLink>
            <RouterLink :to="{name: 'depense-imprimer'}">Imprimer</RouterLink>
        </nav>
        <RouterView :depense="depense" />
    </div>
</template>
<script>
import { useDepensesStore } from '@/stores/depenses'
import capitalize from 'lodash.capitalize'
import { mapState } from 'pinia';

export default {
    props: {
        id: {
            type: Number, 
            required: true
        }
    },
    computed: {
        depense(){
           const getter =  useDepensesStore().depense;
           console.log(getter);
           return getter(this.id)
        },
        date(){
            return new Date(this.depense.date).toLocaleDateString();
        },
        nature(){
            return capitalize(this.depense.nature);
        }
    }
}
</script>
<style scoped>
nav a:not(:last-child)::after{
    content: ' | ';
}
</style>