<template>
  <div class="w-full flex flex-col mt-[4rem]">
    <Header
      title="contact us"
      heading="Let’s Build Something Great Together"
      sub-heading="Have a project in mind or just want to connect? We’re here to turn your ideas into impactful digital experiences."
    />

    <div
      class="w-full h-max py-[4rem] bg-dark px-8 lg:px-14 xl:px-[10rem] flex flex-col gap-[6rem]"
    >
      <div id="estimateYourProject" class="w-full flex flex-col gap-4">
        <div class="flex flex-col justify-center gap-1">
          <p class="text-5xl text-white font-semibold capitalize">
            You need a patner.
          </p>
          <p class="text-5xl text-primary2 font-semibold capitalize">
            We're here to help.
          </p>
        </div>
        <p class="text-white text-xl capitalize w-full md:w-[30rem]">
          We would like to understand your needs. Before we start, please fill
          in the form.
        </p>
      </div>
      <FormEstimate />
      <div
        id="whyUS"
        ref="containerRef"
        class="w-full h-max flex flex-col gap-12 mt-12"
      >
        <div
          class="flex flex-col md:flex-row justify-between md:items-center gap-4"
        >
          <p class="text-white text-2xl font-bold">What's in it for you?</p>
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
      <div id="ourPolishOffice" class="w-full flex flex-col gap-12">
        <p class="text-white text-2xl font-bold">Our Polish Office</p>
        <div
          class="w-full h-full flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div class="flex flex-col gap-12">
            <div class="flex flex-col gap-6">
              <div class="w-full flex flex-row gap-4">
                <img src="/public/icons/location.png" class="w-auto h-6 mt-2" />
                <div class="flex flex-col">
                  <p class="text-xl font-bold text-white">Punjab, Pakistan</p>
                  <p class="text-lg font-normal text-white">
                    Garden Town, Lahore
                  </p>
                </div>
              </div>
              <div class="w-full flex flex-row gap-4">
                <img src="/public/icons/phone.png" class="w-auto h-6 mt-1" />
                <p class="text-lg font-medium text-white">+92 303 7036456</p>
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <p class="text-lg lg:text-xl font-bold text-white">Follow Us</p>
              <div class="flex flex-row gap-4">
                <NuxtLink
                  v-for="item in socialHandle"
                  :key="item.id"
                  :to="`${item.link}`"
                >
                  <img :src="`/icons/${item.icon}`" class="w-auto h-[2.5rem]" />
                </NuxtLink>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13620.290150810023!2d74.30713655!3d31.503845749999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905a5ed123fef%3A0x7e26f064803038a6!2sGarden%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721123456789!5m2!1sen!2s"
            class="w-full md:w-[50vw] h-[50vh]"
            style="border: 0"
            allow="fullscreen"
            :allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { opportunities, socialHandle } from "~/constant/data";

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
