// Секция «Контакты»: карточка с кнопкой Telegram и ряд ссылок на соцсети.
// Намеренно минималистичная — никаких форм, только прямые ссылки.
const TG_ICON = (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.19 14.565l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.63.021z"/></svg>
)

export default function Contact({ t }) {
  return (
    <section id="contact" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10 sr">
          <p className="font-mono text-xs text-accent mb-2">// 07 — contact</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text mb-3">{t('contact-h2')}</h2>
          <p className="text-muted">{t('contact-sub')}</p>
        </div>

        <div className="card p-8 sr d1 text-center">
          <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
            {TG_ICON}
          </div>
          <p className="text-muted text-sm mb-6 max-w-xs mx-auto">{t('contact-cd')}</p>
          <a href="https://t.me/graz1p777" target="_blank" rel="noopener" className="btn-g w-full justify-center text-[15px]" style={{padding:'14px'}}>
            {TG_ICON}
            Написать в Telegram
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 sr d2">
          <a href="https://t.me/graz1p777" target="_blank" rel="noopener" className="soc">
            {TG_ICON}
            @graz1p777
          </a>
          <a href="https://github.com/graz1p777dev" target="_blank" rel="noopener" className="soc">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
            graz1p777dev
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="soc">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.05h4.4V23H.3V8.05Zm7.18 0h4.22v2.04h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.47c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H7.48V8.05Z"/></svg>
            LinkedIn
          </a>
          <a href="https://www.youtube.com/@graz1p777dev" target="_blank" rel="noopener" className="soc">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
          <a href="mailto:gekkokurai@gmail.com" className="soc">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Gmail
          </a>
        </div>
      </div>
    </section>
  )
}
