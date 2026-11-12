import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type PageShellProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#1F3D2B] pt-28">
        <div className="section-padding relative mx-auto max-w-7xl">
          <div className="glow-accent pointer-events-none absolute -left-40 -top-40 z-0 h-105 w-105 rounded-full" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            TenLabs
          </p>
          <h1 className="relative mt-4 text-4xl font-bold tracking-tight text-[#E8DCC4] md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="relative mt-6 max-w-2xl text-lg text-[#D8CDB8]">{subtitle}</p>
          )}
          <div className="relative">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
