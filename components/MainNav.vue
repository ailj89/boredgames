<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/games">Games</NuxtLink></li>
        <li>
          <NuxtLink :to="`/game/${random_num}`" @click="changeGame"
            >Surprise Me</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useGamesStore } from "../stores/games";

const gamesStore = useGamesStore();

const random_num = ref(
  Math.floor(Math.random() * gamesStore.allgames.length - 1)
);

const changeGame = () => {
  random_num.value = Math.floor(Math.random() * gamesStore.allgames.length);
};
</script>
