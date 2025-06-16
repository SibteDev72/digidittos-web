<template>
    <div class="w-full h-[calc(100vh-4rem)] flex flex-row">
        <div class="w-[50%] h-full bg-[#FFFFFF] flex flex-col gap-6 pl-20 pr-[20rem] justify-center">
            <p id="slideTitle" class="text-primary1 text-5xl font-bold capitalize">{{ currentSlide.title }}</p>
            <p id="slideDesc" class="text-dark capitalize antialiased font-semibold">{{ currentSlide.desc }}</p>
            <Button variant="filled" name="lets work together" />
        </div>
        <div class="w-[50%] h-full bg-[#18191F] flex flex-col justify-center">
            <img id="image" class="w-[30rem] -ml-12" src="/images/HeroSectionImage.png" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { slides } from '~/constant/data';
const { $gsap } = useNuxtApp()
const slideCount = ref(0)
const currentSlide = ref(slides[slideCount.value])

onMounted(() => {
    $gsap.fromTo("#image",  { opacity: 0 },
        {
            delay: 0.5,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });   
    setInterval(() => {
        if(slideCount.value === slides.length-1) slideCount.value = -1
        currentSlide.value = slides[slideCount.value+=1]
        $gsap.fromTo("#slideTitle",  { opacity: 0, x: -20 },
        {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power2.out",
        });     
        $gsap.fromTo("#slideDesc",  { opacity: 0, x: -20 },
        {
            delay: 0.5,
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power2.out",
        });       
    }, 5000)
})

</script>

<style scoped>

</style>