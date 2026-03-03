"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  modulesByYear,
  fullCurriculumRows,
  someCurriculumRows,
  bscFocalAreas,
  type UGModule,
} from "@/data/ug-modules";

// ── MODULE CARD ──────────────────────────────────────────────────────────────
function ModuleCard({ mod, index }: { mod: UGModule; index: number }) {
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
        minHeight: "160px",
      }}
    >
      <div style={{ padding: "2.5rem 1.75rem 1.75rem 1.75rem" }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Row 1: code + fullCode + semester pill */}
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
                    background:
                      mod.semester === "Not presented"
                        ? "rgba(74,72,71,0.07)"
                        : "rgba(202,162,88,0.13)",
                    color:
                      mod.semester === "Not presented" ? "#4a4847" : "#61223b",
                    border: `1px solid ${mod.semester === "Not presented" ? "rgba(74,72,71,0.15)" : "rgba(202,162,88,0.35)"}`,
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
            {/* Module name */}
            <h4
              className="text-lg font-bold leading-snug transition-colors duration-150 group-hover:text-[#caa258]"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              {mod.name}
            </h4>
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
          {expanded && (
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

// ── PAGE DATA (kept inline — small, UI-only) ─────────────────────────────────
const _unused = null; // placeholder so linter sees the file as module

export default function UGPage() {
  const [activeYear, setActiveYear] = useState("First Year");
  const yearKeys = Object.keys(modulesByYear);
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/assets/Undergraduate_hero.jpg"
          alt="Undergraduate programmes"
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
        {/* Gold bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[4px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
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
              { label: "Overview", action: "scroll", target: "ug-overview" },
              {
                label: "Programmes",
                action: "scroll",
                target: "ug-programmes",
              },
              { label: "Modules", action: "scroll", target: "ug-modules" },
              {
                label: "Prospective Students",
                action: "link",
                href: "/teaching/prospectiveUG",
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
              { label: "Overview", action: "scroll", target: "ug-overview" },
              {
                label: "Programmes",
                action: "scroll",
                target: "ug-programmes",
              },
              { label: "Modules", action: "scroll", target: "ug-modules" },
              {
                label: "Prospective Students",
                action: "link",
                href: "/teaching/prospectiveUG",
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
              <span style={{ color: "#caa258" }}>Undergraduate</span>
            </nav>
            <h1
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-5"
              style={{ color: "#caa258", fontFamily: "SU Raleway, sans-serif" }}
            >
              Undergraduate
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
              Build a world-class foundation in computer science, preparing you
              for industry careers, postgraduate study, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}
      <section
        id="ug-overview"
        className="bg-white"
        style={{
          paddingTop: "4rem",
          paddingBottom: "1rem",
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
              Computer Science Programmes
            </h2>
            <div
              className="flex flex-col text-base md:text-lg leading-relaxed"
              style={{ color: "#4a4847", gap: "1.5rem" }}
            >
              <p>
                <strong style={{ color: "#61223b" }}>
                  BSc Computer Science
                </strong>{" "}
                is the primary option for students who want to pursue a career
                in software development. This degree is an international
                qualification that enables you to find work at national and
                international companies. With the appropriate electives it can
                also lead to an honours programme in Computer Science (see our{" "}
                <Link
                  href="/teaching/prospectivePG"
                  className="font-semibold underline underline-offset-2 decoration-[#caa258] hover:text-[#61223b] transition-colors"
                  style={{ color: "#caa258" }}
                >
                  information for prospective PG students
                </Link>{" "}
                for more information on the appropriate electives) or to an
                honours programme in another subject, such as Applied
                Mathematics, Economics, General Linguistics, Mathematical
                Statistics, Mathematics, Operations Research, and Statistics.
              </p>
              <p>
                Many disciplines now require some knowledge of how to write
                computer code and in many programmes students learn to use
                particular software, such as MS Excel, Matlab, or R for data
                analysis.
              </p>
              <p>
                In Computer Science the focus is on{" "}
                <strong style={{ color: "#61223b" }}>
                  software development
                </strong>
                . This page lists programmes at Stellenbosch that include a full
                Computer Science curriculum, as well as most programmes that
                include some Computer Science modules. The information is given
                for general guidance, but may be out of date; it is important to
                confirm details in the{" "}
                <span className="font-semibold" style={{ color: "#61223b" }}>
                  University calendar (yearbook)
                </span>
                . If you consider applying then also read our{" "}
                <Link
                  href="/teaching/prospectiveUG"
                  className="font-semibold underline underline-offset-2 decoration-[#caa258] hover:text-[#61223b] transition-colors"
                  style={{ color: "#caa258" }}
                >
                  information for prospective students
                </Link>
                .
              </p>
            </div>

            {/* Quick aside callout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl p-8 md:p-10"
              style={{
                marginTop: "2rem",
                marginBottom: "3rem",
                background: "rgba(97,34,59,0.05)",
              }}
            >
              <h3
                className="text-xl font-black mb-4"
                style={{ color: "#61223b" }}
              >
                Quick aside
              </h3>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "#4a4847" }}
              >
                When you come to university, you must choose a{" "}
                <strong style={{ color: "#61223b" }}>degree</strong> (e.g.,
                BSc), a degree variant called a{" "}
                <strong style={{ color: "#61223b" }}>programme</strong> (e.g.,
                BSc Computer Science), and a programme variant called a{" "}
                <strong style={{ color: "#61223b" }}>focal area</strong> (e.g.,
                BSc Computer Science: General Computer Science).
              </p>
            </motion.div>

            {/* Full CS Curriculum table */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2
                className="text-2xl md:text-3xl font-black mb-6"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Programmes that include a full Computer Science curriculum
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-14"
                style={{ color: "#4a4847" }}
              >
                The following programmes include the option to take the full
                core curriculum through to the third year:
              </p>

              {/* Table */}
              <div
                className="overflow-hidden"
                style={{
                  border: "1.5px solid rgba(97,34,59,0.15)",
                  boxShadow: "0 4px 24px rgba(97,34,59,0.07)",
                  borderRadius: "0",
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "#61223b" }}>
                        <th
                          className="text-left px-10 py-7 font-bold uppercase tracking-wider text-base"
                          style={{ color: "#caa258", width: "38%" }}
                        >
                          Programme
                        </th>
                        <th
                          className="text-left px-10 py-7 font-bold uppercase tracking-wider text-base"
                          style={{ color: "#caa258" }}
                        >
                          Focal areas with a full CS curriculum
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {fullCurriculumRows.map((row, i) => (
                        <tr
                          key={row.programme}
                          style={{
                            background:
                              i % 2 === 0 ? "white" : "rgba(97,34,59,0.03)",
                            borderBottom: "1px solid rgba(97,34,59,0.08)",
                          }}
                        >
                          <td
                            className="px-10 py-6 font-semibold text-base"
                            style={{ color: "#61223b" }}
                          >
                            {row.programme}
                          </td>
                          <td className="px-10 py-6">
                            {row.focal.length > 0 ? (
                              <div className="flex flex-wrap gap-3">
                                {row.focal.map((f) => (
                                  <span
                                    key={f}
                                    className="px-4 py-1.5 rounded-full text-base font-semibold"
                                    style={{
                                      background: "rgba(202,162,88,0.13)",
                                      color: "#61223b",
                                      border: "1px solid rgba(202,162,88,0.4)",
                                    }}
                                  >
                                    {f}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span
                                className="text-base"
                                style={{ color: "rgba(74,72,71,0.35)" }}
                              >
                                —
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footnotes */}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  className="rounded-xl p-7"
                  style={{
                    background: "rgba(97,34,59,0.04)",
                    border: "1px solid rgba(97,34,59,0.1)",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#4a4847" }}
                  >
                    <span className="font-bold" style={{ color: "#61223b" }}>
                      ¹
                    </span>{" "}
                    All the BSc Computer Science focal areas contain the full
                    Computer Science core curriculum and with at least 32
                    credits of quantitative modules at second- or third-year
                    level can lead to an honours programme in Computer Science
                    (see our{" "}
                    <Link
                      href="/teaching/prospectivePG"
                      className="font-semibold underline underline-offset-2 decoration-[#caa258] hover:text-[#61223b] transition-colors"
                      style={{ color: "#caa258" }}
                    >
                      information for prospective PG students
                    </Link>{" "}
                    for a list of quantitative subjects and/or modules). The
                    General Computer Science focal area further allows students
                    to register for additional Computer Science electives on
                    third-year level.
                  </p>
                </div>
                <div
                  className="rounded-xl p-7"
                  style={{
                    background: "rgba(97,34,59,0.04)",
                    border: "1px solid rgba(97,34,59,0.1)",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#4a4847" }}
                  >
                    <span className="font-bold" style={{ color: "#61223b" }}>
                      ²
                    </span>{" "}
                    BDatSci is an interfaculty four-year programme and students
                    register for BDatSci in the faculty that offers their chosen
                    focal area. The Computer Science focal area contains the
                    full Computer Science curriculum; the other focal areas
                    contain some Computer Science modules, but not all.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Some CS Modules table */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginTop: "5rem" }}
            >
              <h2
                className="text-2xl md:text-3xl font-black mb-6"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Programmes that include some, but not all Computer Science
                modules
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-14"
                style={{ color: "#4a4847" }}
              >
                The following programmes and focal areas include some, but not
                all Computer Science modules:
              </p>

              {/* Table */}
              <div
                className="overflow-hidden"
                style={{
                  border: "1.5px solid rgba(97,34,59,0.15)",
                  boxShadow: "0 4px 24px rgba(97,34,59,0.07)",
                  borderRadius: "0",
                }}
              >
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr style={{ background: "#61223b" }}>
                        <th
                          className="text-left px-10 py-7 font-bold uppercase tracking-wider text-base"
                          style={{ color: "#caa258", width: "38%" }}
                        >
                          Programme
                        </th>
                        <th
                          className="text-left px-10 py-7 font-bold uppercase tracking-wider text-base"
                          style={{ color: "#caa258" }}
                        >
                          Focal areas with some CS modules
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {someCurriculumRows.map((row, i) => (
                        <tr
                          key={row.programme}
                          style={{
                            background:
                              i % 2 === 0 ? "white" : "rgba(97,34,59,0.03)",
                            borderBottom: "1px solid rgba(97,34,59,0.08)",
                          }}
                        >
                          <td
                            className="px-10 py-6 font-semibold text-base"
                            style={{ color: "#61223b" }}
                          >
                            {row.programme}
                          </td>
                          <td className="px-10 py-6">
                            <div className="flex flex-wrap gap-3">
                              {row.focal.map((f) => (
                                <span
                                  key={f}
                                  className="px-4 py-1.5 rounded-full text-base font-semibold"
                                  style={{
                                    background: "rgba(74,72,71,0.06)",
                                    color: "#4a4847",
                                    border: "1px solid rgba(74,72,71,0.18)",
                                  }}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Note */}
              <div className="mt-16">
                <div
                  className="rounded-xl p-7"
                  style={{
                    background: "rgba(202,162,88,0.07)",
                    border: "1px solid rgba(202,162,88,0.3)",
                    marginTop: "2rem",
                  }}
                >
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "#4a4847" }}
                  >
                    Note that, just because a programme allows you to enrol for
                    first-year Computer Science modules, does not mean that you
                    can necessarily also enrol for second- and third-year
                    Computer Science modules. The focal area may not include all
                    the modules through to third-year or there may be timetable
                    clashes. It is important to read the university
                    documentation very carefully.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CS Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginTop: "3rem", marginBottom: "0" }}
            >
              <h2
                className="text-2xl md:text-3xl font-black mb-8"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Computer Science Curriculum
              </h2>
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{
                  background: "rgba(97,34,59,0.04)",
                  border: "1.5px solid rgba(97,34,59,0.12)",
                }}
              >
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: "#4a4847" }}
                >
                  The Computer Science core curriculum includes Computer
                  Science:{" "}
                  {["114", "144", "214", "244", "343", "344"].map(
                    (code, idx, arr) => (
                      <span key={code}>
                        <span
                          className="font-bold"
                          style={{ color: "#61223b" }}
                        >
                          {code}
                        </span>
                        {idx < arr.length - 1 ? ", " : ""}
                      </span>
                    )
                  )}{" "}
                  and at least two of{" "}
                  <span className="font-bold" style={{ color: "#61223b" }}>
                    314
                  </span>
                  /
                  <span className="font-bold" style={{ color: "#61223b" }}>
                    313
                  </span>
                  /
                  <span className="font-bold" style={{ color: "#61223b" }}>
                    315
                  </span>
                  .
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMMES*/}
      <section
        id="ug-programmes"
        className="bg-[#faf8f5]"
        style={{
          paddingTop: "3rem",
          paddingBottom: "3rem",
          scrollMarginTop: "160px",
        }}
      >
        <div className="container-narrow mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2
              className="text-3xl md:text-4xl font-black mb-5"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              Undergraduate Programmes
            </h2>
          </motion.div>

          {/* BSc CS focal area cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-0"
          >
            <h2
              className="text-2xl md:text-3xl font-black mb-8"
              style={{
                color: "#61223b",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              BSc Computer Science (CS) Programme 18139
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {bscFocalAreas.map((fa, i) => (
                <motion.a
                  key={fa.focus}
                  href="https://www.su.ac.za/en/about/governance/registrar/yearbooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="group flex flex-col justify-between rounded-xl p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: "white",
                    border: "1.5px solid rgba(97,34,59,0.09)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-3 block"
                      style={{ color: "#61223b" }}
                    >
                      Focus
                    </span>
                    <h4
                      className="text-base font-black mb-3 transition-colors duration-150 group-hover:text-[#caa258]"
                      style={{
                        color: "#61223b",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      {fa.focus}
                    </h4>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#4a4847" }}
                    >
                      {fa.description}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-1.5 mt-5 text-sm font-bold"
                    style={{ color: "#caa258" }}
                  >
                    Science Calendar
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              ))}

              {/* BDatSci card */}
              <motion.a
                href="https://www.su.ac.za/en/about/governance/registrar/yearbooks"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 5 * 0.06 }}
                className="group flex flex-col justify-between rounded-xl p-7 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(97,34,59,0.09)",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-3 block"
                    style={{ color: "rgba(97,34,59,0.5)" }}
                  >
                    BDatSci
                  </span>
                  <h4
                    className="text-base font-black mb-3 transition-colors duration-150 group-hover:text-[#61223b]"
                    style={{
                      color: "#61223b",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    Computer Science (CS)
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#4a4847" }}
                  >
                    Four-year degree combining CS with Statistics and Data
                    Science modules.
                  </p>
                </div>
                <div
                  className="flex items-center gap-1.5 mt-5 text-sm font-bold"
                  style={{ color: "#61223b" }}
                >
                  Science Calendar
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.a>
            </div>
          </motion.div>

          <h2
            id="ug-modules"
            className="text-3xl md:text-4xl font-black mb-5"
            style={{
              color: "#61223b",
              fontFamily: "SU Raleway, sans-serif",
              scrollMarginTop: "160px",
            }}
          >
            Undergraduate Modules
          </h2>

          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ color: "#4a4847" }}
          >
            Detailed module information across all year levels. Click any module
            to expand details.
          </p>

          {/* Year tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginTop: "2.7rem" }}
          >
            <div
              className="flex flex-wrap gap-4"
              style={{ marginBottom: "2.7rem" }}
            >
              {yearKeys.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className="rounded-full text-lg font-bold transition-all duration-200"
                  style={
                    activeYear === year
                      ? {
                          padding: "0.1rem 0.8rem",
                          whiteSpace: "nowrap",
                          background: "#61223b",
                          color: "#caa258",
                          boxShadow: "0 4px 14px rgba(97,34,59,0.3)",
                        }
                      : {
                          padding: "0.1rem 0.8rem",
                          whiteSpace: "nowrap",
                          background: "white",
                          color: "#61223b",
                          border: "1.5px solid rgba(97,34,59,0.18)",
                        }
                  }
                >
                  {year}
                </button>
              ))}
            </div>

            {/* Animated module grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid gap-5 md:grid-cols-2 items-start"
              >
                {modulesByYear[activeYear].map((mod, i) => (
                  <ModuleCard key={mod.code} mod={mod} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
