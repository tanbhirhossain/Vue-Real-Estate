<script setup lang="ts">
import { ref } from 'vue'
import company from '../data/company.json'

const isSubmitted = ref(false)
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  interest: 'Buying Property',
  message: ''
})

const handleSubmit = () => {
  // Simulate API call
  console.log('Form submitted:', formData.value)
  isSubmitted.value = true
  
  // Reset after 5 seconds OR provide a close button
  setTimeout(() => {
    // isSubmitted.value = false
  }, 10000)
}
</script>

<template>
  <div class="pt-32 pb-20 px-6 md:px-12 min-h-screen relative overflow-hidden">
    <!-- Success Message Overlay -->
    <transition name="fade-scale">
      <div v-if="isSubmitted" class="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg-app/80 backdrop-blur-xl">
        <div class="bg-bg-app border border-primary/20 p-12 md:p-20 rounded-[60px] shadow-2xl max-w-2xl w-full text-center relative overflow-hidden" data-aos="zoom-in">
          <div class="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          
          <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          
          <h2 class="text-4xl md:text-5xl font-serif font-bold text-text-app italic mb-6">Request Received</h2>
          <p class="text-xl text-text-app/60 mb-10 leading-relaxed">
            Thank you for reaching out to Victoria Dubois. Our private concierge team has been notified of your interest and a senior associate will contact you shortly via the provided email.
          </p>
          
          <button @click="isSubmitted = false" class="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl shadow-primary/20">
            Back to Site
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </transition>

    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-20">
        <div data-aos="fade-right">
          <div class="text-primary font-bold text-sm uppercase tracking-[0.3em] mb-4">Contact Us</div>
          <h1 class="text-5xl md:text-7xl font-display font-black dark:text-white leading-tight mb-8">Begin Your <br /> <span class="text-primary italic">Transformation</span></h1>
          <p class="text-xl text-slate-600 dark:text-slate-400 mb-12">
            Discretion is our hallmark. Complete the form below, and one of our dedicated principals will reach out to you within the hour for a private consultation.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold uppercase text-slate-400 tracking-widest mb-1">Email us</div>
                <div class="text-xl font-bold dark:text-white underline">{{ company.email }}</div>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold uppercase text-slate-400 tracking-widest mb-1">Call direct</div>
                <div class="text-xl font-bold dark:text-white underline">{{ company.phone }}</div>
              </div>
            </div>

            <div class="flex items-start gap-6 group">
              <div class="w-14 h-14 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="text-xs font-bold uppercase text-slate-400 tracking-widest mb-1">HQ Address</div>
                <div class="text-lg font-medium dark:text-blue-100">{{ company.address }}</div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <form @submit.prevent="handleSubmit" class="bg-white dark:bg-slate-900 p-12 rounded-[50px] shadow-2xl border border-slate-100 dark:border-slate-800 space-y-8">
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-2">
                <label class="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-1">First Name</label>
                <input v-model="formData.firstName" required type="text" class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 dark:text-white" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-1">Last Name</label>
                <input v-model="formData.lastName" required type="text" class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 dark:text-white" />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-1">Email Address</label>
              <input v-model="formData.email" required type="email" class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 dark:text-white" />
            </div>

            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-1">Interest</label>
              <select v-model="formData.interest" class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 dark:text-white cursor-pointer select-none">
                <option>Buying Property</option>
                <option>Selling Portfolio</option>
                <option>Investment Advisory</option>
                <option>Other / General Inquiry</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-[10px] uppercase font-bold text-slate-400 tracking-widest ml-1">Message</label>
              <textarea v-model="formData.message" required rows="5" class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-6 py-4 dark:text-white resize-none"></textarea>
            </div>

            <button type="submit" class="w-full bg-primary hover:bg-primary-hover text-white py-6 rounded-2xl font-bold text-xl shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 active:translate-y-0">
              Submit Private Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
