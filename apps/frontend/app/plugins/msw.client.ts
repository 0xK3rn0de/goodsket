// Плагин MSW для Nuxt — инициализация в браузере.
import { setupWorker } from 'msw/browser'
import { handlers } from '~/shared/api/mocks/handlers'

export default defineNuxtPlugin(async () => {
  // MSW работает только в браузере
  if (import.meta.client && process.dev) {
    const worker = setupWorker(...handlers)
    
    await worker.start({
      onUnhandledRequest: 'bypass', // Пропускать необработанные запросы
    })
    
    console.log('[MSW] Mock Service Worker запущен')
  }
})
