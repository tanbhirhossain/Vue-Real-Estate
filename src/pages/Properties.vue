<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import PropertyCard from '../components/PropertyCard.vue'
import properties from '../data/properties.json'

const route = useRoute()
const viewMode = ref('grid') // 'grid' or 'list'
const searchQuery = ref((route.query.q as string) || '')
const selectedType = ref((route.query.type as string) || 'All Types')
const sortBy = ref('Newest')
const minPrice = ref<number | null>(null)
const maxPrice = ref<number | null>(null)
const minBeds = ref<number | null>(null)
const minBaths = ref<number | null>(null)

const propertyTypes = ['All Types', 'Waterfront Estate', 'Modern Estate', 'Luxury Penthouse']
const sortOptions = ['Newest', 'Price: High to Low', 'Price: Low to High', 'Sqft: Largest']

const filteredProperties = computed(() => {
  let result = [...properties]
  
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.location.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q)
    )
  }
  
  if (selectedType.value !== 'All Types') {
    result = result.filter(p => p.type === selectedType.value)
  }

  if (minPrice.value !== null) {
    result = result.filter(p => p.price >= (minPrice.value as number))
  }

  if (maxPrice.value !== null) {
    result = result.filter(p => p.price <= (maxPrice.value as number))
  }

  if (minBeds.value !== null) {
    result = result.filter(p => p.beds >= (minBeds.value as number))
  }

  if (minBaths.value !== null) {
    result = result.filter(p => p.baths >= (minBaths.value as number))
  }
  
  // Sorting
  if (sortBy.value === 'Price: High to Low') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortBy.value === 'Price: Low to High') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortBy.value === 'Sqft: Largest') {
    result.sort((a, b) => b.sqft - a.sqft)
  }
  
  return result
})

onMounted(() => {
  // Sync state if route changes
  if (route.query.q) searchQuery.value = route.query.q as string
  if (route.query.type) selectedType.value = route.query.type as string
})
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <!-- Headers -->
      <div class="mb-12" data-aos="fade-down">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-app italic mb-4">Exclusive <span class="text-primary">Portfolio</span></h1>
        <p class="text-text-app/50 max-w-2xl text-lg">
          Browse our worldwide collection of luxury real estate, curated specifically for the most discerning international investors.
        </p>
      </div>

      <!-- Filters Bar -->
      <div class="bg-bg-app stalky top-24 z-40 p-6 rounded-3xl shadow-xl border border-text-app/10 mb-12" data-aos="fade-up">
        <div class="flex flex-col lg:flex-row gap-6 items-center">
          <div class="relative w-full lg:w-1/3">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search location or style..."
              class="w-full bg-text-app/5 border-none rounded-xl px-5 py-3.5 text-text-app focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <svg class="absolute right-4 top-1/2 -translate-y-1/2 text-text-app/40" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full lg:flex-1">
            <select v-model="selectedType" class="bg-text-app/5 border-none rounded-xl px-4 py-3.5 text-text-app focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none">
              <option v-for="type in propertyTypes" :key="type" :value="type">{{ type }}</option>
            </select>
            
            <div class="flex items-center gap-2 bg-text-app/5 rounded-xl px-4 py-3.5">
              <span class="text-[10px] uppercase font-bold text-text-app/40 whitespace-nowrap">Price Min</span>
              <input v-model.number="minPrice" type="number" placeholder="0" class="bg-transparent border-none p-0 w-full text-sm text-text-app focus:ring-0" />
            </div>

            <div class="flex items-center gap-2 bg-text-app/5 rounded-xl px-4 py-3.5">
              <span class="text-[10px] uppercase font-bold text-text-app/40 whitespace-nowrap">Price Max</span>
              <input v-model.number="maxPrice" type="number" placeholder="Any" class="bg-transparent border-none p-0 w-full text-sm text-text-app focus:ring-0" />
            </div>

            <select v-model="minBeds" class="bg-text-app/5 border-none rounded-xl px-4 py-3.5 text-text-app focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none">
              <option :value="null">Any Beds</option>
              <option v-for="n in 8" :key="n" :value="n">{{ n }}+ Beds</option>
            </select>

            <select v-model="minBaths" class="bg-text-app/5 border-none rounded-xl px-4 py-3.5 text-text-app focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none">
              <option :value="null">Any Baths</option>
              <option v-for="n in 8" :key="n" :value="n">{{ n }}+ Baths</option>
            </select>
          </div>
          
          <div class="flex items-center gap-4 w-full lg:w-auto">
            <select v-model="sortBy" class="bg-text-app/5 border-none rounded-xl px-4 py-3.5 text-text-app focus:ring-2 focus:ring-primary/20 cursor-pointer appearance-none w-full lg:w-48">
              <option v-for="opt in sortOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>

            <div class="flex items-center gap-2">
              <button 
                @click="viewMode = 'grid'" 
                :class="['p-3.5 rounded-xl transition-all', viewMode === 'grid' ? 'bg-primary text-white shadow-lg' : 'bg-text-app/5 text-text-app/40 hover:text-text-app']"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
              </button>
              <button 
                @click="viewMode = 'list'" 
                :class="['p-3.5 rounded-xl transition-all', viewMode === 'list' ? 'bg-primary text-white shadow-lg' : 'bg-text-app/5 text-text-app/40 hover:text-text-app']"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Properties Grid -->
      <div v-if="filteredProperties.length > 0" :class="[viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'flex flex-col gap-8']">
        <PropertyCard 
          v-for="prop in filteredProperties" 
          :key="prop.id" 
          :property="prop"
          :class="{ 'flex lg:flex-row !h-auto max-h-[300px]': viewMode === 'list' }"
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-40 bg-text-app/5 rounded-[60px] border-2 border-dashed border-text-app/10">
        <div class="w-20 h-20 bg-text-app/10 rounded-full flex items-center justify-center mx-auto mb-6 text-text-app/40">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>
        <h3 class="text-2xl font-serif font-bold text-text-app italic mb-2">No Matching Assets Found</h3>
        <p class="text-text-app/50 max-w-sm mx-auto">Try adjusting your filters or contact our concierge for off-market opportunities.</p>
        <button @click="searchQuery = ''; selectedType = 'All Types'" class="mt-8 text-primary font-bold underline underline-offset-4">Reset All Filters</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stalky {
  position: sticky;
}
</style>
