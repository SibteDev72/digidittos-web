<template>
  <div
    id="container"
    class="w-full h-[130vh] flex flex-col gap-12 items-center py-24"
  >
    <div class="px-[30rem] flex flex-col gap-4">
      <p class="capitalize text-center text-dark font-bold text-5xl">
        idealization and evaluation services
      </p>
      <p class="text-dark text-2xl font-light text-center">
        Find a way forward for your business with our services focused on idea
        evaluation. Learn how to accelerate the first steps of the innovation
        process.
      </p>
    </div>
    <div class="w-full px-8 flex flex-row gap-6 self-start">
      <div
        id="service"
        v-for="item in serviceList"
        :key="item.id"
        class="border-[1.5px] min-w-[460px] min-h-[15rem] border-primary2 flex flex-col gap-3 px-4 justify-center items-center rounded-md"
      >
        <img class="w-8 h-auto" :src="`/icons/${item.icon}`" />
        <p class="text-2xl font-bold text-dark capitalize">{{ item.title }}</p>
        <p class="text-sm font-light text-dark text-center">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp();
import { serviceList } from "~/constant/data";

onMounted(() => {
  $gsap.to("#service", {
    x: -930,
    scrollTrigger: {
      trigger: "#container",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
      markers: false,
    },
  });
});
</script>

<style scoped></style>
