<template>
  <div>
    <game-details :game="game" />

    <expansion-details :expansion="game" />

    <game-setup />
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
