"use client";

import Button from "./Button";
import Link from "next/link";
import { clsx } from "clsx";
import dynamic from "next/dynamic";

const HackerCanvas = dynamic(() => import("./HackerCanvas"), { ssr: false });

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  menuButtons?: { label: string; href: string }[];
  variant?: "full" | "compact";
  backgroundPattern?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  menuButtons,
  variant = "full",
}: HeroSectionProps) {
  const isCompact = variant === "compact";

  return (
    <section
      className={clsx(
        "relative overflow-hidden",
        isCompact ? "py-12 md:py-16" : "min-h-screen flex items-center"
      )}
    >
      {/* ── Hacker canvas background (full variant only) ── */}
      {!isCompact && <HackerCanvas />}

      {/* ── Fallback / compact background ── */}
      {isCompact && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #3d1526 0%, #61223b 45%, #4a1a2d 100%)",
          }}
        />
      )}

      {/* ── Dark gradient overlay over video ── */}
      {!isCompact && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(45,10,25,0.60) 0%, rgba(97,34,59,0.50) 50%, rgba(30,8,18,0.65) 100%)",
          }}
        />
      )}

      {/* ── Dot-grid texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #caa258 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Decorative blobs (full only) ── */}
      {!isCompact && (
        <>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-science-red/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full border border-white/5 pointer-events-none" />
        </>
      )}

      {/* ── Gold shimmer bottom line ── */}
      {!menuButtons?.length && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
          }}
        />
      )}

      {/* ── Bottom menu button group (SU style) ── */}
      {menuButtons && menuButtons.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {/* Desktop: row with 1px vertical gold gaps */}
          <div
            className="hidden sm:flex flex-row"
            style={{ gap: "1px", backgroundColor: "#caa258" }}
          >
            {menuButtons.map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                style={{
                  backgroundColor: "#61223b",
                  color: "white",
                  padding: "1.25rem 2.25rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#caa258";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#61223b";
                  e.currentTarget.style.color = "white";
                }}
              >
                {btn.label}
              </Link>
            ))}
          </div>
          {/* Mobile: column with 1px horizontal gold gaps */}
          <div
            className="flex sm:hidden flex-col w-full"
            style={{ gap: "1px", backgroundColor: "#caa258" }}
          >
            {menuButtons.map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                style={{
                  backgroundColor: "#61223b",
                  color: "white",
                  padding: "0.875rem 1.5rem",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  fontSize: "0.8125rem",
                  letterSpacing: "0.1em",
                  textAlign: "center",
                  display: "block",
                  transition: "background-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#caa258";
                  e.currentTarget.style.color = "#1a0a10";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#61223b";
                  e.currentTarget.style.color = "white";
                }}
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Content ── */}
      <div
        className={clsx(
          "hero-content relative w-full container-narrow mx-auto px-4 text-center",
          isCompact ? "" : "py-24 md:py-32"
        )}
      >
        {/* Pill badge */}
        {subtitle && (
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-white/85 tracking-wide">
              {subtitle}
            </span>
          </div>
        )}

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-[1.05] max-w-4xl mx-auto tracking-tight">
          {title}
        </h1>

        {/* Gold underline accent */}
        <div
          className="mx-auto mb-8 w-20 h-1 rounded-full"
          style={{
            background: "linear-gradient(90deg, #b08c42, #caa258, #d4b474)",
          }}
        />

        {description && (
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {description}
          </p>
        )}

        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction && (
              <Button href={primaryAction.href} variant="gold" size="lg" icon>
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                href={secondaryAction.href}
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10 hover:text-white"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
