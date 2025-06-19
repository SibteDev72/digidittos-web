<template>
  <div class="flex flex-col">
    <div class="w-full h-[4rem] flex flex-row">
      <div
        :class="`w-[50%] h-full ${
          subMenuStatus === true ? 'bg-[#18191F] text-white' : 'bg-[#FFFFFF]'
        } flex flex-row gap-5 items-center justify-center duration-200`"
      >
        <div class="flex flex-row gap-3 items-end">
          <img class="w-auto h-7" src="/images/logo.png" />
          <img class="w-auto h-5 mr-5" src="/images/Asset 2@4x 1.png" />
        </div>
        <NuxtLink
          @mouseenter="onEnter(item.title)"
          class="capitalize cursor-pointer font-semibold hover:border-b-2 hover:border-primary2"
          id="links"
          v-for="item in menu"
          :key="item.id"
          >{{ item.title }}</NuxtLink
        >
      </div>
      <div
        class="w-[50%] h-full bg-[#18191F] flex flex-col justify-center items-center"
      >
        <Button
          variant="outlined"
          name="get quote"
          @clicked-button="handleButton"
        />
      </div>
    </div>
    <div
      @mouseleave="subMenuStatus = false"
      v-if="subMenuStatus"
      id="submenu"
      class="absolute left-0 top-[4rem] w-full h-52 z-50 bg-dark"
    >
      <p class="text-white text-xl m-8 capitalize">{{ currentMenuTitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menu } from "~/constant/data";

const { $gsap } = useNuxtApp();
const subMenuStatus = ref<boolean>(false);
const currentMenuTitle = ref<string>("");

function handleButton(name: string) {
  alert(name);
}

function onEnter(title: string) {
  currentMenuTitle.value = title;
  subMenuStatus.value = true;
  $gsap.fromTo(
    "#submenu",
    { opacity: 0, y: -20 },
    {
      delay: 0.2,
      opacity: 1,
      y: 0,
      duration: 0.2,
      ease: "power2.out",
    }
  );
}

onMounted(() => {
  $gsap.fromTo(
    "#links",
    { opacity: 0, y: -20 },
    {
      delay: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: "power2.out",
    }
  );
});
</script>
