<template>
  <div>
    <UDivider label="Setup" />

    <div class="setup">
      <div v-if="game?.has_setup">
        <UDivider label="Images" />
        <div class="images">
          <div v-for="(video, index) in game?.setup_images" :key="index"></div>
        </div>

        <UDivider label="Videos" />
        <div class="videos">
          <ul>
            <li v-for="(video, index) in game?.setup_videos" :key="index">
              {{ video.type }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else>
        <h2 class="text-3xl font-bold">No setup instructions available</h2>
      </div>
    </div>
  </div>
</template>
