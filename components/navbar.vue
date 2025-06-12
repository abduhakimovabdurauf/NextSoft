<template>
    <nav data-aos="fade-down" class="bg-white fixed w-full top-0 z-50 shadow-sm">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
            <a href="#" class="text-2xl font-bold text-gray-800">NextSoft</a>
            </div>

            <!-- Desktop nav links -->
            <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 hover:text-black font-medium transition">Bosh sahifa</a>
            <a href="#about" class="text-gray-700 hover:text-black font-medium transition">Biz haqimizda</a>
            <a href="#services" class="text-gray-700 hover:text-black font-medium transition">Xizmatlar</a>
            <!-- <a href="#portfolio" class="text-gray-700 hover:text-black font-medium transition">Portfolio</a> -->
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

        <!-- Mobile nav links -->
        <div id="mobile-menu" class="md:hidden hidden px-4 pb-4 space-y-2 bg-white">
            <a href="#home" class="block text-gray-700 hover:text-black">Bosh sahifa</a>
            <a href="#about" class="block text-gray-700 hover:text-black">Biz haqimizda</a>
            <a href="#services" class="block text-gray-700 hover:text-black">Xizmatlar</a>
            <a href="#portfolio" class="block text-gray-700 hover:text-black">Portfolio</a>
            <a href="#contact" class="block text-gray-700 hover:text-black">Bog‘lanish</a>
        </div>
    </nav>
</template>

    <!-- <script>
    // Oddiy JavaScript yordamida hamburger menyuni boshqarish
    document.addEventListener('DOMContentLoaded', () => {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('mobile-menu');

        toggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        });
    });
    </script> -->
