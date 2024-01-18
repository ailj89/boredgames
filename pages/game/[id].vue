<template>
  <div>
    <h1 class="text-6xl font-bold m-2">{{ game?.name }}</h1>

    <UDivider label="About" />

    <ul>
      <li class="info font-normal px-3">{{ game?.info }}</li>
      <li class="info font-normal px-3">{{ game?.goal }}</li>
      <li class="info font-normal px-3">
        {{ game?.minplayers }}
        <span v-if="game && game?.maxplayers > 1">
          - {{ game?.maxplayers }} players</span
        >
        <span v-else>player</span>
      </li>
      <li class="info font-normal px-3">
        {{ game?.minplaytime }}
        <span v-if="game?.maxplaytime > game?.minplaytime">
          - {{ game?.maxplaytime }}
        </span>
        mins
      </li>
    </ul>

    <img src="" alt="" />

    <UDivider label="Setup" />

    <div class="setup">
      <div v-if="game?.has_setup">
        <UDivider label="Images" />
        <div class="images">
          <div v-for="(video, index) in game?.setup_videos" :key="index"></div>
        </div>

        <UDivider label="Videos" />
        <div class="videos">
          <div v-for="(video, index) in game?.setup_videos" :key="index"></div>
        </div>
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold">No setup instructions available</h2>
      </div>
    </div>

    <div v-if="game?.is_expansion" class="expansions m-2">
      <UDivider label="Base Game" />
      <h2 class="text-4xl font-bold mb-2">Base Game</h2>
      <div class="expansions">
        <div v-for="(base, index) in game?.base_games" :key="index">
          <h3 class="text-3xl font-bold m-2">{{ base.name }}</h3>
          <p class="info font-normal px-3">{{ base.info }}</p>
        </div>
      </div>
    </div>

    <UDivider label="Expansions" />

    <div class="expansions m-2">
      <h2 class="text-4xl font-bold mb-2">Expansions</h2>
      <div class="expansions" v-if="game?.has_expansion">
        <div v-for="(expansion, index) in game?.expansions" :key="index">
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
import { ref, onMounted, computed } from "vue";
import type { BoardGame } from "../../models/Boardgame?.model";
import { useGamesStore } from "../../stores/games";

const gamesStore = useGamesStore();

const route = useRoute();

// console.log(route.params.id);

onMounted(gamesStore.fetch_games);

const games = computed(() => gamesStore.allgames);

// console.log(games);

const game = games.value.find((x) => x.id == route.params.id);

// console.log(game);

// const game = computed(() => games.find((x) => x.id === route.params.id));

// const game = ref<BoardGame>({
//   comments: "1-5 Players\nSleeved",
//   minplayers: 1,
//   maxplayers: 5,
//   maxplaytime: 180,
//   minplaytime: 90,
//   name: "Nemesis",
//   id: 233,
//   info: " Nemesis is a 1-5 player board game which may be played fully co-op or semi-co-op.",
//   has_expansion: true,
//   type: "Standalone",
//   expansions: [
//     {
//       name: "Aftermath",
//       id: 12,
//       info: "Aftermath is an expansion which takes place after the end of a game of Nemesis, hence the name.",
//       type: "Expansion",
//       is_expansion: true,
//     },
//     {
//       name: "Void Seeders",
//       id: 12,
//       info: "Void Seeders is an expansion which replaces the Intruders with a new enemy type, Void Seeders. The crew is tasked with taking on a challening enemy that inflitrates their minds, causing illusions. May be used with Nemesis or Aftermath.",
//       is_expansion: true,
//       type: "Modular",
//     },
//     {
//       name: "Kings",
//       id: 12,
//       info: "Kings is a cosmetic expansion which replaces the Queens of each race with a male counterpart.",
//       is_expansion: true,
//       type: "Cosmetic",
//     },
//   ],
// });
</script>
