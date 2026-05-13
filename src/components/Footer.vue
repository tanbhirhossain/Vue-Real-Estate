<script setup lang="ts">
import company from '../data/company.json'

const currentYear = new Date().getFullYear()

const footerLinks = [
  {
    title: 'Experience',
    links: [
      { name: 'Portfolio', path: '/properties' },
      { name: 'Concierge', path: '/services' },
      { name: 'Insights', path: '/blog' },
      { name: 'Private Collection', path: '/properties' }
    ]
  },
  {
    title: 'The Agency',
    links: [
      { name: 'Our Heritage', path: '/about' },
      { name: 'Master Advisors', path: '/agents' },
      { name: 'Global Network', path: '/about' },
      { name: 'Careers', path: '/about' }
    ]
  }
]

const stats = [
  { label: 'Available Assets', value: '142', suffix: '+', separator: true },
  { label: 'Avg Year ROI', value: '14.2', suffix: '%', separator: true },
  { label: 'Cities', value: '24', suffix: '', separator: false }
]

const socials = [
  { name: 'FB', icon: 'FB' },
  { name: 'IG', icon: 'IG' },
  { name: 'LN', icon: 'LN' }
]
</script>

<template>
  <footer class="bg-bg-app border-t border-text-app/10 pt-24 pb-12 px-6 md:px-12 relative overflow-hidden transition-colors duration-500">
    <!-- Background Texture/Gradient Overlay -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <!-- Brand Info -->
        <div class="space-y-10">
          <RouterLink to="/" class="flex flex-col group">
             <span class="text-3xl font-serif italic tracking-tighter leading-none text-primary group-hover:scale-105 transition-transform">Victoria</span>
             <span class="text-[10px] tracking-[0.4em] uppercase opacity-60 mt-1 text-text-app">Real Estate Canada</span>
          </RouterLink>
          <p class="text-text-app/40 leading-relaxed text-sm max-w-xs">
            Defining the next generation of West Coast living through architectural mastery and exclusive asset management in Victoria.
          </p>
          <div class="flex space-x-4">
            <a v-for="social in socials" :key="social.name" href="#" class="w-10 h-10 border border-text-app/10 rounded-full flex items-center justify-center text-text-app/60 hover:text-primary hover:border-primary transition-all">
              <span class="text-[10px] font-bold">{{ social.icon }}</span>
            </a>
          </div>
        </div>

        <!-- Dynamic Links -->
        <div v-for="section in footerLinks" :key="section.title">
          <h4 class="text-text-app text-[11px] uppercase tracking-[0.3em] font-bold mb-10">{{ section.title }}</h4>
          <ul class="space-y-5">
            <li v-for="link in section.links" :key="link.name">
              <RouterLink :to="link.path" class="text-text-app/40 hover:text-text-app transition-colors text-sm font-medium">{{ link.name }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter Section -->
        <div>
           <h4 class="text-text-app text-[11px] uppercase tracking-[0.3em] font-bold mb-10">Newsletter</h4>
           <div class="space-y-6">
             <p class="text-text-app/40 text-sm italic">Join our private circle for off-market updates.</p>
             <div class="relative">
                <input type="email" placeholder="Private Email" class="w-full bg-text-app/5 border border-text-app/10 rounded-xl px-4 py-4 text-text-app text-sm focus:outline-none focus:border-primary transition-all">
                <button class="absolute right-2 top-2 bg-text-app text-bg-app p-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
             </div>
           </div>
        </div>
      </div>

      <!-- Bottom Stats Bar Component -->
      <div class="border-t border-text-app/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
        <div class="flex items-center space-x-8 md:space-x-16">
          <div v-for="(stat, idx) in stats" :key="stat.label" class="flex items-center gap-8 md:gap-16">
            <div>
              <p class="text-[9px] uppercase tracking-widest text-text-app/40 mb-2">{{ stat.label }}</p>
              <p class="text-2xl font-mono tracking-tighter font-light text-text-app">
                {{ stat.value }}<span class="text-primary">{{ stat.suffix }}</span>
              </p>
            </div>
            <div v-if="idx < stats.length - 1" class="h-10 w-[1px] bg-text-app/10"></div>
          </div>
        </div>
        
        <div class="text-[9px] tracking-[0.3em] uppercase text-text-app/30 flex items-center space-x-6">
          <span>&copy; {{ currentYear }} {{ company.name }}</span>
          <span class="w-1 h-1 bg-text-app/10 rounded-full"></span>
          <a href="#" class="hover:text-text-app transition-colors">Privacy</a>
          <span class="w-1 h-1 bg-text-app/10 rounded-full"></span>
          <a href="#" class="hover:text-text-app transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
