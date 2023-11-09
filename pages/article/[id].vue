<script setup lang="ts">
import { dateToString } from "@/utils/dateToString";
import { Blog } from "~~/types/microcms";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <article class="p-article" v-if="data">
    <h1 class="mb-10">
      {{ data.title }}
    </h1>
    <img v-if="data.eyecatch" :src="data.eyecatch?.url" :width="data.eyecatch?.width" :height="data.eyecatch?.height"
      alt="" />
    <div class="mb-10">
      <dl class="flex">
        <dt class="my-0 mx-0 mr-2">Posted&nbsp;on</dt>
        <dd class="my-0 mx-0">{{ dateToString(data.publishedAt ?? data.createdAt, 'YYYY-MM-DD') }}</dd>
      </dl>
      <dl class="flex">
        <dt class="my-0 mx-0 mr-2">Categorized&nbsp;in</dt>
        <dd class="my-0 mx-0">{{ data.category?.name }}</dd>
      </dl>
    </div>
    <section class="p-article__body" v-html="data.content"></section>
  </article>
</template>

<style lang="scss"></style>
