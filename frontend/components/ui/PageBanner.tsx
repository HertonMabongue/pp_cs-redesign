import Link from "next/link";
import { clsx } from "clsx";

interface PageBannerProps {
  title: string;
  description?: string;
  breadcrumbs?: { name: string; href?: string }[];
}

export default function PageBanner({
  title,
  description,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Deep maroon gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #3d1526 0%, #61223b 55%, #4a1a2d 100%)",
        }}
      />

      {/* Dot-grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #caa258 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative rings – right side */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border border-gold/10" />
      <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full border border-gold/10" />
      <div className="absolute top-1/2 -right-10 w-28 h-28 rounded-full bg-gold/5 blur-xl" />

      {/* Gold shimmer bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
        }}
      />

      <div className="relative container-narrow mx-auto px-4">
        {breadcrumbs && (
          <nav className="mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/30">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white/90 font-medium">
                      {crumb.name}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Gold accent bar */}
        <div className="w-12 h-1 rounded-full bg-gold mb-4" />

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base md:text-lg text-white/65 max-w-2xl leading-relaxed font-light">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
