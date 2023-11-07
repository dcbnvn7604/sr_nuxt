<script setup lang="ts">
  const { data: serverItems } = await useFetch('/api/server-fetch')
</script>
<template>
  <div>
    <li v-for="item in serverItems">{{item.name}}</li>
  </div>
</template>