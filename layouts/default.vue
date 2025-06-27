<template>
  <div class="w-full flex flex-col overflow-x-hidden">
    <BarNavbar />
    <HeroSection />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
// const showNavFooter = computed(() => {
//   const path = route.path;
//   return path === "/success";
// });
</script>
