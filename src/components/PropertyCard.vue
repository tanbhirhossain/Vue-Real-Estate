<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useActiveCompany } from '../composables/useCompanyContext'

interface Property {
  id: number
  title: string
  type: string
  price: number
  location: string
  beds: number
  baths: number
  sqft: number
  image: string
  featured: boolean
}

defineProps<{
  property: Property
}>()

const { withCompanySlug } = useActiveCompany()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <div class="luxury-card rounded-[32px] overflow-hidden group h-full flex flex-col relative transition-all duration-700 hover:rotate-1">
    <!-- Featured Badge -->
    <div v-if="property.featured" class="absolute top-6 left-6 z-10 glass px-4 py-1.5 rounded-full text-[9px] uppercase tracking-ultra font-bold text-white shadow-xl">
      Signature Collection
    </div>

    <!-- Image Container -->
    <div class="relative h-72 overflow-hidden">
      <img 
        :src="property.image" 
        :alt="property.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      
      <button class="absolute top-6 right-6 p-3 glass rounded-full text-white hover:text-primary transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </button>

      <div class="absolute bottom-6 left-6 right-6 flex justify-between items-end">
         <span class="text-primary font-mono font-bold text-lg text-shadow-premium">
          {{ formatPrice(property.price) }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-8 grow flex flex-col">
      <div class="mb-6">
        <div class="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{{ property.type }}</div>
        <h3 class="text-2xl font-serif italic text-text-app group-hover:text-primary transition-colors leading-tight">{{ property.title }}</h3>
        <p class="text-text-app/40 text-[11px] uppercase tracking-widest flex items-center gap-2 mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {{ property.location }}
        </p>
      </div>

      <div class="grid grid-cols-3 gap-4 py-6 border-y border-text-app/10 text-text-app/60">
        <div class="text-center">
          <span class="block text-text-app font-mono text-sm">{{ property.beds }}</span>
          <span class="text-[9px] uppercase tracking-tighter opacity-40">Beds</span>
        </div>
        <div class="text-center border-x border-text-app/10">
          <span class="block text-text-app font-mono text-sm">{{ property.baths }}</span>
          <span class="text-[9px] uppercase tracking-tighter opacity-40">Baths</span>
        </div>
        <div class="text-center">
          <span class="block text-text-app font-mono text-sm">{{ property.sqft.toLocaleString() }}</span>
          <span class="text-[9px] uppercase tracking-tighter opacity-40">SqFt</span>
        </div>
      </div>

      <div class="mt-auto pt-6 flex items-center justify-between">
        <div class="flex items-center gap-2">
           <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
           <span class="text-[9px] uppercase tracking-widest text-text-app/60 font-bold">In-Market</span>
        </div>
        <RouterLink 
          :to="withCompanySlug('/properties/' + property.id)"
          class="text-text-app text-[10px] uppercase tracking-[0.2em] font-bold hover:text-primary transition-colors flex items-center gap-2 group/btn"
        >
          View Assets
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover/btn:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
