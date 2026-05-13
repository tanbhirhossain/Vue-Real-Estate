<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const selectedType = ref('All Types')

const propertyTypes = ['All Types', 'Penthouse', 'Modern Villa', 'Estate', 'Mansion']

const handleSearch = () => {
  router.push({ 
    path: '/properties', 
    query: { q: searchQuery.value, type: selectedType.value === 'All Types' ? undefined : selectedType.value }
  })
}
</script>

<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Cinematic Visual -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale-[20%] scale-110"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
      <div data-aos="fade-right" data-aos-delay="200" class="flex flex-col justify-center">
        <div class="flex items-center space-x-4 mb-6">
          <div class="h-[1px] w-12 bg-primary"></div>
          <span class="text-[11px] uppercase tracking-[0.5em] text-primary font-bold">Exclusive Collection 2024</span>
        </div>
        
        <h1 class="text-[70px] md:text-[90px] font-serif leading-[0.9] tracking-tighter mb-8 text-white">
          Island<br/><span class="italic text-primary">Luxury</span> Living
        </h1>
        
        <p class="max-w-md text-lg text-white/60 font-light leading-relaxed mb-10">
          Experience the pinnacle of West Coast architecture in Victoria's most prestigious neighborhoods.
        </p>
        
        <!-- AI-Style Search Box -->
        <div class="relative max-w-lg mb-12">
          <div class="absolute -inset-1 bg-gradient-to-r from-primary/50 to-transparent blur-md opacity-20"></div>
          <div class="relative bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl flex items-center shadow-2xl">
            <div class="w-10 h-10 flex items-center justify-center opacity-40">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search by location, style, or vibe..." 
              class="bg-transparent border-none focus:ring-0 text-sm flex-1 placeholder-white/30 px-2 text-white outline-none"
              @keyup.enter="handleSearch"
            >
            <button @click="handleSearch" class="bg-white text-black px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
              Find Homes
            </button>
          </div>
        </div>

        <div class="flex gap-8 text-[10px] tracking-[0.3em] uppercase items-center text-white/60">
          <RouterLink to="/properties" class="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">View Portfolio</RouterLink>
          <div class="w-1 h-1 bg-white/20 rounded-full"></div>
          <RouterLink to="/about" class="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Our Heritage</RouterLink>
        </div>
      </div>

      <!-- Right: Desktop Widgets -->
      <div data-aos="fade-left" data-aos-delay="400" class="hidden lg:flex flex-col justify-end items-end space-y-6">
        <!-- Featured Preview Card -->
        <div class="w-80 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 group cursor-pointer">
          <div class="h-48 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-lg font-serif italic text-white">Oak Bay Waterfront</h3>
              <span class="text-primary font-mono text-sm">$14.5M</span>
            </div>
            <p class="text-[10px] uppercase tracking-widest text-white/40 mb-4">6 Beds • 8 Baths • 8,500 SQFT</p>
            <div class="flex space-x-2">
              <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-tighter text-white/60">Virtual Tour</span>
              <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase tracking-tighter text-white/60">Floor Plan</span>
            </div>
          </div>
        </div>

        <!-- Agent Badge Widget -->
        <div class="w-64 bg-black/60 backdrop-blur-lg border border-white/10 rounded-2xl p-4 flex items-center space-x-4 shadow-xl">
          <div class="w-12 h-12 rounded-full border-2 border-primary p-0.5 overflow-hidden">
            <div class="w-full h-full bg-[url('https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200')] bg-cover bg-center rounded-full"></div>
          </div>
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-white">Julian Vance</h4>
            <p class="text-[10px] text-primary">Principal Advisor</p>
          </div>
          <div class="flex-1 flex justify-end">
            <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" transform="rotate(-90 12 12)"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-12 hidden md:flex items-center space-x-4">
      <div class="flex flex-col space-y-1">
        <span class="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        <div class="h-12 w-[1px] bg-white/20 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-primary -translate-y-full animate-[loading_2s_infinite]"></div>
        </div>
      </div>
    </div>
  </section>
</template>
