<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
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
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
</style>