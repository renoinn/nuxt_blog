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
        <a :href="`/article/${item.id}`">
          <div>{{ item.title }}{{ item.publishedAt ?? item.createdAt }}</div>
        </a>
      </li>
    </ul>
  </div>
</template>
