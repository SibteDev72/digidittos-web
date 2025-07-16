<template>
  <div
    id="services"
    ref="containerRef"
    class="w-full min-h-[100vh] md:h-[110vh] lg:h-[114vh] xl:h-[120vh] flex flex-col gap-24 items-center py-20 md:py-24"
  >
    <div
      class="w-full xl:w-[40%] px-8 lg:px-14 xl:px-2 items-center flex flex-col gap-4"
    >
      <p
        class="capitalize text-center text-dark font-bold text-3xl lg:text-5xl"
      >
        idealization and evaluation services
      </p>
      <p class="text-dark text-xl lg:text-2xl font-light text-center">
        Find a way forward for your business with our services focused on idea
        evaluation. Learn how to accelerate the first steps of the innovation
        process.
      </p>
    </div>
    <div
      class="w-full overflow-x-scroll md:overflow-x-hidden px-8 lg:px-14 xl:px-[10rem] flex flex-row gap-6 self-start"
    >
      <div
        id="service"
        v-for="item in serviceList"
        :key="item.id"
        class="border-[1.5px] min-w-[250px] md:min-w-[340px] lg:min-w-[380px] xl:min-w-[460px] min-h-[16rem] border-primary2 flex flex-col gap-3 py-8 px-4 items-center rounded-md"
      >
        <img class="w-8 h-auto" :src="`/icons/${item.icon}`" />
        <p
          class="text-xl lg:text-2xl font-bold text-dark capitalize text-center"
        >
          {{ item.title }}
        </p>
        <p class="text-sm font-light text-dark text-center">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { serviceList } from "~/constant/data";

const { $gsap } = useNuxtApp();
const containerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (window.innerWidth >= 768) {
    $gsap.to("#service", {
      x: -1100,
      scrollTrigger: {
        trigger: containerRef.value,
        pin: true,
        scrub: 2,
        start: "top top",
        end: "bottom bottom",
        markers: false,
      },
    });
  }
});
</script>
