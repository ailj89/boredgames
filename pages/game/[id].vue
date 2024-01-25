<template>
  <div>
    <game-details :game="game" id="Details"></game-details>

    <expansion-details :game="game" id="Expansion" />

    <game-setup :game="game" id="Setup" />
  </div>
  <!-- <UVerticalNavigation
    v-if="false"
    :links="links"
    :ui="{
      wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
      base: 'group block border-s -ms-px lg:leading-6 before:hidden',
      padding: 'p-0 ps-4',
      rounded: '',
      font: '',
      ring: '',
      active:
        'text-primary-500 dark:text-primary-400 border-current font-semibold',
      inactive:
        'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300',
    }"
  /> -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { BoardGame } from "../../models/Boardgame?.model";
import { useGamesStore } from "../../stores/games";

const gamesStore = useGamesStore();

const route = useRoute();

onMounted(gamesStore.fetch_games);

const games = computed(() => gamesStore.allgames);

const game = games.value.find((x) => x.id == route.params.id);

const links = [
  {
    label: "Details",
    to: "#Details",
  },
  {
    label: "Expansions",
    to: "#Expansions",
  },
  {
    label: "Setup",
    to: "#Setup",
  },
];
</script>
