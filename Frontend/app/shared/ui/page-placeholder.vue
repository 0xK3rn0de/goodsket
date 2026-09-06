<script setup lang="ts">
// Слой shared, сегмент ui — ui-кит приложения (без бизнес-логики).
// Плейсхолдер-заглушка для страниц, контент которых ещё не реализован.
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-center gap-2 text-foreground">
    <h1 class="text-4xl font-bold tracking-tight">{{ title }}</h1>
    <p v-if="description" class="text-muted-foreground">{{ description }}</p>
  </main>
</template>
