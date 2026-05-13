<script setup lang="ts">
import { useActiveCompany } from '../composables/useCompanyContext'

const { activeCompany } = useActiveCompany()

const milestones = [
  { year: '1998', title: 'The Genesis', desc: 'Julian Sterling founded the agency with a single vision: absolute excellence.' },
  { year: '2005', title: 'Global Expansion', desc: 'Opening our first international branch in London Mayfair.' },
  { year: '2012', title: 'The Billion Dollar Year', desc: 'Reached a cumulative $1B in high-end asset transactions.' },
  { year: '2023', title: 'Agencies of the Year', desc: 'Named world’s most prestigious agency by the Global Real Estate Board.' }
]
</script>

<template>
  <div class="pt-32 pb-20 overflow-hidden">
    <!-- Story Section -->
    <section class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center mb-40">
      <div data-aos="fade-right">
        <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Heritage</div>
        <h1 class="text-5xl md:text-7xl font-display font-black dark:text-white leading-tight mb-8">Crafting Legacies <br /> Since 1998</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          The story of {{ activeCompany.name }} is one of relentless pursuit. We didn't want to be the biggest; we wanted to be the most specialized. 
        </p>
        <p class="text-lg text-slate-500 dark:text-slate-500 leading-relaxed mb-10">
          Over two decades, we have evolved from a boutique Manhattan agency to a global lifestyle brand. Today, we represent not just homes, but the pinnacle of human achievement in architecture and design.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div v-for="(val, label) in activeCompany.stats" :key="label">
            <div class="text-3xl font-display font-bold text-primary">{{ val }}</div>
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{{ label.replace(/([A-Z])/g, ' $1') }}</div>
          </div>
        </div>
      </div>
      <div class="relative" data-aos="fade-left">
        <div class="absolute -top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" class="rounded-[60px] shadow-2xl relative z-10" />
        <div class="absolute -bottom-10 -right-10 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl z-20 border border-slate-100 dark:border-slate-800">
           <div class="text-4xl font-display font-bold text-primary">25</div>
           <div class="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-white">Years of Trust</div>
        </div>
      </div>
    </section>

    <!-- Timeline Animation -->
    <section class="bg-slate-50 dark:bg-slate-950/50 py-32 px-6 md:px-12">
      <div class="max-w-7xl mx-auto text-center mb-20">
        <h2 class="text-4xl font-display font-bold dark:text-white">Evolution of Excellence</h2>
      </div>
      
      <div class="max-w-5xl mx-auto relative">
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
        
        <div v-for="(item, index) in milestones" :key="item.year" 
          class="relative mb-20 md:mb-32 last:mb-0 flex flex-col md:flex-row items-center gap-12"
          :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
          data-aos="fade-up"
        >
          <div class="w-full md:w-1/2 text-center" :class="index % 2 === 0 ? 'md:text-left' : 'md:text-right'">
            <div class="text-6xl font-display font-black text-primary/20 mb-4">{{ item.year }}</div>
            <h3 class="text-2xl font-bold dark:text-white mb-4">{{ item.title }}</h3>
            <p class="text-slate-500 dark:text-slate-400 max-w-sm" :class="index % 2 === 0 ? '' : 'ml-auto'">{{ item.desc }}</p>
          </div>
          
          <div class="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/10 hidden md:block z-10"></div>
          
          <div class="w-full md:w-1/2">
             <div class="h-40 bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
