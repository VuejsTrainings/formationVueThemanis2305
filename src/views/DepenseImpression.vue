<template>
    <p>Impression lancée...</p>
    <progress :max="timeout" :value="actualTime">{{ percent }}%</progress>
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
            timeout: 2500,
            actualTime: 0,
            interval: 100
        }
    },
    computed:{
        percent(){
            return this.actualTime/this.timeout;
        }
    },
    mounted(){
        setTimeout(() => {
            // Redirection vers une page 
            // avec ajout à l'historique de navigation
            this.$router.push({name: 'depense-details'})

            // AUtres méthodes de $router:
            // - replace (pour naviguer vers une autre page, mais sans ajout de la page actuelle à l'historique de navigation)
            // - go (pour naviguer dans l'historique (en avant si paramètre transmis > 0, en arrière si argument transmis < 0))
        }, 2500)
        setInterval(() => {
            this.actualTime += this.interval;
        },this.interval)
    }
}
</script>
<style scoped>

</style>