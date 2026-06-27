// Хук управления лайтбоксом (увеличенный просмотр скриншотов проектов).
// Блокирует скролл страницы при открытии и восстанавливает его при закрытии.
// Возвращает: lbState — { open, src, alt }, openLb(src, alt) — открыть, closeLb() — закрыть.
import { useState, useCallback } from 'react'

export function useLightbox() {
  const [lbState, setLbState] = useState({ open: false, src: '', alt: '' })

  // Открываем лайтбокс с нужным изображением и запрещаем скролл body
  const openLb = useCallback((src, alt) => {
    setLbState({ open: true, src, alt })
    document.body.style.overflow = 'hidden'
  }, [])

  // Закрываем лайтбокс и восстанавливаем скролл
  const closeLb = useCallback(() => {
    setLbState(s => ({ ...s, open: false }))
    document.body.style.overflow = ''
  }, [])

  return { lbState, openLb, closeLb }
}
