import { useEffect, useRef } from 'react'

const PHRASES = ['FullStack Developer', 'Python Developer', 'Backend Engineer', 'Bot & AI Builder', 'Automation Specialist']

export default function Hero({ t }) {
  const typedRef = useRef(null)

  useEffect(() => {
    let pi = 0, ci = 0, del = false
    let timer
    function tick() {
      const p = PHRASES[pi]
      if (!del) {
        typedRef.current.textContent = p.slice(0, ++ci)
        if (ci === p.length) { del = true; timer = setTimeout(tick, 2200); return; }
      } else {
        typedRef.current.textContent = p.slice(0, --ci)
        if (ci === 0) { del = false; pi = (pi + 1) % PHRASES.length }
      }
      timer = setTimeout(tick, del ? 50 : 80)
    }
    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [])

  // Dynamic experience years — started Jan 2024
  const years = Math.floor((Date.now() - new Date(2024, 0, 1)) / (365.25 * 24 * 3600 * 1000))

  return (
    <section className="relative z-10 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 sm:pb-20">
      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-5 gap-6 lg:gap-12 xl:gap-16 items-center">

        {/* Text side */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 border border-accent/20 bg-accent/5 text-accent font-mono text-xs px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span>{t('hero-badge')}</span>
          </div>

          <div>
            <h1 className="font-heading font-black text-[2.6rem] sm:text-6xl xl:text-[72px] leading-[0.93] text-text hero-h1">
              Привет,<br />я <span className="grad">Алихан</span>
            </h1>
            <p className="mt-4 font-mono text-accent text-lg flex items-center gap-2 hero-sub">
              <span className="opacity-50">›</span>
              <span ref={typedRef}></span><span className="cur text-accent">▍</span>
            </p>
          </div>

          <p className="text-muted text-base leading-relaxed max-w-lg">
            Работаю с <span className="text-text font-medium">Python</span> и <span className="text-text font-medium">JavaScript</span> — пишу backend на Django, делаю сайты, Telegram-боты и автоматизации для бизнеса.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="tag tag-py">Python</span>
            <span className="tag tag-js">JavaScript</span>
            <span className="tag tag-dj">Django · DRF</span>
            <span className="tag tag-db">PostgreSQL</span>
            <span className="tag tag-tg">Telegram API</span>
            <span className="tag tag-ai">AI integrations</span>
          </div>

          <div className="flex flex-wrap gap-3 pt-1 hero-cta">
            <a href="#projects" className="btn-g">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>
              Проекты
            </a>
            <a href="#contact" className="btn-o">Связаться</a>
          </div>
        </div>

        {/* Terminal side */}
        <div className="lg:col-span-2 space-y-3">
          {/* Terminal: hidden on mobile */}
          <div className="hidden lg:block card overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-s2 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
              <span className="font-mono text-xs text-muted ml-3">alihan @ dev</span>
            </div>
            <div className="p-5 font-mono text-xs space-y-3 bg-bg/50 overflow-x-auto">
              <div className="space-y-1">
                <p><span className="text-accent">$</span> <span className="text-text">cat about.json</span></p>
                <div className="pl-3 text-muted space-y-0.5 mt-1">
                  <p className="text-dim">{'{'}</p>
                  <p className="pl-3"><span className="text-blue">"name"</span>: <span className="text-accent">"Алихан"</span>,</p>
                  <p className="pl-3"><span className="text-blue">"role"</span>: <span className="text-yellow-300">"FullStack Dev"</span>,</p>
                  <p className="pl-3"><span className="text-blue">"location"</span>: <span className="text-yellow-300">"Бишкек, KG"</span>,</p>
                  <p className="pl-3"><span className="text-blue">"exp"</span>: <span className="text-purple-400">2</span> <span className="text-dim">// years</span></p>
                  <p className="text-dim">{'}'}</p>
                </div>
              </div>
              <div className="space-y-1">
                <p><span className="text-accent">$</span> <span className="text-text">python3 main.py</span></p>
                <div className="pl-3 mt-1 space-y-0.5">
                  <p className="text-muted">Initializing stack...</p>
                  <p><span className="text-accent">✓</span> <span className="text-text">Python</span> <span className="text-dim">— primary</span></p>
                  <p><span className="text-accent">✓</span> <span className="text-text">JavaScript</span> <span className="text-dim">— primary</span></p>
                  <p><span className="text-accent">✓</span> <span className="text-text">Django / DRF</span> <span className="text-dim">— backend</span></p>
                  <p><span className="text-blue-400">i</span> <span className="text-text">C++ / C / Java / C# / Lua / Rust</span> <span className="text-dim">— basics</span></p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-accent">$</span>
                <span className="text-muted cur">▍</span>
              </div>
            </div>
          </div>

          {/* Mini stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="card p-3 sm:p-4 text-center">
              <p className="font-heading font-black text-xl sm:text-2xl text-accent stat-card-num">{years}+</p>
              <p className="font-mono text-muted text-[10px] mt-0.5">{t('stat-exp')}</p>
            </div>
            <div className="card p-3 sm:p-4 text-center">
              <p className="font-heading font-black text-xl sm:text-2xl text-blue stat-card-num">8+</p>
              <p className="font-mono text-muted text-[10px] mt-0.5">{t('stat-lang')}</p>
            </div>
            <div className="card p-3 sm:p-4 text-center">
              <p className="font-heading font-black text-xl sm:text-2xl text-orange stat-card-num">8+</p>
              <p className="font-mono text-muted text-[10px] mt-0.5">{t('stat-proj')}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
