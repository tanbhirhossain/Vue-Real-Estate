import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: true,
    currentTheme: 'theme-gold', // theme-gold, theme-emerald, theme-royal
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode))
    },
    setTheme(theme: string) {
      this.currentTheme = theme
      localStorage.setItem('themeColor', theme)
    },
    initTheme() {
      const savedDark = localStorage.getItem('darkMode')
      const savedTheme = localStorage.getItem('themeColor')
      
      if (savedDark !== null) {
        this.isDarkMode = JSON.parse(savedDark)
      }
      if (savedTheme) {
        this.currentTheme = savedTheme
      }
    }
  }
})
