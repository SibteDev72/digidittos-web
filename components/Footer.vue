<template>
  <div class="w-full h-fit flex flex-col justify-between">
    <div
      class="px-8 bg-primary2 lg:px-14 xl:px-[10rem] py-12 flex flex-col md:flex-row gap-8 md:justify-between"
    >
      <div class="w-full md:w-[20rem] flex flex-col gap-4">
        <div class="flex flex-row gap-3 items-end">
          <img class="w-auto h-10 ml-4" src="/images/logo-white.png" />
          <!-- <img class="w-auto h-5 mr-5" src="/images/Asset 2@4x 1.png" /> -->
        </div>
        <p class="text-sm lg:text-[16px] font-medium text-white">
          Digidittos delivers cutting-edge web and mobile solutions with a focus
          on UX/UI. We help businesses validate ideas, design impactful
          products, and build scalable digital experiences.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-lg lg:text-xl font-bold text-white">Company</p>
        <div class="grid grid-cols-2 gap-3 w-max">
          <NuxtLink
            :to="item.link"
            class="capitalize cursor-pointer font-medium text-lg text-white hover:border-b-2 hover:border-primary2"
            v-for="item in menu"
            :key="item.id"
            >{{ item.title }}</NuxtLink
          >
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
    <div class="flex flex-col items-center py-4 bg-primary1">
      <p class="text-xs md:text-sm font-normal text-white">
        ©2025 Digidittos. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menu, socialHandle } from "~/constant/data";
</script>

<style scoped></style>
