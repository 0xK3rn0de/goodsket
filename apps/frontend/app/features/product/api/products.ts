// Слой features, слайс products, сегмент api — запросы к продуктам.
import axios from 'axios'
import type { Product } from '../model/types'

// Получить список продуктов
export const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>('/api/products')
  return data
}

// Получить продукт по ID
export const getProductById = async (id: string): Promise<Product> => {
  const { data } = await axios.get<Product>(`/api/products/${id}`)
  return data
}
