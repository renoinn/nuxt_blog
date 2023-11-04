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
    <nb-link :href="`/article/${id}`">
      <h2 class="text-2xl font-bold py-2">{{ title }}</h2>
    </nb-link>
    <div>
      <div>
        {{ categoryName }}
      </div>
      <div>
        {{ publishedAt }}
      </div>
    </div>
    <p class="py-2">{{ createSummry(content || "", 200) }}</p>
  </div>
</template>
