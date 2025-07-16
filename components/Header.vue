<template>
  <div
    style="background-image: url('/images/Cover_About.png')"
    class="w-full py min-h-[30vh] bg-cover py-[2rem] px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center"
  >
    <p class="text-animate text-white text-2xl capitalize font-bold">
      {{ title }}
    </p>
    <p class="text-animate text-white text-xl capitalize font-bold">
      {{ heading }}
    </p>
    <p class="text-animate text-white capitalize text-lg font-light">
      {{ subHeading }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  heading: string;
  subHeading: string;
}>();

const { $gsap } = useNuxtApp();
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
});
</script>
