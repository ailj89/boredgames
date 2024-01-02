<template>
    <component
        :is="element"
        :aria-label="ariaLabel"
        isDisable="isDisabled"
    >
    <slot>

    </slot>
    </component>
</template>

<script setup lang="ts">
defineProps<{
    element: string,
    ariaLabel?: string,
    isDisabled?: boolean,
}>()
</script>