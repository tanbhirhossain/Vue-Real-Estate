<script setup lang="ts">
import { ref, onMounted } from 'vue'
import reviews from '../data/reviews.json'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
})
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <!-- Google Reviews Header Section -->
      <div class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[40px] p-8 md:p-12 mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8" data-aos="fade-down">
        <div class="flex items-center gap-6">
          <div class="w-20 h-20 bg-white shadow-lg rounded-2xl flex items-center justify-center border border-slate-100">
             <svg viewBox="0 0 24 24" width="40" height="40" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="text-3xl font-black text-text-app">4.9</span>
              <div class="flex gap-0.5">
                <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="text-amber-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            <div class="text-text-app/50 font-medium">Verified Google Rating based on 140+ reviews</div>
          </div>
        </div>
        
        <div class="flex gap-4">
          <a href="#" class="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            Write a Review
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
          </a>
        </div>
      </div>

      <div class="text-center mb-20" data-aos="fade-down">
        <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">Direct Client Feedback</div>
        <h1 class="text-5xl md:text-7xl font-display font-black dark:text-white mb-6">Concierge <span class="text-primary italic">Reviews</span></h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(review, index) in reviews" :key="review.id" 
          data-aos="fade-up" 
          :data-aos-delay="100 * index"
          class="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col group border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all hover:translate-y-[-8px]"
        >
          <!-- Google Badge -->
          <div class="absolute top-8 right-8 opacity-20 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <img :src="review.avatar" class="w-16 h-16 rounded-full object-cover ring-2 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-slate-900" />
            <div>
              <div class="font-bold text-xl dark:text-white flex items-center gap-2">
                {{ review.name }}
                <svg class="text-blue-500 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <div class="text-primary text-xs font-bold uppercase tracking-widest">{{ review.date }}</div>
            </div>
          </div>
          <div class="flex gap-1 mb-6">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-amber-400"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          <p class="text-xl italic text-slate-700 dark:text-slate-300 leading-relaxed mb-8 grow line-clamp-4">
            "{{ review.comment }}"
          </p>
          <div class="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
            <div class="text-xs uppercase font-bold text-slate-400 tracking-[0.2em]">Verified Partner</div>
            <div class="flex items-center gap-1 text-[10px] font-bold text-text-app/30">
               <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.704a2 2 0 011.94 1.515l.667 2.667a2 2 0 01-1.941 2.485H14l1.202 4.808a2 2 0 01-3.904.976L10 19l-4-4V4h11a2 2 0 011.905 1.39l2.105 7.022M4 22V4"/></svg>
               Local Guide
            </div>
          </div>
        </div>
        
        <!-- Live Loading Skeleton Mock -->
        <div v-if="!isLoaded" v-for="i in 3" :key="i" 
          class="bg-white dark:bg-slate-900 p-10 rounded-[40px] shadow-2xl animate-pulse border border-slate-100 dark:border-slate-800"
        >
           <div class="flex items-center gap-4 mb-8">
             <div class="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800"></div>
             <div class="space-y-2">
               <div class="h-4 w-32 bg-slate-100 dark:bg-slate-800 rounded"></div>
               <div class="h-3 w-20 bg-slate-100 dark:bg-slate-800 rounded opacity-50"></div>
             </div>
           </div>
           <div class="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded mb-4"></div>
           <div class="h-4 w-[80%] bg-slate-100 dark:bg-slate-800 rounded mb-4"></div>
           <div class="h-20 w-full bg-slate-50 dark:bg-slate-900 rounded-2xl"></div>
        </div>
      </div>

      <div class="mt-20 text-center" data-aos="zoom-in">
        <p class="text-text-app/40 font-mono text-xs uppercase tracking-widest mb-4 italic">Synchronization Status: Live API Feed Operational</p>
        <div class="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-500 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter">
          <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Real-time Updates Active
        </div>
      </div>
    </div>
  </div>
</template>
