<script setup lang="ts">
import { gmail, wapp } from '../assets';
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center border-t py-4 gap-2">
    <h2 class="text-lg md:text-xl lg:text-2xl font-semibold">{{ title }}</h2>
    <div class="flex text-xs divide-x-2 w-full justify-center containr md:text-sm lg:text-base">
        <div class="flex justify-around items-center">
            <img :src=wapp alt="" class="w-10 mx-4">
        </div>
        <div class="flex justify-around items-center">
            <img :src=gmail alt="" class="w-10 mx-4">            
        </div>
    </div>
  </div>
</template>
