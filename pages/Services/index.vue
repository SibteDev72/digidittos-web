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
    <div class="w-full flex flex-col z-10 -mt-[2rem]">
      <div
        class="w-full overflow-x-scroll z-20 bg-white shadow-lg sticky top-0 h-[calc(5vh+2rem)] flex flex-row gap-12 px-8 lg:px-14 xl:px-[10rem] items-center md:justify-center"
      >
        <NuxtLink
          :to="{ path: '/services', hash: item.hash }"
          v-for="item in serviceNav"
          class="min-w-max text-animate mt-4 text-dark text-lg capitalize font-semibold"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <ContentIdeation />
      <ContentServicesList
        v-for="item in servicesList"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { serviceNav, servicesList } from "~/constant/data";

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
    end: "top+=30% start",
    pin: true,
    // markers: true,
  });
});
</script>
