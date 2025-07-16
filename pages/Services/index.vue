<template>
  <div class="w-full flex flex-col mt-[4rem]">
    <Header
      title="services"
      heading="Digital acceleration services for business growth"
      sub-heading="Design. Development. Consulting. 5 years and counting."
    />
    <div class="w-full flex flex-col z-10">
      <div
        class="w-full h-[4rem] overflow-x-scroll z-20 bg-white shadow-lg sticky top-[4rem] flex flex-row gap-12 px-8 lg:px-14 xl:px-[10rem] items-center md:justify-center"
      >
        <NuxtLink
          :to="{ path: '/services', hash: item.hash }"
          v-for="item in serviceNav"
          class="min-w-max text-animate mt-4 text-dark text-lg capitalize font-semibold"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <ContentIdeation />
      <ContentServicesList
        v-for="item in servicesList"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { serviceNav, servicesList } from "~/constant/data";
</script>
