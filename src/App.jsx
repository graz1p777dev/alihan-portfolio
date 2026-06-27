import { useState, useEffect } from 'react'
import { useLang } from './hooks/useLang'
import { useLightbox } from './hooks/useLightbox'

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import CvModal from './components/CvModal'

export default function App() {
  const { lang, setLang, t } = useLang()
  const { lbState, openLb, closeLb } = useLightbox()
  const [cvOpen, setCvOpen] = useState(false)

  // Scroll reveal (.sr elements)
  useEffect(() => {
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    const els = document.querySelectorAll('.sr')
    els.forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  // Skill bars animation
  useEffect(() => {
    const bo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.bar-fill').forEach(b => {
            setTimeout(() => { b.style.width = b.dataset.w + '%' }, 150)
          })
        }
      })
    }, { threshold: 0.2 })
    document.querySelectorAll('.card').forEach(el => bo.observe(el))
    return () => bo.disconnect()
  }, [])

  // Reveal classes for section children
  useEffect(() => {
    const revealSections = ['#about','#services','#experience','#skills','#projects','#stats','#contact']
    revealSections.forEach(sel => {
      const sec = document.querySelector(sel)
      if (!sec) return
      const children = sec.querySelectorAll(':scope > div > *')
      children.forEach((el, i) => {
        el.classList.add('reveal')
        if (i > 0 && i <= 5) el.classList.add('reveal-d' + i)
      })
    })
    document.querySelectorAll('.proj-card, .card.p-5, .card.p-6').forEach((el, i) => {
      el.classList.add('reveal')
      el.classList.add('reveal-d' + Math.min((i % 6) + 1, 6))
    })
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Navbar shrink on scroll
  useEffect(() => {
    function onScroll() {
      const nav = document.getElementById('nav')
      if (nav) nav.style.top = window.scrollY > 30 ? '6px' : '12px'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Activity API (skills section widget)
  useEffect(() => {
    const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val }
    const eventName = type => ({
      PushEvent:'push', CreateEvent:'created', PullRequestEvent:'pull request',
      IssuesEvent:'issue', WatchEvent:'starred', ForkEvent:'forked'
    }[type] || type.replace('Event','').toLowerCase())

    function timeAgo(dateString) {
      const seconds = Math.max(1, Math.round((Date.now() - new Date(dateString).getTime()) / 1000))
      if (seconds < 60) return `${seconds}s ago`
      const minutes = Math.round(seconds / 60)
      if (minutes < 60) return `${minutes}m ago`
      const hours = Math.round(minutes / 60)
      if (hours < 24) return `${hours}h ago`
      return `${Math.round(hours / 24)}d ago`
    }

    async function fetchJson(url, fallbackUrl) {
      const res = await fetch(url, { headers: { Accept: 'application/json' } }).catch(() => null)
      if (res && res.ok) return res.json()
      if (!fallbackUrl) throw new Error(`API error: ${url}`)
      const fallback = await fetch(fallbackUrl, { headers: { Accept: 'application/json' } })
      if (!fallback.ok) throw new Error(`API error: ${fallbackUrl}`)
      return fallback.json()
    }

    async function loadActivity() {
      try {
        const [codewars, github] = await Promise.all([
          fetchJson('/api/codewars'),
          fetchJson('/api/github-activity', 'https://api.github.com/users/graz1p777dev/events/public?per_page=5'),
        ])
        const overall = codewars.ranks?.overall || {}
        const python = codewars.ranks?.languages?.python || {}
        const cpp = codewars.ranks?.languages?.cpp || {}
        setText('cw-rank', overall.name || 'n/a')
        setText('cw-score', `${overall.score || 0} score`)
        setText('cw-honor', codewars.honor ?? 'n/a')
        setText('cw-completed', codewars.codeChallenges?.totalCompleted ?? 'n/a')
        setText('cw-python', `${python.name || 'n/a'} · ${python.score || 0}`)
        setText('cw-cpp', `${cpp.name || 'n/a'} · ${cpp.score || 0}`)
        const pyBar = document.getElementById('cw-python-bar')
        if (pyBar) pyBar.style.width = `${Math.min(100, Math.max(12, python.score || 0))}%`
        const cppBar = document.getElementById('cw-cpp-bar')
        if (cppBar) cppBar.style.width = `${Math.min(100, Math.max(8, (cpp.score || 0) * 8))}%`

        const events = Array.isArray(github.events) ? github.events : github
        setText('gh-repos', github.profile?.public_repos ?? 'live')
        setText('gh-followers', `${github.profile?.followers ?? 0} followers`)
        const feed = document.getElementById('gh-feed')
        if (feed) {
          feed.innerHTML = events.slice(0, 5).map(event => `
            <li>
              <span>
                <span class="text-text">${eventName(event.type)}</span>
                <span class="text-muted"> in ${event.repo?.name || 'GitHub'}</span>
              </span>
              <span class="font-mono text-xs text-dim shrink-0">${timeAgo(event.created_at)}</span>
            </li>
          `).join('') || '<li><span class="text-muted">Нет публичных событий.</span></li>'
        }
        setText('activity-updated', `updated ${new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`)
      } catch {
        setText('activity-updated', 'API временно недоступен')
        const feed = document.getElementById('gh-feed')
        if (feed) feed.innerHTML = '<li><span class="text-muted">Не удалось загрузить активность. Попробуйте обновить страницу позже.</span></li>'
      }
    }
    loadActivity()
  }, [])

  return (
    <div className="dot-grid relative">
      {/* Glows */}
      <div className="glow glow-1"></div>
      <div className="glow glow-2"></div>
      <div className="glow glow-3"></div>

      <Nav lang={lang} setLang={setLang} t={t} onOpenCv={() => { setCvOpen(true); document.body.style.overflow = 'hidden' }} />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Experience />
      <Skills t={t} />
      <Projects t={t} openLb={openLb} />
      <Stats t={t} />
      <Contact t={t} />
      <Footer />

      <Lightbox lbState={lbState} closeLb={closeLb} />
      <CvModal open={cvOpen} onClose={() => { setCvOpen(false); document.body.style.overflow = '' }} t={t} />
    </div>
  )
}
