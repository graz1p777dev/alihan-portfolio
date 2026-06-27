import { useState } from 'react'

const GH_ICON = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>
)
const LI_ICON = (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.05h4.4V23H.3V8.05Zm7.18 0h4.22v2.04h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.47c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V23H7.48V8.05Z"/></svg>
)

export default function Nav({ lang, setLang, t, onOpenCv }) {
  const [open, setOpen] = useState(false)

  function toggle() { setOpen(o => !o) }
  function close() { setOpen(false) }

  return (
    <nav id="nav" className="fixed top-3 inset-x-3 z-50 max-w-6xl mx-auto">
      <div className="glass border border-border/60 rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-medium text-text flex items-center gap-0.5">
          <span className="text-accent">~/</span><span>alihan</span><span className="text-muted">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-6 font-mono text-xs text-muted">
          <li><a href="#about"      className="nav-item hover:text-text transition-colors">about</a></li>
          <li><a href="#services"   className="nav-item hover:text-text transition-colors">services</a></li>
          <li><a href="#experience" className="nav-item hover:text-text transition-colors">experience</a></li>
          <li><a href="#skills"     className="nav-item hover:text-text transition-colors">skills</a></li>
          <li><a href="#projects"   className="nav-item hover:text-text transition-colors">projects</a></li>
          <li><a href="#stats"      className="nav-item hover:text-text transition-colors">stats</a></li>
          <li><a href="#contact"    className="nav-item hover:text-text transition-colors">contact</a></li>
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/graz1p777dev" target="_blank" rel="noopener" className="soc py-2 px-3">{GH_ICON}</a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="soc py-2 px-3" aria-label="LinkedIn">{LI_ICON}</a>
          <div className="flex items-center gap-0.5">
            <button className={`lang-btn${lang === 'ru' ? ' on' : ''}`} onClick={() => setLang('ru')}>RU</button>
            <button className={`lang-btn${lang === 'en' ? ' on' : ''}`} onClick={() => setLang('en')}>EN</button>
          </div>
          <button onClick={onOpenCv} className="lang-btn" style={{borderColor:'#1C2A42',color:'#64748B'}}>{t('nav-cv')}</button>
          <a href="#contact" className="btn-g" style={{padding:'9px 16px',fontSize:'13px',borderRadius:'9px'}}>{t('nav-write')}</a>
        </div>

        <button
          id="burger"
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg cursor-pointer bg-transparent border-0"
          aria-label="Меню"
          onClick={toggle}
        >
          <span className="block w-5 h-0.5 bg-text rounded-full transition-all duration-250 origin-center mx-auto" style={{transform: open ? 'translateY(7px) rotate(45deg)' : ''}}></span>
          <span className="block w-5 h-0.5 bg-text rounded-full transition-all duration-250 mx-auto" style={{opacity: open ? '0' : '1'}}></span>
          <span className="block w-5 h-0.5 bg-muted rounded-full transition-all duration-250 origin-center mx-auto" style={{transform: open ? 'translateY(-7px) rotate(-45deg)' : ''}}></span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mt-2">
          <div className="glass border border-border/60 rounded-2xl px-5 py-4">
            <ul className="flex flex-col gap-1 font-mono text-sm text-muted mb-4">
              {['about','services','experience','skills','projects','stats','contact'].map(s => (
                <li key={s}><a href={`#${s}`} className="block hover:text-accent py-2 transition-colors" onClick={close}>{s}</a></li>
              ))}
            </ul>
            <div className="flex gap-2 pt-3 border-t border-border">
              <a href="https://github.com/graz1p777dev" target="_blank" rel="noopener" className="soc flex-1 justify-center text-xs">GitHub</a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener" className="soc flex-1 justify-center text-xs">LinkedIn</a>
              <button onClick={() => { onOpenCv(); close(); }} className="soc flex-1 justify-center text-xs">{t('nav-cv')}</button>
              <a href="#contact" className="btn-g flex-1 justify-center text-xs" style={{padding:'9px',borderRadius:'9px'}} onClick={close}>{t('nav-write')}</a>
            </div>
            <div className="flex gap-1 pt-2">
              <button className={`lang-btn flex-1 text-center${lang === 'ru' ? ' on' : ''}`} onClick={() => setLang('ru')}>RU</button>
              <button className={`lang-btn flex-1 text-center${lang === 'en' ? ' on' : ''}`} onClick={() => setLang('en')}>EN</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
