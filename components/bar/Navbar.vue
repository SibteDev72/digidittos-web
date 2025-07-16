<template>
  <div
    :class="`z-[2000] fixed top-0 bg-white left-0 shadow-md w-full h-[4rem] px-8 lg:px-14 xl:px-[10rem] flex flex-row gap-5 items-center justify-between duration-200 `"
  >
    <div class="flex flex-row gap-[4rem]">
      <NuxtLink to="/">
        <div class="flex flex-row gap-3 items-end">
          <img class="w-auto h-7" src="/images/logo.png" />
          <img class="w-auto h-5 mr-5" src="/images/Asset 2@4x 1.png" />
        </div>
      </NuxtLink>
      <div class="hidden lg:flex flex-row gap-6">
        <NuxtLink
          :to="item.link"
          @mouseenter="onEnter(item.title)"
          class="capitalize cursor-pointer font-semibold hover:border-b-2 hover:border-primary2 hover:text-primary1"
          id="links"
          v-for="item in menu"
          :key="item.id"
          >{{ item.title }}</NuxtLink
        >
      </div>
    </div>
    <div
      @click="handleMobileMenu"
      class="flex lg:hidden flex-col items-end gap-1 cursor-pointer z-[2000]"
    >
      <div
        :class="[
          'h-[2px] bg-dark transition-all duration-300',
          mobileMenuStatus === true ? 'w-8' : 'w-8',
        ]"
      />
      <div
        :class="[
          'h-[2px] bg-dark transition-all duration-300',
          mobileMenuStatus === true ? 'w-8' : 'w-6',
        ]"
      />
      <div
        :class="[
          'h-[2px] bg-dark transition-all duration-300',
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
  <div
    @mouseleave="subMenuStatus = false"
    v-if="subMenuStatus"
    id="submenu"
    class="fixed px-8 lg:px-14 xl:px-[10rem] left-0 top-[4rem] w-full h-max py-10 z-50 bg-dark flex flex-col gap-4"
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
    <div class="flex flex-row gap-8">
      <a
        v-for="item in currentMenuHash"
        :key="item.id"
        class="cursor-pointer capitalize text-white text-lg font-semibold hover:border-b-2 hover:border-primary1"
        @click.prevent="handleHashClick(currentLink, item.hash)"
      >
        {{ item.name }}
      </a>
    </div>
  </div>

  <!-- Mobile Navbar -->
  <div
    :class="`lg:hidden fixed top-0 right-0 bg-primary1 h-screen w-[60vw] z-[1000] flex flex-col justify-start pl-4 pt-[10rem] gap-4 transition-transform duration-300 ease-in-out ${
      mobileMenuStatus ? 'translate-x-0' : 'translate-x-full'
    }`"
  >
    <NuxtLink
      id="mobileMenu"
      v-for="item in menu"
      @click="mobileMenuStatus = false"
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
            @click="mobileMenuStatus = false"
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
const currentMenuHash = ref<any>([]);
const currentLink = ref<any>("");
const router = useRouter();
const route = useRoute();

function handleHashClick(path: string, hash: string) {
  if (route.path === path) {
    nextTick(() => scrollToHash(hash));
  } else {
    router.push({ path }).then(() => {
      const unwatch = watch(
        () => route.fullPath,
        () => {
          nextTick(() => {
            scrollToHash(hash);
            unwatch();
          });
        }
      );
    });
  }
}

function scrollToHash(hash: string) {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function handleButton(name: string) {
  router.push("/contact");
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
  currentLink.value = menuItem?.link || [];
  currentSubMenu.value = menuItem?.subMenu || [];
  currentMenuHash.value = menuItem?.hashValues || [];
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
