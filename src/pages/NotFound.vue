<template>
  <div class="h-screen flex items-center justify-center px-6 text-center">
    <div data-aos="fade-up">
      <div class="text-primary font-display font-black text-[120px] md:text-[200px] leading-none opacity-10">404</div>
      <div class="-mt-12 md:-mt-20 relative z-10">
        <h1 class="text-4xl md:text-5xl font-display font-bold dark:text-white mb-6">Asset Not Located</h1>
        <p class="text-xl text-slate-500 max-w-md mx-auto mb-10">The property or page you are looking for has been moved or is restricted from public viewing.</p>
        <RouterLink to="/" class="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg inline-block shadow-xl shadow-primary/20 hover:scale-105 transition-all">
          Return to Sanctuary
        </RouterLink>
      </div>
    </div>
  </div>
</template>
