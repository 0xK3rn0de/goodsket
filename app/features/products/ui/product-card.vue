<script setup lang="ts">
// Слой features, слайс products, сегмент ui — карточка товара.
// Вёрстка: карусель фотографий, продавец, название, цены (основная цена
// зачёркивается при наличии скидки), рейтинг, отзывы и кнопка «В корзину».
import type { Product } from '@/features/products/model/types'
import type { CarouselApi } from '@/shared/ui/carousel'

const props = defineProps<{ product: Product }>()

// Отображаемые цены: при скидке текущая — цена со скидкой.
const currentPrice = computed(() => props.product.discountPrice ?? props.product.price)
const hasDiscount = computed(() => props.product.discountPrice != null)

const priceFormatter = new Intl.NumberFormat('ru-RU')

function formatPrice(value: number): string {
  return `${priceFormatter.format(value)} ₽`
}

// Склонение слова «отзыв»: 1 отзыв, 2 отзыва, 5 отзывов.
function pluralizeReviews(count: number): string {
  const mod100 = count % 100
  if (count % 10 === 1 && mod100 !== 11) return 'отзыв'
  if (count % 10 >= 2 && count % 10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'отзыва'
  return 'отзывов'
}

// Состояние карусели: embla-API приходит через событие init-api компонента Carousel.
const carouselApi = ref<CarouselApi>()
const selectedSnap = ref(0)
const snapCount = computed(() => carouselApi.value?.scrollSnapList().length ?? 0)

function onInitApi(api: CarouselApi) {
  carouselApi.value = api

  const onSelect = () => {
    selectedSnap.value = api.selectedScrollSnap()
  }

  onSelect()
  api.on('select', onSelect)
  api.on('reInit', onSelect)
}

function scrollToSnap(index: number) {
  carouselApi.value?.scrollTo(index)
}
</script>

<template>
  <article
    class="group relative flex h-full flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
  >
    <!-- Карусель фотографий товара -->
    <Carousel :opts="{loop: true}" @init-api="onInitApi">
      <CarouselContent class="m-0">
        <CarouselItem
          v-for="(image, index) in product.images"
          :key="index"
          class="p-0"
        >
          <div class="aspect-square bg-muted">
            <img
              :src="image"
              :alt="`${product.title} — фото ${index + 1}`"
              loading="lazy"
              class="size-full object-cover"
            >
          </div>
        </CarouselItem>
      </CarouselContent>

      <template v-if="product.images.length > 1">
        <!-- Стрелки появляются при наведении на карточку; active-вариант сохраняет
             вертикальное центрирование (-translate-y-1/2), чтобы при нажатии не было прыжка:
             press-эффект кнопки (translate-y-px) иначе подменяет смещение центрирования -->
        <CarouselPrevious
          class="active:-translate-y-1/2! hidden md:flex left-2 bg-background/80 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
        />
        <CarouselNext
          class="active:-translate-y-1/2! hidden md:flex right-2 bg-background/80 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
        />

        <!-- Точки-индикаторы: клик переключает фото -->
        <div class="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          <button
            v-for="n in snapCount"
            :key="n"
            type="button"
            :aria-label="`Перейти к фото ${n}`"
            :aria-current="n - 1 === selectedSnap ? 'true' : undefined"
            class="size-2 rounded-full transition-colors"
            :class="n - 1 === selectedSnap ? 'bg-primary' : 'bg-primary/30 hover:bg-primary/60'"
            @click="scrollToSnap(n - 1)"
          />
        </div>
      </template>
    </Carousel>

    <div class="flex flex-col gap-1.5 p-3">
      <!-- Продавец -->
      <span class="truncate text-xs text-muted-foreground">{{ product.sellerName }}</span>

      <!-- Название -->
      <h3 class="line-clamp-2 min-h-10 text-sm leading-5 font-medium">{{ product.title }}</h3>

      <!-- Цена: при скидке основная цена зачёркнута -->
      <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span class="text-lg font-bold tracking-tight">{{ formatPrice(currentPrice) }}</span>
        <span
          v-if="hasDiscount"
          class="text-sm text-muted-foreground line-through"
        >{{ formatPrice(product.price) }}</span>
      </div>

      <!-- Рейтинг и отзывы; mb-auto прижимает кнопку к низу карточки в сетке -->
      <div class="mb-auto flex items-center gap-1 text-sm">
        <StarIcon class="size-4 shrink-0 fill-amber-400 text-amber-400" />
        <span class="font-medium">{{ product.rating }}</span>
        <span class="truncate text-muted-foreground">
          · {{ product.reviewsCount }} {{ pluralizeReviews(product.reviewsCount) }}
        </span>
      </div>

      <!-- Обработчик добавления появится вместе с интеграцией корзины -->
      <Button class="mt-1 w-full">В корзину</Button>
    </div>
  </article>
</template>

