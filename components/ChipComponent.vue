<template>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    text: string;
    color?: string;
  }>(),
  {
    text: "Text",
  }
);
</script>
