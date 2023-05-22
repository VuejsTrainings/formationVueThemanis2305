<template>
    <p>{{ depense.intitule }}</p>
    <p class="finances">
        <span class="depense" v-if="depense.depense"> {{ depense.depense.toFixed(2) }} € </span>
        <span class="remboursement" v-for="remb in depense.remboursements" :key="remb.id"> {{ remb.origine.toUpperCase() }} {{ remb.montant.toFixed(2) }} € </span>
        <span class="rac" v-if="depense.depense"> {{ (depense.depense - depense.remboursements.reduce( (tot,cur) => tot += cur.montant , 0 )).toFixed(2) }} € </span>
    </p>
</template>
<script>
export default {
    props: {
        depense: {
            type: Object, 
            required: true
        }
    },
}
</script>
<style scoped>
.finances {
    margin-top: 0.5em;
}
.depense {
    color: #fff;
    background:#fa0;
    padding:0.4em;
    margin-right: 1em;
}
.remboursement {
    color: #fff;
    background:#3a0;
    padding:0.4em;
    margin-right: 1em;
}

.rac {
    color:#fff;
    background:#f44;
    padding:0.4em;
    margin-right: 1em;
    
}

</style>