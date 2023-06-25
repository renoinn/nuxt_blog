<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
})
</script>

<template>
  <div>
    <img src="~/public/header-image.jpg">
  </div>
  <ul>
    <li v-for="item in data?.contents" :key="item.id">
      <NuxtLink :to="`/${item.id}`">
        <div>{{ item.title}}{{ item.publishedAt ?? item.createdAt }}</div>
      </NuxtLink>
    </li>
  </ul>
</template>
