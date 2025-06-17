<template>
  <div class="w-full h-[100vh] flex flex-col gap-12 justify-between pb-24">
    <div
      class="w-full h-max py-12 px-12 bg-primary1 flex flex-col gap-10 justify-center items-center"
    >
      <p class="text-4xl text-white font-extrabold">Some Count that matters</p>
      <p class="text-xl text-white font-thin">
        Our achievement in the journey depicted in numbers
      </p>
      <div id="stats" class="flex flex-row">
        <div
          v-for="item in stats"
          :key="item.id"
          :class="`flex flex-col gap-2 items-center justify-center px-12 ${
            item.id != stats.length ? 'border-r-[1.5px] border-white' : ''
          }`"
        >
          <p ref="statRefs" class="text-white text-4xl font-bold">0</p>
          <p class="text-lg capitalize text-white font-thin">
            {{ item.title }}
          </p>
        </div>
      </div>
    </div>
    <div id="flow" class="flex flex-col gap-8 w-full px-20">
      <p class="text-dark text-3xl font-bold">The Process we follow</p>
      <div class="flex flex-row w-full justify-between">
        <div
          id="flowDetails"
          v-for="item in flow"
          :key="item.id"
          class="w-[15rem] flex flex-col gap-2"
        >
          <div class="flex flex-row items-center gap-2">
            <div class="w-4 h-4 rounded-full bg-[#2EC5CE]" />
            <p class="font-light text-[#2EC5CE] text-sm">
              ----------------------
            </p>
          </div>
          <p class="text-xl text-dark capitalize font-semibold">
            {{ item.title }}
          </p>
          <p class="text-lg text-dark font-light">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { stats, flow } from "~/constant/data";

const { $gsap, $scrollTrigger } = useNuxtApp();
const statRefs = ref<HTMLElement[]>([]);

onMounted(async () => {
  await nextTick();
  stats.forEach((item, index) => {
    const element = statRefs.value[index];
    const target = item.figures;
    $scrollTrigger.create({
      trigger: "#stats",
      start: "top+=10% bottom",
      markers: false,
      onEnter: () => {
        $gsap.fromTo(
          { val: 0 },
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: "power1.out",
            onUpdate: function () {
              element.innerText = Math.floor(this.targets()[0].val).toString();
            },
          }
        );
      },
    });
  });
  $scrollTrigger.create({
    trigger: "#flow",
    start: "top+=10% bottom",
    markers: false,
    onEnter: () => {
      $gsap.from("#flowDetails", {
        delay: 0.5,
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      });
    },
  });
});
</script>
