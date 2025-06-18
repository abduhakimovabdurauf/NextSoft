<template>
<div class="max-w-screen overflow-x-hidden md:overflow-x-visible">
  <div class="bg-white text-gray-800 font-poppins max-w-screen">
    <navbar/>
    <section id="home" class="relative h-[90vh] bg-gray-50 overflow-hidden flex items-center">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <NuxtImg
        src="/background.jpg"
        alt="Fon rasmi"
        class="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0"
      />
      <div data-aos="fade-right" class="relative z-20 px-4 sm:px-10 lg:px-20 w-full max-w-7xl text-white">
        <div class="text-left">
          <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:leading-[55px] md:leading-[65px]">
            Biznesingiz uchun zamonaviy va professional veb-saytlar!
          </p>
          <p class="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 max-w-2xl mx-auto sm:mx-0">
            Brendingizga mos, mobil qurilmalarga moslashtirilgan va mijozlar uchun qulay saytlar yaratamiz.
          </p>

          <a href="#services" class="inline-block bg-black text-white text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition duration-300 shadow-md">
            Xizmatlarimizni ko‘rish
          </a>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="relative lg:min-h-screen flex flex-col justify-between md:flex-row items-center bg-white py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center"
    >
      <div class="z-10 max-w-2xl text-left bg-white/90 p-6">
        <h2 data-aos="fade-down" class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Biz haqimizda
        </h2>
        <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed">
          Biz — zamonaviy texnologiyalarga asoslangan, innovatsion fikrlaydigan jamoamiz. Maqsadimiz — tadbirkorlar, kichik va o‘rta biznes egalari uchun
          o‘z brendlariga mos veb-saytlar, landing pagelar va onlayn do‘konlar yaratishdir.
        </p>
        <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
          Har bir loyiha ustida individual yondashuv, UX/UI dizayn, mobil moslik va tez ishlashga alohida e’tibor qaratamiz.
          Saytingiz — bu sizning onlayn vizitkangiz!
        </p>
        <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          2023-yildan buyon biz o‘nlab loyihalarni amalga oshirdik va mijozlarimiz bizning yondashuvimizdan mamnun.
          Endi navbat sizning biznesingizda!
        </p>
      </div>

      <div data-aos="fade-left" class="hidden xl:block 2xl:mr-48">
        <NuxtImg
          src="/about-background.png"
          alt="Biz haqimizda"
          width="600"
          height="600"
          class="object-cover floating-image"
        />

      </div>

    </section>


    <section id="portfolio" class="py-20 sm:px-8 lg:px-16 bg-gray-50 px-2">
      <h2 data-aos="fade-down" class="text-3xl font-bold mb-10 text-center">Portfolio</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="site in sites"
          :key="site.link"
          data-aos="fade-right"
          class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          <a :href="site.link" target="_blank" class="block">
            <div class="flex flex-col items-center">
              <NuxtImg
                :src="site.desktopImage"
                alt="Desktop screenshot"
                class="rounded-md w-full"
              />
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-lg font-semibold">{{ site.title }}</h3>
              <p class="text-sm text-gray-600">{{ site.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>




    <section id="services" class="py-20 sm:px-8 lg:px-16 bg-gray-50">
      <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Xizmatlarimiz</h2>

      <!-- Kategoriya filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-10">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all',
            selectedCategory === category
              ? 'bg-green-500 text-white'
              : 'bg-gray-200 text-gray-800 hover:bg-green-100'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Xizmatlar kartalari -->
      <div class="grid gap-10 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="(card, index) in filteredServices"
        :key="index"
        data-aos="fade-up"
        class="bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col p-8 min-h-[400px] w-full rounded-2xl shadow-xl">
        
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ card.title }}</h3>
        
        <ul class="space-y-3 text-gray-700 mb-6 text-base leading-relaxed">
          <li
            v-for="(item, i) in card.features"
            :key="i"
            class="flex items-start gap-2 before:content-['✔'] before:text-green-500 before:text-lg">
            {{ item }}
          </li>
        </ul>
        
        <p class="font-bold text-lg text-green-500 mt-auto text-right">{{ card.price }}</p>
        
        <button
          @click="openModal(card.title)"
          class="mt-4 bg-green-500 cursor-pointer text-white py-2 px-4 rounded transition-all duration-300 hover:bg-green-600">
          Buyurtma berish
        </button>
      </div>
    </div>



      <OrderModal :visible="modalVisible" :selectedService="selectedService" @close="modalVisible = false" />
    </section>

    
    <section class="py-20 px-6 bg-[#f8fbff]">
      <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Jarayon qanday bo'ladi ?</h2>
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div data-aos="fade-right" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">1</div>
          <i class="bx bx-user-check text-[48px] text-neutral-700 mb-4 leading-none"></i>

          <p class="text-base font-medium text-neutral-800">Kelishuv</p>
        </div>

        <div data-aos="fade-down" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">2</div>
          <i class="bx bx-file text-[48px] text-neutral-700 mb-4 leading-none"></i>
          <p class="text-base font-medium text-neutral-800">Rejalashtirish</p>
        </div>

        <div data-aos="fade-left" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">3</div>
          <i class="bx bx-code-alt text-[48px] text-neutral-700 mb-4 leading-none"></i>
          <p class="text-base font-medium text-neutral-800">Dizayn & Dasturlash</p>
        </div>

        <div data-aos="fade-right" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">4</div>
          <i class="bx bx-like text-[48px] text-neutral-700 mb-4 leading-none"></i>
          <p class="text-base font-medium text-neutral-800">Sifat Tekshiruvi</p>
        </div>

        <div data-aos="fade-up" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">5</div>
          <i class="bx bx-cog text-[48px] text-neutral-700 mb-4 leading-none"></i>
          <p class="text-base font-medium text-neutral-800 leading-snug text-center">Tuzatish &<br>Yaxshilash</p>
        </div>

        <div data-aos="fade-left" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
          <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">6</div>
          <i class="bx bx-flag text-[48px] text-neutral-700 mb-4 leading-none"></i>
          <p class="text-base font-medium text-neutral-800">Saytingiz Tayyor!</p>
        </div>
      </div>
    </section>


    <contact />



    <footer data-aos="fade-up" class="bg-neutral-900 text-white py-10 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- 1. Kompaniya -->
        <div>
          <h2 class="text-xl font-bold mb-2">NextSoft</h2>
          <p class="text-sm text-neutral-400">Innovatsion yechimlar, veb va mobil ilovalar ishlab chiqish bo‘yicha yetakchi kompaniya.</p>
        </div>

        <!-- 2. Havolalar -->
        <div>
          <h3 class="text-lg font-semibold mb-3">Sayt bo‘limlari</h3>
          <ul class="space-y-2 text-neutral-300 text-sm">
            <li><a href="#home" class="hover:text-white">Bosh sahifa</a></li>
            <li><a href="#about" class="hover:text-white">Biz haqimizda</a></li>
            <li><a href="#services" class="hover:text-white">Xizmatlar</a></li>
            <li><a href="#contact" class="hover:text-white">Aloqa</a></li>
          </ul>
        </div>

        <!-- 3. Ijtimoiy tarmoqlar -->
        <div>
          <h3 class="text-lg font-semibold mb-3">Biz bilan bog‘laning</h3>
          <div class="flex flex-col gap-2 text-sm text-neutral-300">
            <div class="flex items-center gap-2">
              <i class="bx bxs-phone text-lg"></i>
              <a href="tel:+998900400103">+998 900 40 01 03</a>
            </div>
            <div class="flex items-center gap-2">
              <i class="bx bxl-telegram text-lg"></i>
              <a href="https://t.me/Jamoliddinovich92" target="_blank" class="hover:text-white">t.me/Jamoliddinovich92</a>
            </div>
            <div class="flex items-center gap-2">
              <i class="bx bx-envelope text-lg"></i>
              <span><strong>Email:</strong> <a href="mailto:manfisstar1992@gmail.com">manfisstar1992@gmail.com</a></span>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        © 2025 NextSoft. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  </div>
</div>

</template>

<script setup>
import { ref } from 'vue'
import OrderModal from '~/components/OrderModal.vue'

useHead({
  title: 'Zamonaviy va professional IT xizmatlari | Biznesingiz uchun yechim',
  meta: [
    { name: 'description', content: 'Brendingizga mos, mobilga moslashtirilgan va foydalanuvchiga qulay veb-saytlar yaratamiz. Biznesingizni raqamli dunyoga olib chiqamiz.' },
    { name: 'keywords', content: 'sayt yaratish, web sayt yaratish, landing page, landing page yaratish, chiroyli sayt yaratish, onlayn do‘kon, web development, mobilga mos saytlar' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Zamonaviy va professional veb-saytlar' },
    { property: 'og:description', content: 'Biznesingiz uchun moslashtirilgan websaytlar' },
    { property: 'og:image', content: '/background.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://sizningsaytingiz.uz' }
  ],
  link: [
    { rel: 'canonical', href: 'https://sizningsaytingiz.uz' }
  ]
})

const sites = [
  {
    title: 'BizSoft',
    link: 'https://bizsoft.uz/',
    desktopImage: '/bizsoft.png',
    description: 'BizSoft kompaniyasi uchun biznes veb-sayt',
  },
  {
    title: 'GoPharm',
    link: 'https://gopharm.uz/',
    desktopImage: '/gopharm.png',
    description: 'Dorixona tizimi uchun onlayn platforma',
  },
  {
    title: 'BurgerToy',
    link: 'https://burgertoy.uz/',
    desktopImage: '/burgertoy.png',
    description: 'Fast food tarmog‘i uchun zamonaviy sayt',
  },
  {
    title: 'Lotin.uz',
    link: 'https://lotin.uz/',
    desktopImage: '/lotin.png',
    description: 'Lotin yozuvini o‘rganish uchun platforma',
  },
  {
    title: 'ESuv',
    link: 'https://esuv.uz/',
    desktopImage: '/esuv.png',
    description: 'Elektron suv tizimi uchun veb-sayt',
  },
  {
    title: 'Tellock',
    link: 'https://tellock.uz/',
    desktopImage: '/telloc.png',
    description: 'Aqlli qulflar uchun mahsulot taqdimoti sayti',
  },
  // {
  //   title: 'Quva Turizm',
  //   link: 'https://quvaturizm.uz/',
  //   desktopImage: '/quvaturizm.png',
  //   description: 'Turizmni rivojlantirish bo‘yicha rasmiy sayt',
  // },
  {
    title: 'MRTM.uz',
    link: 'https://mrtm.uz/',
    desktopImage: '/mrtm.png',
    description: 'Raqamli texnologiyalar markazi uchun web-sayt',
  },
  {
    title: 'Wecom Ltd',
    link: 'https://wecomltd.com/',
    desktopImage: '/wecom.png',
    description: 'Yonilg‘i, o‘g‘it va metallarni qayta ishlovchi kompaniya uchun sayt',
  }
]



const modalVisible = ref(false)
const selectedService = ref('')

const openModal = (serviceName) => {
  selectedService.value = serviceName
  modalVisible.value = true
}

const services = [
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

];


const selectedCategory = ref('Barchasi');

const filteredServices = computed(() => {
  const filtered = selectedCategory.value === 'Barchasi'
    ? services
    : services.filter(service => service.category === selectedCategory.value);

  return filtered.sort((a, b) => a.priceValue - b.priceValue);
});

const categories = computed(() => ['Barchasi', ...new Set(services.map(s => s.category))]);


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth !important;
}
.floating-image {
  width: 500px;
  height: 500px;
  object-fit: cover;
  animation: float 3s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}


@media (max-width: 768px) {
  .image-container {
    display: none;
  }

  #about {
    background-image: url('/about-background.png');
    background-size: cover;
    background-position: center;
  }
}
</style>