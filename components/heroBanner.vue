<template>
    <section id="home" class="relative h-[90vh] bg-gray-50 overflow-hidden flex flex-col justify-center">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <NuxtImg src="/background.jpg" alt="Fon rasmi" class="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none z-0" />
        <slot></slot>
    </section>
</template>