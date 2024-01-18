<template>
  <div class="bg">
    <img :src="`_nuxt/assets/images/home/${currentGame}`" alt="Collection" />
  </div>
  <div
    class="container mx-auto rounded-lg shadow-2xl text-center mt-20 bg-slate-800 opacity-85 p-10 text-white"
  >
    <h1 class="text-6xl font-bold mb-10">Bored?Games!</h1>

    <h2 class="text-4xl font-bold my-10">Currently Under Development</h2>

    <h2 class="info font-bold text-4xl mb-10">
      Bored? Get ready to play some Games!
    </h2>

    <h3 class="text-3xl font-bold my-2">Features</h3>

    <ul class="info font-normal text-2xl">
      <li>Collection Management</li>
      <li>Game Recommendations</li>

      <ul class="info font-normal text-lg">
        <li>By Difficulty</li>
        <li>By Mechanics</li>
        <li>By Player Count</li>
        <li>By Theme</li>
      </ul>

      <li>Setup Guides</li>

      <ul class="info font-normal text-lg">
        <li>Images</li>
        <li>Videos</li>
      </ul>

      <li>More to come!</li>
    </ul>

    <div class="mt-20">
      Developed by
      <a
        class="underline hover:text-blue-600"
        href="https://nerdfromnewark.netlify.com"
        target="_blank"
        >NFN</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import getNextListItem from "../utils/getNextListItem";

const currentGame = ref("_nuxt/assets/images/home/nemesis_intruders.jpg");
const interval = ref<ReturnType<typeof setInterval>>();

const changeGame = () => {
  interval.value = setInterval(() => {
    const images = [
      "binding.jpeg",
      "decorum.jpeg",
      "dice.jpg",
      "dominion.jpg",
      "gears.jpg",
      "nemesis_intruders.jpg",
      "pretaporter.jpg",
      "shelf.jpg",
      "shelf2.jpg",
      "shelf3.jpg",
      "shelf4.jpg",
      "streetfighter_shelf.jpg",
    ];
    currentGame.value = getNextListItem(images, currentGame.value);
  }, 5000);
};

onMounted(changeGame);
onBeforeUnmount(() => clearInterval(interval.value));
</script>

<style scoped>
li {
  @apply mb-1;
}

.bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  z-index: -1;
}
.bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
</style>
