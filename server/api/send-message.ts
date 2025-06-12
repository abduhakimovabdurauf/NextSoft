// server/api/send-message.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  const text = `📥 *Yangi buyurtma!*
🛠 Xizmat: ${body.service}
👤 Ismi: ${body.name}
📞 Telefon: ${body.phone}
📝 Izoh: ${body.message}`

try {
    const res = await $fetch(`https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`, {
        method: 'POST',
        body: {
        chat_id: config.telegramChatId,
        text,
        parse_mode: 'Markdown'
        }
    })

    toast.success("So'rovingiz yuborildi! Siz bilan bog'lanamiz.")
} catch(e) {

}



    return { ok: true }
    })