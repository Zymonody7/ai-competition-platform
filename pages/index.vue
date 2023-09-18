<template>
  <ElButton @click="loadData">按钮</ElButton>
</template>

<script setup lang="ts">
import http from '~/utils/http'
useHead({
  title: 'AI竞赛平台'
})
const loadData = async () => {
  const res = await http.get(
    'http://39.104.144.63:4000/api1/user/page?page=1&size=10'
  )
  console.log(res)
}
</script>

<style scoped></style>
