<script setup lang="ts">
import { Content } from '@/server/types'
import { MicroCMSListResponse } from 'microcms-js-sdk'

//const { data: posts } = await useFetch<MicroCMSListResponse<Content>>('/api/content_list')
const { data, pending, error, refresh } = await useAsyncData('contents', () => {
    return getClient().getList<Content>({
        endpoint: 'blogs',
    })
})
</script>

<template>
  <ul>
    <li v-for="item in data?.contents" :key="item.id">
      <p>{{ item.title}}</p>
    </li>
  </ul>
</template>
