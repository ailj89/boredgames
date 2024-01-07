<template>
  <div class="container mx-auto rounded-lg shadow-xl">
    <table class="w-full mt-5">
      <thead>
        <tr>
          <th
            class="text-left game-row"
            v-for="(field, index) in fields"
            :key="index"
          >
            {{ field.name }}
          </th>
          <th class="game-row"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="index">
          <td class="game-row font-bold">
            <NuxtLink :to="`/games/${game.id}`">{{ game.name }}</NuxtLink>
          </td>
          <td class="game-row">{{ game.player_count }}</td>
          <td class="game-row">{{ game.length }} mins</td>
          <td class="game-row">{{ game.difficulty }}</td>
          <td class="game-row">
            <chip-component
              v-for="(theme, index) in game.themes"
              class="mr-1"
              :key="index"
              :text="theme"
            ></chip-component>
          </td>
          <td class="game-row">
            <chip-component
              v-for="(mechanic, index) in game.mechanics"
              class="mr-1"
              :key="index"
              :text="mechanic"
            ></chip-component>
          </td>
          <td class="game-row">
            {{ game.type }}
            <!-- <select
              name=""
              id=""
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option
                v-for="(type, index) in gameTypes"
                :key="index"
                :value="game.type"
              >
                {{ type }}
              </option>
            </select> -->
          </td>
          <td class="game-row">
            <a
              v-for="(video, index) in game.videos"
              :href="video.url"
              :key="index"
              class="mx-2"
              id="vid-{{ index }}"
            >
              {{ video.type }}
            </a>
          </td>
          <td class="game-row" contenteditable="true">{{ game.plays }}</td>
          <td class="game-row" contenteditable="true">{{ game.info }}</td>
          <td class="game-row" contenteditable="true">{{ game.comments }}</td>
          <td class="game-row text-right">
            <button
              type="button"
              class="inline-block text-gray-500 hover:text-gray-700"
            >
              <svg
                class="inline-block h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                />
              </svg>
            </button>

            <!-- <Button
              type="button"
              icon="pi pi-ellipsis-v"
              @click="toggle"
              aria-haspopup="true"
              aria-controls="overlay_menu"
            />
            <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import { type BoardGame } from "../models/BoardGame.model";
interface Field {
  field: string;
  hidden: boolean;
  name: string;
  moveable: boolean;
}

const gameTypes: any[] = ["Standalone", "Expansion", "Expandalone", "Promo"];

// const menu = ref();
// const items = ref([
//   {
//     label: "Options",
//     items: [
//       {
//         label: "Refresh",
//         icon: "pi pi-refresh",
//       },
//       {
//         label: "Export",
//         icon: "pi pi-upload",
//       },
//     ],
//   },
// ]);

// const toggle = (event: any) => {
//   menu.value.toggle(event);
// };

const fields: Field[] = [
  {
    field: "name",
    hidden: false,
    moveable: false,
    name: "Name",
  },
  {
    field: "player_count",
    hidden: false,
    name: "Player Count",
    moveable: true,
  },
  {
    field: "length",
    hidden: false,
    name: "Length",
    moveable: true,
  },
  {
    field: "difficulty",
    hidden: false,
    name: "Difficulty",
    moveable: true,
  },
  {
    field: "themes",
    hidden: false,
    name: "Themes",
    moveable: true,
  },
  {
    field: "mechanics",
    hidden: false,
    name: "Mechanics",
    moveable: true,
  },
  {
    field: "type",
    hidden: false,
    name: "Type",
    moveable: true,
  },
  {
    field: "videos",
    hidden: false,
    name: "Videos",
    moveable: true,
  },
  {
    field: "plays",
    hidden: false,
    name: "Plays",
    moveable: true,
  },
  {
    field: "info",
    hidden: true,
    name: "Info",
    moveable: true,
  },
  {
    field: "comments",
    hidden: true,
    name: "Comments",
    moveable: true,
  },
];

const games = ref<BoardGame[]>([
  {
    comments: "Some comments",
    difficulty: 3,
    id: 233,
    info: "Game information",
    length: "45 - 60",
    mechanics: ["Mechanic 1", "Mechanic 2"],
    name: "Nemesis",
    player_count: "2-5",
    plays: 10,
    themes: ["Theme 1", "Theme 2"],
    type: "Standalone",
    videos: [
      { type: "How To Play", url: "" },
      { type: "Setup", url: "" },
    ],
  },
  {
    comments: "Some comments",
    difficulty: 3,
    id: 331,
    info: "Game information",
    length: "15 - 30",
    mechanics: ["Mechanic 1", "Mechanic 2"],
    name: "My Game",
    player_count: "1-4",
    plays: 10,
    themes: ["Theme 1", "Theme 2"],
    type: "Expansion",
    videos: [
      { type: "How To Play", url: "" },
      { type: "Setup", url: "" },
    ],
  },
]);
</script>
