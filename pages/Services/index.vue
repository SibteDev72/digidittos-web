<template>
  <div id="containerLG" class="w-full h-fit md:h-[100vh] flex flex-col">
    <div
      class="bg-primary1 w-full flex flex-col gap-12 justify-center h-[100vh] md:h-[30%] px-8 lg:px-14 xl:px-[10rem] text-center"
    >
      <p class="text-3xl font-bold text-white">
        What are web development services?
      </p>
      <p class="text-xl text-white font-light">
        Web development encompasses a wide range of services, which include
        delivering websites or web apps, cybersecurity solutions, UX/UI design,
        eCommerce solutions, website architectures, QA testing, maintenance,
        consulting, and even a custom CMS.
      </p>
    </div>
    <div
      id="containerSM"
      class="bg-[#F2F5F7] px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center w-full h-max py-[4rem] md:py-0 md:h-[70%]"
    >
      <p class="text-dark text-3xl font-bold text-center">
        Achieve your business goals with web development solutions
      </p>
      <p class="text-xl font-light text-dark text-center">
        Our battle-tested developers specialize in a wide range of web
        development services. Here are some of the solutions that we can deliver
        for you.
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div
          v-for="item in webDevelopment"
          :key="item.id"
          :style="`margin-top: calc(12px * ${item.id})`"
          class="service-card w-full px-4 flex flex-col justify-center gap-2 h-[14rem] bg-white"
        >
          <p class="text-sm font-bold text-dark">{{ item.content }}</p>
          <p class="text-xs text-dark">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, nextTick } from "vue";
import { webDevelopment } from "~/constant/data";

const { $gsap } = useNuxtApp();

onMounted(async () => {
  await nextTick();

  const mm = $gsap.matchMedia();
  mm.add("(max-width: 767px)", () => buildTimeline("#containerSM"));
  mm.add("(min-width: 768px)", () => buildTimeline("#containerLG"));

  onBeforeUnmount(() => mm.revert());
});

function buildTimeline(containerSel: string) {
  const cards = $gsap.utils.toArray<HTMLElement>(".service-card");

  const tl = $gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: containerSel,
      start: "top top",
      end: "bottom+=20% bottom",
      scrub: 1,
      //   markers: true,
    },
  });

  cards.forEach((card, i) => {
    tl.to(card, { marginTop: 0, duration: 0.2 }, i * 0.15);
  });
}
</script>
