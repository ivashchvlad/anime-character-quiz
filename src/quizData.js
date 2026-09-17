export const characters = [
  { id: 'naruto', name: 'Наруто Узумаки', anime: 'Наруто', image: './images/naruto.webp', emoji: '🍥', description: 'Сын депутата становится депутатом. Никто не видит в этом коррупции' },
  { id: 'light', name: 'Ягами Лайт', anime: 'Тетрадь смерти', image: './images/light.webp', emoji: '📓', description: 'Школьник много пишет в тетрадке. В кульминации он пишет в тетрадке и ест чипсы одновременно.' },
  { id: 'guts', name: 'Гатс', anime: 'Берсерк', image: './images/guts.webp', emoji: '🗡️', description: 'Мораль аниме: не ведитесь на фембоев — до добра это точно не доведёт. Особенно если у вас уже есть меч размером с ипотеку.' },
  { id: 'frieren', name: 'Фрирен', anime: 'Провожающая в последний путь Фрирен', image: './images/friren.webp', emoji: '✨', description: 'А что, лето уже закончилось?' },
  { id: 'subaru', name: 'Нацуки Субару', anime: 'Re:Zero', image: './images/subaru.webp', emoji: '🔁', description: 'Первый раз, да? Ничего, у него тоже. И второй. И примерно ещё сорок седьмой.' },
  { id: 'power', name: 'Пауэр', anime: 'Человек-бензопила', image: './images/power.webp', emoji: '🩸', description: 'Уверена, что она главный гений комнаты. Комната обычно не согласна, но спорить опасается.' },
  { id: 'kaneki', name: 'Канеки Кен', anime: 'Токийский гуль', image: './images/kaneki.webp', emoji: '☕', description: 'Вопрос чем бы перекусить в час ночи еще никогда не стоял так остро' },
  { id: 'yuno', name: 'Юно Гасай', anime: 'Дневник будущего', image: './images/yuno.webp', emoji: '🔪', description: 'Пикми маньяк пытается наладить личную жизнь' },
  { id: 'dio', name: 'Дио Брандо', anime: 'Невероятные приключения ДжоДжо', image: './images/dio.webp', emoji: '🟡', description: 'Отец с дедом опять поругались, теперь вся семья едет в Египет' },
  { id: 'shinji', name: 'Икари Синдзи', anime: 'Евангелион', image: './images/shinji.webp', emoji: '🤖', description: 'Из-за проблем с отцом приходится работать в подростковом возрасте и экспериментировать. В основном — с эмоциональным выгоранием.' },
  { id: 'haruhi', name: 'Харухи Судзумия', anime: 'Меланхолия Харухи Судзумии', image: './images/haruhi.webp', emoji: '🎀', description: 'Если вы встаете рано и все успеваете - вероятно вы пришелец или экстасенс' },
  { id: 'gojo', name: 'Годжо Сатору', anime: 'Магическая битва', image: './images/gojo.webp', emoji: '🕶️', description: 'Может решить любую проблему. Поэтому сначала сам себе их создает.' },
  { id: 'megumin', name: 'Мегумин', anime: 'KonoSuba', image: './images/megumin.webp', emoji: '💥', description: 'Волшебница, которая знает ровно одно заклинание. Зато после него у всех появляется время на долгий отдых.' },
  { id: 'aqua', name: 'Аква', anime: 'KonoSuba', image: './images/aqua.webp', emoji: '💧', description: 'Богиня с великолепными способностями превращать простую миссию в финансовую катастрофу.' },
]

export const quizData = {
  title: 'Какой ты персонаж из аниме?', intro: 'Ответь на шесть жизненно важные вопросы и узнай, чей уровень хаоса тебе ближе.',
  questions: [
    { id: 'weekend', text: 'Как выглядит твой идеальный выходной?', options: [
      { text: 'Вылазка с друзьями и внезапное приключение', scores: { naruto: 1, haruhi: 2, gojo: 1, megumin: 1, aqua: 1 } }, { text: 'Дома, с сериалом, пледом и нулём уведомлений', scores: { frieren: 2, kaneki: 2, shinji: 1 } }, { text: 'Тренировка, цель и никакой слабости', scores: { guts: 2, dio: 2, light: 1 } }, { text: 'План, который выглядит подозрительно подробно', scores: { light: 2, yuno: 2, subaru: 1 } },
    ] },
    { id: 'music', text: 'Какую мкзыку включишь, когда всё идёт не по плану?', options: [
      { text: 'Реп, чтобы идти вперёд с важным лицом', scores: { naruto: 1, power: 1, haruhi: 1, aqua: 1 } }, { text: 'Метал — громко, драматично, по делу', scores: { guts: 2, kaneki: 1, dio: 1, megumin: 1 } }, { text: 'Спокойный плейлист и взгляд в окно', scores: { frieren: 2, shinji: 2, subaru: 1 } }, { text: 'Ничего: я уже продумываю ответный ход', scores: { light: 2, yuno: 2, gojo: 1 } },
    ] },
    { id: 'problem', text: 'Тебе дали невыполнимую задачу. Что дальше?', options: [
      { text: 'Соберу команду — вместе разберёмся', scores: { naruto: 1, haruhi: 2, subaru: 1, aqua: 1 } }, { text: 'Сделаю вид, что всё под контролем', scores: { gojo: 2, dio: 2, power: 1, aqua: 1 } }, { text: 'Молча возьму самый большой меч', scores: { guts: 2, kaneki: 1, shinji: 1 } }, { text: 'У меня уже есть схема, запасной план и тетрадь', scores: { light: 2, yuno: 2, frieren: 1, megumin: 1 } },
    ] },
    { id: 'snack', text: 'Выбери перекус для судьбоносного момента.', options: [
      { text: 'Рамен', scores: { naruto: 2, power: 1, aqua: 1, megumin: 1 } }, { text: 'Чипсы, но исключительно с театральным жестом', scores: { light: 3, dio: 1 } }, { text: 'Кофе. Очень много кофе', scores: { kaneki: 3, gojo: 1 } }, { text: 'Перекус потом: сейчас надо спасать мир', scores: { guts: 1, subaru: 2, shinji: 1, haruhi: 1, yuno: 1, frieren: 1 } },
    ] },
    { id: 'country', text: 'В какую страну ты бы отправился?', options: [
      { text: 'В Японию — за приключениями и раменом', scores: { naruto: 1, megumin: 2, aqua: 1 } }, { text: 'В Италию — за драмой, искусством и пастой', scores: { dio: 2, gojo: 1, haruhi: 1 } }, { text: 'В Исландию — подальше от людей и поближе к спокойствию', scores: { frieren: 2, kaneki: 1, shinji: 1 } }, { text: 'В неизвестную страну: главное, чтобы был квест', scores: { subaru: 2, guts: 1, power: 1, yuno: 1, aqua: 1 } },
    ] },
    { id: 'author', text: 'Твой любимый автор-постмодернист?', options: [
      { text: 'Виктор Пелевин — пусть реальность ещё немного поскрипит', scores: { light: 2, kaneki: 1, gojo: 1, aqua: 1 } }, { text: 'Умберто Эко — люблю, когда в книге есть лабиринт', scores: { frieren: 2, dio: 1, haruhi: 1 } }, { text: 'Чак Паланик — чем страннее, тем честнее', scores: { guts: 2, yuno: 1, megumin: 1 } }, { text: 'Дональд Бартелми — я пришёл за абсурдом', scores: { power: 2, subaru: 1, shinji: 1, naruto: 1 } },
    ] },
  ],
}
