<script setup lang="ts">
import { Heart } from '@lucide/vue'
const props = defineProps<{
  isFilled?: boolean
}>()
</script>

<template>
  <Heart :fill="props.isFilled ? '#ff0000' : 'none'" :color="props.isFilled ? '#ff0000' : 'currentColor'"/>
</template>