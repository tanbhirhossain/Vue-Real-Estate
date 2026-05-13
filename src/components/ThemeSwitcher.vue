<script setup lang="ts">
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()

const themes = [
  { id: 'theme-gold', color: '#d4af37', name: 'Imperial Gold' },
  { id: 'theme-emerald', color: '#10b981', name: 'Royal Emerald' },
  { id: 'theme-royal', color: '#3b82f6', name: 'Deep Royal' }
]
</script>

<template>
  <div class="fixed top-1/2 -right-1 z-50 -translate-y-1/2 group">
    <div class="flex flex-col gap-2 p-2 bg-bg-app rounded-l-2xl shadow-[-10px_0_30px_rgba(0,0,0,0.2)] border border-text-app/10 transition-transform duration-300 translate-x-12 group-hover:translate-x-0">
      <div class="mb-2 text-[10px] uppercase font-bold text-text-app/40 text-center tracking-widest px-2">Palette</div>
      
      <button 
        v-for="theme in themes" 
        :key="theme.id"
        @click="themeStore.setTheme(theme.id)"
        :class="[
          'w-10 h-10 rounded-xl transition-all duration-300 flex items-center justify-center relative overflow-hidden',
          themeStore.currentTheme === theme.id ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'hover:scale-105'
        ]"
        :style="{ backgroundColor: theme.color }"
        :title="theme.name"
      >
        <svg v-if="themeStore.currentTheme === theme.id" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
      </button>

      <div class="mt-2 pt-2 border-t border-text-app/10 flex justify-center">
        <button 
          @click="themeStore.toggleDarkMode" 
          class="p-2 rounded-xl text-text-app/50 hover:text-primary hover:bg-text-app/5 transition-colors"
        >
          <svg v-if="themeStore.isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>
      </div>
    </div>
    
    <!-- Handle -->
    <div class="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 p-2 bg-primary rounded-l-xl text-white shadow-xl cursor-help group-hover:opacity-0 transition-opacity">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M12 16h.01"/><path d="M12 12h.01"/><path d="M12 8h.01"/><path d="M12 4h.01"/></svg>
    </div>
  </div>
</template>
