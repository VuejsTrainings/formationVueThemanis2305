<template>
    <p>{{ depense.intitule }}</p>
    <p class="finances">
        <span class="depense" v-if="depense.depense"> {{ depense.depense.toFixed(2) }} € </span>
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
}

</style>