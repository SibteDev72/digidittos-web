<template>
  <div
    :class="`z-[4000] fixed top-[5rem] center w-max h-max flex flex-row gap-4 p-5 rounded-md ${
      valid ? 'bg-success' : 'bg-error'
    }`"
  >
    <img
      :src="`/icons/${valid ? 'verified.png' : 'error.png'}`"
      class="w-auto h-6"
    />
    <p class="text-sm text-white font-semibold">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ message: string; valid: boolean }>();
const emit = defineEmits(["close"]);

onMounted(() => {
  setTimeout(() => {
    emit("close");
  }, 3000);
});
</script>
