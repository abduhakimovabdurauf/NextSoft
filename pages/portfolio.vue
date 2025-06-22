<template>
    <section id="portfolio" class="py-20 sm:px-8 lg:px-16 bg-gray-50 px-2">
    <h2 data-aos="fade-down" class="text-4xl font-bold mb-10 text-center mt-16">Portfolio</h2>
    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <button
        v-for="category in portfolioCategories"
        :key="category"
        @click="setPortfolioCategory(category)"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium transition-all',
          selectedPortfolioCategory === category
            ? 'bg-green-600 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-green-100'
        ]"
      >
        {{ category }}
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="site in filteredProjects"
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
    </div>
  </section>
</template>


<script setup>
import { usePortfolioStore } from '~/stores/portfolio'
import { storeToRefs } from 'pinia'


const portfolioStore = usePortfolioStore();
const {
  filteredProjects,
  categories: portfolioCategories,
  selectedCategory: selectedPortfolioCategory
} = storeToRefs(portfolioStore);
const { setCategory: setPortfolioCategory } = portfolioStore;


useHead({
  title: 'NextSof | Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Portfolio sahifamizda siz kompaniyamiz tomonidan amalga oshirilgan veb, dizayn va texnologik loyihalar bilan tanishishingiz mumkin.'
    },
    {
      name: 'keywords',
      content: 'portfolio, veb loyiha, dizayn ishlar, IT xizmatlar, web development, grafik dizayn'
    },
    {
      property: 'og:title',
      content: 'NextSof | Portfolio'
    },
    {
      property: 'og:description',
      content: 'Kompaniyamiz tomonidan yaratilgan eng yaxshi veb saytlar, mobil ilovalar va dizayn ishlari bilan tanishing.'
    },
    {
      property: 'og:image',
      content: '/background.jpg'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>