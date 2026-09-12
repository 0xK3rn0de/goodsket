<script setup lang="ts">
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="mx-auto flex w-full flex-1 flex-col px-4 md:px-0 relative">
      <SellerHeader />
      <slot />
    </main>
  </SidebarProvider>
</template>
