// Модальное окно с текстовым резюме Алихана (из lib/cv.js).
// Поддерживает переключение языка (ru/en) и копирование текста в буфер обмена.
// Видимость управляется CSS-классом 'open' — анимация scale+opacity задана в index.css.
import { useState } from 'react'
import { CV_TEXT } from '../lib/cv'

export default function CvModal({ open, onClose, t }) {
  // cvLang — язык резюме внутри модала, независим от глобального lang сайта
  const [cvLang, setCvLang] = useState('ru')
  // copyLabel — временная метка «✓ Скопировано», сбрасывается через 1800ms
  const [copyLabel, setCopyLabel] = useState(null)

  // Копирует текст резюме в буфер и временно меняет лейбл кнопки
  function copy() {
    navigator.clipboard.writeText(CV_TEXT[cvLang] || CV_TEXT.ru).then(() => {
      setCopyLabel('✓ Скопировано')
      setTimeout(() => setCopyLabel(null), 1800)
    })
  }

  return (
    <div
      id="cv-wrap"
      className={`cv-wrap${open ? ' open' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="cv-box">
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 20px',borderBottom:'1px solid #1C2A42',flexShrink:0}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <span className="font-heading font-black text-lg text-text">{t('cv-title')}</span>
            <span className="font-mono text-muted text-xs">/ CV</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
            <button className={`lang-btn${cvLang === 'ru' ? ' on' : ''}`} onClick={() => setCvLang('ru')}>RU</button>
            <button className={`lang-btn${cvLang === 'en' ? ' on' : ''}`} onClick={() => setCvLang('en')}>EN</button>
            <button
              onClick={copy}
              style={{font:"600 11px 'JetBrains Mono',monospace",padding:'5px 12px',borderRadius:'7px',background:'rgba(0,232,122,.12)',color:'#00E87A',border:'1px solid rgba(0,232,122,.3)',cursor:'pointer',transition:'all .15s'}}
            >
              {copyLabel || t('cv-copy')}
            </button>
            <button onClick={onClose} style={{color:'#64748B',cursor:'pointer',padding:'4px 6px',fontSize:'16px',lineHeight:1,background:'none',border:'none'}}>✕</button>
          </div>
        </div>
        <div style={{overflowY:'auto',padding:'24px'}}>
          <pre style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'12px',color:'#EEF2FF',lineHeight:1.75,whiteSpace:'pre-wrap',margin:0}}>
            {CV_TEXT[cvLang] || CV_TEXT.ru}
          </pre>
        </div>
      </div>
    </div>
  )
}
