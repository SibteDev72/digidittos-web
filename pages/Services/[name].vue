<template>
  <div v-if="isServiceValid" class="w-full h-fit flex flex-col mt-[4rem]">
    <div id="container1LG" class="w-full h-fit md:min-h-[100vh] flex flex-col">
      <div
        class="bg-primary1 w-full flex flex-col gap-8 justify-center h-[100vh] md:h-[30vh] py-4 px-8 lg:px-14 xl:px-[10rem] text-center"
      >
        <p class="text-3xl font-bold text-white">
          {{ currentService.introduction.heading }}
        </p>
        <p class="text-xl text-white font-light">
          {{ currentService.introduction.subHeading }}
        </p>
      </div>
      <div
        id="container1SM"
        class="bg-body px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center w-full min-h-[70vh] py-[4rem] md:py-4"
      >
        <p class="text-dark text-3xl font-bold text-center">
          {{ currentService.introduction.keyPoints.heading }}
        </p>
        <p class="text-xl font-light text-dark text-center">
          {{ currentService.introduction.keyPoints.subHeading }}
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3"
        >
          <div
            v-for="item in currentService.introduction.keyPoints.points"
            :key="item.id"
            :style="`margin-top: calc(6px * ${item.id})`"
            class="service-card bg-white rounded-md shadow-md w-full px-6 flex flex-col gap-2 py-4 min-h-[15rem] md:h-[14rem]"
          >
            <p class="text-lg font-bold text-dark capitalize">
              {{ item.content }}
            </p>
            <p class="text-sm text-dark">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="container2LG" class="w-full h-fit md:min-h-[100vh] flex flex-col">
      <div
        class="w-full flex flex-col md:flex-row md:items-center bg-white gap-8 justify-center h-[100vh] md:h-[30vh] py-4 px-8 lg:px-14 xl:px-[10rem] text-center md:text-start"
      >
        <p class="text-3xl font-bold text-dark">
          {{ currentService.technologies.heading }}
        </p>
        <p class="text-xl text-dark font-light">
          {{ currentService.technologies.subHeading }}
        </p>
      </div>
      <div
        id="container2SM"
        class="bg-body px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center w-full min-h-[70vh] py-[4rem] md:py-4"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
        >
          <div
            v-for="item in currentService.technologies.points"
            :key="item.id"
            :style="`margin-top: calc(6px * ${item.id})`"
            class="service-card bg-white rounded-md shadow-md w-full px-4 flex flex-col gap-2 justify-start py-4 min-h-[15rem] md:h-[16rem]"
          >
            <p class="text-lg font-bold text-dark capitalize">
              {{ item.content }}
            </p>
            <p class="text-sm text-dark">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="container3LG" class="w-full h-fit md:min-h-[100vh] flex flex-col">
      <div
        class="w-full flex flex-col bg-primary1 gap-8 justify-center h-[100vh] md:h-[40vh] py-4 px-8 lg:px-14 xl:px-[10rem] text-center"
      >
        <p class="text-3xl font-bold text-white">
          {{ currentService.advantages.heading }}
        </p>
        <p class="text-xl text-white font-light">
          {{ currentService.advantages.subheading }}
        </p>
      </div>
      <div
        id="container3SM"
        class="bg-body px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-4 justify-center w-full min-h-[70vh] py-[4rem] md:py-4"
      >
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4"
        >
          <div
            v-for="item in currentService.advantages.points"
            :key="item.id"
            :style="`margin-top: calc(6px * ${item.id})`"
            class="service-card bg-white rounded-md shadow-md w-full px-6 flex flex-col gap-2 py-4 min-h-[15rem] md:h-[16rem]"
          >
            <p class="text-3xl md:text-4xl text-dark font-bold">
              0{{ item.id }}.
            </p>
            <p class="text-lg font-bold text-dark capitalize">
              {{ item.content }}
            </p>
            <p class="text-sm text-dark">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { services } from "~/constant/data";

const route = useRoute();
const { $gsap } = useNuxtApp();
const currentService = ref<any>({});

const serviceTitle = computed(() => route.params.name);
const isServiceValid = computed(() => {
  const s = currentService.value;
  return (
    s &&
    s.introduction &&
    s.introduction.keyPoints &&
    s.technologies &&
    s.advantages
  );
});

function buildTimeline(containerSel: string) {
  const container = document.querySelector(containerSel);
  if (!container) return;

  const cards = container.querySelectorAll<HTMLElement>(".service-card");
  if (!cards.length) return;

  const tl = $gsap.timeline({
    defaults: { ease: "none" },
    scrollTrigger: {
      trigger: container,
      start: "top-=15% top",
      end: "bottom+=20% bottom",
      scrub: 2,
      markers: false,
    },
  });

  cards.forEach((card, i) => {
    tl.to(card, { marginTop: 0, duration: 0.2 }, i * 0.15);
  });
}

onMounted(async () => {
  currentService.value =
    services.find((item) => item.title === serviceTitle.value) || null;

  await nextTick();

  if (!isServiceValid.value) return;

  const mm = $gsap.matchMedia();

  mm.add("(max-width: 767px)", () => {
    buildTimeline("#container1SM");
    buildTimeline("#container2SM");
    buildTimeline("#container3SM");
  });

  mm.add("(min-width: 768px)", () => {
    buildTimeline("#container1LG");
    buildTimeline("#container2LG");
    buildTimeline("#container3LG");
  });

  onBeforeUnmount(() => mm.revert());
});
</script>
