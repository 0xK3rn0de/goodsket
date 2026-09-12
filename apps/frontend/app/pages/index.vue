<script setup lang="ts">
// Слой pages — тонкий роут /. Сетка товаров через API.
import ProductGrid from "~/features/product/ui/product-grid.vue";
import { useProductsQuery } from "~/features/product/model/useProducts";

const { data: products, isPending, isError } = useProductsQuery();
</script>

<template>
  <!-- Загрузка -->
  <div v-if="isPending" class="flex justify-center py-12">
    <div
      class="size-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
    />
  </div>

  <!-- Ошибка -->
  <div v-else-if="isError" class="text-center py-12 text-muted-foreground">
    Не удалось загрузить товары. Попробуйте позже.
  </div>

  <!-- Сетка товаров -->
  <ProductGrid v-else-if="products" :products="products" />
</template>
