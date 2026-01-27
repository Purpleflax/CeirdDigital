export const projects = [
  {
    id: 'the-solas-bar',
    name: 'The Solas Bar',
    industry: 'Restaurant & Pub',
    location: 'Galway City',
    summary: 'A warm, inviting pub site with easy table booking and event listings that captures the character of a traditional Irish pub.',
    services: ['Design', 'Local SEO'],
    demoUrl: '/samples/the-solas-bar',
    featured: true,
    isSample: true,
    thumbClass: 'work-thumb-pub'
  },
  {
    id: 'bayside-dental',
    name: 'Bayside Dental Care',
    industry: 'Healthcare',
    location: 'Salthill',
    summary: 'A trustworthy practice site that puts anxious patients at ease and simplifies appointment booking.',
    services: ['Design', 'Forms'],
    demoUrl: '/samples/bayside-dental',
    featured: false,
    isSample: true,
    thumbClass: 'work-thumb-dental'
  },
  {
    id: 'connacht-plumbing',
    name: 'Connacht Plumbing & Heating',
    industry: 'Trades',
    location: 'Galway Area',
    summary: 'A straightforward site that builds trust and makes emergency contact simple for homeowners.',
    services: ['Design', 'Google'],
    demoUrl: '/samples/connacht-plumbing',
    featured: false,
    isSample: true,
    thumbClass: 'work-thumb-trades'
  }
]

export const getFeaturedProject = () => projects.find(p => p.featured)
export const getStandardProjects = () => projects.filter(p => !p.featured)
