<template>
    <section id="services" class="py-20 sm:px-8 lg:px-16 bg-gray-50">
    <h2 data-aos="fade-down" class="mt-16 text-4xl font-bold text-center mb-16 text-gray-800">Xizmatlarimiz</h2>
    <!-- Services filter -->
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <button
        v-for="category in serviceCategories"
        :key="category"
        @click="setServiceCategory(category)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          selectedServiceCategory === category
            ? 'bg-green-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-green-100'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Service cards -->
    <div class="grid gap-10 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div
        v-for="(card, index) in filteredServices"
        :key="index"
        data-aos="fade-up"
        class="bg-white cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col p-8 min-h-[400px] w-full rounded-2xl shadow-xl"
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
          class="mt-4 bg-green-500 cursor-pointer text-white py-2 px-4 rounded transition-all duration-300 hover:bg-green-600"
        >
          Buyurtma berish
        </button>
      </div>
    </div>
    <OrderModal :visible="modalVisible" :selectedService="selectedService" @close="modalVisible = false" />
  </section>
</template>

<script setup>
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

const config = useRuntimeConfig()
useHead({
  title: 'NextSoft | Xizmatlarimiz',
  meta: [
    {
      name: 'description',
      content: 'Biz turli IT xizmatlarini taklif qilamiz: veb va mobil ilovalar, grafik dizayn, motion dizayn, IT konsalting va texnik qo‘llab-quvvatlash. Har bir mijoz uchun individual yechimlar.',
    },
    {
      name: 'keywords',
      content: 'IT xizmatlar, veb sayt yaratish, mobil ilova, grafik dizayn, motion dizayn, texnik yordam, backend, frontend, video montaj, UI/UX',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'NextSoft | Xizmatlarimiz',
    },
    {
      property: 'og:description',
      content: 'Dasturlash, dizayn va texnik qo‘llab-quvvatlash bo‘yicha keng turdagi xizmatlarimiz bilan tanishing.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: `${config.siteUrl}/services`,
    },
    {
      property: 'og:image',
      content: `${config.siteUrl}/background.jpg`,
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `${config.siteUrl}/services`,
    }
  ]
})
</script>