export default function About({ t }) {
  return (
    <section id="about" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        <div className="sr">
          <p className="font-mono text-xs text-accent mb-2">// 01 — about</p>
          <div className="accent-line mb-5"></div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-text leading-tight mb-5">
            Разработчик,<br />который <span className="grad">понимает</span><br />задачу клиента
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Привет! Меня зовут Алихан, мне <span className="text-text font-medium">14 лет</span>. Я FullStack Developer из Бишкека — пишу реальные проекты и делаю это всерьёз.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Возраст — не ограничение. Главное — желание, дисциплина и код, который работает.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Работаю с Python и JavaScript: пишу backend-системы на Django и DRF, создаю сайты, Telegram-ботов и автоматизации. Умею не просто сделать красивую страницу — помогаю бизнесу принимать заявки, подключать CRM и внедрять ИИ.
          </p>
          <p className="text-muted leading-relaxed">
            Работал в технической поддержке <span className="text-text font-medium">Codify</span> — понимаю важность удобных и рабочих решений, а не «сайта ради сайта».
          </p>
        </div>

        <div className="space-y-3 sr d2">
          <div className="card p-5 hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">Python & JavaScript — основные языки</h3>
                <p className="text-muted text-sm">Backend на Django/DRF, фронт на JS, Telegram-боты, API-интеграции и автоматизации.</p>
              </div>
            </div>
          </div>

          <div className="card p-5 hover:border-blue/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">C++, C, Java, C#, Lua, Rust — знакомые</h3>
                <p className="text-muted text-sm">Писал простые программы: переменные, условия, циклы, функции, ООП, базовая структура кода.</p>
              </div>
            </div>
          </div>

          <div className="card p-5 hover:border-orange/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">Техподдержка — Codify</h3>
                <p className="text-muted text-sm">Работа с клиентами, объяснение решений, понимание реальных задач бизнеса.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
