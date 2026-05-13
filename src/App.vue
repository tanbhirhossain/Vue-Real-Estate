<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import { useThemeStore } from './stores/theme'
import { useActiveCompany } from './composables/useCompanyContext'

const themeStore = useThemeStore()
const { activeCompany } = useActiveCompany()
const scrollProgress = ref(0)
const isLoading = ref(true)

const updateScrollProgress = () => {
  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
  scrollProgress.value = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}

watch([() => themeStore.isDarkMode, () => themeStore.currentTheme], ([isDark, theme]) => {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Remove other theme classes
  const themes = ['theme-gold', 'theme-emerald', 'theme-royal']
  themes.forEach(t => document.documentElement.classList.remove(t))
  document.documentElement.classList.add(theme)
}, { immediate: true })

onMounted(() => {
  themeStore.initTheme()
  window.addEventListener('scroll', updateScrollProgress)
  
  // Simulate initial loading for premium feel
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div :class="[themeStore.currentTheme, themeStore.isDarkMode ? 'dark' : '']" class="min-h-screen bg-bg-app text-text-app transition-colors duration-300">
    <!-- Initial Loading Screen -->
    <transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-[200] bg-[#050505] flex flex-col items-center justify-center">
        <div class="flex flex-col items-center mb-8 text-center">
           <span class="text-5xl font-serif italic tracking-tighter text-primary animate-pulse">{{ activeCompany.name.split(' ')[0] }}</span>
           <span class="text-[12px] tracking-[0.5em] uppercase opacity-40 mt-2 text-white">{{ activeCompany.name.split(' ').slice(1).join(' ') }}</span>
        </div>
        <div class="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </transition>

    <!-- Scroll Progress -->
    <div class="fixed top-0 left-0 w-full h-[2px] z-[110] pointer-events-none">
      <div class="h-full bg-primary transition-all duration-300" :style="{ width: scrollProgress + '%' }"></div>
    </div>

    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <Footer />
    <ThemeSwitcher />
    
    <!-- Floating CTA for conversion -->
    <div class="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <button class="bg-primary hover:bg-primary-hover text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group">
        <span class="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Inquiry Hotline</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </button>
    </div>
  </div>
</template>

<style>
@keyframes loading {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-hover);
}
</style>
