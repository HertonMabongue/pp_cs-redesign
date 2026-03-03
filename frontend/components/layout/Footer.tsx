import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    title: "Academics",
    links: [
      { name: "Undergraduate", href: "/teaching/UG" },
      { name: "Postgraduate", href: "/teaching/PG" },
      { name: "Prospective Students", href: "/teaching/prospectiveUG" },
    ],
  },
  {
    title: "Research",
    links: [
      { name: "Research", href: "/research" },
      { name: "Collaborate", href: "/contact" },
    ],
  },
  {
    title: "Department",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Staff", href: "/people/staff" },
      { name: "News", href: "/news" },
      { name: "Events", href: "/events" },
    ],
  },
  {
    title: "Students",
    links: [
      { name: "Resources", href: "/resources" },
      { name: "Student Portal", href: "https://my.sun.ac.za" },
      { name: "Library", href: "https://library.sun.ac.za" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const additionalLinks = [
  { name: "My.SUN", href: "https://my.sun.ac.za/" },
  { name: "Library", href: "https://library.sun.ac.za" },
  { name: "Careers at SU", href: "https://www.sun.ac.za/english/hr" },
  { name: "Stories", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Contact us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="su-footer text-white"
      role="contentinfo"
      style={{ marginTop: "auto" }}
    >
      {/* Gold top accent */}
      <div
        className="h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
        }}
      />

      {/* Primary section — SU-style flex-wrap layout */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: "#61223b" }}
      >
        {/* Background image */}
        <Image
          src="/assets/footer_bg.webp"
          alt=""
          fill
          className="object-cover object-top hidden md:block pointer-events-none"
          aria-hidden="true"
        />
        <Image
          src="/assets/footer_bg_mobile.webp"
          alt=""
          fill
          className="object-cover object-bottom md:hidden pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="relative z-10 container-wide mx-auto"
          style={{ padding: "2.5rem 1.375rem 1.25rem" }}
        >
          {/* flex-wrap justify-between, matching SU footer__primary */}
          <div
            className="flex flex-wrap justify-between"
            style={{ gap: "1.875rem" }}
          >
            {/* Brand / contact column */}
            <div className="w-full md:w-auto md:max-w-xs shrink-0">
              <div style={{ marginBottom: "1.25rem", marginTop: "-2.5rem" }}>
                <Image
                  src="/assets/SU_slogan_all.png"
                  alt="Stellenbosch University slogan"
                  width={380}
                  height={135}
                  style={{
                    width: "100%",
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                    position: "relative",
                    left: "-4rem",
                  }}
                />
              </div>

              <div
                className="text-sm"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <a
                  href="mailto:secretary@cs.sun.ac.za"
                  className="flex items-center gap-2 text-white/55 hover:text-[#caa258] transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#caa258]/70" />
                  secretary@cs.sun.ac.za
                </a>
                <a
                  href="tel:+27218084232"
                  className="flex items-center gap-2 text-white/55 hover:text-[#caa258] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-[#caa258]/70" />
                  +27 21 808 4232
                </a>
                <div className="flex items-start gap-2 text-white/55">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#caa258]/70" />
                  <span>
                    Banghoek Road &amp; Joubert Street, Stellenbosch Central,
                    7600
                  </span>
                </div>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((section) => (
              <div key={section.title} className="min-w-[140px]">
                <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-[0.15em]">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-[#caa258] transition-colors"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/50 hover:text-[#caa258] transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social — right side, Facebook only */}
            <div className="w-full md:w-auto flex items-start md:items-end mt-2 md:mt-0">
              <a
                href="https://www.facebook.com/stellenboschuniversity/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group relative block"
              >
                {/* SU-style sizing: 1.5625rem mobile → 2.25rem desktop */}
                <svg
                  className="w-[1.5625rem] h-[1.5625rem] md:w-9 md:h-9 text-[#caa258] opacity-80 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal bottom bar */}
        <div className="relative z-10 border-t border-white/10">
          <div className="container-wide mx-auto px-5 md:px-6 py-5">
            <ul
              className="footer-legal flex flex-wrap items-center text-sm"
              style={{ color: "white", gap: "0.75rem 0" }}
            >
              <li style={{ color: "white", paddingRight: "1.5rem" }}>
                &copy; {new Date().getFullYear()} Stellenbosch University
              </li>
              <li
                style={{ opacity: 0.3, paddingRight: "1.5rem" }}
                aria-hidden="true"
              >
                |
              </li>
              <li style={{ color: "white", paddingRight: "1.5rem" }}>
                All rights reserved
              </li>
              <li
                style={{ opacity: 0.3, paddingRight: "1.5rem" }}
                aria-hidden="true"
              >
                |
              </li>
              <li style={{ paddingRight: "1.5rem" }}>
                <a
                  href="https://www.su.ac.za/en/terms-use"
                  style={{ color: "white" }}
                  className="hover:text-[#caa258] transition-colors"
                >
                  Terms of use
                </a>
              </li>
              <li
                style={{ opacity: 0.3, paddingRight: "1.5rem" }}
                aria-hidden="true"
              >
                |
              </li>
              <li style={{ paddingRight: "1.5rem" }}>
                <a
                  href="https://files.su.ac.za/public/students/documents/2025-10/paia-manual.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                  className="hover:text-[#caa258] transition-colors"
                >
                  Access to information
                </a>
              </li>
              <li
                style={{ opacity: 0.3, paddingRight: "1.5rem" }}
                aria-hidden="true"
              >
                |
              </li>
              <li>
                <a
                  href="https://www.su.ac.za/en/privacy-notice"
                  style={{ color: "white" }}
                  className="hover:text-[#caa258] transition-colors"
                >
                  Privacy notice
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
