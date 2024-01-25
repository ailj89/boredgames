<template>
  <div>
    <h1 class="text-6xl font-bold mb-3">{{ game?.name }}</h1>

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
  </div>
</template>

<script setup lang="ts">
defineProps({
  game: {
    type: Object,
    required: true,
  },
});
</script>
