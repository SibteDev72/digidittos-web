<template>
  <div
    ref="containerRef"
    class="w-full h-max bg-body flex flex-col gap-[5rem] py-12 px-8 lg:px-14 xl:px-[10rem]"
  >
    <div
      class="flex flex-col md:flex-row justify-between md:items-center gap-4"
    >
      <p class="text-dark text-xl md:text-3xl font-bold">Our Core Values</p>
      <p class="text-dark text-lg w-full md:w-[50%]">
        Our values guide every interaction—with clients, within our team, and
        throughout the products we build. They’ve grown with us and continue to
        shape our culture of collaboration, innovation, and trust.
      </p>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
    >
      <div
        v-for="item in coreValues"
        :key="item.id"
        :style="`margin-top: calc(6px * ${item.id})`"
        class="service-card bg-white rounded-md shadow-md w-full px-4 flex flex-col gap-2 py-4 h-[25rem] sm:h-[22rem] md:h-[16rem]"
      >
        <p class="text-3xl md:text-4xl text-dark font-bold">0{{ item.id }}.</p>
        <p class="text-lg font-bold text-dark capitalize">
          {{ item.title }}
        </p>
        <p class="text-sm text-dark">{{ item.desc }}</p>
      </div>
    </div>
    <div class="flex flex-col gap-[4rem]">
      <div
        class="flex flex-col md:flex-row justify-between md:items-center gap-4"
      >
        <p class="text-dark text-xl md:text-3xl font-bold">
          People are the key to success
        </p>
        <p class="text-dark text-lg w-full md:w-[50%]">
          We feel proud every time when someone new is joining
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
      >
        <div
          v-for="item in people"
          class="w-full h-full flex flex-row items-center gap-2"
        >
          <img
            class="w-[7rem] h-[7rem] rounded-full"
            :src="`/avatars/${item.avatar}`"
          />
          <div class="flex flex-col gap-0">
            <p class="text-dark font-bold text-sm">{{ item.name }}</p>
            <p class="text-dark font-medium text-sm">{{ item.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { coreValues, people } from "~/constant/data";

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
      markers: false,
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
