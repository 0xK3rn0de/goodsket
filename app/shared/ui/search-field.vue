<script setup lang="ts">
// Слой shared, сегмент ui — поисковая строка с кнопкой поиска.
// Без логики: значение не обрабатывается, отправка формы заблокирована (@submit.prevent),
// поисковая выдача появится позже (features-слой).
withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'Поиск' })
</script>

<template>
  <form class="flex w-full items-center bg-accent p-1 rounded-xl" @submit.prevent>
    <Input
      type="search"
      :placeholder="placeholder"
      aria-label="Поисковый запрос"
      class="flex-1 bg-background focus-visible:border-none focus-visible:ring-0"
    />
    <Button type="submit" size="icon" aria-label="Искать" title="Искать">
      <SearchIcon class="size-4" />
    </Button>
  </form>
</template>
