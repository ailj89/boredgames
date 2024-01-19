<template>
  <div class="container mx-auto rounded-lg shadow-xl">
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
    key: "numplays",
    label: "Plays",
    sortable: true,
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
