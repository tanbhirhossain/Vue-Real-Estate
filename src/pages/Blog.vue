<script setup lang="ts">
const posts = [
  { id: 1, title: 'Summer 2024 Market Forecast', date: 'May 12, 2024', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800', cat: 'Analysis' },
  { id: 2, title: 'The Rise of Sustainable Mansions', date: 'April 28, 2024', image: 'https://images.unsplash.com/photo-1464938050744-42dh5a0438cf?auto=format&fit=crop&q=80&w=800', cat: 'Lifestyle' },
  { id: 3, title: 'Manhattan vs Dubai: Where to Invest?', date: 'April 15, 2024', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', cat: 'Investment' }
]
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8" data-aos="fade-down">
        <div>
          <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">The Éclat Journal</div>
          <h1 class="text-5xl md:text-7xl font-display font-black dark:text-white leading-tight">Elite <br /> <span class="text-primary italic">Perspectives</span></h1>
        </div>
        <div class="flex gap-4">
          <button class="bg-primary text-white p-4 rounded-xl shadow-lg font-bold">Latest</button>
          <button class="bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl font-bold dark:text-white">Trends</button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <article v-for="post in posts" :key="post.id" data-aos="fade-up" class="group cursor-pointer">
          <div class="h-[400px] rounded-[40px] overflow-hidden mb-8 relative">
            <img :src="post.image" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute top-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-[10px] uppercase font-bold tracking-widest border border-white/20">
              {{ post.cat }}
            </div>
          </div>
          <div class="space-y-4">
            <div class="text-primary font-bold text-xs uppercase tracking-widest">{{ post.date }}</div>
            <h2 class="text-3xl font-display font-bold dark:text-white group-hover:text-primary transition-colors">{{ post.title }}</h2>
            <div class="flex items-center gap-2 text-slate-500 font-medium">
               Read Insight
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
