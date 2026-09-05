<script setup lang="ts">
// Слой shared, сегмент ui — поисковая строка с кнопкой поиска.
// Без логики: значение не обрабатывается, отправка формы заблокирована (@submit.prevent),
// поисковая выдача появится позже (features-слой).
withDefaults(defineProps<{ placeholder?: string }>(), { placeholder: 'Поиск' })
</script>

<template>
  <form class="flex w-full items-center gap-2" @submit.prevent>
    <Input
      type="search"
      :placeholder="placeholder"
      aria-label="Поисковый запрос"
      class="flex-1"
    />
    <Button type="submit" size="icon" aria-label="Искать" title="Искать">
      <SearchIcon class="size-4" />
    </Button>
  </form>
</template>
