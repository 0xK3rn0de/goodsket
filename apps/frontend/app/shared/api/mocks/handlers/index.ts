// Слой shared, сегмент api/mocks — экспорт всех хендлеров.
import { productsHandlers } from './products'
import { cartHandlers } from './cart'

export const handlers = [...productsHandlers, ...cartHandlers]
