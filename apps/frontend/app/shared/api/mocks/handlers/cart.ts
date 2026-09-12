// Слой shared, сегмент api/mocks — хендлеры корзины.
import { http, HttpResponse, delay } from 'msw'
import { cartStore } from '../data/cart'

export const cartHandlers = [
  // GET /api/cart — получить содержимое корзины
  http.get('/api/cart', async () => {
    await delay(200)
    return HttpResponse.json({ items: cartStore.items })
  }),

  // POST /api/cart/:productId — добавить товар в корзину
  http.post('/api/cart/:productId', async ({ params }) => {
    await delay(200)
    const productId = params.productId as string
    
    const existingItem = cartStore.items.find(item => item.productId === productId)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartStore.items.push({ productId, quantity: 1 })
    }
    
    return HttpResponse.json({ success: true })
  }),

  // DELETE /api/cart/:productId — удалить товар из корзины
  http.delete('/api/cart/:productId', async ({ params }) => {
    await delay(200)
    const productId = params.productId as string
    
    const index = cartStore.items.findIndex(item => item.productId === productId)
    
    if (index !== -1) {
      cartStore.items.splice(index, 1)
    }
    
    return HttpResponse.json({ success: true })
  }),
]
