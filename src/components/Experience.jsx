// Секция «Опыт работы»: Codify, DemiResults, агентство Азиза Атавалиева, курсы и настройка серверов.
// Тег «сейчас» / «previous» показывает статус позиции.
export default function Experience({ t }) {
  return (
    <section id="experience" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-14 sr">
          <p className="font-mono text-xs text-accent mb-2">// 03 — experience</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text">{t('experience-h2')}</h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="card p-6 sr d1">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.75.78 3.75 3.75 0 0 0-7.5 0m3.75-.78a3.75 3.75 0 0 1-3.75.78m3.75-.78v-3.47m-7.5 4.25a3.75 3.75 0 0 0-7.5 0 9.094 9.094 0 0 0 7.5 0m0 0v-3.47m0 3.47a3.75 3.75 0 0 0 3.75 0M6.75 10.5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"/></svg>
              </div>
            <span className="tag tag-dim">{t('experience-previous')}</span>
            </div>
            <p className="font-mono text-[10px] text-blue mb-2">TechSupport</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">Codify</h3>
            <p className="text-muted text-sm leading-relaxed">{t('experience-codify-d')}</p>
          </div>

          <div className="card p-6 sr d2 hover:border-accent/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5M6.75 12h10.5m-10.5 4.5h6m-9-12.75h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6a2.25 2.25 0 0 1 2.25-2.25Z"/></svg>
              </div>
              <span className="tag tag-dj">{t('experience-current')}</span>
            </div>
            <p className="font-mono text-[10px] text-accent mb-2">{t('experience-demi-role')}</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">DemiResults</h3>
            <p className="text-muted text-sm leading-relaxed">{t('experience-demi-d')}</p>
          </div>

          <div className="card p-6 sr d3 hover:border-purple/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-purple" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84 51.143 51.143 0 0 0-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.5 8.038V14.25"/></svg>
              </div>
              <span className="tag tag-db">{t('experience-current')}</span>
            </div>
            <p className="font-mono text-[10px] text-purple mb-2">{t('experience-agency-role')}</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">{t('experience-agency-title')}</h3>
            <p className="text-muted text-sm leading-relaxed">{t('experience-agency-d')}</p>
          </div>

          <div className="card p-6 sr hover:border-blue/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14.25c3.728 0 6.75-1.51 6.75-3.375S15.728 7.5 12 7.5s-6.75 1.51-6.75 3.375S8.272 14.25 12 14.25Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 10.875v4.875c0 1.864 3.022 3.375 6.75 3.375s6.75-1.511 6.75-3.375v-4.875M18.75 10.875 21 9.75m0 0-9-4.5-9 4.5m18 0v6"/></svg>
              </div>
              <span className="tag tag-py">{t('experience-current')}</span>
            </div>
            <p className="font-mono text-[10px] text-blue mb-2">{t('experience-courses-role')}</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">{t('experience-courses-title')}</h3>
            <p className="text-muted text-sm leading-relaxed">{t('experience-courses-d')}</p>
          </div>

          <div className="card p-6 sr hover:border-orange/40">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3"/></svg>
              </div>
              <span className="tag tag-ai">hardware + software</span>
            </div>
            <p className="font-mono text-[10px] text-orange mb-2">{t('experience-server-role')}</p>
            <h3 className="font-heading font-black text-2xl text-text mb-3">{t('experience-server-title')}</h3>
            <p className="text-muted text-sm leading-relaxed">{t('experience-server-d')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
