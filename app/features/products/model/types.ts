// Слой features, слайс products, сегмент model — типы данных слайса.

export interface Product {
  id: number
  /** Фотографии товара */
  images: string[]
  /** Название продавца */
  sellerName: string
  /** Название товара */
  title: string
  /** Основная цена, ₽ */
  price: number
  /** Цена со скидкой; отсутствие значения — скидки нет */
  discountPrice?: number | null
  /** Рейтинг от 0 до 5 */
  rating: number
  /** Количество отзывов */
  reviewsCount: number
}
