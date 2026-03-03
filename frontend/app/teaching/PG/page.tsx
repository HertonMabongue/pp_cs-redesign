"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Clock, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  pgProgrammes,
  pgModulesBySection,
  type PGModule,
} from "@/data/pg-modules";

// ── PG MODULE CARD ────────────────────────────────────────────────────────────
function PGModuleCard({ mod, index }: { mod: PGModule; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.05 }}
      onClick={() => setExpanded(!expanded)}
      className="group rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-xl"
      style={{
        background: "white",
        border: "1.5px solid rgba(97,34,59,0.1)",
        minHeight: "140px",
      }}
    >
      <div style={{ padding: "2rem 1.75rem 1.5rem 1.75rem" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="inline-block text-base font-black uppercase tracking-wider rounded-lg"
                style={{
                  background: "#61223b",
                  color: "#caa258",
                  whiteSpace: "nowrap",
                  padding: "0.3rem 0.85rem",
                  flexShrink: 0,
                }}
              >
                {mod.code}
              </span>
              <span
                className="text-sm font-medium"
                style={{
                  color: "rgba(74,72,71,0.45)",
                  flexShrink: 1,
                  minWidth: 0,
                }}
              >
                {mod.fullCode}
              </span>
              <div
                className="flex items-center gap-1.5"
                style={{
                  color: "rgba(74,72,71,0.6)",
                  flexShrink: 0,
                  marginLeft: "auto",
                }}
              >
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span
                  className="text-sm font-semibold"
                  style={{
                    background: "rgba(202,162,88,0.13)",
                    color: "#61223b",
                    border: "1px solid rgba(202,162,88,0.35)",
                    whiteSpace: "nowrap",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    display: "inline-block",
                  }}
                >
                  {mod.semester}
                </span>
              </div>
            </div>
            <h4
              className="text-lg font-bold leading-snug transition-colors duration-150 group-hover:text-[#caa258]"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              {mod.name}
            </h4>
            {mod.lecturer && (
              <div className="flex items-center gap-2 mt-2">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "rgba(97,34,59,0.4)" }}
                >
                  Lecturer
                </span>
                {mod.lecturerUrl ? (
                  <a
                    href={mod.lecturerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-150 hover:opacity-75"
                    style={{
                      color: "#61223b",
                      textDecoration: "underline",
                      textDecorationColor: "rgba(202,162,88,0.6)",
                      textUnderlineOffset: "3px",
                    }}
                  >
                    {mod.lecturer}
                    <ExternalLink
                      className="w-3 h-3 shrink-0"
                      style={{ color: "#caa258" }}
                    />
                  </a>
                ) : (
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#61223b" }}
                  >
                    {mod.lecturer}
                  </span>
                )}
              </div>
            )}
          </div>
          <ChevronRight
            className="w-6 h-6 shrink-0 mt-1 transition-transform duration-200"
            style={{
              color: "rgba(97,34,59,0.4)",
              transform: expanded ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>

        <AnimatePresence>
          {expanded && mod.description && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <p
                className="mt-5 text-base leading-relaxed pt-5"
                style={{
                  color: "#4a4847",
                  borderTop: "1px solid rgba(97,34,59,0.09)",
                }}
              >
                {mod.description}
              </p>
              <a
                href={mod.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 mt-4 text-base font-bold transition-colors duration-150 hover:opacity-80"
                style={{ color: "#caa258" }}
              >
                View module details
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function PGPage() {
  const sectionKeys = Object.keys(pgModulesBySection);
  const [activeSection, setActiveSection] = useState(sectionKeys[0]);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/assets/Postgraduate_hero.jpg"
          alt="Postgraduate programmes"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.82) 0%, rgba(97,34,59,0.35) 50%, rgba(0,0,0,0.12) 100%)",
          }}
        />

        {/* ── Bottom menu buttons ── */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center">
          {/* Desktop */}
          <div
            className="hidden sm:flex flex-row"
            style={{ gap: "1px", backgroundColor: "#caa258" }}
          >
            {[
              { label: "Overview", action: "scroll", target: "pg-overview" },
              {
                label: "Programmes",
                action: "scroll",
                target: "pg-programmes",
              },
              { label: "Modules", action: "scroll", target: "pg-modules" },
              {
                label: "Prospective Students",
                action: "link",
                href: "/teaching/prospectivePG",
              },
            ].map((btn) =>
              btn.action === "link" ? (
                <a
                  key={btn.label}
                  href={(btn as { href: string }).href}
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
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#caa258";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#61223b";
                  }}
                >
                  {btn.label}
                </a>
              ) : (
                <button
                  key={btn.label}
                  onClick={() =>
                    document
                      .getElementById((btn as { target: string }).target)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
                    cursor: "pointer",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#caa258";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#61223b";
                  }}
                >
                  {btn.label}
                </button>
              )
            )}
          </div>
          {/* Mobile */}
          <div
            className="flex sm:hidden flex-col w-full"
            style={{ gap: "1px", backgroundColor: "#caa258" }}
          >
            {[
              { label: "Overview", action: "scroll", target: "pg-overview" },
              {
                label: "Programmes",
                action: "scroll",
                target: "pg-programmes",
              },
              { label: "Modules", action: "scroll", target: "pg-modules" },
              {
                label: "Prospective Students",
                action: "link",
                href: "/teaching/prospectivePG",
              },
            ].map((btn) =>
              btn.action === "link" ? (
                <a
                  key={btn.label}
                  href={(btn as { href: string }).href}
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
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#61223b";
                  }}
                >
                  {btn.label}
                </a>
              ) : (
                <button
                  key={btn.label}
                  onClick={() =>
                    document
                      .getElementById((btn as { target: string }).target)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
                    width: "100%",
                    transition: "background-color 0.15s",
                    cursor: "pointer",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#caa258";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#61223b";
                  }}
                >
                  {btn.label}
                </button>
              )
            )}
          </div>
        </div>

        <div
          className="relative w-full container-narrow mx-auto px-6 pb-16 pt-32"
          style={{ marginTop: "6vh" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Breadcrumb */}
            <nav
              className="flex items-center gap-2 text-sm font-bold mb-6"
              style={{
                color: "rgba(255,255,255,0.75)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
              <Link
                href="/teaching"
                className="hover:text-white transition-colors"
              >
                Study
              </Link>
              <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
              <span style={{ color: "#caa258" }}>Postgraduate</span>
            </nav>
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-5"
              style={{ color: "#caa258", fontFamily: "SU Raleway, sans-serif" }}
            >
              Postgraduate
              <br />
              <span style={{ color: "#caa258" }}>Programmes</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl font-semibold leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.92)",
                textShadow: "0 1px 6px rgba(0,0,0,0.55)",
              }}
            >
              Advance your expertise through world-class research, preparing you
              for leadership in industry, academia, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section
        id="pg-overview"
        className="bg-white"
        style={{
          paddingTop: "4rem",
          paddingBottom: "3rem",
          scrollMarginTop: "160px",
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span
              className="block font-bold uppercase tracking-widest mb-5"
              style={{ color: "#caa258", fontSize: "1rem" }}
            >
              Overview
            </span>
            <h2
              className="text-3xl md:text-4xl font-black mb-8"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              Graduate Study in Computer Science
            </h2>
            <div
              className="flex flex-col text-base md:text-lg leading-relaxed"
              style={{ color: "#4a4847", gap: "1.5rem" }}
            >
              <p>
                Graduate students at{" "}
                <strong style={{ color: "#61223b" }}>
                  Stellenbosch University Computer Science
                </strong>{" "}
                engage in cutting-edge research that directly takes on the grand
                global challenges of the 21st century. They work alongside
                world-renowned researchers, and develop the kind of impactful
                science that benefits humanity in multiple ways.
              </p>
              <p>
                Our postgraduate programmes span{" "}
                <strong style={{ color: "#61223b" }}>Honours</strong>,{" "}
                <strong style={{ color: "#61223b" }}>Masters</strong>, and{" "}
                <strong style={{ color: "#61223b" }}>PhD</strong> levels,
                offering both coursework and research pathways. Students benefit
                from close supervision by expert researchers and access to
                state-of-the-art computing facilities. For more information,
                visit our{" "}
                <Link
                  href="/teaching/prospectivePG"
                  className="font-semibold underline underline-offset-2 decoration-[#caa258] hover:text-[#61223b] transition-colors"
                  style={{ color: "#caa258" }}
                >
                  information for prospective PG students
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMMES ── */}
      <section
        id="pg-programmes"
        className="bg-[#faf8f5]"
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          scrollMarginTop: "160px",
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: "3rem" }}
          >
            <h2
              className="text-3xl md:text-4xl font-black mb-5"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              Postgraduate Programmes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                prog: pgProgrammes[0],
                href: "/teaching/honours",
                label: "Honours",
              },
              {
                prog: pgProgrammes[1],
                href: "/teaching/masters",
                label: "Masters",
              },
              {
                prog: pgProgrammes[2],
                href: "/teaching/phd",
                label: "PhD",
              },
            ].map(({ prog, href, label }) => (
              <motion.div
                key={prog.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col justify-between rounded-2xl transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    background: "white",
                    border: "1.5px solid rgba(97,34,59,0.12)",
                    padding: "2.25rem 2rem 2rem 2rem",
                    minHeight: "260px",
                    display: "flex",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <span
                      className="inline-block text-xs font-black uppercase tracking-widest rounded-lg mb-3"
                      style={{
                        background: "#61223b",
                        color: "#caa258",
                        padding: "0.3rem 0.85rem",
                      }}
                    >
                      {prog.code}
                    </span>
                    <h3
                      className="font-black mb-3 transition-colors duration-150 group-hover:text-[#caa258]"
                      style={{
                        color: "#61223b",
                        fontFamily: "SU Raleway, sans-serif",
                        fontSize: "1.2rem",
                      }}
                    >
                      {label} in Computer Science
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "#4a4847", fontSize: "0.9375rem" }}
                    >
                      {prog.description}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1.5 mt-6 font-bold"
                    style={{ color: "#caa258", fontSize: "0.9375rem" }}
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <div className="container-narrow mx-auto px-6">
          <h2
            id="pg-modules"
            className="text-3xl md:text-4xl font-black mb-4"
            style={{
              color: "#61223b",
              fontFamily: "SU Raleway, sans-serif",
              scrollMarginTop: "160px",
            }}
          >
            Postgraduate Modules
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "#4a4847", marginBottom: "2.5rem" }}
          >
            Detailed module information by semester. Click any module to expand
            details.
          </p>

          {/* Section tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="flex flex-wrap gap-4"
              style={{ marginBottom: "2.7rem" }}
            >
              {sectionKeys.map((sec) => (
                <button
                  key={sec}
                  onClick={() => setActiveSection(sec)}
                  className="rounded-full text-lg font-bold transition-all duration-200"
                  style={
                    activeSection === sec
                      ? {
                          padding: "0.55rem 1.5rem",
                          whiteSpace: "nowrap",
                          background: "#61223b",
                          color: "#caa258",
                          boxShadow: "0 4px 14px rgba(97,34,59,0.3)",
                          border: "none",
                        }
                      : {
                          padding: "0.55rem 1.5rem",
                          whiteSpace: "nowrap",
                          background: "white",
                          color: "#61223b",
                          border: "1.5px solid rgba(97,34,59,0.18)",
                        }
                  }
                >
                  {sec}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid gap-5 md:grid-cols-2 items-start"
              >
                {pgModulesBySection[activeSection].map((mod, i) => (
                  <PGModuleCard
                    key={`${mod.fullCode}-${i}`}
                    mod={mod}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
