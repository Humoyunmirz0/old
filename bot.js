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
                        { text: '👥 О НАС 👥' }
                    ],
                    [
                        { text: '📕 Магистратура и Бакалавриат 📕' },
                        { text: '📱НАШИ СОЦИАЛЬНЫЕ СЕТИ📱' },
                    ],
                    [
                        { text: '📞 CALL CENTER 📞' },
                        { text: '🏢 НАШ АДРЕСС 🏢' },
                    ],
                    [
                        { text: '📱 Администратор 📱' },
                    ],

                ],
                realize_keyboard: true
            }
        }
    )
}

bot.hears('👥 О НАС 👥', ctx => {
   
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './university_info.docx' })

    ctx.reply('Здесь вы можете узнать о нас  по подробнее🙂')

})



bot.hears('📕 Магистратура и Бакалавриат 📕', ctx => {
    // replyWithDocument - document javob qaytarish, source: faylni ozi, filename fayl nomi
    ctx.replyWithDocument({ source: buffer, filename: './Стоимость контракта.docx' })

    ctx.reply('Вы можете узнать стоимость контракта на этом файле🙂')

})


bot.hears('📱НАШИ СОЦИАЛЬНЫЕ СЕТИ📱', ctx => {
    ctx.reply('📲  Наш вебсайт: Ieu.edu.ua/uz                                                                                                                📲  Инстаграм: https://www.instagram.com/meu_uz/')

})


bot.hears('📞 CALL CENTER 📞', ctx => {
    ctx.reply('Тел: +99890.006.44.42 | +99890.006.44.43')

})


bot.hears('🏢 НАШ АДРЕСС 🏢', ctx => {
    ctx.reply('https://maps.app.goo.gl/w2FrNxaFt28ma7WW9')

})

bot.hears('📱 Администратор 📱', ctx => {
    ctx.reply('Вопросы администратору: +998900064443')

})

bot.launch()