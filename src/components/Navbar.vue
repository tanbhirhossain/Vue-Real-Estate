<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const currentTime = ref('')

const isHomePage = computed(() => route.path === '/')

const navLinks = [
  { name: 'Portfolio', path: '/properties' },
  { name: 'Concierge', path: '/services' },
  { name: 'Insights', path: '/blog' },
  { name: 'About', path: '/about' }
]

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true,
    timeZone: 'America/New_York' 
  }) + ' NY'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

let timer: number
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateTime()
  timer = window.setInterval(updateTime, 60000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  clearInterval(timer)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
    :class="[isScrolled ? 'h-16 bg-bg-app/80 backdrop-blur-md px-6 border-b border-text-app/10' : 'h-24 bg-black/10 backdrop-blur-[2px] px-10']"
  >
    <div class="max-w-7xl mx-auto h-full flex items-center justify-between">
      <RouterLink to="/" class="flex flex-col group">
        <span class="text-2xl font-serif italic tracking-tighter leading-none text-primary group-hover:scale-105 transition-transform">Victoria</span>
        <span 
          class="text-[10px] tracking-[0.4em] uppercase mt-1 transition-colors duration-500"
          :class="[(!isScrolled && isHomePage) ? 'text-white/60' : 'text-text-app/60']"
        >
          Real Estate Canada
        </span>
      </RouterLink>

      <!-- Desktop Links -->
      <div class="hidden lg:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-semibold">
        <RouterLink 
          v-for="link in navLinks" 
          :key="link.path" 
          :to="link.path" 
          class="relative transition-colors py-2 group"
          :class="[(!isScrolled && isHomePage) ? 'text-white/70 hover:text-white' : 'text-text-app/70 hover:text-text-app']"
        >
          {{ link.name }}
          <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
        </RouterLink>
      </div>

    <!-- Action Area -->
    <div class="flex items-center space-x-6">
      <div 
        class="hidden md:flex items-center space-x-3 text-[11px] font-mono transition-colors duration-500"
        :class="[(!isScrolled && isHomePage) ? 'text-white/80' : 'text-text-app/80']"
      >
        <div class="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
        <span>{{ currentTime }}</span>
      </div>

      <button 
        @click="themeStore.toggleDarkMode" 
        class="p-2 transition-colors duration-500"
        :class="[(!isScrolled && isHomePage) ? 'text-white/60 hover:text-primary' : 'text-text-app/60 hover:text-primary']"
      >
        <svg v-if="themeStore.isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
      </button>

      <button 
        class="hidden sm:block px-6 py-2 border rounded-full text-[10px] uppercase tracking-[0.2em] transition-all font-bold"
        :class="[(!isScrolled && isHomePage) ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-text-app/20 text-text-app hover:bg-text-app hover:text-bg-app']"
      >
        Contact Agent
      </button>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer lg:hidden group transition-colors"
          :class="[(!isScrolled && isHomePage) ? 'bg-white/10 border-white/20' : 'bg-text-app/5 border-text-app/10']"
        >
          <div 
            class="w-5 h-[1px] relative transition-all" 
            :class="[isMobileMenuOpen ? 'bg-transparent' : ((!isScrolled && isHomePage) ? 'bg-white' : 'bg-text-app')]"
          >
            <div 
              class="absolute w-5 h-[1px] transition-all" 
              :class="[isMobileMenuOpen ? 'top-1/2 -rotate-45' : '-top-1.5', (!isScrolled && isHomePage) ? 'bg-white' : 'bg-text-app']"
            ></div>
            <div 
              class="absolute w-5 h-[1px] transition-all" 
              :class="[isMobileMenuOpen ? 'top-1/2 rotate-45' : 'top-1.5', (!isScrolled && isHomePage) ? 'bg-white' : 'bg-text-app']"
            ></div>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-bg-app z-[150] flex flex-col items-center justify-center lg:hidden">
        <button @click="isMobileMenuOpen = false" class="absolute top-8 right-8 text-text-app/60 hover:text-text-app">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="flex flex-col items-center space-y-8">
          <RouterLink 
            v-for="link in navLinks" 
            :key="link.path" 
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="text-4xl font-serif italic text-text-app hover:text-primary transition-colors"
          >
            {{ link.name }}
          </RouterLink>
          <button class="mt-8 px-8 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl">
            Request Access
          </button>
        </div>
      </div>
    </transition>
  </nav>
</template>
