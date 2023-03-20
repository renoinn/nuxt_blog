<script setup lang="ts">
import { Blog } from "~~/types/Blog";
const { data } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
})
</script>

<template>
  <ul>
    <li v-for="item in data?.contents" :key="item.id">
      <p>{{ item.title}}</p>
    </li>
  </ul>
</template>
