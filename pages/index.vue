<template>
  <div class="container mx-auto">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="index">
          <td class="game-row font-bold">{{ game.name }}</td>
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
            <select
              name=""
              id=""
              class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" v-for="(type, index) in game.type" :key="index">
                {{ type }}
              </option>
            </select>
          </td>
          <td class="game-row">
            <a
              v-for="(video, index) in game.videos"
              :href="video.url"
              :key="index"
              class="mx-2"
            >
              {{ video.type }}
            </a>
          </td>
          <td class="game-row" contenteditable="true">{{ game.plays }}</td>
          <td class="game-row" contenteditable="true">{{ game.info }}</td>
          <td class="game-row" contenteditable="true">{{ game.comments }}</td>
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
    info: "Game information",
    length: "45 - 60",
    mechanics: ["Mechanic 1", "Mechanic 2"],
    name: "My Game",
    player_count: 2,
    plays: 10,
    themes: ["Theme 1", "Theme 2"],
    type: ["standalone"],
    videos: [
      { type: "How To Play", url: "" },
      { type: "Setup", url: "" },
    ],
  },
  {
    comments: "Some comments",
    difficulty: 3,
    info: "Game information",
    length: "15 - 30",
    mechanics: ["Mechanic 1", "Mechanic 2"],
    name: "My Game",
    player_count: 2,
    plays: 10,
    themes: ["Theme 1", "Theme 2"],
    type: ["expansion"],
    videos: [
      { type: "How To Play", url: "" },
      { type: "Setup", url: "" },
    ],
  },
]);
</script>
