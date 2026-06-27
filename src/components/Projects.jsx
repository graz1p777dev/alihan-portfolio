// Секция «Проекты»: галерея карточек с превью-скриншотами, описаниями и ссылками на GitHub.
// Клик по изображению открывает лайтбокс (через openLb из App.jsx), клик по кнопке — переходит на сайт.
const GH_ICON_SM = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
)
const GH_ICON_XS = (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
)
const EXT_ICON = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
)

export default function Projects({ t, openLb }) {
  // Открывает лайтбокс при клике по обёртке изображения, но игнорирует клики по кнопке «Открыть»
  function handleImgWrapClick(e, src, alt) {
    if (e.target.closest('.proj-visit-btn')) return
    openLb(src, alt)
  }

  return (
    <section id="projects" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-14 sr">
          <p className="font-mono text-xs text-accent mb-2">// 05 — projects</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text">{t('proj-h2')}</h2>
          <p className="text-muted mt-3 text-sm">{t('proj-sub')}</p>
        </div>

        {/* Featured: 2 Demi projects */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">

          <div className="proj-card sr">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/DemiResultsCRM.webp', 'Demi Results CRM')}>
              <img src="/img/DemiResultsCRM.webp" alt="Demi Results CRM" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">featured · CRM</span>
                <a href="https://github.com/graz1p777dev/Demireusltsn8nbotcopy" target="_blank" rel="noopener" className="proj-visit-btn">
                  {GH_ICON_SM} GitHub
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-accent mb-1">featured · ai · crm</p>
              <h3 className="font-heading font-black text-lg text-text mb-1.5">Demi Results CRM</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">CRM-система и AI-ассистент для магазина уходовой косметики. Интеграции с amoCRM, Telegram, Google Sheets.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-py">Python</span>
                <span className="tag tag-dj">Django</span>
                <span className="tag tag-db">PostgreSQL</span>
                <span className="tag tag-tg">Telegram</span>
                <span className="tag tag-ai">AI</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/Demireusltsn8nbotcopy" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/Demireusltsn8nbotcopy
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d1">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/DemiresultsCRM-BOT.webp', 'DemiResults n8n Bot')}>
              <img src="/img/DemiresultsCRM-BOT.webp" alt="DemiResults n8n Bot" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">automation · n8n</span>
                <a href="https://demireusltsn8nbotcopy.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-purple mb-1">automation · telegram · n8n</p>
              <h3 className="font-heading font-black text-lg text-text mb-1.5">DemiResults Bot</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Telegram-бот с n8n автоматизацией для обработки заявок, уведомлений и AI-ответов клиентам.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-py">Python</span>
                <span className="tag tag-tg">Telegram</span>
                <span className="tag tag-js">n8n</span>
                <span className="tag tag-ai">AI</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/Demireusltsn8nbotcopy" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/Demireusltsn8nbotcopy
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Websites catalog */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <div className="proj-card sr">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/Victorina.webp', 'Victorina — платформа тестов для юристов')}>
              <img src="/img/Victorina.webp" alt="Victorina — платформа тестов для юристов" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">fullstack · parser · exam</span>
                <a href="https://github.com/graz1p777dev/Exam-Platform" target="_blank" rel="noopener" className="proj-visit-btn">
                  {GH_ICON_SM} GitHub
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-purple mb-1">fullstack · юридические тесты</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Victorina — Legal Exam</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Большая платформа тестирования для юристов на основе реальных экзаменов. Сложный Python-парсер, который автоматически превращает вопросы и ответы из текста в тесты.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-py">Python</span>
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">Parser</span>
                <span className="tag tag-db">PostgreSQL</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/Exam-Platform" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/Exam-Platform
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/DemiResults-IOS-APP.webp', 'DemiResults Mobile App')}>
              <img src="/img/DemiResults-IOS-APP.webp" alt="DemiResults Mobile App" className="proj-img" loading="lazy" style={{objectPosition:'center'}} />
              <div className="proj-overlay">
                <span className="proj-badge">mobile · ios & android</span>
                <a href="https://github.com/graz1p777dev/DemiResultsProduction" target="_blank" rel="noopener" className="proj-visit-btn">
                  {GH_ICON_SM} GitHub
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-blue mb-1">mobile · ios & android · в разработке</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">DemiResults App</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Мобильное приложение для клиентов магазина косметики Demi Results. iOS и Android версии в разработке — пока не выпущено.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-db">Swift</span>
                <span className="tag tag-dim">Kotlin</span>
                <span className="tag tag-ai">iOS</span>
                <span className="tag tag-tg">Android</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/DemiResultsProduction" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/DemiResultsProduction
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d1">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/Holy-korea.webp', 'Holi Korea')}>
              <img src="/img/Holy-korea.webp" alt="Holi Korea" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">web · landing</span>
                <a href="https://holi-korea-phi.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-orange mb-1">web · корейская косметика</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Holi Korea</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Лендинг магазина корейской косметики с каталогом и формой заказа.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">HTML / CSS</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/holi-korea" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/holi-korea
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d1">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/Nomad-place.webp', 'Nomad Place')}>
              <img src="/img/Nomad-place.webp" alt="Nomad Place" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">web · coworking</span>
                <a href="https://nomad-place-gilt.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-blue mb-1">web · коворкинг</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Nomad Place</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Сайт коворкинга в Бишкеке с бронированием мест и описанием тарифов.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">HTML / CSS</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/nomad-place" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/nomad-place
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d2">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/Tatyr.webp', 'Tatyr KG')}>
              <img src="/img/Tatyr.webp" alt="Tatyr KG" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">web · кыргызская кухня</span>
                <a href="https://tatyr-kg.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-accent mb-1">web · ресторан</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Tatyr KG</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Сайт ресторана кыргызской кухни с меню и возможностью бронирования стола.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">HTML / CSS</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/Taryr.kg" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/Taryr.kg
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d1">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/jewelry-studio.webp', 'Ювелирная студия')}>
              <img src="/img/jewelry-studio.webp" alt="Ювелирная студия" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">web · ювелирный</span>
                <a href="https://yuvelirnaya-studia.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-purple mb-1">web · ювелирная студия</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Jewelry Studio</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Лендинг ювелирной мастерской с каталогом украшений и формой заказа.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">HTML / CSS</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/yuvelirnaya.studia" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/yuvelirnaya.studia
                </a>
              </div>
            </div>
          </div>

          <div className="proj-card sr d2">
            <div className="proj-img-wrap" style={{cursor:'zoom-in'}} onClick={e => handleImgWrapClick(e, '/img/DemiPortfolio.webp', 'Ademi Portfolio')}>
              <img src="/img/DemiPortfolio.webp" alt="Ademi Portfolio" className="proj-img" loading="lazy" />
              <div className="proj-overlay">
                <span className="proj-badge">web · портфолио</span>
                <a href="https://ademi-portfolio.vercel.app" target="_blank" rel="noopener" className="proj-visit-btn">
                  {EXT_ICON} Открыть
                </a>
              </div>
            </div>
            <div className="proj-body">
              <p className="font-mono text-[10px] text-orange mb-1">web · личное портфолио</p>
              <h3 className="font-heading font-black text-base text-text mb-1.5">Ademi Portfolio</h3>
              <p className="text-muted text-xs leading-relaxed mb-3">Портфолио-сайт с разделами о навыках, проектах и контактной информацией.</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="tag tag-js">JavaScript</span>
                <span className="tag tag-dim">HTML / CSS</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border/40">
                <a href="https://github.com/graz1p777dev/ademi-portfolio" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono text-[11px]">
                  {GH_ICON_XS} graz1p777dev/ademi-portfolio
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
