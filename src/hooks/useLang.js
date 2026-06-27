// Хук управления языком интерфейса (ru/en).
// Сохраняет выбранный язык в localStorage между сессиями.
// Возвращает: lang — текущий код языка, setLang — смена языка, t(key) — перевод строки.
import { useState, useCallback } from 'react'
import { LANG_T } from '../lib/i18n'

export function useLang() {
  // Читаем сохранённый язык при первом рендере; по умолчанию — русский
  const [lang, setLangState] = useState(() => localStorage.getItem('lang') || 'ru')

  // Записываем язык в localStorage и обновляем стейт
  const setLang = useCallback((newLang) => {
    localStorage.setItem('lang', newLang)
    setLangState(newLang)
  }, [])

  // Переводит ключ на текущий язык; если перевода нет — возвращает сам ключ
  const t = useCallback((key) => {
    return (LANG_T[lang] || LANG_T.ru)[key] ?? key
  }, [lang])

  return { lang, setLang, t }
}
