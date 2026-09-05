<script setup lang="ts">
import { BoxIcon, CartIcon, HeartIcon, UserIcon } from '#components'

// Слой widgets — слайс header: шапка сайта.
// Список иконок навигации: клик ведёт на соответствующую страницу.
const links = [
  { to: '/profile', label: 'Профиль', icon: UserIcon },
  { to: '/cart', label: 'Корзина', icon: CartIcon },
  { to: '/orders', label: 'Заказы', icon: BoxIcon },
  { to: '/favorites', label: 'Избранное', icon: HeartIcon },
]
</script>

<template>
  <header class="z-10 fixed right-0 left-0 top-0 bg-background border-b border-neutral-800 px-4 py-3 flex justify-between items-center gap-2">
    <NuxtLink to="/" class="text-2xl font-bold tracking-tight shrink-0">Goodket</NuxtLink>

    <div class="flex flex-1 justify-center">
      <SearchField class="w-full max-w-md" />
    </div>

    <nav aria-label="Основная навигация" class="shrink-0">
      <ul class="grid grid-cols-4 gap-2 xl:gap-0">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :aria-label="link.label"
            :title="link.label"
            class="flex flex-col items-center justify-center gap-0.5 rounded-lg px-2 xl:px-1 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            exact-active-class="bg-muted text-foreground"
          >
            <component :is="link.icon" class="size-5" />
            <!-- Подпись видна только на ширинах ≥1280px -->
            <span class="hidden text-xs leading-none xl:block">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

