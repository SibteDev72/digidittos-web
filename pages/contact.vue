<template>
  <div
    class="w-full h-max pt-[15rem] pb-[4rem] bg-dark -mt-[4rem] px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-8"
  >
    <div class="flex flex-col justify-center gap-1">
      <p class="text-5xl text-white font-semibold capitalize">
        You need a patner.
      </p>
      <p class="text-5xl text-primary2 font-semibold capitalize">
        We're here to help.
      </p>
    </div>
    <p class="text-white text-xl capitalize w-full md:w-[30rem]">
      We would like to understand your needs. Before we start, please fill in
      the form.
    </p>
    <FormEstimate />
    <div ref="containerRef" class="w-full h-max flex flex-col gap-4 mt-12">
      <div
        class="flex flex-col md:flex-row justify-between md:items-center gap-4"
      >
        <p class="text-white text-xl md:text-3xl font-bold">
          What's in it for you?
        </p>
        <p class="text-white text-lg w-full md:w-[50%]">
          See how we can help you grow your business!
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
      >
        <div
          v-for="item in opportunities"
          :key="item.id"
          :style="`margin-top: calc(6px * ${item.id})`"
          class="service-card bg-secondary rounded-md shadow-md w-full px-4 flex flex-col gap-2 py-4 min-h-[12rem] md:h-[16rem] lg:h-[12rem]"
        >
          <p class="text-3xl md:text-4xl text-white font-bold">
            0{{ item.id }}.
          </p>
          <p class="text-lg font-bold text-white capitalize">
            {{ item.title }}
          </p>
          <p class="text-sm text-white">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { opportunities } from "~/constant/data";

const { $gsap } = useNuxtApp();
const containerRef = ref<HTMLElement | null>(null);

function buildTimeline(container: HTMLElement) {
  const cards = container.querySelectorAll<HTMLElement>(".service-card");
  if (!cards.length) return;

  const tl = $gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: container,
      start: "top-=10% top",
      end: "bottom bottom",
      scrub: 2,
      // markers: true,
    },
  });

  cards.forEach((card, i) => {
    tl.to(card, { marginTop: 0, opacity: 1 }, i * 0.15);
  });
}

onMounted(() => {
  if (containerRef.value) {
    buildTimeline(containerRef.value);
  }
});
</script>
