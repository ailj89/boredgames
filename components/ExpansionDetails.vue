<template>
  <div class="expansions">
    <div class="expansions" v-if="game?.is_expansion">
      <UDivider label="Base Game" />
      <div class="expansions">
        <div v-for="(base, index) in game.base_games" :key="index">
          <h3 class="text-3xl font-bold mb-3">
            <NuxtLink :to="`/game/${base.id}`" class="font-bold">
              {{ base.name }}
            </NuxtLink>
          </h3>
          <p class="info font-normal px-3">{{ base.info }}</p>
        </div>
      </div>
    </div>

    <div class="expansions">
      <UDivider v-if="game?.is_expansion" label="Compatible Expansions" />
      <UDivider v-else label="Expansions" />
      <div class="expansions" v-if="game?.has_expansion">
        <div v-for="(expansion, index) in game?.expansions" :key="index">
          <h3 class="text-3xl font-bold mb-3">
            <NuxtLink :to="`/game/${expansion.id}`" class="font-bold">
              {{ expansion.name }}
            </NuxtLink>
          </h3>
          <p class="info font-normal px-3">{{ expansion.info }}</p>
          <UDivider class="my-4" v-if="game?.expansions.length > 1" />
        </div>
      </div>
      <div v-else>
        <h2 class="text-3xl font-bold">No expansions listed</h2>
      </div>
    </div>
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
