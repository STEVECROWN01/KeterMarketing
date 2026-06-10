import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-[#D4AF37] mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Page introuvable</h2>
      <p className="text-white/50 max-w-md mb-8 leading-relaxed">
        La page que vous recherchez n&apos;existe pas ou a été déplacée. Vérifiez l&apos;URL ou retournez à l&apos;accueil.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
