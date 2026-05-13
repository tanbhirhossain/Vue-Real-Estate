import { computed } from 'vue'
import { useRoute } from 'vue-router'
import companyData from '../data/company.json'

export interface CompanyInfo {
  name: string
  slug: string
  tagline: string
  description: string
  address: string
  phone: string
  email: string
  hours: Record<string, string>
  socials: Record<string, string>
  stats: Record<string, string>
  awards: string[]
}

const companies = (Array.isArray(companyData) ? companyData : [companyData]) as CompanyInfo[]

export const companyRegistry = companies
export const defaultCompany = companies[0]

export const getCompanyBySlug = (slug?: string) => {
  if (!slug) return undefined
  const normalizedSlug = slug.toLowerCase()
  return companies.find((company) => company.slug.toLowerCase() === normalizedSlug)
}

export const useActiveCompany = () => {
  const route = useRoute()

  const activeCompany = computed(() => {
    const routeSlug = route.params.companySlug as string | undefined
    return getCompanyBySlug(routeSlug) ?? defaultCompany
  })

  const withCompanySlug = (path = '/') => {
    const normalized = path.startsWith('/') ? path : `/${path}`
    const cleanPath = normalized === '/' ? '' : normalized
    return `/${activeCompany.value.slug}${cleanPath}`
  }

  return {
    activeCompany,
    withCompanySlug
  }
}
