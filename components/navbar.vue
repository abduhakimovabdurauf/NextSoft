<template>
  <nav data-aos="fade-down" class="bg-white fixed w-screen top-0 z-50 shadow-sm">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="#" class="text-2xl font-bold text-gray-800">NextSoft</a>
      </div>

      <!-- Desktop nav links -->
      <div class="hidden md:flex space-x-8">
        <NuxtLink to="/" class="text-gray-700 hover:text-black font-medium transition">Bosh sahifa</NuxtLink>
        <NuxtLink to="/about" class="text-gray-700 hover:text-black font-medium transition">Biz haqimizda</NuxtLink>
        <NuxtLink to="/portfolio" class="text-gray-700 hover:text-black font-medium transition">Portfolio</NuxtLink>
        <NuxtLink to="/services" class="text-gray-700 hover:text-black font-medium transition">Xizmatlar</NuxtLink>
        <a href="#contact" class="text-gray-700 hover:text-black font-medium transition">Bog‘lanish</a>
      </div>

      <!-- Mobile hamburger -->
      <div class="md:hidden">
        <button id="menu-toggle" class="text-gray-700 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile nav links with smooth transition -->
    <div
      id="mobile-menu"
      class="md:hidden overflow-hidden max-h-0 transition-all duration-500 ease-in-out px-4 bg-white space-y-2"
    >
      <NuxtLink to="/" class="block text-gray-700 hover:text-black">Bosh sahifa</NuxtLink>
      <NuxtLink to="/about" class="block text-gray-700 hover:text-black">Biz haqimizda</NuxtLink>
      <NuxtLink to="/portfolio" class="block text-gray-700 hover:text-black">Portfolio</NuxtLink>
      <NuxtLink to="/services" class="block text-gray-700 hover:text-black">Xizmatlar</NuxtLink>
      <a href="#contact" class="block text-gray-700 hover:text-black">Bog‘lanish</a>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const toggle = document.getElementById('menu-toggle')
  const menu = document.getElementById('mobile-menu')
  let isOpen = false

  toggle?.addEventListener('click', () => {
    isOpen = !isOpen

    if (isOpen) {
      menu.style.maxHeight = menu.scrollHeight + "px"
    } else {
      menu.style.maxHeight = "0px"
    }
  })
})
</script>
