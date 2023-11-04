<script setup lang="ts">
defineProps<{
  href: string,
}>()
</script>

<template>
  <a :href="href" class="text-blue-600 underline">
    <slot />
  </a>
</template>

