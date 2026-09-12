<script setup lang="ts">
import { BoxIcon, CartIcon, HeartIcon, UserIcon } from '#components'

// Список иконок навигации: клик ведёт на соответствующую страницу.
const links = [
  { to: '/user/profile', label: 'Профиль', icon: UserIcon },
  { to: '/user/cart', label: 'Корзина', icon: CartIcon },
  { to: '/user/orders', label: 'Заказы', icon: BoxIcon },
  { to: '/user/favorites', label: 'Избранное', icon: HeartIcon },
]
</script>

<template>
  <header class="z-10 fixed right-0 left-0 top-0 bg-card px-4 py-3 flex justify-between items-center gap-2 max-w-7xl mx-auto rounded-b-xl">
    <NuxtLink to="/" class="text-3xl font-bold tracking-tight shrink-0 flex">
      <p class="text-accent">Goods</p>
      <p>ket</p>
    </NuxtLink>

    <div class="flex flex-1 justify-center">
      <SearchField class="w-full max-w-xl" />
    </div>

    <!-- TEMP: временная кнопка перехода к продавцу -->
    <Button as-child>
      <NuxtLink to="/seller/dashboard">Стать продавцом</NuxtLink>
    </Button>

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

