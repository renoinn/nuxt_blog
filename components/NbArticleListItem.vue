<script setup lang="ts">
import { dateToString } from "@/utils/dateToString";

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
  <article class="c-article p-list-article">
    <NbLink :href="`/article/${id}`">
      <h2 class="my-4">{{ title }}</h2>
    </NbLink>
    <div class="flex mb-2">
      <div class="c-time">
        Posted&nbsp;on&nbsp;<time>{{ dateToString(publishedAt, 'YYYY-MM-DD') }}</time>
      </div>
    </div>
    <p class="c-article__summary">{{ createSummry(content || "", 200) }}</p>
  </article>
</template>
