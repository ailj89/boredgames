<template>
  <div>
    <h1 class="text-6xl font-bold m-2">{{ game.name }}</h1>
    <p class="info font-normal px-3">{{ game.info }}</p>
    <img src="" alt="" />

    <div class="expansions m-2">
      <h2 class="text-4xl font-bold mb-2">Expansions</h2>
      <div class="expansions" v-if="game.has_expansion">
        <div v-for="(expansion, index) in game.expansions" :key="index">
          <h3 class="text-3xl font-bold m-2">{{ expansion.name }}</h3>
          <p class="info font-normal px-3">{{ expansion.info }}</p>
        </div>
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold">No expansions listed</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { BoardGame } from "../../models/BoardGame.model";

const game = ref<BoardGame>({
  name: "Nemesis",
  id: 233,
  info: " Nemesis is a 1-5 player board game which may be played fully co-op or semi-co-op.",
  has_expansion: true,
  type: "Standalone",
  expansions: [
    {
      name: "Aftermath",
      id: 12,
      info: "Aftermath is an expansion which takes place after the end of a game of Nemesis, hence the name.",
      type: "Expansion",
      is_expansion: true,
    },
    {
      name: "Void Seeders",
      id: 12,
      info: "Void Seeders is an expansion which replaces the Intruders with a new enemy type, Void Seeders. The crew is tasked with taking on a challening enemy that inflitrates their minds, causing illusions. May be used with Nemesis or Aftermath.",
      is_expansion: true,
      type: "Modular",
    },
    {
      name: "Kings",
      id: 12,
      info: "Kings is a cosmetic expansion which replaces the Queens of each race with a male counterpart.",
      is_expansion: true,
      type: "Cosmetic",
    },
  ],
});
</script>
