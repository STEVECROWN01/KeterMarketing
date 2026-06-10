'use client'

import Link from 'next/link'

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B0B] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-4">Erreur</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Une erreur est survenue</h2>
      <p className="text-white/50 max-w-md mb-8 leading-relaxed">
        Quelque chose s&apos;est mal passé. Veuillez réessayer ou contacter notre équipe si le problème persiste.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#D4AF37] hover:bg-[#B8960C] text-[#0B0B0B] font-semibold text-[14px] uppercase tracking-[0.06em] transition-all duration-300"
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/20 text-white/70 hover:bg-white hover:text-[#0B0B0B] text-[14px] font-medium uppercase tracking-[0.06em] bg-transparent transition-all duration-300"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
