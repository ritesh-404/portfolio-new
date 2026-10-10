import { Suspense } from "react";
import { useParams } from "wouter";

import { caseStudyPages } from "./case-studies";
import NotFoundPage from "./NotFoundPage";

export default function CaseStudyPage() {
  const { id } = useParams();
  const Page = caseStudyPages[id];

  if (!Page) return <NotFoundPage />;

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#101010]" />}>
      <Page />
    </Suspense>
  );
}
