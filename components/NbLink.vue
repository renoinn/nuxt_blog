<script setup lang="ts">
defineProps<{
  href: string,
}>()
</script>

<template>
  <a :href="href" class="">
    <slot />
  </a>
</template>

