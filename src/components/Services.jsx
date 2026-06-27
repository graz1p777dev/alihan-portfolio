// Секция «Что я делаю»: сетка из 6 карточек услуг с иконками, описаниями и тегами технологий.
// Классы sr/d1–d6 задают каскадную задержку появления карточек при скролле.
export default function Services({ t }) {
  return (
    <section id="services" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-14 sr">
          <p className="font-mono text-xs text-accent mb-2">// 02 — services</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text">{t('serv-h2')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="card p-6 sr d1">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">Сайты под ключ</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">Лендинги, визитки, портфолио, каталоги, формы заявок.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-js">JavaScript</span>
              <span className="tag tag-dim">HTML / CSS</span>
            </div>
          </div>

          <div className="card p-6 sr d2">
            <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"/></svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">Backend разработка</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">REST API, базы данных, серверная логика на Python и Django.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-py">Python</span>
              <span className="tag tag-dj">Django / DRF</span>
            </div>
          </div>

          <div className="card p-6 sr d3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 14.565l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.63.021z"/></svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">Telegram-боты</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">Приём заявок, уведомления, AI-ответы, автоматизация общения.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-py">Python</span>
              <span className="tag tag-tg">aiogram</span>
            </div>
          </div>

          <div className="card p-6 sr d4">
            <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"/></svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">CRM & интеграции</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">amoCRM, Google Sheets, Supabase, Telegram — всё в один поток.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-ai">amoCRM</span>
              <span className="tag tag-dj">Sheets API</span>
            </div>
          </div>

          <div className="card p-6 sr d5">
            <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                <circle cx="12" cy="12" r="3.25" />
                <circle cx="12" cy="4.5" r="1.5" />
                <circle cx="12" cy="19.5" r="1.5" />
                <circle cx="4.5" cy="12" r="1.5" />
                <circle cx="19.5" cy="12" r="1.5" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">Внедрение ИИ</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">AI-ассистенты, умные ответы, автоматизация с ИИ для бизнеса.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-py">Python</span>
              <span className="tag tag-ai">AI APIs</span>
            </div>
          </div>

          <div className="card p-6 sr d6">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"/></svg>
            </div>
            <h3 className="font-heading font-bold text-text mb-2">Автоматизация</h3>
            <p className="text-muted text-sm leading-relaxed mb-3">n8n, вебхуки, авто-уведомления, отчёты без ручного труда.</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="tag tag-js">n8n</span>
              <span className="tag tag-dim">webhooks</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
