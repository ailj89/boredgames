<template>
  <div>
    <game-details />

    <div class="expansions m-2">
      <UDivider label="Base Game" />
      <h2 class="text-4xl font-bold mb-2">Base Game</h2>
      <div class="expansions">
        <div v-for="(base, index) in game?.base_games" :key="index">
          <h3 class="text-3xl font-bold m-2">{{ base.name }}</h3>
          <p class="info font-normal px-3">{{ base.info }}</p>
        </div>
      </div>
    </div>

    <UDivider label="Compatiable Expansions" />

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

    <game-setup />
  </div>
</template>
