<script setup lang="ts">
import { ref } from 'vue'

const faqs = ref([
  { q: 'How do I access off-market listings?', a: 'Due to the high-profile nature of many of our clients, a significant portion of our portfolio is off-market. Access is granted following a private consultation and identity verification.', open: true },
  { q: 'Do you offer international asset management?', a: 'Yes, we provide full concierge asset management for international investors, including maintenance, security, and staffing for luxury properties globally.', open: false },
  { q: 'What are your commission structures?', a: 'Our commissions are bespoke and reflective of the specialized service we provide. We operate on a tier-based system that ensures unparalleled marketing exposure for every asset.', open: false },
  { q: 'Can you assist with residency and legalities?', a: 'We partner with the world’s leading legal firms specialized in international real estate and residency programs to ensure a seamless transition for our clients.', open: false }
])
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
    <div class="text-center mb-20" data-aos="fade-down">
      <h1 class="text-5xl font-display font-black dark:text-white mb-6">Concierge Support</h1>
      <p class="text-xl text-slate-500">Frequently asked questions about our bespoke services.</p>
    </div>

    <div class="space-y-6">
      <div v-for="(faq, i) in faqs" :key="i" 
        data-aos="fade-up" 
        :data-aos-delay="100 * i"
        class="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm"
      >
        <button 
          @click="faq.open = !faq.open"
          class="w-full p-8 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <span class="text-xl font-bold dark:text-white">{{ faq.q }}</span>
          <div :class="['w-8 h-8 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-transform duration-300', faq.open ? 'rotate-180 bg-primary text-white border-primary' : '']">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </button>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="faq.open" class="px-8 pb-8 text-lg text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-6">
            {{ faq.a }}
          </div>
        </transition>
      </div>
    </div>

    <div class="mt-20 p-12 bg-primary/5 rounded-[40px] border border-primary/10 text-center" data-aos="zoom-in">
       <h3 class="text-2xl font-bold dark:text-white mb-4">Still have questions?</h3>
       <p class="text-slate-500 mb-8">Our private advisors are available 24/7 to assist with your specific requirements.</p>
       <RouterLink to="/contact" class="bg-slate-950 dark:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold inline-block hover:bg-primary transition-all">Speak to an Advisor</RouterLink>
    </div>
  </div>
</template>
