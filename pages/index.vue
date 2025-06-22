<template>
  <hero-banner>
    <div data-aos="fade-right" class="relative z-20 px-4 sm:px-10 lg:px-20 w-full max-w-7xl text-white">
      <div class="text-left">
        <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:leading-[55px] md:leading-[65px]"> Biznesingiz uchun zamonaviy va professional veb-saytlar! </p>
        <p class="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 max-w-2xl mx-auto sm:mx-0"> Brendingizga mos, mobil qurilmalarga moslashtirilgan va mijozlar uchun qulay saytlar yaratamiz. </p>
        <a href="#services" class="inline-block bg-black text-white text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition duration-300 shadow-md"> Xizmatlarimizni ko‘rish </a>
      </div>
    </div>
  </hero-banner>
    
  <section id="about" class="relative lg:min-h-screen flex flex-col justify-between md:flex-row items-center bg-white py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center">
    <div class="z-10 max-w-2xl text-left bg-white/90 p-6">
      <h2 data-aos="fade-down" class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900"> Biz haqimizda </h2>
      <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed"> Biz — zamonaviy texnologiyalarga asoslangan, innovatsion fikrlaydigan jamoamiz. Maqsadimiz — tadbirkorlar, kichik va o‘rta biznes egalari uchun o‘z brendlariga mos veb-saytlar, landing pagelar va onlayn do‘konlar yaratishdir. </p>
      <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed"> Har bir loyiha ustida individual yondashuv, UX/UI dizayn, mobil moslik va tez ishlashga alohida e’tibor qaratamiz. Saytingiz — bu sizning onlayn vizitkangiz! </p>
      <p data-aos="fade-right" class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"> 2023-yildan buyon biz o‘nlab loyihalarni amalga oshirdik va mijozlarimiz bizning yondashuvimizdan mamnun. Endi navbat sizning biznesingizda! </p>
    </div>
    <div data-aos="fade-left" class="hidden xl:block 2xl:mr-48">
      <NuxtImg src="/about-background.png" alt="Biz haqimizda" width="600" height="600" class="object-cover floating-image" />
    </div>
  </section>

  <section id="portfolio" class="py-20 sm:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
    <h2 data-aos="fade-down" class="text-3xl font-bold mb-10 text-center">Portfolio</h2>

    <!-- Project cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
      <div
        v-for="site in filteredProjects.slice(0, 10)"
        :key="site.link"
        data-aos="fade-right"
        class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
      >
        <a :href="site.link" target="_blank" class="block">
          <div class="flex flex-col items-center">
            <NuxtImg :src="site.desktopImage" alt="Desktop screenshot" class="rounded-md w-full" />
          </div>
          <div class="mt-4 text-center">
            <h3 class="text-lg font-semibold">{{ site.title }}</h3>
            <p class="text-sm text-gray-600">{{ site.description }}</p>
          </div>
        </a>
      </div>
      <div
      class="absolute bottom-5 left-0 w-full h-12 shadow-[0_-25px_40px_-10px_rgba(255,255,255,0.15)] z-10 pointer-events-none">
    </div>
    </div>

    <!-- Bottom shadow -->
    


    <!-- See all button -->
    <div class="mt-12 flex justify-center z-10 relative">
      <NuxtLink
        to="/portfolio"
        class="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
      >
        Barchasini ko‘rish
      </NuxtLink>
    </div>
  </section>


  <section id="services" class="py-20 sm:px-8 lg:px-16 bg-gray-50">
    <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Xizmatlarimiz</h2>
    <div class="grid gap-10 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative">
      <div
        v-for="(card, index) in filteredServices.slice(0, 12)"
        :key="index"
        data-aos="fade-up"
        class="bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col p-8 min-h-[400px] w-full rounded-2xl shadow-xl z-10"
      >
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ card.title }}</h3>
        <ul class="space-y-3 text-gray-700 mb-6 text-base leading-relaxed">
          <li
            v-for="(item, i) in card.features"
            :key="i"
            class="flex items-start gap-2 before:content-['✔'] before:text-green-500 before:text-lg"
          >
            {{ item }}
          </li>
        </ul>
        <p class="font-bold text-lg text-green-500 mt-auto text-right">{{ card.price }}</p>
        <button
          @click="openModal(card.title)"
          class="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Buyurtma berish
        </button>
      </div>

      <!-- Pastki oq shadow (bular davom etadi degan signal) -->
      <div class="absolute bottom-0 left-0 w-full h-32 bg-white shadow-[0px_-60px_60px_10px_rgba(255,255,255,1)] pointer-events-none z-0"></div>
    </div>
    <!-- Button to /services page -->
    <div class="mt-16 flex justify-center">
      <NuxtLink to="/services">
        <button class="bg-green-500 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-green-600 transition">
          Barcha xizmatlarni ko‘rish
        </button>
      </NuxtLink>
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
        <p class="text-base font-medium text-neutral-800 leading-snug text-center">Tuzatish & <br>Yaxshilash </p>
      </div>
      <div data-aos="fade-left" class="flex flex-col items-center text-center border border-neutral-300 rounded-xl p-6 bg-white min-h-[240px]">
        <div class="w-14 h-14 border-2 border-neutral-700 text-neutral-700 rounded-full flex items-center justify-center text-lg font-semibold mb-4">6</div>
        <i class="bx bx-flag text-[48px] text-neutral-700 mb-4 leading-none"></i>
        <p class="text-base font-medium text-neutral-800">Saytingiz Tayyor!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useServicesStore } from '~/stores/services'
import { useHead } from '#imports'
import { usePortfolioStore } from '~/stores/portfolio'
import { storeToRefs } from 'pinia'

const config = useRuntimeConfig()
useHead({
  title: 'Zamonaviy IT xizmatlari | Biznesingiz uchun raqamli yechim',
  meta: [
    {
      name: 'description',
      content: 'Biznesingiz uchun professional IT xizmatlari: web saytlar, mobil ilovalar, grafik dizayn, motion dizayn, video montaj va texnik qo‘llab-quvvatlash. Sizga mos kompleks yechimlar taqdim etamiz.'
    },
    {
      name: 'keywords',
      content: 'IT xizmatlari, sayt yaratish, grafik dizayn, motion dizayn, web development, mobil ilovalar, texnik yordam, montaj xizmatlari, online do‘kon yaratish, raqamli xizmatlar'
    },
    { name: 'robots', content: 'index, follow' },

    // Open Graph
    { property: 'og:title', content: 'Zamonaviy IT va dizayn xizmatlari' },
    { property: 'og:description', content: 'Web, dizayn, montaj va texnik yechimlar — barchasi bizda.' },
    { property: 'og:image', content: `${config.siteUrl}/background.jpg` },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: config.siteUrl },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Zamonaviy IT va dizayn xizmatlari' },
    { name: 'twitter:description', content: 'Web, dizayn, montaj va texnik yechimlar — barchasi bizda.' },
    { name: 'twitter:image', content: `${config.siteUrl}/background.jpg` }
  ],
  link: [
    { rel: 'canonical', href: config.siteUrl }
  ]
})




const portfolioStore = usePortfolioStore();
const {
  filteredProjects,
  categories: portfolioCategories,
  selectedCategory: selectedPortfolioCategory
} = storeToRefs(portfolioStore);
const { setCategory: setPortfolioCategory } = portfolioStore;


// 2. Services Store
const serviceStore = useServicesStore();
const {
  filteredServices,
  categories: serviceCategories,
  selectedCategory: selectedServiceCategory
} = storeToRefs(serviceStore);
const { setCategory: setServiceCategory } = serviceStore;


const modalVisible = ref(false)
const selectedService = ref('')

const openModal = (serviceName) => {
  selectedService.value = serviceName
  modalVisible.value = true
}

</script>


<style>


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