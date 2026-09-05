<script setup lang="ts">
import { TheHeader } from '~/widgets/header'
</script>

<template>
  <div class="flex min-h-screen flex-col relative">
    <TheHeader />
    <slot />
  </div>
</template>
