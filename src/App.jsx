import { useMemo, useState } from 'react'
import { characters, quizData } from './quizData'

function App() {
  const [started, setStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [scores, setScores] = useState({})
  const [finished, setFinished] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const question = quizData.questions[questionIndex]
  const result = useMemo(() => characters.reduce((best, character) => ((scores[character.id] || 0) > (scores[best.id] || 0) ? character : best), characters[0]), [scores])

  const chooseAnswer = (option) => {
    setScores((current) => Object.entries(option.scores).reduce((next, [id, points]) => ({ ...next, [id]: (next[id] || 0) + points }), current))
    if (questionIndex === quizData.questions.length - 1) setFinished(true)
    else setQuestionIndex((current) => current + 1)
  }

  const restart = () => { setQuestionIndex(0); setScores({}); setFinished(false); setStarted(false); setImageFailed(false) }

  return <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
    <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,.3),_transparent_36%)]" />
    <section className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-12 sm:px-8">
      {!started ? <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/8 text-center shadow-2xl shadow-violet-950/40 backdrop-blur">
        <img className="h-56 w-full object-cover sm:h-72" src="https://cs15.pikabu.ru/post_img/2024/06/28/9/1719584629245720620.webp" alt="Аниме-приветствие" />
        <div className="p-6 sm:p-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-pink-300 uppercase">Anime quiz</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">охаёшечки датебаёшечки</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">тебя ждет самый важнвй тест в твоей жизни - какой же ты персонаж из аниме?!?!?</p>
          <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-7 py-4 font-bold shadow-lg shadow-pink-950/40 transition hover:scale-[1.02]" onClick={() => setStarted(true)} type="button">Начать тест</button>
        </div>
      </article> : finished ? <article className="rounded-3xl border border-white/10 bg-white/8 p-6 text-center shadow-2xl shadow-violet-950/40 backdrop-blur sm:p-10">
        <p className="text-sm font-semibold tracking-[0.18em] text-pink-300 uppercase">Твой результат</p>
        <div className="mx-auto mt-5 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-pink-400/60 bg-slate-900 text-7xl shadow-xl shadow-pink-950/30">
          {result.image && !imageFailed ? <img className="h-full w-full object-cover" src={result.image} alt={result.name} onError={() => setImageFailed(true)} /> : result.emoji}
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">{result.name}</h1>
        <p className="mt-2 text-pink-300">{result.anime}</p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-200">{result.description}</p>
        <p className="mt-4 text-sm text-slate-400">Картинка хранится прямо в приложении.</p>
        <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-4 font-bold shadow-lg shadow-pink-950/40 transition hover:scale-[1.02]" onClick={restart} type="button">Пройти ещё раз</button>
      </article> : <>
        <div className="mb-8 flex items-center justify-between text-sm font-medium text-slate-300"><span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Anime quiz</span><span>Вопрос {questionIndex + 1} из {quizData.questions.length}</span></div>
        <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all" style={{ width: `${((questionIndex + 1) / quizData.questions.length) * 100}%` }} /></div>
        <article className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-violet-950/40 backdrop-blur sm:p-10">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-pink-300 uppercase">Твой результат ждёт</p>
          <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">{quizData.title}</h1><p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300">{quizData.intro}</p>
          <div className="mt-10"><h2 className="text-xl font-bold sm:text-2xl">{question.text}</h2>{question.id === 'problem' && <img className="mt-5 h-48 w-full rounded-2xl object-cover sm:h-60" src="./images/question-3.jpg" alt="Невыполнимая задача" />}{question.id === 'snack' && <img className="mt-5 h-48 w-full rounded-2xl object-cover sm:h-60" src="./images/question-4.jpeg" alt="Перекус для судьбоносного момента" />}<div className="mt-5 grid gap-3 sm:grid-cols-2">{question.options.map((option) => <button className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-left font-semibold text-slate-200 transition hover:border-violet-400 hover:bg-violet-500/15 focus:outline-none focus:ring-2 focus:ring-pink-400" key={option.text} onClick={() => chooseAnswer(option)} type="button">{option.text}</button>)}</div></div>
        </article>
      </>}
    </section>
  </main>
}

export default App
