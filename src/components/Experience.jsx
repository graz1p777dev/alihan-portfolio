export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-14 sr">
          <p className="font-mono text-xs text-accent mb-2">// 03 — experience</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text">Опыт работы</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card p-6 sr d1">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.75.78 3.75 3.75 0 0 0-7.5 0m3.75-.78a3.75 3.75 0 0 1-3.75.78m3.75-.78v-3.47m-7.5 4.25a3.75 3.75 0 0 0-7.5 0 9.094 9.094 0 0 0 7.5 0m0 0v-3.47m0 3.47a3.75 3.75 0 0 0 3.75 0M6.75 10.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"/></svg>
              </div>
              <span className="tag tag-dim">previous</span>
            </div>
            <p className="font-mono text-[10px] text-blue mb-2">TechSupport</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">Codify</h3>
            <p className="text-muted text-sm leading-relaxed">Работа с клиентами, разбор технических вопросов, объяснение решений простым языком и понимание реальных задач бизнеса.</p>
          </div>

          <div className="card p-6 sr d2 hover:border-accent/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5M6.75 12h10.5m-10.5 4.5h6m-9-12.75h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6a2.25 2.25 0 0 1 2.25-2.25Z"/></svg>
              </div>
              <span className="tag tag-dj">сейчас</span>
            </div>
            <p className="font-mono text-[10px] text-accent mb-2">Генеральный техспециалист</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">DemiResults</h3>
            <p className="text-muted text-sm leading-relaxed">Техническое сопровождение, автоматизации, интеграции, CRM, Telegram-боты, внедрение AI-инструментов и настройка рабочих процессов компании.</p>
          </div>

          <div className="card p-6 sr d3 hover:border-orange/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3"/></svg>
              </div>
              <span className="tag tag-ai">hardware + software</span>
            </div>
            <p className="font-mono text-[10px] text-orange mb-2">Установка серверов</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">Физическая и программная настройка</h3>
            <p className="text-muted text-sm leading-relaxed">Подключение серверного оборудования, сеть и доступы, установка системы, базовая конфигурация, сервисы, домены и подготовка к работе.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
