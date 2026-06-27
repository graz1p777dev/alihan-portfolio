import { useEffect } from 'react'

const GH_SVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="color:#EEF2FF;flex-shrink:0"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>`

function rankCol(name) {
  if (!name) return '#64748B'
  if (/[87]\s*kyu/i.test(name)) return '#64748B'
  if (/[65]\s*kyu/i.test(name)) return '#EAB308'
  if (/[43]\s*kyu/i.test(name)) return '#3B82F6'
  if (/[21]\s*kyu/i.test(name)) return '#8B5CF6'
  if (/dan/i.test(name)) return '#EEF2FF'
  return '#64748B'
}

function evLabel(t) {
  return ({ PushEvent:'push', CreateEvent:'create', PullRequestEvent:'PR',
    IssuesEvent:'issue', WatchEvent:'star', ForkEvent:'fork',
    DeleteEvent:'delete', IssueCommentEvent:'comment', ReleaseEvent:'release' })[t]
    || t.replace('Event', '')
}

export default function Stats({ t }) {
  useEffect(() => {
    // Codewars
    fetch('/api/codewars')
      .then(r => r.json())
      .then(cw => {
        const rc = rankCol(cw.ranks?.overall?.name)
        const pyN = cw.ranks?.languages?.python?.name || '—'
        const pyC = rankCol(pyN)
        const pos = cw.leaderboardPosition
        document.getElementById('cw-card').innerHTML =
          `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="font-mono text-xs font-bold" style="padding:2px 8px;border-radius:5px;background:rgba(176,36,44,.15);color:#E05A6A;border:1px solid rgba(176,36,44,.35)">CW</span>
              <span class="font-heading font-black text-lg text-text">Codewars</span>
            </div>
            <span class="font-mono text-xs" style="padding:4px 10px;border-radius:99px;color:${rc};background:${rc}22;border:1px solid ${rc}44">${cw.ranks?.overall?.name || '—'}</span>
          </div>
          <p class="font-mono text-sm text-muted" style="margin-bottom:16px">@${cw.username}</p>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px${pos ? ';margin-bottom:12px' : ''}">
            <div class="activity-stat" style="text-align:center">
              <p class="font-heading font-black text-xl text-accent">${(cw.honor ?? 0).toLocaleString()}</p>
              <p class="font-mono text-muted" style="font-size:10px;margin-top:4px">honor</p>
            </div>
            <div class="activity-stat" style="text-align:center">
              <p class="font-heading font-black text-xl" style="color:#60A5FA">${cw.codeChallenges?.totalCompleted ?? '—'}</p>
              <p class="font-mono text-muted" style="font-size:10px;margin-top:4px">kata</p>
            </div>
            <div class="activity-stat" style="text-align:center">
              <p class="font-heading font-black" style="font-size:17px;color:${pyC}">${pyN}</p>
              <p class="font-mono text-muted" style="font-size:10px;margin-top:4px">python rank</p>
            </div>
          </div>
          ${pos ? `<p class="font-mono text-muted" style="font-size:11px">Leaderboard: <span style="color:#EEF2FF">#${pos.toLocaleString()}</span></p>` : ''}`
      })
      .catch(() => {
        const el = document.getElementById('cw-card')
        if (el) el.innerHTML = '<p class="font-mono text-muted" style="font-size:12px;padding:8px">Не удалось загрузить данные Codewars</p>'
      })

    // GitHub
    fetch('/api/github-activity').then(r => r.json()).then(({ profile: user, repos, events }) => {
      const rowStyle = 'display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid rgba(28,42,66,.7)'
      const rRows = (Array.isArray(repos) ? repos : []).map(r =>
        `<div style="${rowStyle}">
          <a href="${r.html_url}" target="_blank" rel="noopener" class="font-mono hover:text-accent transition-colors" style="font-size:11px;color:#EEF2FF;max-width:75%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${r.name}</a>
          <span class="font-mono text-muted" style="font-size:10px;flex-shrink:0">★ ${r.stargazers_count}</span>
        </div>`
      ).join('')
      const eRows = (Array.isArray(events) ? events : []).slice(0, 5).map(e =>
        `<div style="${rowStyle.replace('rgba(28,42,66,.7)', 'rgba(28,42,66,.4)')}">
          <span class="font-mono" style="font-size:10px;flex-shrink:0;padding:2px 7px;border-radius:4px;color:#00E87A;background:rgba(0,232,122,.1)">${evLabel(e.type)}</span>
          <span class="font-mono text-muted" style="font-size:11px;margin-left:8px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${e.repo.name.split('/')[1]}</span>
        </div>`
      ).join('')
      document.getElementById('gh-card').innerHTML =
        `<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <div style="display:flex;align-items:center;gap:8px">${GH_SVG}<span class="font-heading font-black text-lg text-text">GitHub</span></div>
          <img src="${user.avatar_url}" style="width:36px;height:36px;border-radius:50%;border:1px solid #1C2A42" alt="">
        </div>
        <div style="display:flex;gap:20px;margin-bottom:16px">
          <div><span class="font-heading font-black text-xl text-accent">${user.public_repos}</span><span class="font-mono text-muted" style="font-size:11px;margin-left:4px">repos</span></div>
          <div><span class="font-heading font-black text-xl" style="color:#60A5FA">${user.followers}</span><span class="font-mono text-muted" style="font-size:11px;margin-left:4px">followers</span></div>
        </div>
        <p class="font-mono text-muted" style="font-size:10px;margin-bottom:4px">recent repos</p>
        <div style="margin-bottom:14px">${rRows}</div>
        <p class="font-mono text-muted" style="font-size:10px;margin-bottom:4px">activity</p>
        <div>${eRows}</div>`
    }).catch(() => {
      const el = document.getElementById('gh-card')
      if (el) el.innerHTML = '<p class="font-mono text-muted" style="font-size:12px;padding:8px">Не удалось загрузить данные GitHub</p>'
    })
  }, [])

  return (
    <section id="stats" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sr">
          <p className="font-mono text-xs text-accent mb-2">// 06 — stats</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-text mb-3">{t('stats-h2')}</h2>
          <p className="text-muted text-sm">{t('stats-sub')}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Codewars skeleton */}
          <div id="cw-card" className="card p-6 sr">
            <div className="animate-pulse space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-5 rounded w-28" style={{background:'rgba(45,62,90,.7)'}}></div>
                <div className="h-6 rounded-full w-16" style={{background:'rgba(45,62,90,.7)'}}></div>
              </div>
              <div className="h-4 rounded w-32" style={{background:'rgba(45,62,90,.7)'}}></div>
              <div className="grid grid-cols-3 gap-3 pt-1">
                <div className="h-16 rounded-xl" style={{background:'rgba(45,62,90,.7)'}}></div>
                <div className="h-16 rounded-xl" style={{background:'rgba(45,62,90,.7)'}}></div>
                <div className="h-16 rounded-xl" style={{background:'rgba(45,62,90,.7)'}}></div>
              </div>
            </div>
          </div>
          {/* GitHub skeleton */}
          <div id="gh-card" className="card p-6 sr">
            <div className="animate-pulse space-y-3">
              <div className="flex items-center justify-between">
                <div className="h-5 rounded w-24" style={{background:'rgba(45,62,90,.7)'}}></div>
                <div className="h-9 w-9 rounded-full" style={{background:'rgba(45,62,90,.7)'}}></div>
              </div>
              <div className="flex gap-4">
                <div className="h-6 rounded w-20" style={{background:'rgba(45,62,90,.7)'}}></div>
                <div className="h-6 rounded w-20" style={{background:'rgba(45,62,90,.7)'}}></div>
              </div>
              <div className="space-y-2 pt-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={`h-3 rounded${i % 3 === 1 ? ' w-5/6' : i % 3 === 2 ? ' w-4/6' : ''}`} style={{background:'rgba(45,62,90,.7)'}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
