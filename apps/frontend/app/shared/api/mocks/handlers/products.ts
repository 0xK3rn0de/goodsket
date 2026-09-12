// Слой shared, сегмент api/mocks — хендлеры продуктов.
import { http, HttpResponse, delay } from 'msw'
import { mockProducts } from '../data/products'

export const productsHandlers = [
  // GET /api/products — получить список продуктов
  http.get('/api/products', async () => {
    await delay(300) // Имитация задержки сети
    return HttpResponse.json(mockProducts)
  }),

  // GET /api/products/:id — получить продукт по ID
  http.get('/api/products/:id', async ({ params }) => {
    await delay(200)
    const product = mockProducts.find(p => p.id === params.id)
    
    if (!product) {
      return new HttpResponse(null, { status: 404 })
    }
    
    return HttpResponse.json(product)
  }),
]
