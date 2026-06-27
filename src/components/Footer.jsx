export default function Footer() {
  return (
    <footer className="relative z-10 py-7 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-sm text-muted"><span className="text-accent">~/</span>alihan<span className="text-dim">.dev</span></span>
        <p className="font-mono text-xs text-dim">© 2025 · Бишкек, Кыргызстан</p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span className="font-mono text-xs text-muted">open to work</span>
        </div>
      </div>
    </footer>
  )
}
