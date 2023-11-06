<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { data } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
})
</script>

<template>
  <div>
    <ul class="mx-0 px-0">
      <li class="mb-20 list-none" v-for="item in data?.contents" :key="item.id">
        <NbArticleListItem :title="item.title" :id="item.id" :publishedAt="item.publishedAt ?? item.createdAt"
          :categoryName="item.category?.name" :content="item.content" />
      </li>
    </ul>
  </div>
</template>
