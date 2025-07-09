<template>
  <div class="w-full flex flex-col">
    <BarNavbar />
    <HeroSection v-if="showHeroSection" />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const showHeroSection = computed(() => {
  const path = route.path;
  return path !== "/services" && path !== "/about";
});
</script>
