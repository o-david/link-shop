<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  url: string;
  logo: string;
}>();
</script>

<template>
  <div class="flex flex-col p-4 rounded-lg justify-center border-2 containr">
    <div class="flex gap-4">
      <div class="sm:w-[8%] w-[16%] rounded-full border p-3 aspect-square">
        <img :src="logo" alt="image of a cat" class="m-auto" />
      </div>
      <h1 class="flex gap-4 items-center">{{ title }}</h1>
    </div>
    <h1>{{ description }}</h1>
    <a :href="url" class="border w-20 text-center p-1 mt-4 rounded-md">
      Let's Go</a
    >
  </div>
</template>
