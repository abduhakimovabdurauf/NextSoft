<template>
  <section class="py-16 px-6 pt-32 bg-[#f8fbff]" id="contact">
    <h2 data-aos="fade-down" class="text-4xl font-bold text-center mb-16 text-gray-800">Bog'lanish</h2>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <!-- Aloqa Ma'lumotlari -->
      <div data-aos="fade-right">
        <h2 class="text-3xl font-bold text-neutral-800 mb-8">Aloqa ma'lumotlari</h2>
        <ul class="space-y-6 text-neutral-800 text-xl font-medium leading-relaxed">
          <li class="flex items-center gap-3">
            <i class="bx bx-phone-call text-2xl text-green-600"></i>
            <span><strong>Telefon:</strong> <a href="tel:+998900400103" class="text-blue-600 hover:underline ml-1">+998 900 40 01 03</a></span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bx bx-envelope text-2xl text-green-600"></i>
            <span><strong>Email:</strong> <a href="mailto:manfisstar1992@gmail.com" class="text-blue-600 hover:underline ml-1">manfisstar1992@gmail.com</a></span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bx bxl-telegram text-2xl text-green-600"></i>
            <span><strong>Telegram:</strong> <a href="https://t.me/Jamoliddinovich92" target="_blank" class="text-blue-600 hover:underline ml-1">@Jamoliddinovich92</a></span>
          </li>
          <li class="flex items-center gap-3">
            <i class="bx bx-map text-2xl text-green-600"></i>
            <span><strong>Manzil:</strong> Fergana, O‘zbekiston</span>
          </li>
        </ul>
      </div>

      <!-- Forma -->
      <div data-aos="fade-left">
        <h2 class="text-xl font-bold text-neutral-800 mb-8">Bizga yozing, va biz siz bilan bog'lanamiz!</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <input v-model="name" type="text" placeholder="Ismingiz" required class="w-full border border-gray-300 rounded p-3 text-lg" />
          <input v-model="phone" type="tel" placeholder="Telefon raqamingiz" required class="w-full border border-gray-300 rounded p-3 text-lg" />
          <textarea v-model="message" rows="4" placeholder="Xabaringiz..." class="w-full border border-gray-300 rounded p-3 text-lg"></textarea>
          <button type="submit" class="cursor-pointer w-full bg-green-600 text-white py-3 rounded text-lg hover:bg-green-700 transition">Yuborish</button>
        </form>

        <p v-if="success" class="text-green-600 mt-4 font-semibold text-lg">Xabaringiz muvaffaqiyatli yuborildi!</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const phone = ref('')
const message = ref('')
const success = ref(false)

const submitForm = async () => {
  const { error } = await useFetch('/api/send-message', {
    method: 'POST',
    body: {
      name: name.value,
      phone: phone.value,
      message: message.value
    }
  })

  if (!error.value) {
    name.value = ''
    phone.value = ''
    message.value = ''
    success.value = true

    setTimeout(() => {
      success.value = false
    }, 3000)
  }
}
</script>
