<template>
  <button
    @click="clickedHandler"
    :class="`w-fit h-fit rounded-md px-3 py-2 font-semibold capitalize ${
      props.variant === 'outlined'
        ? 'border-primary2 text-primary2 border-2 hover:bg-primary2 hover:text-white'
        : props.variant === 'filled'
        ? 'bg-primary2 text-white hover:bg-primary1'
        : ''
    }`"
  >
    {{ props.name }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant: string;
  name: string;
}>();

const emits = defineEmits(["clicked-button"]);

function clickedHandler() {
  emits("clicked-button", props.name);
}
</script>

<style scoped></style>
