import { solutions } from "@/data/solutions";
import { notFound } from "next/navigation";
import SolutionDetail from "@/components/SolutionDetail";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Serwerowa powłoka (generateStaticParams + 404); język rozstrzyga klientowy SolutionDetail. */
export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!solutions.some((s) => s.slug === slug)) return notFound();
  return <SolutionDetail slug={slug} />;
}
