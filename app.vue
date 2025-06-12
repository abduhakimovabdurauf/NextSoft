<template>
  <div class="bg-white text-gray-800 font-poppins">
    <div>

    </div>
    <navbar/>
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen bg-gray-50 overflow-hidden flex items-center">
      <!-- Fon rasmi -->
      
      <!-- Qora parda -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <img src="/background.jpg" alt="Fon rasmi" class="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0" />
      <!-- Kontent -->
      <div data-aos="fade-right" class="relative z-20 px-4 sm:px-10 lg:px-20 w-full max-w-7xl text-white">
        <div class="text-left">
          <p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:leading-[55px] md:leading-[65px]">
            Biznesingiz uchun zamonaviy va professional veb-saytlar!
          </p>
          <p class="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 max-w-2xl mx-auto sm:mx-0">
            Brendingizga mos, mobil qurilmalarga moslashtirilgan va mijozlar uchun qulay saytlar yaratamiz.
          </p>

          <a href="#services" class="inline-block bg-black text-white text-sm sm:text-base md:text-lg font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition duration-300 shadow-md">
            Narxlarni ko‘rish
          </a>
        </div>
      </div>
    </section>





    <!-- About Section -->
    <section
      id="about"
      class="relative lg:min-h-screen flex flex-col justify-between md:flex-row items-center bg-white py-16 px-4 sm:px-8 lg:px-16 bg-cover bg-center"
      style="background-image: url('/path-to-your-image.jpg');"
    >
      <!-- Matn qismi -->
      <div data-aos="fade-right" class="z-10 max-w-2xl text-left bg-white/90 p-6">
        <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
          Biz haqimizda
        </h2>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mb-6 leading-relaxed">
          Biz — zamonaviy texnologiyalarga asoslangan, innovatsion fikrlaydigan jamoamiz. Maqsadimiz — tadbirkorlar, kichik va o‘rta biznes egalari uchun
          o‘z brendlariga mos veb-saytlar, landing pagelar va onlayn do‘konlar yaratishdir.
        </p>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed">
          Har bir loyiha ustida individual yondashuv, UX/UI dizayn, mobil moslik va tez ishlashga alohida e’tibor qaratamiz.
          Saytingiz — bu sizning onlayn vizitkangiz!
        </p>
        <p class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          2023-yildan buyon biz o‘nlab loyihalarni amalga oshirdik va mijozlarimiz bizning yondashuvimizdan mamnun.
          Endi navbat sizning biznesingizda!
        </p>
      </div>

      <!-- Rasm: faqat md: dan katta ekranlarda ko‘rinadi -->
      <div data-aos="fade-left" class="hidden xl:block 2xl:mr-48">
        <img
          src="/about-background.png"
          alt="Biz haqimizda"
          class="w-[600px] h-[600px] object-cover floating-image"
        />
      </div>

    </section>



    <!-- Services Section -->
    <section id="services" class="py-20 sm:px-8 lg:px-16 bg-gray-50">
      <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Xizmatlarimiz</h2>

      <div class="flex flex-wrap justify-around gap-10">
        <div
          v-for="(card, index) in services"
          :key="index"
          data-aos="fade-right"
          class="bg-white flex flex-col p-8 min-h-[400px] w-full sm:w-80 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          
          <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ card.title }}</h3>
          <ul class="space-y-3 text-gray-700 mb-6 text-base leading-relaxed">
            <li v-for="(item, i) in card.features" :key="i" class="flex items-start gap-2 before:content-['✔'] before:text-green-500 before:text-lg">
              {{ item }}
            </li>
          </ul>
          <p class="font-bold text-lg text-green-500 mt-auto text-right">{{ card.price }}</p>
          <button
            @click="openModal(card.title)"
            class="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Buyurtma berish
          </button>
        </div>
      </div>

      <!-- Modal -->
      <OrderModal :visible="modalVisible" :selectedService="selectedService" @close="modalVisible = false" />
    </section>






    <!-- Pricing Section -->
    <!-- <section class="py-16 px-4 sm:px-8 lg:px-16" id="prices">
      <h2 class="text-3xl font-semibold text-center mb-12">Narxlar</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="border rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-semibold mb-2">Starter</h3>
          <p class="text-3xl font-bold mb-4">$100</p>
          <ul class="text-left mb-4 space-y-1 text-sm">
            <li>✔ Landing Page</li>
            <li>✔ Mobilga mos</li>
            <li>✔ 1 ta sahifa</li>
          </ul>
          <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Buyurtma berish</button>
        </div>
        <div class="border rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-semibold mb-2">Biznes</h3>
          <p class="text-3xl font-bold mb-4">$250</p>
          <ul class="text-left mb-4 space-y-1 text-sm">
            <li>✔ Katalog Sayt</li>
            <li>✔ 5-6 sahifa</li>
            <li>✔ Foydalanuvchiga qulay interfeys</li>
          </ul>
          <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">Buyurtma berish</button>
        </div>
        <div class="border rounded-xl p-6 text-center shadow-md bg-black text-white hover:shadow-lg transition duration-300">
          <h3 class="text-xl font-semibold mb-2">Maxsus</h3>
          <p class="text-3xl font-bold mb-4">Custom</p>
          <ul class="text-left mb-4 space-y-1 text-sm">
            <li>✔ Online do‘kon</li>
            <li>✔ Admin panel</li>
            <li>✔ Maxsus dizayn</li>
          </ul>
          <button class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">Buyurtma berish</button>
        </div>
      </div>
    </section> -->

    <!-- Process Section -->

    
    <section class="py-20 px-6 bg-[#f8fbff]">
      <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Jarayon qanday bo'ladi ?</h2>
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- CARD TEMPLATE -->
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
              <a href="tel:+998901234567">+998 90 123 45 67</a>
            </div>
            <div class="flex items-center gap-2">
              <i class="bx bxl-telegram text-lg"></i>
              <a href="https://t.me/nextsoft" target="_blank" class="hover:text-white">t.me/nextsoft</a>
            </div>
            <div class="flex items-center gap-2">
              <i class="bx bx-envelope text-lg"></i>
              <span>info@nextsoft.uz</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Pastki chiziq -->
      <div class="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-500">
        © 2025 NextSoft. Barcha huquqlar himoyalangan.
      </div>
    </footer>

  </div>



</template>

<script setup>
import { ref } from 'vue'
import OrderModal from '~/components/OrderModal.vue'



const modalVisible = ref(false)
const selectedService = ref('')

const openModal = (serviceName) => {
  selectedService.value = serviceName
  modalVisible.value = true
}

const services = [
  {
    title: 'Landing Page',
    price: '$100 dan boshlab',
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
    price: '$150 dan boshlab',
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
    price: '$200 dan boshlab',
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
    price: '$350 dan boshlab',
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
    price: '$500 dan boshlab',
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
    price: '+$100',
    features: [
      'Maxsus boshqaruv paneli',
      'Maʼlumotlar tahriri va boshqaruvi',
      'Foydalanuvchi autentifikatsiyasi',
      'Yopiq kirish sahifasi',
      'Saytga to‘liq integratsiya'
    ]
  }
]

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