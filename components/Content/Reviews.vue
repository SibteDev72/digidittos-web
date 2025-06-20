<template>
  <div class="w-full h-[100vh] flex flex-row">
    <div
      class="w-[50%] bg-[#2EC5CE] flex flex-col gap-4 justify-center items-center"
    >
      <div class="w-fit">
        <p class="text-dark text-5xl font-bold">Happy Customers</p>
        <p class="text-dark text-xl font-light mt-4">
          Feedback from these happy customers helps us <br />
          in reaching the heights
        </p>
      </div>
    </div>
    <div
      class="w-[50%] relative flex flex-col gap-8 px-20 justify-between py-[15rem]"
    >
      <img
        class="absolute top-12 right-12 w-[6rem] h-auto"
        src="/icons/commas.png"
      />
      <div id="review" class="flex flex-col gap-6">
        <div class="flex flex-row items-center gap-4">
          <img
            class="w-[4rem] h-[4rem] rounded-full"
            :src="`/avatars/${currentReview.avatar}`"
          />
          <div class="flex flex-col">
            <p class="text-dark text-xl font-bold leading-6">
              {{ currentReview.name }}
            </p>
            <p class="text-dark text-lg font-light">{{ currentReview.role }}</p>
          </div>
        </div>
        <p class="text-dark text-lg">
          {{ currentReview.review }}
        </p>
      </div>
      <div class="flex flex-row gap-4 self-end">
        <img
          @click="navigation('prev')"
          class="w-7 h-auto cursor-pointer"
          src="/images/LeftArrow.png"
        />
        <img
          @click="navigation('next')"
          class="w-7 h-auto cursor-pointer"
          src="/images/RightArrow.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { feedback } from "~/constant/data";

const { $gsap } = useNuxtApp();
const currentReview = ref(feedback[0]);
const index = ref<number>(0);

const navigation = (direction: string) => {
  if (direction === "next") {
    index.value = index.value < feedback.length - 1 ? index.value + 1 : 0;
  } else if (direction === "prev") {
    index.value = index.value > 0 ? index.value - 1 : feedback.length - 1;
  }
  currentReview.value = feedback[index.value];

  $gsap.fromTo(
    "#review",
    { opacity: 0, x: `${direction === "next" ? 50 : -50}` },
    { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }
  );
};
</script>
