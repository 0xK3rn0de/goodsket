<script setup lang="ts">
// Слой app — базовый layout: общий каркас страницы (shell).
// Блоки интерфейса (шапка, подвал, сайдбар) — слайсы слоя widgets.
import { TheHeader } from '~/widgets/header'
</script>

<template>
  <div class="flex min-h-screen flex-col relative">
    <TheHeader />
    <slot />
  </div>
</template>
