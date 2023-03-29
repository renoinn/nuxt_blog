<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
})
</script>

<template>
  <ul>
    <li v-for="item in data?.contents" :key="item.id">
      <NuxtLink :to="`/${item.id}`">
        <div>{{ item.title}}{{ item.publishedAt ?? item.createdAt }}</div>
      </NuxtLink>
    </li>
  </ul>
</template>
