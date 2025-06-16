<template>
  <div class="w-full flex flex-col">
    <BarNavbar />
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
// const showNavFooter = computed(() => {
//   const path = route.path;
//   return path === "/success";
// });
</script>
