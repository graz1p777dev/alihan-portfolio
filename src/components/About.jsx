// Секция «Обо мне»: краткое описание Алихана и три карточки с ключевыми навыками.
// Класс sr/d2 — scroll-reveal с задержкой (управляется из App.jsx через IntersectionObserver).
export default function About({ t }) {
  return (
    <section id="about" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">

        <div className="sr">
          <p className="font-mono text-xs text-accent mb-2">// 01 — about</p>
          <div className="accent-line mb-5"></div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-text leading-tight mb-5">
            {t('about-heading-1')}<br />{t('about-heading-2')} <span className="grad">{t('about-heading-3')}</span><br />{t('about-heading-4')}
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            {t('about-p1')}
          </p>
          <p className="text-muted leading-relaxed mb-4">
            {t('about-age')}
          </p>
          <p className="text-muted leading-relaxed mb-4">
            {t('about-p2')}
          </p>
          <p className="text-muted leading-relaxed">
            {t('about-codify')}
          </p>
        </div>

        <div className="space-y-3 sr d2">
          <div className="card p-5 hover:border-accent/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">{t('about-card1-title')}</h3>
                <p className="text-muted text-sm">{t('about-card1-d')}</p>
              </div>
            </div>
          </div>

          <div className="card p-5 hover:border-blue/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">{t('about-card2-title')}</h3>
                <p className="text-muted text-sm">{t('about-card2-d')}</p>
              </div>
            </div>
          </div>

          <div className="card p-5 hover:border-orange/30 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-orange/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-orange" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text mb-1">{t('about-card3-title')}</h3>
                <p className="text-muted text-sm">{t('about-card3-d')}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
