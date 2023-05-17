<template>
    <div>
        Vous êtes {{ !logged ?'dé':''}}connecté.e
        <button v-if="!logged" @click="logIn()">Connexion</button>
        <button v-else @click="logOut()">Déconnexion</button>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
    computed:{
        ...mapState(useUserStore, ['logged'])
    },
    methods: {
        ...mapActions(useUserStore, ['logIn', 'logOut'])
    }
}
</script>