<template>
    <h1>{{ nature }}, le {{ date }}</h1>
    <nav>
        <RouterLink to="{name:'depense-details'}">Détails</RouterLink>
        <RouterLink to="rembourser">Nouveau remboursement</RouterLink>
        <RouterLink to="imprimer">Imprimer</RouterLink>
    </nav>
    <RouterView :depense="depense" />
</template>
<script>
import { depenses } from '@/stores/depenses'
import capitalize from 'lodash.capitalize'

export default {
    props: {
        id: {
            type: Number, 
            required: true
        }
    },
    data(){
        return {
            depenses
        }
    },
    computed: {
        depense(){
            return this.depenses.find( dep => dep.id === parseInt(this.id) )
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