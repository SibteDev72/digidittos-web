<template>
  <div class="w-full -mt-[4rem] flex flex-col">
    <div
      id="cover-container"
      style="background-image: url('/images/Cover_Services.png')"
      class="w-full h-[95vh] bg-cover px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center z-0"
    >
      <p class="text-animate text-white text-4xl capitalize font-bold">
        Digital acceleration services for business growth
      </p>
      <p class="text-animate text-white capitalize text-2xl font-light">
        Design. Development. Consulting. 5 years and counting.
      </p>
    </div>
    <div class="w-full bg-white flex flex-col z-50 -mt-[2rem] rounded-t-[2rem]">
      <div
        class="w-full shadow-lg sticky top-0 h-[calc(5vh+2rem)] flex flex-row justify-evenly items-center"
      >
        <NuxtLink
          :to="`/services/${item.name}`"
          v-for="item in menu[0].subMenu"
          class="text-animate text-dark text-sm lg:text-lg capitalize font-semibold"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="w-full h-[100vh]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menu } from "~/constant/data";

const { $gsap, $scrollTrigger } = useNuxtApp();
onMounted(() => {
  $gsap.fromTo(
    ".text-animate",
    { opacity: 0, x: -20 },
    {
      delay: 0.2,
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.5,
    }
  );
  $scrollTrigger.create({
    trigger: "#cover-container",
    start: "top top",
    end: "top+=40% start",
    pin: true,
    // markers: true,
  });
});
</script>
