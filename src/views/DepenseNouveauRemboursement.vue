<template>
    <h3>Saisie d'un remboursement</h3>
</template>
<script>
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