const { Telegraf } = require('telegraf');
// fs node jsning fayllar bilan ishlash un moduli
const fs = require('fs')
// bu word faylimizning buffer sifatida saqlanib olinishi keyinchalik jo'natish un
const buffer = fs.readFileSync('./university_info.docx')

const TOKEN = '1979962335:AAEHD90r7lF0uOA0T0foQriddjnWt4r1U4k'

const bot = new Telegraf(TOKEN)



bot.start((ctx, next) => {
    welcome(ctx)
})

function welcome(ctx) {
    const helloMessage = 'International European University'
    bot.telegram.sendMessage(ctx.chat.id, helloMessage,
        {
            reply_markup: {
                keyboard: [
                    [
                        { text: '👥 BIZ HAQIMIZDA 👥' }
                    ],
                    [
                        { text: '📕 Magistratura va bakalavr 📕' },
                        { text: '📱BIZNING IJTIMOIY TARMOQLAR📱' },
                        
                    ],
                    [
                        { text: '📞 CALL CENTER 📞' },
                        { text: '🏢 BIZNING MANZIL 🏢' },
                    ],
                    [
                        { text: '📱 Administrator 📱' },
                    ],

                ],
                realize_keyboard: true
            }
        }
    )
}

bot.hears('👥 BIZ HAQIMIZDA 👥', ctx => {
   
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './university_info.docx' })

    ctx.reply('Bu erda biz haqimizda koproq malumotga ega bolishingiz mumkin🙂')

})



bot.hears('📕 Magistratura va bakalavr 📕', ctx => {
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './Стоимость контракта.docx' })

    ctx.reply('Shartnoma narxini ushbu fayldan bilib olishingiz mumkin🙂')

})


bot.hears('📱BIZNING IJTIMOIY TARMOQLAR📱', ctx => {
    ctx.reply('📲  Vebsayt : Ieu.edu.ua/uz                                                                                                                📲  Инстаграм: https://www.instagram.com/meu_uz/')

})


bot.hears('📞 CALL CENTER 📞', ctx => {
    ctx.reply('Тел: +99890.006.44.42 | +99890.006.44.43')

})


bot.hears('🏢 BIZNING MANZIL 🏢', ctx => {
    ctx.reply('https://maps.app.goo.gl/w2FrNxaFt28ma7WW9')

})

bot.hears('📱 Administrator 📱', ctx => {
    ctx.reply('Administratorga savollar: +998900064443')

})

bot.launch()