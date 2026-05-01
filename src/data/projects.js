export const projects = [
  {
    id: 'bereva',
    name: 'Bereva',
    industry: 'Local Business',
    location: 'Galway',
    summary: 'A clean, professional website built to establish a strong online presence and make it easy for customers to get in touch.',
    services: ['Design', 'Build', 'Local SEO'],
    url: 'https://bereva.ie',
    isExternal: true,
    featured: true,
    isSample: false,
    thumbClass: 'work-thumb-bereva'
  }
]

export const getFeaturedProject = () => projects.find(p => p.featured)
export const getStandardProjects = () => projects.filter(p => !p.featured)
