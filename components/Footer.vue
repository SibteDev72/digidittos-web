<template>
  <div class="w-full h-fit bg-dark flex flex-col justify-between">
    <div
      class="px-8 lg:px-14 xl:px-[10rem] py-12 flex flex-col md:flex-row gap-8 md:justify-between"
    >
      <div class="w-full md:w-[20rem] flex flex-col gap-4">
        <div class="flex flex-row gap-3 items-end">
          <img class="w-auto h-7" src="/images/logo.png" />
          <img class="w-auto h-5 mr-5" src="/images/Asset 2@4x 1.png" />
        </div>
        <p class="text-sm lg:text-[16px] font-medium text-white">
          Digidittos is a tech company delivering cutting-edge web and mobile
          solutions with a focus on seamless UX/UI design. We help businesses
          validate ideas, design impactful products, and create scalable digital
          experiences. With our research-driven approach and agile services, we
          turn concepts into user-loved products.
        </p>
      </div>
      <div class="flex flex-col gap-3">
        <p class="text-lg lg:text-2xl font-semibold text-white">Menu</p>
        <div class="grid grid-cols-2 gap-3 w-max">
          <NuxtLink
            class="capitalize cursor-pointer font-medium text-xl lg:text-2xl text-white hover:border-b-2 hover:border-primary2"
            v-for="item in menu"
            :key="item.id"
            >{{ item.title }}</NuxtLink
          >
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <img src="/public/icons/linkedin.png" class="w-auto h-[2.5rem]" />
        <img src="/public/icons/github.png" class="w-auto h-[2.5rem]" />
        <img src="/public/icons/twitter.png" class="w-auto h-[2.5rem]" />
      </div>
    </div>
    <div class="flex flex-col items-center py-4 bg-[#001F35]">
      <p class="text-xs md:text-sm font-normal text-white">
        ©2025 Digidittos. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { menu } from "~/constant/data";
</script>

<style scoped></style>
