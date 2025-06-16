<template>
    <button @click="clickedHandler" 
    :class="`w-fit h-fit rounded-md px-3 py-1 font-semibold capitalize ${ props.variant === 'outlined' ? 'border-primary2 border-2 text-white' : 
    props.variant === 'filled' ? 'bg-primary1 text-white' : '' }`">{{ props.name }}</button>
</template>

<script setup lang="ts">

const props =  defineProps<{
    variant: string;
    name: string
}>()

const emits = defineEmits(["clicked-button"])

function clickedHandler(){
    emits("clicked-button", props.name)
}
</script>

<style scoped>

</style>