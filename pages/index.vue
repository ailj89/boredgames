<template>
  <div class="container mx-auto rounded-lg shadow-xl">
    <table v-if="null" class="w-full mt-5">
      <thead>
        <tr>
          <th
            class="text-left game-row"
            v-for="(column, index) in columns"
            :key="index"
          >
            {{ column.label }}
          </th>
          <th class="game-row"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="index">
          <td class="game-row font-bold">
            <NuxtLink :to="`/game/${game.id}`">{{ game.name }}</NuxtLink>
          </td>
          <td class="game-row">
            {{ game.minplayers }}
            <span v-if="game.maxplayers > 1">
              - {{ game.maxplayers }} players</span
            >
            <span v-else>player</span>
          </td>
          <td class="game-row">
            {{ game.minplaytime }}
            <span v-if="game?.maxplaytime > game?.minplaytime">
              - {{ game.maxplaytime }}
            </span>
            mins
          </td>
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

    <div class="table_container">
      <UTable v-model="selected" :rows="rows" :columns="columns">
        <template #name-data="{ row }">
          <NuxtLink :to="`/game/${row.id}`" class="font-bold">{{
            row.name
          }}</NuxtLink>
        </template>

        <template #player_count-data="{ row }">
          {{ row.minplayers }}
          <span v-if="row.maxplayers > 1"> - {{ row.maxplayers }} players</span>
          <span v-else>player</span>
        </template>

        <template #length-data="{ row }">
          {{ row.minplaytime }}
          <span v-if="row?.maxplaytime > row?.minplaytime">
            - {{ row.maxplaytime }}
          </span>
          mins
        </template>

        <template #actions-data="{ row }">
          <UDropdown :items="items(row)">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-ellipsis-horizontal-20-solid"
            />
          </UDropdown>
        </template>
      </UTable>

      <div
        class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700"
      >
        <UPagination
          v-model="page"
          :page-count="pageCount"
          :total="games.length"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { faker } from "@faker-js/faker";
import { useGamesStore } from "../stores/games";

const gamesStore = useGamesStore();
onMounted(gamesStore.fetch_games);

const games = computed(() => gamesStore.allgames);

const page = ref(1);
const pageCount = 30;

const rows = computed(() => {
  return games.value.slice(
    (page.value - 1) * pageCount,
    page.value * pageCount
  );
});

const selected = ref([]);

const columns = [
  {
    key: "name",
    label: "Name",
    sortable: true,
  },
  {
    key: "player_count",
    label: "Player Count",
    sortable: true,
  },
  {
    key: "length",
    label: "Length",
    sortable: true,
  },
  {
    key: "difficulty",
    label: "Difficulty",
    sortable: true,
  },
  {
    key: "themes",
    label: "Themes",
  },
  {
    key: "mechanics",
    label: "Mechanics",
  },
  {
    key: "type",
    label: "Type",
    sortable: true,
  },
  {
    key: "videos",
    label: "Videos",
  },
  {
    key: "numplays",
    label: "Plays",
    sortable: true,
  },
  {
    key: "info",
    label: "Info",
  },
  {
    key: "comments",
    label: "Comments",
  },
  {
    key: "actions",
  },
];

const items = (row: any) => [
  [
    {
      label: "Edit",
      icon: "i-heroicons-pencil-square-20-solid",
      click: () => console.log("Edit", row.id),
    },
    {
      label: "Duplicate",
      icon: "i-heroicons-document-duplicate-20-solid",
    },
  ],
  [
    {
      label: "Archive",
      icon: "i-heroicons-archive-box-20-solid",
    },
    {
      label: "Move",
      icon: "i-heroicons-arrow-right-circle-20-solid",
    },
  ],
  [
    {
      label: "Delete",
      icon: "i-heroicons-trash-20-solid",
    },
  ],
];
</script>
