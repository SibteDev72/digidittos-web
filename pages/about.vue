<template>
  <div class="w-full flex flex-col mt-[4rem]">
    <Header
      title="about us"
      heading="Building Digital Solutions with Purpose"
      sub-heading="From vision to execution, we turn bold ideas into powerful solutions
        that drive growth and innovation."
    />
    <div class="w-full h-max flex flex-col">
      <ContentAbout />
      <ContentCoreValues />
      <ContentAccountability />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ContentAbout, ContentCoreValues } from "#components";
</script>
