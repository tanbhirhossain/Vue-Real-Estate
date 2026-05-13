<script setup lang="ts">
import agents from '../data/agents.json'
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-down">
        <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">The Professionals</div>
        <h1 class="text-5xl md:text-7xl font-display font-black dark:text-white leading-tight">Mastering the <br /> <span class="text-primary italic">High-End Market</span></h1>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div v-for="agent in agents" :key="agent.id" 
          data-aos="fade-up" 
          class="bg-white dark:bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row group"
        >
          <div class="w-full md:w-1/2 relative overflow-hidden">
            <img :src="agent.image" :alt="agent.name" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 h-[400px] md:h-auto" />
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <div class="bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-[.2em] px-3 py-1 rounded-full w-fit mb-4">{{ agent.role }}</div>
            <h3 class="text-3xl font-display font-bold dark:text-white mb-2">{{ agent.name }}</h3>
            <div class="text-slate-500 mb-8 font-medium italic">{{ agent.specialty }}</div>
            
            <div class="space-y-4 mb-8">
               <div class="flex items-center gap-3">
                 <div class="w-2 h-2 rounded-full bg-primary"></div>
                 <span class="dark:text-slate-300">{{ agent.experience }} Experience</span>
               </div>
               <div class="flex items-center gap-3">
                 <div class="w-2 h-2 rounded-full bg-primary"></div>
                 <span class="dark:text-slate-300">Certified Luxury Specialist</span>
               </div>
            </div>

            <div class="flex gap-4">
               <a href="#" class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">L</a>
               <a href="#" class="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">I</a>
            </div>
            
            <button class="mt-10 bg-slate-900 dark:bg-slate-800 text-white py-4 px-8 rounded-2xl font-bold hover:bg-primary transition-all">
              Private Inquiry
            </button>
          </div>
        </div>
      </div>
      
      <!-- Recruitment Call -->
      <div class="mt-32 text-center border-t border-slate-100 dark:border-slate-800 pt-20" data-aos="zoom-in">
         <h2 class="text-3xl font-display font-medium dark:text-slate-300 italic mb-8">Are you an elite real estate professional?</h2>
         <button class="border-2 border-primary text-primary px-10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">Join the Inner Circle</button>
      </div>
    </div>
  </div>
</template>
