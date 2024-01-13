<template>
  <header>
    <nav>
      <ul>
        <li><NuxtLink to="/">List</NuxtLink></li>
        <li><NuxtLink to="/game/1">Game 1</NuxtLink></li>
        <!-- <li><NuxtLink :to="random_game">Random Game</NuxtLink></li> -->
        <!-- <li><NuxtLink :to="`/game/${random_num}`">Random Game</NuxtLink></li> -->
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useGamesStore } from "../stores/games";

const gamesStore = useGamesStore();

const interval = ref<ReturnType<typeof setInterval>>();

onMounted(gamesStore.fetch_games);

// const games = computed(() => gamesStore.allgames);

// const randomize = computed(() => changeGame());

// let random_num = Math.floor(Math.random() * games.value.length - 1);

// const random_game = computed(() => `/game/${random_num}`);

// const changeGame = () => {
//  const random_num = Math.floor(Math.random() * games.value.length - 1);
//   // interval.value = setInterval(() => {});
//   return random_num;
// };
</script>
