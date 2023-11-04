<script setup lang="ts">
import { Blog } from "~~/types/microcms";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
</script>

<template>
  <div v-if="data">
    <h1 class="text-3xl mb-10">
      {{ data.title }}
    </h1>
    <img v-if="data.eyecatch" :src="data.eyecatch?.url" :width="data.eyecatch?.width" :height="data.eyecatch?.height"
      alt="" />
    <div class="text-sm mb-10">
      <div class="mb-2">
        公開日:&nbsp;{{ data.publishedAt ?? data.createdAt }}
      </div>
      <div>
        カテゴリ:&nbsp;{{ data.category?.name }}
      </div>
    </div>
    <div class="content" v-html="data.content"></div>
  </div>
</template>

<style lang="scss">
.content {

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    font-family: variable.$OpenSans;
  }

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  h5 {
    font-size: 1.2rem;
    line-height: 1.75rem;
  }

  h6 {
    font-size: 1.0rem;
    line-height: 1.75rem;
  }

  p {
    font-size: 1.0rem;
  }

  a {
    color: variable.$link-color;
    text-decoration: none;

    &:hover {
      color: variable.$link-hover;
    }
  }

  ul {
    & li {
      list-style-position: inside;
      list-style-type: disc;
    }
  }

  ol {
    & li {
      list-style-position: inside;
      list-style-type: decimal;
    }
  }

  li {
    font-size: 1.0rem;
  }

  dt {
    font-size: 1.0rem;
  }

  dd {
    font-size: 1.0rem;
  }

  pre {
    display: block;
    padding: 12px;
    border-radius: 3px;
    background-color: #f8f8f8;
    font-size: 0.875rem;
    line-height: 1.25rem;
    word-wrap: break-word;
    overflow: auto;
  }

  code {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 1.0rem;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #eee;
  }

  th {
    background-color: #fafafa;
    font-weight: normal;
  }

  del {
    color: #999;
  }

  blockquote {
    margin: 0;
    padding: 8px 12px;
    border-left: 3px solid #ccc;

    & * {
      margin: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
