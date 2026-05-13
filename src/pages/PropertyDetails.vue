<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import properties from '../data/properties.json'

const route = useRoute()
const router = useRouter()
const propertyId = parseInt(route.params.id as string)

const property = computed(() => properties.find(p => p.id === propertyId))
const mainImage = ref('')

onMounted(() => {
  if (!property.value) {
    router.push('/404')
    return
  }
  mainImage.value = property.value.image
})

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(price)
}
</script>

<template>
  <div v-if="property" class="pt-24 pb-20 bg-bg-app">
    <!-- Image Gallery -->
    <section class="h-[60vh] md:h-[80vh] px-6 md:px-12 mb-12">
      <div class="h-full w-full rounded-[40px] overflow-hidden relative group">
        <img :src="mainImage" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
        
        <!-- Gallery Overlays -->
        <div class="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/80 via-transparent to-transparent">
          <div class="text-white text-shadow-premium">
            <div class="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-3">Signature Estate</div>
            <h1 class="text-4xl md:text-6xl font-serif font-bold italic leading-tight">{{ property.title }}</h1>
            <p class="flex items-center gap-2 text-white/70 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ property.location }}
            </p>
          </div>
          <div class="flex gap-2">
            <button class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
            </button>
            <button class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Grid -->
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
      <!-- Left Column: Primary Details -->
      <div class="lg:col-span-2 space-y-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-text-app/10">
          <div v-for="spec in [{l:'Beds',v:property.beds, i:'bed'},{l:'Baths',v:property.baths, i:'bath'},{l:'Sqft',v:property.sqft.toLocaleString(), i:'maximize'},{l:'Type',v:property.type, i:'home'}]" :key="spec.l" class="space-y-1">
             <div class="text-[10px] uppercase font-bold text-text-app/40 tracking-widest">{{ spec.l }}</div>
             <div class="text-xl font-bold text-text-app">{{ spec.v }}</div>
          </div>
        </div>

        <div class="space-y-6">
          <h2 class="text-3xl font-serif font-bold text-text-app italic">Architectural Context</h2>
          <p class="text-lg text-text-app/60 leading-relaxed">
            {{ property.description }}
          </p>
        </div>

        <div class="space-y-8">
          <h2 class="text-3xl font-serif font-bold text-text-app italic">Exceptional Amenities</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="amenity in property.amenities" :key="amenity" class="flex items-center gap-3 p-5 bg-text-app/5 rounded-2xl group hover:bg-primary transition-all">
              <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <span class="font-semibold text-text-app group-hover:text-white transition-colors">{{ amenity }}</span>
            </div>
          </div>
        </div>

        <!-- Mini Slideshow for details -->
        <div class="grid grid-cols-2 gap-4">
            <img v-for="(img, i) in property.images.slice(1)" :key="i" :src="img" class="rounded-3xl h-64 w-full object-cover shadow-lg hover:scale-[1.02] transition-transform cursor-pointer border border-text-app/10" @click="mainImage = img" />
        </div>
      </div>

      <!-- Right Column: Inquiry Card & Stats -->
      <div class="space-y-8">
        <div class="sticky top-28 bg-bg-app p-10 rounded-[40px] shadow-2xl border border-text-app/10">
          <div class="text-[10px] uppercase font-bold text-text-app/40 tracking-widest mb-2">Guide Price</div>
          <div class="text-4xl font-bold text-text-app mb-8">{{ formatPrice(property.price) }}</div>
          
          <div class="space-y-6">
            <div class="space-y-4">
               <input type="text" placeholder="Your Full Name" class="w-full bg-text-app/5 border border-text-app/10 rounded-xl px-5 py-4 text-text-app" />
               <input type="email" placeholder="Your Private Email" class="w-full bg-text-app/5 border border-text-app/10 rounded-xl px-5 py-4 text-text-app" />
               <textarea rows="4" placeholder="How may we assist you?" class="w-full bg-text-app/5 border border-text-app/10 rounded-xl px-5 py-4 text-text-app resize-none"></textarea>
            </div>
            
            <button class="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
              Inquire Privately
            </button>
            <p class="text-[10px] text-center text-text-app/40 uppercase tracking-tight">Your data is handled with ironclad discretion.</p>
          </div>

          <div class="mt-8 pt-8 border-t border-text-app/10">
            <div class="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=12" class="w-12 h-12 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-bg-app" />
              <div>
                <div class="font-bold text-text-app">Victoria Dubois</div>
                <div class="text-xs text-primary font-bold">Principal Advisor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
