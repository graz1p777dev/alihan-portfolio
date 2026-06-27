import { useState, useCallback } from 'react'
import { LANG_T } from '../lib/i18n'

export function useLang() {
  const [lang, setLangState] = useState(() => localStorage.getItem('lang') || 'ru')

  const setLang = useCallback((newLang) => {
    localStorage.setItem('lang', newLang)
    setLangState(newLang)
  }, [])

  const t = useCallback((key) => {
    return (LANG_T[lang] || LANG_T.ru)[key] ?? key
  }, [lang])

  return { lang, setLang, t }
}
