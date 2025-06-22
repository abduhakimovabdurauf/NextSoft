import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    selectedCategory: 'Barchasi',

    projects: [
      {
        title: 'BizSoft',
        link: 'https://bizsoft.uz/',
        desktopImage: '/bizsoft.png',
        description: 'BizSoft kompaniyasi uchun biznes veb-sayt',
        category: 'Web'
      },
      {
        title: 'GoPharm',
        link: 'https://gopharm.uz/',
        desktopImage: '/gopharm.png',
        description: 'Dorixona tizimi uchun onlayn platforma',
        category: 'Web'
      },
      {
        title: 'BurgerToy',
        link: 'https://burgertoy.uz/',
        desktopImage: '/burgertoy.png',
        description: 'Fast food tarmog‘i uchun zamonaviy sayt',
        category: 'Web'
      },
      {
        title: 'Lotin.uz',
        link: 'https://lotin.uz/',
        desktopImage: '/lotin.png',
        description: 'Lotin yozuvini o‘rganish uchun platforma',
        category: 'Web'
      },
      {
        title: 'ESuv',
        link: 'https://esuv.uz/',
        desktopImage: '/esuv.png',
        description: 'Elektron suv tizimi uchun veb-sayt',
        category: 'Web'
      },
      {
        title: 'Tellock',
        link: 'https://tellock.uz/',
        desktopImage: '/telloc.png',
        description: 'Aqlli qulflar uchun mahsulot taqdimoti sayti',
        category: 'Web'
      },
      {
        title: 'MRTM.uz',
        link: 'https://mrtm.uz/',
        desktopImage: '/mrtm.png',
        description: 'Raqamli texnologiyalar markazi uchun web-sayt',
        category: 'Web'
      },
      {
        title: 'Wecom Ltd',
        link: 'https://wecomltd.com/',
        desktopImage: '/wecom.png',
        description: 'Yonilg‘i, o‘g‘it va metallarni qayta ishlovchi kompaniya uchun sayt',
        category: 'Web'
      },

      // 🔜 Keyinchalik bular qo‘shiladi:
      // {
      //   title: 'SMM Video',
      //   link: '',
      //   desktopImage: '/smm-video.png',
      //   description: 'SMM uchun maxsus video',
      //   category: 'Video'
      // },
    ]
  }),

  getters: {
    categories: (state) => ['Barchasi', ...new Set(state.projects.map(p => p.category))],

    filteredProjects: (state) => {
      return state.selectedCategory === 'Barchasi'
        ? state.projects
        : state.projects.filter(p => p.category === state.selectedCategory)
    }
  },

  actions: {
    setCategory(category) {
      this.selectedCategory = category
    }
  }
})
