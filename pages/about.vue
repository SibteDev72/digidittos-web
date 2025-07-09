<template>
  <div class="w-full -mt-[4rem] flex flex-col">
    <div
      id="cover-container"
      style="background-image: url('/images/Cover_About.png')"
      class="w-full min-h-[100vh] bg-cover px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center z-0"
    >
      <p class="text-animate text-white text-4xl capitalize font-bold">
        Building Digital Solutions with Purpose
      </p>
      <p class="text-animate text-white capitalize text-2xl font-light">
        From vision to execution, we turn bold ideas into powerful solutions
        that drive growth and innovation.
      </p>
    </div>
    <div class="w-full h-max flex flex-col z-10">
      <ContentAbout />
      <ContentCoreValues />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentAbout, ContentCoreValues } from "#components";

const { $gsap, $scrollTrigger } = useNuxtApp();
onMounted(() => {
  $scrollTrigger.create({
    trigger: "#cover-container",
    start: "top top",
    end: "top+=30% start",
    pin: true,
    markers: false,
  });
});
</script>
