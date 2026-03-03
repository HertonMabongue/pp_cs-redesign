"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

// ── FAQ DATA ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Modules available for 2026",
    a: "The modules that are planned to be presented in 2026 are listed on the PG modules page. We recommend that you wait for orientation to choose your modules, but if you must register before orientation for some reason (e.g., to obtain access to campus facilities), choose a preliminary list of three modules per semester and then go through the change module process after orientation.",
    aNode: (
      <>
        The modules that are planned to be presented in 2026 are listed on the{" "}
        <Link
          href="/teaching/PG"
          style={{
            color: "#caa258",
            textDecoration: "underline",
            textDecorationColor: "rgba(202,162,88,0.5)",
            textUnderlineOffset: "3px",
            fontWeight: 600,
          }}
        >
          PG modules page
        </Link>
        . We recommend that you wait for orientation to choose your modules, but
        if you must register before orientation for some reason (e.g., to obtain
        access to campus facilities), choose a preliminary list of three modules
        per semester and then go through the change module process after
        orientation.
      </>
    ),
  },
  {
    q: "Projects available for 2026",
    a: "The list of projects available for 2026 will be finalised on 2 February 2026.",
  },
  {
    q: "Final Acceptance pending",
    a: "If you have been provisionally accepted, but not yet finally accepted, please send an email to gfortuin@sun.ac.za to confirm that you have graduated (the degree certificate is enough for internal students, a transcript is required for external students).",
  },
  {
    q: "Demi (Learning Assistant) positions",
    a: "The available demi positions will be advertised at orientation on 2 Feb, so if you do not have a demi position yet, then we'll sort it out after orientation.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="rounded-xl overflow-hidden"
      style={{ border: "1.5px solid rgba(97,34,59,0.12)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left transition-colors duration-150"
        style={{
          padding: "1.25rem 1.5rem",
          background: open ? "#61223b" : "white",
          color: open ? "#caa258" : "#61223b",
        }}
      >
        <span
          className="font-bold text-base"
          style={{ fontFamily: "SU Raleway, sans-serif" }}
        >
          {item.q}
        </span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-200"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "#caa258" : "rgba(97,34,59,0.45)",
          }}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p
              className="text-base leading-relaxed"
              style={{
                padding: "1.25rem 1.5rem",
                color: "#4a4847",
                background: "rgba(97,34,59,0.02)",
                borderTop: "1px solid rgba(97,34,59,0.08)",
              }}
            >
              {item.aNode ?? item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function HonoursPage() {
  return (
    <>
      {/* ── HERO (compact) ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/honours_about_hero.jpg"
          alt="Honours programme"
          fill
          priority
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.88) 0%, rgba(97,34,59,0.4) 55%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-narrow mx-auto px-6 pb-12">
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
                <Link
                  href="/teaching"
                  className="hover:text-white transition-colors"
                >
                  Study
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <Link
                  href="/teaching/PG"
                  className="hover:text-white transition-colors"
                >
                  Postgraduate
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Honours</span>
              </nav>
              <div className="flex items-center gap-4 mb-3"></div>
              <h1
                className="text-4xl md:text-6xl font-black text-white leading-tight"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Honours in
                <br />
                <span style={{ color: "#caa258" }}>Computer Science</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section
        id="honours-overview"
        className="bg-white"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          scrollMarginTop: "80px",
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="block font-bold uppercase tracking-widest mb-4"
                style={{ color: "#caa258", fontSize: "0.875rem" }}
              >
                Overview
              </span>
              <h2
                className="text-3xl md:text-4xl font-black mb-6"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                About the Programme
              </h2>
              <div
                className="flex flex-col text-base leading-relaxed"
                style={{ color: "#4a4847", gap: "1.25rem" }}
              >
                <p>
                  The Honours degree is a{" "}
                  <strong style={{ color: "#61223b" }}>
                    one-year full-time postgraduate programme
                  </strong>{" "}
                  that usually follows after the three-year BSc or BCom degree.
                  Over the last forty-five years more than{" "}
                  <strong style={{ color: "#61223b" }}>
                    600 talented students
                  </strong>{" "}
                  have passed through our programme. It is excellent preparation
                  for pursuing either an MSc degree or a career in industry.
                </p>
                <p>
                  This is due in part to the composition of the programme: a mix
                  of core Computer Science theory courses and up-to-date
                  application courses.
                </p>
                <p>
                  The Honours degree is challenging and students are required to
                  manage their own time and work more independently than during
                  their undergraduate studies, especially on their year-project.
                  However, we pride ourselves on the fact that our graduates are{" "}
                  <strong style={{ color: "#61223b" }}>
                    highly sought after
                  </strong>
                  . The degree can have a significant impact on your salary and
                  many companies insist on a four-year degree.
                </p>
                <p>
                  Further information, such as application procedures and a FAQ,
                  is available on our page for{" "}
                  <Link
                    href="/teaching/prospectivePG"
                    className="font-semibold underline underline-offset-2 transition-colors hover:opacity-75"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    Prospective postgraduate students
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* Faces image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "420px" }}
            >
              <Image
                src="/assets/honours_faces.jpg"
                alt="Honours students"
                fill
                className="object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(30,8,18,0.7) 0%, transparent 100%)",
                  padding: "1.5rem",
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section
        id="honours-curriculum"
        className="bg-[#faf8f5]"
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          scrollMarginTop: "80px",
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
            <span
              className="block font-bold uppercase tracking-widest mb-4"
              style={{ color: "#caa258", fontSize: "0.875rem" }}
            >
              Curriculum
            </span>
            <h2
              className="text-3xl md:text-4xl font-black"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              Programme Structure
            </h2>
          </motion.div>

          <div className="flex flex-col" style={{ gap: "1.25rem" }}>
            {[
              {
                heading: null,
                text: "The Honours curriculum has been designed for full-time postgraduate students. Students who would like to study part-time can enroll for a maximum of two years, but note that class attendance is compulsory, because classes often include discussions on known solutions, cutting edge research, or open problems in the field studied. Students should complete an honours project and six elective modules.",
              },
              {
                heading: "Honours Project",
                badge: "32 credits",
                body: (
                  <>
                    The honours project is worth 32 credits.{" "}
                    <a
                      href="https://www.cs.sun.ac.za/courses/cs771/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#caa258",
                        textDecoration: "underline",
                        textDecorationColor: "rgba(202,162,88,0.5)",
                        textUnderlineOffset: "3px",
                        fontWeight: 600,
                      }}
                    >
                      The honours project
                    </a>{" "}
                    is a critical part of the honours degree and is a large
                    software construction or research problem on which the
                    student works independently, under the supervision of a
                    staff member. The project does not follow undergraduate
                    semesters; it starts once the project has been allocated and
                    ends with the final demo and presentation sessions at the
                    end of the year. There are a few deadlines throughout the
                    year, but ultimately students need to manage their own time.
                  </>
                ),
              },
              {
                heading: "Elective Modules",
                badge: "6 × 16 credits",
                text: "The elective modules are each worth 16 credits and you must register for six modules. The modules are presented, either as blocks, or over a period of 15 weeks, with an additional examination week at the end. The list of all postgraduate modules presented in a specific year is finalised at the start of each year. Students may take at most two postgraduate modules from Mathematics or Applied Mathematics with permission. However, the following two modules from Applied Mathematics do not require approval: Digital Image Processing and Computer Vision. All other external modules are subject to approval by the divisions involved.",
              },
              {
                heading: null,
                text: "You can choose a combination of courses that focusses more on topics in a specific field such as Machine Learning, Data Science, or Software Engineering, or that covers a broader range of topics, to prepare for a variety of careers as software developer. At the start of your postgraduate studies you will be able to talk to staff members about the different options, so that you can make an informed decision.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl"
                style={{
                  background: "white",
                  border: "1.5px solid rgba(97,34,59,0.1)",
                  padding: "1.75rem 2rem",
                }}
              >
                {card.heading && (
                  <div className="flex items-center gap-3 mb-3">
                    <h3
                      className="text-lg font-black"
                      style={{
                        color: "#61223b",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      {card.heading}
                    </h3>
                    {"badge" in card && card.badge && (
                      <span
                        className="text-sm font-bold"
                        style={{
                          background: "rgba(202,162,88,0.13)",
                          color: "#61223b",
                          border: "1px solid rgba(202,162,88,0.35)",
                          borderRadius: "9999px",
                          padding: "0.15rem 0.65rem",
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>
                )}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#4a4847" }}
                >
                  {"body" in card ? card.body : card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASS OF 2026 ── */}
      <section
        className="bg-white"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <h2
              className="text-3xl font-black"
              style={{
                color: "#61223b",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Class of 2026
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Important Dates */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl"
              style={{ background: "#61223b", padding: "1.75rem 2rem" }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Calendar className="w-5 h-5" style={{ color: "#caa258" }} />
                <h3
                  className="text-base font-black uppercase tracking-wider"
                  style={{
                    color: "#caa258",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Important Dates
                </h3>
              </div>
              <div className="flex flex-col" style={{ gap: "0.875rem" }}>
                {[
                  {
                    date: "2 Feb · 10:00",
                    label: "Hons Orientation",
                    note: "Room K303, Knowledge Centre, Engineering",
                  },
                  {
                    date: "6 Feb",
                    label: "Deadline: Project choices",
                    note: "",
                  },
                  {
                    date: "9 Feb",
                    label: "First semester lectures start",
                    note: "",
                  },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <span
                      className="text-xs font-black rounded shrink-0"
                      style={{
                        background: "rgba(202,162,88,0.18)",
                        color: "#caa258",
                        padding: "0.2rem 0.6rem",
                        marginTop: "0.1rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {d.date}
                    </span>
                    <div>
                      <p
                        className="text-sm font-bold"
                        style={{ color: "white" }}
                      >
                        {d.label}
                      </p>
                      {d.note && (
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {d.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Useful Links */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl"
              style={{
                background: "rgba(97,34,59,0.03)",
                border: "1.5px solid rgba(97,34,59,0.1)",
                padding: "1.75rem 2rem",
              }}
            >
              <h3
                className="text-base font-black mb-5"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Useful Links
              </h3>
              <div className="flex flex-col" style={{ gap: "0.6rem" }}>
                {[
                  {
                    label: "Semester class timetable for 2026 (venues TBC)",
                    href: "#",
                  },
                  { label: "Honours 797 overview", href: "#" },
                  { label: "Honours projects for 2026", href: "#" },
                  {
                    label: "Library: Computer Science catalogue",
                    href: "#",
                  },
                  { label: "Plagiarism form — written work", href: "#" },
                  {
                    label: "Plagiarism form — code submissions",
                    href: "#",
                  },
                  { label: "Honours 797 programme framework", href: "#" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors duration-150 hover:opacity-75 group"
                    style={{ color: "#61223b" }}
                  >
                    <ChevronRight
                      className="w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                      style={{ color: "#caa258" }}
                    />
                    {l.label}
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-40" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="bg-[#faf8f5]"
        style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
      >
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ marginBottom: "2.5rem" }}
          >
            <span
              className="block font-bold uppercase tracking-widest mb-4"
              style={{ color: "#caa258", fontSize: "0.875rem" }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl font-black"
              style={{
                color: "#61223b",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="flex flex-col max-w-3xl" style={{ gap: "0.75rem" }}>
            {faqs.map((item, i) => (
              <FAQItem key={item.q} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* ── FOOTER CTA ── */}
      <section
        className="bg-[#faf8f5]"
        style={{ paddingTop: "0.9rem", paddingBottom: "2rem" }}
      >
        <div className="container-narrow mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/teaching/prospectivePG"
                className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
                style={{
                  background: "#61223b",
                  color: "#caa258",
                  padding: "0.9rem 2rem",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Prospective Postgraduate Students{" "}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/teaching/PG"
                className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:shadow-md"
                style={{
                  background: "white",
                  color: "#61223b",
                  border: "1.5px solid rgba(97,34,59,0.18)",
                  padding: "0.9rem 2rem",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                All Postgraduate Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
