"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Study",
    href: "/teaching",
    tagline: "Explore our academic disciplines",
    overview: { name: "Overview ➜", href: "/teaching" },
    children: [
      { name: "Undergraduate", href: "/teaching/UG" },
      { name: "Postgraduate", href: "/teaching/PG" },
      { name: "Honours", href: "/teaching/honours" },
      { name: "Masters", href: "/teaching/masters" },
      { name: "PhD", href: "/teaching/phd" },
      { name: "Prospective Undergraduate", href: "/teaching/prospectiveUG" },
      { name: "Prospective Postgraduate", href: "/teaching/prospectivePG" },
    ],
  },
  { name: "Research", href: "/research" },
  {
    name: "People",
    href: "/people",
    tagline: "Meet our academic community",
    children: [
      { name: "Staff", href: "/people/staff" },
      { name: "Students", href: "/people/students" },
    ],
  },
  {
    name: "News & Events",
    href: "/news",
    tagline: "Stay up to date with the department",
    children: [
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
    ],
  },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  }, []);

  const startClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 220);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* navbar height: tracks actual rendered height for dropdown positioning */
  const [headerH, setHeaderH] = useState(144);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderH(headerRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [scrolled]);

  return (
    <>
      <header
        ref={headerRef}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#61223b]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        )}
      >
        {/* Main nav bar */}
        <div className="container-wide mx-auto px-6">
          <div className="flex items-center justify-between h-20 lg:h-36">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/assets/SU_logo.png"
                alt="Stellenbosch University"
                width={560}
                height={160}
                style={{ height: "60px", width: "auto" }}
                className="lg:hidden"
                priority
              />
              <Image
                src="/assets/SU_logo.png"
                alt="Stellenbosch University"
                width={560}
                height={160}
                style={{ height: "140px", width: "auto" }}
                className="hidden lg:block"
                priority
              />
            </Link>

            {/* Desktop nav — pushed left, spacious */}
            <nav
              className="hidden lg:flex items-center gap-5 ml-6"
              role="navigation"
              aria-label="Main navigation"
            >
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children ? openMenu(item.name) : undefined
                  }
                  onMouseLeave={startClose}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative flex items-center gap-1.5 px-3 py-2.5 text-[1.05rem] font-extrabold tracking-wide transition-all duration-150",
                      openDropdown === item.name
                        ? "text-[#caa258]"
                        : "text-white hover:text-[#caa258]",
                      "after:absolute after:bottom-0 after:left-1 after:h-[3.5px] after:rounded-full after:bg-[#caa258] after:transition-all after:duration-200",
                      openDropdown === item.name
                        ? "after:right-1"
                        : "after:right-full hover:after:right-1"
                    )}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown
                        className={clsx(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          openDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open main menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              style={{
                color: "white",
                transition: "all 0.15s cubic-bezier(0.4,0,0.2,1)",
              }}
              className="lg:hidden flex items-center px-3 py-2 rounded-lg hover:bg-white/10"
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36"
                  viewBox="0 -960 960 960"
                  width="36"
                  fill="currentColor"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="36"
                  viewBox="0 -960 960 960"
                  width="36"
                  fill="currentColor"
                >
                  <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav panel */}
        <div
          id="mobile-nav"
          className={clsx(
            "lg:hidden overflow-y-auto transition-[max-height] duration-300 ease-in-out bg-[#61223b]",
            mobileOpen
              ? "max-h-[calc(100vh-80px)] border-t border-white/10"
              : "max-h-0"
          )}
          aria-hidden={!mobileOpen}
        >
          <nav
            className="container-wide mx-auto px-5 py-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div style={{ marginBottom: "0.5rem" }}>
                    {/* Section label */}
                    <span
                      style={{
                        display: "block",
                        padding: "0.85rem 1rem 0.4rem",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#caa258",
                      }}
                    >
                      {item.name}
                    </span>
                    {/* All children always visible */}
                    <div
                      style={{
                        borderLeft: "2px solid rgba(202,162,88,0.35)",
                        marginLeft: "1rem",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: "block",
                            padding: "0.85rem 0.75rem",
                            fontSize: "1rem",
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.85)",
                            borderRadius: "8px",
                            transition: "color 0.15s, background 0.15s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "#caa258";
                            (e.currentTarget as HTMLElement).style.background =
                              "rgba(255,255,255,0.07)";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color =
                              "rgba(255,255,255,0.85)";
                            (e.currentTarget as HTMLElement).style.background =
                              "transparent";
                          }}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: "block",
                      padding: "1rem 1rem",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      color: "white",
                      borderRadius: "10px",
                      transition: "color 0.15s, background 0.15s",
                      textDecoration: "none",
                      marginBottom: "0.25rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#caa258";
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(255,255,255,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "white";
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </header>

      {/* ── MEGA DROPDOWN PANELS (full-width, maroon, desktop only) ── */}
      {navigation.map((item) =>
        item.children ? (
          <div
            key={`mega-${item.name}`}
            role="region"
            aria-label={`${item.name} submenu`}
            onMouseEnter={() => openMenu(item.name)}
            onMouseLeave={startClose}
            className={clsx(
              "fixed left-0 right-0 z-40 hidden lg:block",
              "transition-all duration-200 ease-in-out",
              openDropdown === item.name
                ? "opacity-100 pointer-events-auto translate-y-0"
                : "opacity-0 pointer-events-none -translate-y-2"
            )}
            style={{ top: `${headerH}px` }}
          >
            {/* Gold separator line */}
            <div
              className="h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
              }}
            />
            {/* Panel with footer bg image */}
            <div
              className="relative overflow-hidden"
              style={{
                backgroundColor: "#61223b",
                boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              {/* Background image */}
              <Image
                src="/assets/footer_bg.webp"
                alt=""
                fill
                className="object-cover object-top pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="relative z-10 container-wide mx-auto px-8 pb-14"
                style={{ minHeight: "300px", paddingTop: "40px" }}
              >
                <div className="flex gap-16">
                  {/* Left: heading + tagline + optional overview button */}
                  <div className="shrink-0 w-[300px] flex flex-col">
                    <h2
                      className="text-3xl font-black mb-3"
                      style={{
                        color: "#caa258",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      {item.name}
                    </h2>
                    <p
                      className="text-base font-medium leading-relaxed mb-6"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {"tagline" in item && item.tagline}
                    </p>
                    {"overview" in item && item.overview && (
                      <Link
                        href={
                          (item.overview as { name: string; href: string }).href
                        }
                        onClick={() => setOpenDropdown(null)}
                        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-150 hover:opacity-90"
                        style={{
                          background: "#caa258",
                          color: "#61223b",
                          borderRadius: "0",
                        }}
                      >
                        {(item.overview as { name: string; href: string }).name}
                      </Link>
                    )}
                  </div>

                  {/* Right: links — single column */}
                  <div className="flex-1">
                    <div className="flex flex-col gap-1.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="group inline-flex items-center gap-2.5 py-3 transition-all duration-150 w-fit"
                        >
                          <span
                            className="text-[1.05rem] font-bold transition-colors duration-150 group-hover:text-[#caa258] border-b-[3px] border-transparent group-hover:border-[#caa258] pb-0.5"
                            style={{ color: "white" }}
                          >
                            {child.name}
                          </span>
                          <svg
                            className="w-4 h-4 shrink-0 text-white/40 transition-colors duration-150 group-hover:text-[#caa258]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      )}
    </>
  );
}
