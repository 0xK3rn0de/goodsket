import axios from 'axios'

export interface CartItem {
  productId: string
  quantity: number
}

export interface CartResponse {
  items: CartItem[]
}

// Получить содержимое корзины
export const getCart = async (): Promise<CartResponse> => {
  const { data } = await axios.get<CartResponse>('/api/cart')
  return data
}

// Добавить товар в корзину
export const addToCart = async (productId: string): Promise<void> => {
  await axios.post(`/api/cart/${productId}`)
}

// Удалить товар из корзины
export const removeFromCart = async (productId: string): Promise<void> => {
  await axios.delete(`/api/cart/${productId}`)
}
