<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col relative">
    <MainHeader />
    <main
      class="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 md:px-0 pt-20 pb-8"
    >
      <slot />
    </main>
  </div>
</template>
