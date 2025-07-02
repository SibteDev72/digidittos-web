<template>
  <div class="z-[2000] flex flex-col">
    <div class="w-full h-[4rem] flex flex-row">
      <div
        :class="`w-[50%] px-3 md:px-0 h-full ${
          subMenuStatus
            ? 'bg-[#18191F] text-white'
            : transparency
            ? 'bg-transparent text-white'
            : 'bg-[#18191F] lg:bg-white text-white lg:text-dark'
        } flex flex-row gap-5 items-center justify-center duration-200`"
      >
        <NuxtLink to="/">
          <div class="flex flex-row gap-3 items-end">
            <img class="w-auto h-7" src="/images/logo.png" />
            <img class="w-auto h-5 mr-5" src="/images/Asset 2@4x 1.png" />
          </div>
        </NuxtLink>
        <NuxtLink
          :to="item.link"
          @mouseenter="onEnter(item.title)"
          class="hidden lg:flex capitalize cursor-pointer font-semibold hover:border-b-2 hover:border-primary2"
          id="links"
          v-for="item in menu"
          :key="item.id"
          >{{ item.title }}</NuxtLink
        >
      </div>
      <div
        :class="`w-[50%] h-full flex flex-col justify-center items-end px-3 md:px-0 md:items-center ${
          transparency ? 'bg-transparent' : 'bg-[#18191F]'
        }`"
      >
        <div
          @click="handleMobileMenu"
          class="flex lg:hidden flex-col items-end gap-1 cursor-pointer z-[2000]"
        >
          <div
            :class="[
              'h-[2px] bg-white transition-all duration-300',
              mobileMenuStatus === true ? 'w-8' : 'w-8',
            ]"
          />
          <div
            :class="[
              'h-[2px] bg-white transition-all duration-300',
              mobileMenuStatus === true ? 'w-8' : 'w-6',
            ]"
          />
          <div
            :class="[
              'h-[2px] bg-white transition-all duration-300',
              mobileMenuStatus === true ? 'w-8' : 'w-4',
            ]"
          />
        </div>

        <Button
          class="hidden lg:flex"
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
      class="absolute p-8 left-0 top-[4rem] w-full h-52 z-50 bg-dark"
    >
      <div class="flex flex-row gap-8">
        <NuxtLink
          class="cursor-pointer capitalize text-white text-lg font-semibold hover:border-b-2 hover:border-primary1"
          v-for="item in currentSubMenu"
          :to="`/services/${item.name}`"
          :key="item.id"
          >{{ item.name }}</NuxtLink
        >
      </div>
    </div>
  </div>
  <!-- Mobile Navbar -->
  <div
    :class="`lg:hidden fixed top-0 right-0 h-screen w-[60vw] z-[1000] flex flex-col justify-start pl-4 pt-[10rem] gap-6 transition-transform duration-300 ease-in-out ${
      mobileMenuStatus ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <NuxtLink
      id="mobileMenu"
      v-for="item in menu"
      :key="item.id"
      :to="item.link"
      class="text-lg text-white capitalize"
    >
      <div class="flex flex-col gap-2">
        {{ item.title }}
        <div class="flex flex-col gap-2">
          <NuxtLink
            :to="`${item.link}/${subMenu.name}`"
            class="ml-2 text-sm text-white capitalize"
            v-for="subMenu in item.subMenu"
          >
            {{ subMenu.name }}
          </NuxtLink>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { menu } from "~/constant/data";

const { $gsap } = useNuxtApp();
const subMenuStatus = ref<boolean>(false);
const mobileMenuStatus = ref<boolean>(false);
const currentMenuTitle = ref<string>("");
const currentSubMenu = ref<any>([]);
const route = useRoute();

const transparency = computed(() => {
  const path = route.path;
  return path === "/services";
});

function handleButton(name: string) {
  alert(name);
}

function handleMobileMenu() {
  mobileMenuStatus.value = !mobileMenuStatus.value;
  mobileMenuStatus.value
    ? $gsap.fromTo(
        "#mobileMenu",
        { opacity: 0, y: -20 },
        {
          delay: 0.5,
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: "power2.out",
        }
      )
    : "";
}

function onEnter(title: string) {
  currentMenuTitle.value = title;
  subMenuStatus.value = true;
  const menuItem: any = menu.find((item) => item.title === title);
  currentSubMenu.value = menuItem?.subMenu || [];
  $gsap.fromTo(
    "#submenu",
    { opacity: 0, y: -20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.2,
      delay: 0.2,
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
