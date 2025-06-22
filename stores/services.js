import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    selectedCategory: 'Barchasi',
    services: [
        {
            title: 'Landing Page',
            category: 'Web',
            price: '1mln so`m dan boshlab',
            priceValue: 1000000,
            features: [
            'Bitta sahifali tuzilma',
            'Mijozni jalb qiluvchi dizayn',
            'Responsiv dizayn',
            'Kontakt forma',
            'Ijtimoiy tarmoqlar havolasi',
            'CTA tugmalari'
            ]
        },
        {
            title: 'Vizitka Sayt',
            category: 'Web',
            price: '2mln so`m dan boshlab',
            priceValue: 2000000,
            features: [
            "Kompaniya haqida ma'lumot sahifasi",
            'Kontaktlar va joylashuv',
            'Logotip va banner joylashuvi',
            'Ijtimoiy tarmoqlar integratsiyasi',
            'Mobil moslashuvchanlik',
            '1-3 ta sahifadan iborat'
            ]
        },
        {
            title: 'Koʻp Sahifali Sayt',
            category: 'Web',
            price: '5mln so`m dan boshlab',
            priceValue: 5000000,
            features: [
            'Har bir bo‘lim uchun alohida sahifa',
            'Murakkab navigatsiya',
            'SEO tayyor dizayn',
            'Formalar va galereyalar',
            'Xizmatlar, portfolio, blog bo‘limlari',
            'Responsiv dizayn'
            ]
        },
        {
            title: 'Onlayn Doʻkon',
            category: 'Web',
            price: '7mln so`m dan boshlab',
            priceValue: 7000000,
            features: [
            'Mahsulotlar katalogi',
            'Savatcha va buyurtma shakli',
            'To‘lov tizimlari integratsiyasi',
            'Admin panel qo‘shilishi mumkin (+$100)',
            'Mahsulotlar filtr va qidiruvi',
            'Mobil uchun moslashuv'
            ]
        },
        {
            title: 'CRM Tizimi',
            category: 'Tizimlar',
            price: '10mln so`m dan boshlab',
            priceValue: 10000000,
            features: [
            'Mijozlar bazasini yuritish',
            'Buyurtmalarni boshqarish',
            'Xodimlar boshqaruvi',
            'Statistika va hisobotlar',
            'Foydalanuvchilar rollari',
            'Kirish va ruxsat tizimi',
            'Admin panel narxga kiritilgan'
            ]
        },
        {
            title: 'Admin Panel',
            category: 'Tizimlar',
            price: '+1mln so`m',
            priceValue: 1000000,
            features: [
            'Maxsus boshqaruv paneli',
            'Maʼlumotlar tahriri va boshqaruvi',
            'Foydalanuvchi autentifikatsiyasi',
            'Yopiq kirish sahifasi',
            'Saytga to‘liq integratsiya'
            ]
        },
        {
            title: 'Telegram Bot',
            category: 'Botlar',
            price: '2mln so`m dan boshlab',
            priceValue: 2000000,
            features: [
            'Avtomatlashtirilgan javoblar',
            'Buyurtma va so‘rov shakllari',
            'Admin panel bilan integratsiya',
            'Statistikalar va foydalanuvchi nazorati',
            'Inline tugmalar, media qo‘llab-quvvatlovi',
            'Har qanday biznesga moslashtirish'
            ]
        },
        {
            title: 'UI/UX Dizayn',
            category: 'Design',
            price: '1.5mln so`m dan boshlab',
            priceValue: 1500000,
            features: [
            'Figma yoki Adobe XD formatida',
            'Mobil va desktop versiya',
            'Interaktiv prototip',
            'Brendga mos dizayn konsepsiyasi',
            'Foydalanuvchi tajribasi (UX) optimallashtirilgan',
            'Developer-friendly eksport'
            ]
        },
        {
            title: 'Grafik Dizayn (To‘plam)',
            category: 'Design',
            price: '500 ming so`mdan boshlab',
            priceValue: 500000,
            features: [
            'Logo dizayn',
            'Vizitka va flayer',
            'Prezentatsiya slaydlar',
            'Brandbook yaratish',
            'SMM post dizaynlari',
            'Menyu va prevyu dizaynlar'
            ]
        },
        {
            title: 'Logo Dizayn',
            category: 'Design',
            price: '500 ming so`mdan boshlab',
            priceValue: 500000,
            features: [
            'Minimalistik va zamonaviy dizayn',
            'Rang variantlari',
            'Vector formatda eksport (SVG, PDF)',
            '2-3 ta variantdan tanlash',
            'Qayta tahrirlash imkoniyati'
            ]
        },
        {
            title: 'Brandbook',
            category: 'Design',
            price: '5mln so`mdan boshlab',
            priceValue: 5000000,
            features: [
            'Logo foydalanish qoidalari',
            'Rang palitrasi',
            'Shriftlar va ikonlar',
            'Grafik elementlar',
            'To‘liq PDF ko‘rinishida'
            ]
        },
        {
            title: 'Motion Dizayn',
            category: 'Video',
            price: '2mln so`m dan boshlab',
            priceValue: 2000000,
            features: [
            'Intro/outro videolar',
            'Reklama videolari',
            'SMM uchun harakatli postlar',
            'Video animatsiya',
            'Brendingizga mos harakatlar'
            ]
        },
        {
            title: '3D Dizayn',
            category: 'Design',
            price: '3mln so`m dan boshlab',
            priceValue: 3000000,
            features: [
            'Mahsulot modellari',
            'Interyer/eksteryer vizualizatsiya',
            '3D animatsiyalar',
            'Reklama uchun 3D sahnalar',
            'Blender formatida yoki video/picture'
            ]
        },
        {
            title: 'Hosting Xizmatlari',
            category: 'Web',
            price: '100 ming so`mdan boshlab',
            priceValue: 100000,
            features: [
            '1 yilgacha hosting',
            'Domen ulash xizmatlari',
            'SSL sertifikat',
            '24/7 texnik qo‘llab-quvvatlash',
            'Saytni yuklab berish va ulash'
            ]
        },
        {
            title: 'Video Montaj',
            category: 'Video',
            price: '2mln so`m dan boshlab',
            priceValue: 2000000,
            features: [
            'Reklama, vlog, ijtimoiy tarmoq videolari',
            'Rang koreksiyasi va sountrack qo‘shish',
            'Subtitrlash va animatsiyalar',
            'Full HD yoki 4K eksport',
            'Mijozga mos formatda yetkazib berish'
            ]
        },
        {
            title: 'Video Tasvirga Olish',
            category: 'Video',
            price: '2.5mln so`m dan boshlab',
            priceValue: 2500000,
            features: [
            '1-2 kamerali professional suratga olish',
            'Yoritish jihozlari bilan ta’minlash',
            'Joyda yoki studiyada tasvirga olish',
            'Mikrofon bilan sifatli audio yozish',
            'Video montaj bilan to‘liq paket mumkin'
            ]
        },
        {
            title: 'Mobil Ilova (Android/iOS)',
            category: 'Mobile',
            price: '5mln so`m dan boshlab',
            priceValue: 5000000,
            features: [
            'Platformaga mos ilova (Android/iOS)',
            'Registratsiya va login tizimi',
            'Push xabarnomalar',
            'Maʼlumotlar bilan ishlash (API)',
            'Responsiv interfeys',
            'App Store yoki Play Marketga yuklash'
            ]
        },
        {
            title: 'Biznes uchun Mobil Ilova',
            category: 'Mobile',
            price: '6mln so`m dan boshlab',
            priceValue: 6000000,
            features: [
            'Mahsulotlar va xizmatlar ro‘yxati',
            'Buyurtma berish va kuzatish',
            'To‘lov tizimlari integratsiyasi',
            'Foydalanuvchi profillari',
            'Admin panel bilan bog‘lanish',
            'Statistikalar va hisobotlar'
            ]
        },
        {
            title: 'Mobil CRM Ilova',
            category: 'Mobile',
            price: '10mln so`m dan boshlab',
            priceValue: 10000000,
            features: [
            'Xodimlar va mijozlar ro‘yxati',
            'Buyurtmalar boshqaruvi',
            'Ichki bildirishnoma va eslatmalar',
            'Maʼlumotlar bilan real vaqt rejimida ishlash',
            'Offline rejimda foydalanish imkoniyati',
            'Admin panel bilan sinxronizatsiya'
            ]
        }
    ]
  }),

  getters: {
    categories: (state) => ['Barchasi', ...new Set(state.services.map(s => s.category))],

    filteredServices: (state) => {
      const filtered = state.selectedCategory === 'Barchasi'
        ? state.services
        : state.services.filter(service => service.category === state.selectedCategory);
      return filtered.sort((a, b) => a.priceValue - b.priceValue);
    }
  },

  actions: {
    setCategory(category) {
      this.selectedCategory = category
    }
  }
})