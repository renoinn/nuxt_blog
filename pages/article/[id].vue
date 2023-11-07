<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <div class="p-article" v-if="data">
    <h1 class="mb-10">
      {{ data.title }}
    </h1>
    <img v-if="data.eyecatch" :src="data.eyecatch?.url" :width="data.eyecatch?.width" :height="data.eyecatch?.height"
      alt="" />
    <div class="mb-10">
      <div class="mb-2">
        Posted&nbsp;on&nbsp;<time>{{ data.publishedAt ?? data.createdAt }}</time>
      </div>
      <div>
        Cateogry&nbsp;in&nbsp;{{ data.category?.name }}
      </div>
    </div>
    <section class="p-article__body" v-html="data.content"></section>
  </div>
</template>

<style lang="scss"></style>
