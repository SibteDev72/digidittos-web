<template>
  <div class="w-full h-[calc(100vh-4rem)] flex flex-row">
    <div
      class="w-full md:w-[50%] h-full bg-dark md:bg-white flex flex-col gap-8 md:gap-6 py-8 md:py-0 px-8 lg:px-14 xl:px-[10rem] justify-between md:justify-center"
    >
      <img
        id="image"
        class="flex md:hidden w-[100%]"
        src="/images/HeroSectionImage.png"
      />
      <div class="w-full h-[50%] md:h-fit flex flex-col gap-4">
        <p
          id="slideTitle"
          class="text-primary1 text-xl lg:text-3xl xl:text-5xl font-bold capitalize"
        >
          {{ currentSlide.title }}
        </p>
        <p
          id="slideDesc"
          class="text-white md:text-dark capitalize antialiased font-semibold"
        >
          {{ currentSlide.desc }}
        </p>
        <Button variant="filled" name="lets work together" />
      </div>
    </div>
    <div
      class="w-[50%] h-full bg-[#18191F] hidden md:flex flex-col justify-center"
    >
      <img
        id="image"
        class="w-[20rem] lg:w-[30rem] -ml-6 lg:-ml-12"
        src="/images/HeroSectionImage.png"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { slides } from "~/constant/data";
const { $gsap } = useNuxtApp();
const slideCount = ref(0);
const currentSlide = ref(slides[slideCount.value]);

onMounted(() => {
  $gsap.fromTo(
    "#image",
    { opacity: 0 },
    {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }
  );
  setInterval(() => {
    if (slideCount.value === slides.length - 1) slideCount.value = -1;
    currentSlide.value = slides[(slideCount.value += 1)];
    $gsap.fromTo(
      "#slideTitle",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power2.out",
      }
    );
    $gsap.fromTo(
      "#slideDesc",
      { opacity: 0, x: -20 },
      {
        delay: 0.5,
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, 5000);
});
</script>
