// Слой features, слайс products, сегмент model — хук для работы с продуктами.
import { useQuery } from '@tanstack/vue-query'
import { getProducts, getProductById } from '../api/products'

// Получить список продуктов
export const useProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })
}

// Получить продукт по ID
export const useProductQuery = (id: () => string) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id()),
    enabled: computed(() => !!id()),
  })
}
