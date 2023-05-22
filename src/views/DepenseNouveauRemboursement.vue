<template>
    <h3>Saisie d'un remboursement</h3>
    <form @submit.prevent="envoiRemboursement">
        <label for="date">Date</label>
        <input id="date" type="date" v-model="date" />
        
        <label for="montant">Montant</label>
        <input id="montant" type="number" v-model="montant" />
        
        <label for="origine">Origine</label>
        <select v-model="origine">
            <option value="ro">Régime obligatoire</option>
            <option value="mut">Mutuelle</option>
        </select>
        <button type="submit">OK</button>
    </form>
</template>
<script>
import { useDepensesStore } from '@/stores/depenses';

export default {
    props: {
        depense: {
            type: Object, 
            required: true
        }
    },
    data(){
        return {
            modifie: true,
            montant: null,
            origine: null,
            date: null,
        }
    },
    methods:{
        async envoiRemboursement(){
            const remboursement = {
                montant: this.montant,
                date: this.date,
                origine: this.origine,

            };
            await useDepensesStore().ajouteRemboursement(this.depense.id, remboursement);
            this.modifie = false;            
            this.$router.replace({name:'depense-details'})   
        }
    },
    beforeRouteLeave(){
        if(this.modifie && !confirm("Vos changements seront perdus.\nSûr.e?")){
            return false;
        }
    }
}
</script>
<style scoped>
</style>