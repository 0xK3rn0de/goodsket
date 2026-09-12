<script setup lang="ts">
// Слой features, слайс products, сегмент ui — переиспользуемая сетка карточек товара.
// Адаптивная раскладка: 2 колонки на мобильных и до 5 на широких экранах.
import type { Product } from '@/features/product/model/types'
import ProductCard from './product-card.vue'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <ul class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <li v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </li>
  </ul>
</template>
