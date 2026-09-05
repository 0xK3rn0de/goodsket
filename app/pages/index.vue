<script setup lang="ts">
// Слой pages — тонкий роут /. Сетка товаров на демо-данных,
// реальная выдача появится вместе с api каталога.
import ProductGrid from '~/features/products/ui/product-grid.vue'
import { mockProducts } from '~/features/products/model/mock'
</script>

<template>
  <main class="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 md:px-0 pt-20 pb-8">
    <ProductGrid :products="mockProducts" />
  </main>
</template>
