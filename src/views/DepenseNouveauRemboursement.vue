<template>
    <h3>Saisie d'un remboursement</h3>
    <VeeForm @submit="envoiRemboursement">
        <label for="date">Date</label>
        <Field name="date" type="date" :rules="validateDate" />
        <ErrorMessage name="date"></ErrorMessage> 
        <br />
        
        <label for="montant">Montant</label>
        <Field name="montant" type="number" :rules="validateMontant" />
        <ErrorMessage name="montant"></ErrorMessage> 
        <br />
        
        <label for="origine">Origine</label>
        <Field as="select" name="origine">
            <option value="ro" selected>Régime obligatoire</option>
            <option value="mut">Mutuelle</option>
        </Field>
        <br />
        <button type="submit">OK</button>
    </VeeForm>
</template>
<script>
import { useDepensesStore } from '@/stores/depenses';
import { Form, Field, ErrorMessage  } from 'vee-validate';

export default {
    components:{
        Field,        
        VeeForm: Form,
        ErrorMessage 
    },
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
        async envoiRemboursement(values){
            const remboursement = {
                montant: parseFloat(values.montant),
                date: values.date,
                origine: values.origine,

            };
            await useDepensesStore().ajouteRemboursement(this.depense.id, remboursement);
            this.modifie = false;            
            this.$router.replace({name:'depense-details'})   
        },
        validateMontant(value){
            if( !value ) 
                return 'Le montant doit être saisi'
            if(value <= 0)
                return 'Le montant doit être strictement positif'
            if(value > this.depense.depense - this.depense.remboursements.reduce( (acc, cur) => acc += cur.montant, 0 ) )
                return 'Le total des remboursements ne doit pas dépasser la dépense'
            
            return true
        },
        validateDate(value){
            if( !value ) 
                return 'Date obligatoire'
            
            return true
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