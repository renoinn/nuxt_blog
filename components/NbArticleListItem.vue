<script setup lang="ts">
defineProps<{
  title: string,
  id: string,
  publishedAt: string,
  categoryName?: string,
  content?: string,
}>()

const createSummry = (html: string, width: number): string => {
  if (html.length == 0) return ""
  const sanitized = html.replaceAll(/<\/?[^>]+(>|$)/gi, "");
  return sanitized.substring(0, width) + "..."
}
</script>

<template>
  <div>
    <NbLink :href="`/article/${id}`">
      <h2 class="my-4">{{ title }}</h2>
    </NbLink>
    <div class="flex mb-2">
      <div class="">
        Posted&nbsp;on&nbsp;{{ publishedAt }}
      </div>
    </div>
    <p class="">{{ createSummry(content || "", 200) }}</p>
  </div>
</template>
