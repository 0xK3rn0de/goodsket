// Слой shared, сегмент api/mocks — in-memory хранилище корзины.
import type { CartItem } from '~/features/cart/api/cart'

// In-memory хранилище корзины (между перезагрузками сбрасывается)
export const cartStore: { items: CartItem[] } = {
  items: [],
}
