import { useState, useCallback } from 'react'

export function useLightbox() {
  const [lbState, setLbState] = useState({ open: false, src: '', alt: '' })

  const openLb = useCallback((src, alt) => {
    setLbState({ open: true, src, alt })
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLb = useCallback(() => {
    setLbState(s => ({ ...s, open: false }))
    document.body.style.overflow = ''
  }, [])

  return { lbState, openLb, closeLb }
}
