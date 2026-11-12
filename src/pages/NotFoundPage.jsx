import BackLinkBtn from "../components/ui/BackLinkBtn";
export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-neutral-50 font-geist-sans text-neutral-900">
      <h1>Not found</h1>
      <BackLinkBtn />
    </main>
  );
}
