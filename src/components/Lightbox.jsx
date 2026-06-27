// Лайтбокс для просмотра скриншотов проектов на весь экран.
// Открывается/закрывается через useLightbox (состояние живёт в App.jsx).
// CSS-класс 'open' управляет видимостью и backdrop-blur через transition в index.css.
import { useEffect } from 'react'

export default function Lightbox({ lbState, closeLb }) {
  const { open, src, alt } = lbState

  // Закрытие по клавише Escape — добавляем и снимаем слушатель при каждом изменении closeLb
  useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') closeLb() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [closeLb])

  return (
    <div
      id="lb"
      className={`lb${open ? ' open' : ''}`}
      role="dialog"
      aria-modal="true"
      onClick={e => { if (e.target === e.currentTarget) closeLb() }}
    >
      <button className="lb-close" aria-label="Закрыть" onClick={closeLb}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
      <img className="lb-img" src={src} alt={alt} />
    </div>
  )
}
