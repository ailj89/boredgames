<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li class="active">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/games">Games</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="`/game/${random_num}`" @click="changeGame">
            Surprise Me
          </NuxtLink>
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

<style scoped>
nav {
  @apply bg-slate-700 fixed inset-y-0 left-0;
  padding-block: 2rem;
}
.nav-list {
  @apply m-0 p-0 list-none grid gap-4;
}

.nav-list a {
  @apply text-white block no-underline;
}

.nav-list li {
  padding-block: 1rem;
  padding-inline: 2rem;
  margin-inline: 1rem 0;
  /* prevent animation glitch on right side */
  box-shadow: 2px 0 0;
  @apply shadow-slate-800;
}

.nav-list li.active {
  @apply bg-slate-700 relative block;
  /* view-transition-name: nav; */
  z-index: -1;
  border-radius: 100vw 0 0 100vw;
}

::view-transition-group(nav) {
  animation-duration: 1s;
}

.nav-list li.active::before,
.nav-list li.active::after {
  --border-radius: 1rem;
  content: "";
  position: absolute;
  width: var(--border-radius);
  height: var(--border-radius);
  right: 0rem;
  @apply shadow-slate-700;
}

.nav-list li.active::before {
  border-radius: 0 0 var(--border-radius);
  top: calc(var(--border-radius) * -1);
  box-shadow: 5px 5px 0 5px;
  @apply shadow-slate-800;
}

.nav-list li.active::after {
  border-radius: 0 var(--border-radius) 0 0;
  bottom: calc(var(--border-radius) * -1);
  box-shadow: 5px -5px 0 5px;
  @apply shadow-slate-800;
}
</style>
