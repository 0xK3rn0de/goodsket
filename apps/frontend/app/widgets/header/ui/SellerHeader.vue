<script setup lang="ts">
import {ArrowLeft} from "@lucide/vue"
</script>

<template>
  <header class="bg-sidebar border-b px-4 py-3 flex justify-between items-center gap-2">
    <SearchField class="max-w-md"/>

    <NuxtLink to="/">
      <Button variant="outline">
        <ArrowLeft />
        В маркетплейс
      </Button>
    </NuxtLink>
  </header>
</template>