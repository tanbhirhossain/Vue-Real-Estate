<template>
  <div class="animate-pulse bg-text-app/10 rounded-2xl" :style="{ width: width, height: height }"></div>
</template>

<script setup lang="ts">
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '20px' }
})
</script>
