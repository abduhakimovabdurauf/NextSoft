<template>
  <div v-if="visible" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
    <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
      <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl">&times;</button>
      <h2 class="text-xl font-semibold mb-4">Buyurtma berish</h2>

      <p class="text-sm text-gray-600 mb-4">Tanlangan xizmat: <strong>{{ selectedService }}</strong></p>

      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="name" type="text" placeholder="Ismingiz" required class="w-full border rounded p-2" />
        <input v-model="phone" type="tel" placeholder="Telefon raqamingiz" required class="w-full border rounded p-2" />
        <textarea v-model="message" placeholder="Izoh..." class="w-full border rounded p-2"></textarea>
        <button type="submit" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Yuborish</button>
      </form>

      <div
        v-if="success"
        class="absolute inset-0 bg-white/90 z-20 flex items-center justify-center rounded"
      >
        <p class="text-green-600 text-lg font-semibold text-center px-4">
          Habaringiz yuborildi! Siz bilan bog'lanamiz.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  visible: Boolean,
  selectedService: String
})
const emit = defineEmits(['close'])

const name = ref('')
const phone = ref('')
const message = ref('')
const success = ref(false)

const submitForm = async () => {
  const { error } = await useFetch('/api/send-message', {
    method: 'POST',
    body: {
      service: props.selectedService,
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
      emit('close')
    }, 2000)
  }
}
</script>

