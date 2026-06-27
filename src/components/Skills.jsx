// Секция «Технологии»: сетка карточек с прогресс-барами навыков и виджетом активности.
// Прогресс-бары (.bar-fill) анимируются из App.jsx — ширина задаётся через data-w при скролле.
// Виджет активности (#activity-widget) заполняется данными из Codewars и GitHub API тоже в App.jsx.
export default function Skills({ t }) {
  return (
    <section id="skills" className="relative z-10 py-14 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-14 sr">
          <p className="font-mono text-xs text-accent mb-2">// 04 — skills</p>
          <div className="accent-line mx-auto mb-5"></div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl text-text">{t('skills-h2')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">

          {/* Primary languages */}
          <div className="card p-5 sm:p-7 sr">
            <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-6">
              <span className="font-mono text-accent text-xs">01</span>
              <span className="w-px h-4 bg-border"></span>
              Основные языки
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="tag tag-py">Python</span>
                    <span className="hidden sm:inline text-muted text-xs">backend · боты · автоматизация</span>
                  </div>
                  <span className="font-mono text-xs text-accent">primary</span>
                </div>
                <div className="bar"><div className="bar-fill" data-w="82" style={{background:'linear-gradient(90deg,#3B82F6,#00E87A)'}}></div></div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="tag tag-js">JavaScript</span>
                    <span className="hidden sm:inline text-muted text-xs">frontend · сайты · логика</span>
                  </div>
                  <span className="font-mono text-xs text-muted">skill</span>
                </div>
                <div className="bar"><div className="bar-fill" data-w="58" style={{background:'linear-gradient(90deg,#FCD34D,#F59E0B)'}}></div></div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-5">
                <span className="font-mono text-purple text-xs">02</span>
                <span className="w-px h-4 bg-border"></span>
                Frontend стек
              </h3>
              <div className="grid sm:grid-cols-3 gap-2">
                <div className="tag tag-tg justify-center">React</div>
                <div className="tag tag-dim justify-center">Next.js</div>
                <div className="tag tag-db justify-center">TypeScript</div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-5">
                <span className="font-mono text-blue text-xs">03</span>
                <span className="w-px h-4 bg-border"></span>
                Backend стек
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="tag tag-dj">Django · DRF</span>
                    <span className="hidden sm:inline font-mono text-xs text-muted">API · сервер</span>
                  </div>
                  <div className="bar"><div className="bar-fill" data-w="76" style={{background:'linear-gradient(90deg,#00E87A,#16A34A)'}}></div></div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="tag tag-db">PostgreSQL · Supabase</span>
                    <span className="hidden sm:inline font-mono text-xs text-muted">базы данных</span>
                  </div>
                  <div className="bar"><div className="bar-fill" data-w="68" style={{background:'linear-gradient(90deg,#8B5CF6,#6366F1)'}}></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">

            <div className="card p-5 sm:p-7 sr d2">
              <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-2">
                <span className="font-mono text-purple text-xs">04</span>
                <span className="w-px h-4 bg-border"></span>
                Знакомые языки
              </h3>
              <p className="text-muted text-xs mb-4 font-mono">// писал программы, знаю базовую логику</p>
              <div className="flex flex-wrap gap-2">
                <div className="tag tag-cpp flex items-center gap-1.5">C++<span className="text-[9px] opacity-60">vars · loops · funcs</span></div>
                <div className="tag tag-dim flex items-center gap-1.5">C<span className="text-[9px] opacity-60">basics</span></div>
                <div className="tag tag-ai flex items-center gap-1.5">Java<span className="text-[9px] opacity-60">OOP basics</span></div>
                <div className="tag tag-db flex items-center gap-1.5">C#<span className="text-[9px] opacity-60">basics</span></div>
                <div className="tag tag-dj flex items-center gap-1.5">Lua<span className="text-[9px] opacity-60">scripting</span></div>
                <div className="tag tag-js flex items-center gap-1.5">Rust<span className="text-[9px] opacity-60">basics</span></div>
              </div>
            </div>

            <div className="card p-5 sm:p-7 sr d3">
              <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-4">
                <span className="font-mono text-blue text-xs">05</span>
                <span className="w-px h-4 bg-border"></span>
                Mobile разработка
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="tag tag-db">Swift</span>
                    <span className="hidden sm:inline text-muted text-xs">iOS · UIKit · SwiftUI</span>
                  </div>
                  <span className="font-mono text-xs text-blue">iOS</span>
                </div>
                <div className="bar"><div className="bar-fill" data-w="55" style={{background:'linear-gradient(90deg,#3B82F6,#6366F1)'}}></div></div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-2">
                    <span className="tag tag-dj">Kotlin</span>
                    <span className="hidden sm:inline text-muted text-xs">Android · Jetpack</span>
                  </div>
                  <span className="font-mono text-xs text-accent">Android</span>
                </div>
                <div className="bar"><div className="bar-fill" data-w="45" style={{background:'linear-gradient(90deg,#00E87A,#16A34A)'}}></div></div>
              </div>
            </div>

            <div className="card p-7 sr d4">
              <h3 className="font-heading font-bold text-text flex items-center gap-2 mb-5">
                <span className="font-mono text-orange text-xs">06</span>
                <span className="w-px h-4 bg-border"></span>
                Инструменты & интеграции
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="tag tag-dim">Git</span>
                <span className="tag tag-dim">GitHub</span>
                <span className="tag tag-dim">Docker</span>
                <span className="tag tag-dim">Linux</span>
                <span className="tag tag-db">Server setup</span>
                <span className="tag tag-dim">Network setup</span>
                <span className="tag tag-ai">Hardware setup</span>
                <span className="tag tag-dim">Postman</span>
                <span className="tag tag-dim">Swagger</span>
                <span className="tag tag-dim">Vercel</span>
                <span className="tag tag-dim">Railway</span>
                <span className="tag tag-dj">Cloudflare</span>
                <span className="tag tag-tg">Telegram API</span>
                <span className="tag tag-ai">amoCRM</span>
                <span className="tag tag-dj">Google Sheets</span>
                <span className="tag tag-db">Supabase</span>
                <span className="tag tag-js">n8n</span>
                <span className="tag tag-dim">REST API</span>
              </div>
            </div>

          </div>
        </div>

        {/* Activity widget */}
        <div className="card p-5 sm:p-7 mt-5 sr d5" id="activity-widget">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
            <div>
              <p className="font-mono text-xs text-accent mb-2">// live api activity</p>
              <h3 className="font-heading font-bold text-text text-2xl">Codewars & GitHub активность</h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span id="activity-updated">обновляется...</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3 mb-5">
            <div className="activity-stat">
              <p className="font-mono text-[10px] text-muted uppercase tracking-wide">Codewars rank</p>
              <p className="font-heading font-black text-2xl text-yellow-300 mt-1" id="cw-rank">...</p>
              <p className="font-mono text-xs text-dim mt-1" id="cw-score">score loading</p>
            </div>
            <div className="activity-stat">
              <p className="font-mono text-[10px] text-muted uppercase tracking-wide">Honor</p>
              <p className="font-heading font-black text-2xl text-accent mt-1" id="cw-honor">...</p>
              <p className="font-mono text-xs text-dim mt-1">Codewars</p>
            </div>
            <div className="activity-stat">
              <p className="font-mono text-[10px] text-muted uppercase tracking-wide">Completed</p>
              <p className="font-heading font-black text-2xl text-blue mt-1" id="cw-completed">...</p>
              <p className="font-mono text-xs text-dim mt-1">kata solved</p>
            </div>
            <div className="activity-stat">
              <p className="font-mono text-[10px] text-muted uppercase tracking-wide">GitHub</p>
              <p className="font-heading font-black text-2xl text-purple mt-1" id="gh-repos">...</p>
              <p className="font-mono text-xs text-dim mt-1" id="gh-followers">public repos</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-bold text-text">Последние действия GitHub</h4>
                <a href="https://github.com/graz1p777dev" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-text transition-colors">open github</a>
              </div>
              <ul className="activity-feed text-sm" id="gh-feed">
                <li><span className="text-muted">Загрузка GitHub API...</span></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading font-bold text-text">Codewars профиль</h4>
                <a href="https://www.codewars.com/users/graz1p777dev" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:text-text transition-colors">open codewars</a>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-muted">Python</span>
                    <span className="font-mono text-xs text-yellow-300" id="cw-python">...</span>
                  </div>
                  <div className="bar"><div className="bar-fill" id="cw-python-bar" data-w="0" style={{background:'linear-gradient(90deg,#3B82F6,#00E87A)'}}></div></div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-muted">C++</span>
                    <span className="font-mono text-xs text-text" id="cw-cpp">...</span>
                  </div>
                  <div className="bar"><div className="bar-fill" id="cw-cpp-bar" data-w="0" style={{background:'linear-gradient(90deg,#64748B,#C084FC)'}}></div></div>
                </div>
                <p className="text-muted text-xs leading-relaxed">Данные подтягиваются из публичного Codewars API и GitHub API при открытии страницы.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
