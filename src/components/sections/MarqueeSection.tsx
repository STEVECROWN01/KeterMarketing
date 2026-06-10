'use client'

const clients = [
  'Win Agro Tech',
  'Academia Helm',
  'AfriBayit',
  'Foncier Facile Afrique',
  'PME BTP Parakou',
  'Agence Formation Lomé',
  'Services IT Abidjan',
  'Coach Business Cotonou',
]

export default function MarqueeSection() {
  return (
    <section className="bg-[#111111] border-y border-white/5 overflow-hidden py-4">
      <div className="flex overflow-hidden">
        {/* Double the list inside one div for seamless loop */}
        <div
          className="animate-marquee flex whitespace-nowrap shrink-0 min-w-full"
        >
          {[...clients, ...clients].map((client, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
              <span className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.15em] font-mono">
                {client}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
