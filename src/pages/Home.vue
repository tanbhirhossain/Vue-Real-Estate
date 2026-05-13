<script setup lang="ts">
import Hero from '../components/Hero.vue'
import PropertyCard from '../components/PropertyCard.vue'
import properties from '../data/properties.json'
import { useActiveCompany } from '../composables/useCompanyContext'
import reviews from '../data/reviews.json'

const { activeCompany, withCompanySlug } = useActiveCompany()
const featuredProperties = properties.filter(p => p.featured)
const stats = [
  { value: '25+', label: 'Years of Legacy', icon: 'award' },
  { value: '$12B+', label: 'Assets Managed', icon: 'trending-up' },
  { value: '42', label: 'Global Awards', icon: 'star' },
  { value: '99%', label: 'Loyalty Rate', icon: 'users' }
]
</script>

<template>
  <div class="page-home">
    <Hero />

    <!-- Why Éclat Section -->
    <section class="py-32 px-6 md:px-12 bg-text-app/5">
      <div class="max-w-7xl mx-auto text-center mb-20">
        <div data-aos="fade-up" class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">The Experience</div>
        <h2 data-aos="fade-up" data-aos-delay="100" class="text-4xl md:text-5xl font-serif font-bold text-text-app italic">Why Distinguish with Us?</h2>
      </div>

      <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div data-aos="fade-up" data-aos-delay="200" class="p-10 bg-bg-app rounded-[40px] shadow-xl border border-text-app/10 transition-all hover:border-primary group">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
          </div>
          <h3 class="text-2xl font-serif font-bold mb-4 text-text-app">Absolute Discretion</h3>
          <p class="text-text-app/60 leading-relaxed">
            Privacy is our highest currency. We manage high-profile transitions with total anonymity and ironclad security.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" class="p-10 bg-bg-app rounded-[40px] shadow-xl border border-text-app/10 transition-all hover:border-primary group">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          </div>
          <h3 class="text-2xl font-serif font-bold mb-4 text-text-app">Global Reach</h3>
          <p class="text-text-app/60 leading-relaxed">
            With our deep expertise in Victoria and the Island, our network connects you to BC's most desirable markets.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" class="p-10 bg-bg-app rounded-[40px] shadow-xl border border-text-app/10 transition-all hover:border-primary group">
          <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <h3 class="text-2xl font-serif font-bold mb-4 text-text-app">Bespoke Curation</h3>
          <p class="text-text-app/60 leading-relaxed">
            Every property is hand-selected. We don't list thousands; we list the few that truly represent excellence on the Island.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Properties -->
    <section class="py-32 px-6 md:px-12 overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <div data-aos="fade-right" class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">Curated Collection</div>
          <h2 data-aos="fade-right" data-aos-delay="100" class="text-4xl md:text-5xl font-serif font-bold text-text-app italic leading-tight">Featured Masterpieces</h2>
        </div>
        <RouterLink data-aos="fade-left" :to="withCompanySlug('/properties')" class="group flex items-center gap-3 text-lg font-bold text-text-app hover:text-primary transition-colors">
          View All Listings
          <div class="w-12 h-12 rounded-full border border-text-app/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
        </RouterLink>
      </div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PropertyCard 
          v-for="(property, index) in featuredProperties" 
          :key="property.id" 
          :property="property"
          data-aos="fade-up"
          :data-aos-delay="100 * index"
        />
      </div>
    </section>

    <!-- Excellence in Numbers -->
    <section class="py-24 bg-slate-900 border-y border-white/5">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div v-for="stat in stats" :key="stat.label" class="text-center group" data-aos="zoom-in">
          <div class="text-4xl md:text-6xl font-display font-black text-white mb-2 group-hover:text-primary transition-colors duration-500">
            {{ stat.value }}
          </div>
          <div class="text-xs md:text-sm uppercase tracking-[0.2em] text-slate-500 font-bold">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-32 px-6 md:px-12 bg-text-app/5">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-right">
          <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">Voice of the West Coast</div>
          <h2 class="text-4xl md:text-6xl font-serif font-bold text-text-app mb-8 leading-tight italic">What Our Partners Say</h2>
          <p class="text-xl text-text-app/60 mb-12">
            Success in high-end real estate is measured by the quality of the relationships we build. Here is why the Island's most discerning individuals trust us.
          </p>
          <div class="flex gap-4">
             <div class="bg-bg-app p-6 rounded-2xl shadow-xl border border-text-app/10 flex items-center gap-4">
               <div class="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 font-bold">4.9</div>
               <div>
                 <div class="font-bold text-text-app">Google Rating</div>
                 <div class="text-xs text-text-app/50">Based on 500+ Reviews</div>
               </div>
             </div>
          </div>
        </div>

        <div class="space-y-6">
          <div v-for="(review, index) in reviews" :key="review.id" 
            data-aos="fade-up" 
            :data-aos-delay="200 * index"
            class="bg-bg-app p-10 rounded-[40px] shadow-2xl relative overflow-hidden group border border-text-app/10"
          >
            <div class="absolute -top-10 -right-10 text-[160px] font-black text-text-app/5 select-none group-hover:text-primary/5 transition-colors">"</div>
            <div class="flex items-center gap-4 mb-6 relative">
              <img :src="review.avatar" class="w-14 h-14 rounded-full object-cover ring-2 ring-primary ring-offset-4 ring-offset-bg-app" />
              <div>
                <div class="font-bold text-lg text-text-app">{{ review.name }}</div>
                <div class="text-primary text-xs font-bold uppercase tracking-widest">{{ review.date }}</div>
              </div>
            </div>
            <p class="text-lg italic text-text-app/80 leading-relaxed relative">
              "{{ review.comment }}"
            </p>
            <div class="flex gap-1 mt-6">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-primary"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-32 px-6 md:px-12">
      <div class="max-w-7xl mx-auto bg-slate-900 rounded-[60px] p-12 md:p-24 overflow-hidden relative group">
        <!-- Background Decor -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div class="relative z-10 text-center max-w-3xl mx-auto">
          <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready to Elevate Your Living Standard?</h2>
          <p class="text-xl text-slate-400 mb-12">
            Schedule a private consultation with our principal founders and gain early access to off-market luxury assets.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <RouterLink :to="withCompanySlug('/contact')" class="bg-primary hover:bg-primary-hover text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/30">
              Book a Private Tour
            </RouterLink>
            <a :href="'tel:' + activeCompany.phone" class="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
              Call Direct Line
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-home {
  padding-bottom: 0;
}
</style>
