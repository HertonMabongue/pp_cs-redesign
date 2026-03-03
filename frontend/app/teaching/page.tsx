"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, ArrowRight, Users } from "lucide-react";

const programmeCards = [
  {
    href: "/teaching/UG",
    badge: "Undergraduate",
    title: "Undergraduate Programmes",
    description:
      "BSc Computer Science and BSc Data Science — a rigorous three-year foundation covering algorithms, systems, mathematics, and hands-on programming.",
    cta: "Explore UG",
    icon: <GraduationCap className="w-7 h-7" />,
    highlights: ["BSc Computer Science", "BSc Data Science", "3-year degree"],
  },
  {
    href: "/teaching/PG",
    badge: "Postgraduate",
    title: "Postgraduate Programmes",
    description:
      "Honours, Masters, and PhD degrees offering advanced coursework and independent research supervised by world-class faculty.",
    cta: "Explore PG",
    icon: <BookOpen className="w-7 h-7" />,
    highlights: ["Honours (1 year)", "Masters (2 years)", "PhD (3+ years)"],
  },
  {
    href: "/teaching/prospectiveUG",
    badge: "Prospective Students",
    title: "Prospective Undergraduate",
    description:
      "Entry requirements, application process, and everything you need to know before applying for an undergraduate degree in Computer Science.",
    cta: "Learn more",
    icon: <ArrowRight className="w-7 h-7" />,
    highlights: ["Admission requirements", "How to apply", "Costs & bursaries"],
  },
  {
    href: "/teaching/prospectivePG",
    badge: "Prospective Students",
    title: "Prospective Postgraduate",
    description:
      "Entry requirements, supervision, funding options, and application steps for Honours, Masters, and Doctoral programmes.",
    cta: "Learn more",
    icon: <Users className="w-7 h-7" />,
    highlights: [
      "Entry requirements",
      "How to apply",
      "Part-time & international",
    ],
  },
];

export default function TeachingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "62vh", minHeight: "420px" }}
      >
        <Image
          src="https://cs.sun.ac.za/assets/stbslider/s10.jpg"
          alt="Students at Stellenbosch University"
          fill
          priority
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.93) 0%, rgba(97,34,59,0.55) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-narrow mx-auto px-6 pb-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <nav
                className="flex items-center gap-2 text-sm font-bold mb-5"
                style={{
                  color: "rgba(255,255,255,0.7)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                }}
              >
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Study</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Study Computer
                <br />
                Science
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Detailed information for current and prospective students across
                all levels of study.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMME CARDS ── */}
      <div style={{ background: "#faf8f5" }}>
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
        >
          {/* Section header */}
          <div style={{ marginBottom: "3rem" }}>
            <span
              className="block font-bold uppercase tracking-widest"
              style={{
                color: "#caa258",
                fontSize: "0.8rem",
                marginBottom: "0.75rem",
              }}
            >
              Programme Information
            </span>
            <h2
              className="text-3xl md:text-4xl font-black"
              style={{
                color: "#61223b",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Find your programme
            </h2>
            <div
              style={{
                width: "3rem",
                height: "3px",
                background: "#caa258",
                borderRadius: "2px",
                marginTop: "1rem",
              }}
            />
          </div>

          {/* Cards grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "1.5rem" }}
          >
            {programmeCards.map((prog, i) => (
              <Link key={i} href={prog.href} style={{ textDecoration: "none" }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group h-full rounded-2xl bg-white flex flex-col"
                  style={{
                    border: "1.5px solid rgba(97,34,59,0.1)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 16px 48px rgba(97,34,59,0.13)",
                  }}
                >
                  {/* Maroon top bar */}
                  <div
                    style={{
                      background: "#61223b",
                      padding: "1.5rem 1.75rem 1.25rem",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span
                          className="inline-block font-bold uppercase tracking-widest"
                          style={{
                            color: "rgba(202,162,88,0.8)",
                            fontSize: "0.7rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {prog.badge}
                        </span>
                        <h3
                          className="font-black text-xl leading-tight"
                          style={{
                            color: "#ffffff",
                            fontFamily: "SU Raleway, sans-serif",
                          }}
                        >
                          {prog.title}
                        </h3>
                      </div>
                      <div
                        className="shrink-0 flex items-center justify-center rounded-xl"
                        style={{
                          background: "rgba(202,162,88,0.15)",
                          color: "#caa258",
                          width: "3rem",
                          height: "3rem",
                        }}
                      >
                        {prog.icon}
                      </div>
                    </div>
                  </div>

                  {/* Card body */}
                  <div
                    className="flex flex-col flex-1"
                    style={{ padding: "1.5rem 1.75rem" }}
                  >
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "#4a4847", marginBottom: "1.25rem" }}
                    >
                      {prog.description}
                    </p>

                    {/* Highlight pills */}
                    <div
                      className="flex flex-wrap"
                      style={{ gap: "0.5rem", marginBottom: "1.5rem" }}
                    >
                      {prog.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-semibold rounded-lg"
                          style={{
                            background: "rgba(97,34,59,0.06)",
                            color: "#61223b",
                            padding: "0.3rem 0.75rem",
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 font-bold"
                      style={{ color: "#caa258", fontSize: "0.9rem" }}
                    >
                      {prog.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
