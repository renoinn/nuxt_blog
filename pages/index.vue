<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
})
</script>

<template>
  <div>
    <ul>
      <li v-for="item in data?.contents" :key="item.id">
        <NbArticleListItem :title="item.title" :id="item.id" :publishedAt="item.publishedAt ?? item.createdAt"
          :categoryName="item.category?.name" :content="item.content" />
      </li>
    </ul>
  </div>
</template>
