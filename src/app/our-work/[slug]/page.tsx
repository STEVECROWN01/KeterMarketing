import { projects, portfolioList } from '@/lib/data'
import CaseStudyClient from './CaseStudyClient'

const allProjects = portfolioList

// Provide static params for all known project slugs (server-only)
export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  return <CaseStudyClient params={params} allProjects={allProjects} />
}
