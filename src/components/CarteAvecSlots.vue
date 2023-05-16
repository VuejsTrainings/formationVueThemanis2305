<template>
    <div class="carte">
        <div 
        v-if="fermable"
        @click="$emit('suppression', index)"
        id="delete"
        >x</div>
        <slot name="titre"></slot>    
        <hr v-if="$slots.titre"/>
        
        <slot name="default"></slot>    
        
        <hr  v-if="$slots.pied"/>
        <slot name="pied" nom="Test">
    
        </slot>    
    </div>
</template>
<script>
export default{
    props:{
        fermable: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
.carte{
    position:relative;
    width:30em;
    border:1px solid black;
    margin:1em 0;
    padding:10px;
}
#delete{
    position: absolute;
    right:1em;
    top:0;
    cursor:pointer;
}

</style>