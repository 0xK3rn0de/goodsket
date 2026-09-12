import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config

// Архитектура — FSD (Feature-Sliced Design), эволюционный каркас.
// Слои лежат внутри srcDir `app/`:
//   app       → собственные директории Nuxt (app.vue, assets/styles, plugins/, layouts/)
//   pages     → app/pages (роуты Nuxt, тонкие обёртки)
//   widgets   → app/widgets
//   features  → app/features
//   entities  → app/entities
//   shared    → app/shared
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Tailwind CSS v4 (через официальный Vite-плагин)
  vite: {
    plugins: [tailwindcss()],
  },

  // Слой app: глобальные стили приложения (Tailwind + кастомные стили)
  css: ['~/assets/styles/main.css'],

  // Автосканирование UI: ui-кит (shared) и виджеты.
  // pattern '**/*.vue' — сканируем только SFC, чтобы index.ts / use*.ts / interface.ts
  // не регистрировались как компоненты (у них нет default-экспорта → undefined vnode).
  components: [
    '~/components',
    { path: '~/shared/ui', pathPrefix: false, pattern: '**/*.vue' },
    { path: '~/widgets', pathPrefix: false, pattern: '**/*.vue' },
  ],

  // Автосканирование логики: сегменты shared и модели слайсов
  imports: {
    dirs: [
      'shared/config',
      'shared/lib',
      'shared/api',
      'entities/*/model',
      'features/*/model',
    ],
  },
})

