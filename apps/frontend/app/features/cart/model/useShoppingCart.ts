import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query'
import { getCart, addToCart, removeFromCart } from '~/features/cart/api/cart'
import type { CartResponse } from '~/features/cart/api/cart'

// Query для получения корзины
export const useCartQuery = () => {
  return useQuery<CartResponse>({
    queryKey: ['cart'],
    queryFn: getCart,
  })
}

// Проверка, находится ли товар в корзине
export const useIsProductInCart = (productId: () => string) => {
  const { data: cart } = useCartQuery()
  
  return computed(() => {
    if (!cart.value?.items) return false
    return cart.value.items.some(item => item.productId === productId())
  })
}

// Хук для работы с корзиной (мутации + оптимистичное обновление)
export const useShoppingCart = () => {
  const queryClient = useQueryClient()

  // Добавление товара с оптимистичным обновлением
  const addMutation = useMutation({
    mutationFn: addToCart,
    onMutate: async (productId: string) => {
      // Отменяем исходящие запросы, чтобы они не перезаписали оптимистичное обновление
      await queryClient.cancelQueries({ queryKey: ['cart'] })

      // Сохраняем предыдущее значение для отката
      const previousCart = queryClient.getQueryData<CartResponse>(['cart'])

      // Оптимистично обновляем кэш
      if (previousCart) {
        queryClient.setQueryData<CartResponse>(['cart'], {
          items: [...previousCart.items, { productId, quantity: 1 }],
        })
      }

      return { previousCart }
    },
    onError: (_err, _productId, context) => {
      // Откатываем при ошибке
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart)
      }
    },
    onSettled: () => {
      // После завершения синхронизируем с сервером
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  // Удаление товара с оптимистичным обновлением
  const removeMutation = useMutation({
    mutationFn: removeFromCart,
    onMutate: async (productId: string) => {
      await queryClient.cancelQueries({ queryKey: ['cart'] })

      const previousCart = queryClient.getQueryData<CartResponse>(['cart'])

      if (previousCart) {
        queryClient.setQueryData<CartResponse>(['cart'], {
          items: previousCart.items.filter(item => item.productId !== productId),
        })
      }

      return { previousCart }
    },
    onError: (_err, _productId, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(['cart'], context.previousCart)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] })
    },
  })

  return {
    addProductToCart: addMutation.mutate,
    removeProductFromCart: removeMutation.mutate,
    isAdding: addMutation.isPending,
    isRemoving: removeMutation.isPending,
  }
}
