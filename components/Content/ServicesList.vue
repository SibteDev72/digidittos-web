<template>
  <div :id="props.data.hash" ref="containerRef" class="w-full h-fit bg-body">
    <div
      class="w-full h-max py-[2rem] bg-dark flex flex-col md:flex-row px-8 lg:px-14 xl:px-[10rem] gap-4 justify-center items-center"
    >
      <p
        class="w-full md:w-[50%] text-white text-xl lg:text-2xl capitalize font-bold"
      >
        {{ props.data.title }}
      </p>
      <p class="w-full md:w-[50%] text-white text-lg lg:text-xl capitalize">
        {{ props.data.desc }}
      </p>
    </div>
    <div
      class="w-full px-8 lg:px-14 xl:px-[10rem] py-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
    >
      <div
        v-for="item in props.data.points"
        :key="item.id"
        :style="`margin-top: calc(6px * ${item.id})`"
        class="service-card bg-white rounded-md shadow-md w-full px-4 flex flex-col gap-2 justify-center py-4 min-h-[15rem] md:h-[16rem]"
      >
        <p class="text-lg font-bold text-dark capitalize">{{ item.title }}</p>
        <p class="text-sm text-dark">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { List } from "~/types/Services";
const { $gsap } = useNuxtApp();

const props = defineProps<{
  data: List;
}>();
const containerRef = ref<HTMLElement | null>(null);

function buildTimeline(container: HTMLElement) {
  const cards = container.querySelectorAll<HTMLElement>(".service-card");
  if (!cards.length) return;

  const tl = $gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: container,
      start: "top-=20% top",
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
