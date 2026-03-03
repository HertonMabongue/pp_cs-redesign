"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sections = [
  { id: "entry", label: "Entry requirements" },
  { id: "apply", label: "How do I apply?" },
  { id: "parttime", label: "Part-time / foreign students" },
  { id: "costs", label: "Costs & financial support" },
  { id: "prerequisites", label: "Module prerequisites" },
  { id: "mlai", label: "One-year MSc in ML & AI" },
  { id: "more-info", label: "More information" },
];

export default function ProspectivePGPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "62vh", minHeight: "420px" }}
      >
        <Image
          src="https://cs.sun.ac.za/assets/stbslider/s10.jpg"
          alt="CS graduation"
          fill
          priority
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.92) 0%, rgba(97,34,59,0.5) 50%, rgba(0,0,0,0.15) 100%)",
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
                <Link
                  href="/teaching"
                  className="hover:text-white transition-colors"
                >
                  Study
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Prospective PG</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Postgraduate
                <br />
                Students
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Everything you need to know about postgraduate studies in
                Computer Science at Stellenbosch University.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPACER + STICKY INDEX ── */}
      <div style={{ height: "2rem" }} className="bg-white" />
      <nav
        className="bg-white border-b"
        style={{
          borderColor: "rgba(97,34,59,0.1)",
          position: "sticky",
          top: "80px",
          zIndex: 30,
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <div
            className="flex gap-1 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1 whitespace-nowrap rounded-lg font-semibold transition-all duration-150 hover:bg-[#61223b] hover:text-white"
                style={{
                  fontSize: "0.78rem",
                  padding: "0.4rem 0.85rem",
                  color: "#61223b",
                  background: "rgba(97,34,59,0.06)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div className="bg-white">
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingTop: "4rem", paddingBottom: "5rem" }}
        >
          <div
            className="max-w-3xl mx-auto flex flex-col"
            style={{ gap: "4rem" }}
          >
            {/* Entry requirements */}
            <section id="entry" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Admissions
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What are the entry requirements?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    Admission to our programme is based on selection criteria,
                    which includes your academic performance as well as how well
                    your background aligns with the background required for the
                    programme. Capacity is limited and admission is very
                    competitive, so the minimum requirements listed below does
                    not guarantee admission.
                  </p>

                  {/* Honours card */}
                  <div
                    className="rounded-2xl"
                    style={{
                      border: "1.5px solid rgba(97,34,59,0.12)",
                      padding: "1.5rem",
                    }}
                  >
                    <h3
                      className="font-black mb-3"
                      style={{
                        color: "#61223b",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      Honours in Computer Science
                    </h3>
                    <div className="flex flex-col" style={{ gap: "0.5rem" }}>
                      {[
                        "A degree that covers our Computer Science curriculum.",
                        "An average of at least 65% for your Computer Science modules in your final year (minimum to apply is 60%, but due to demand you typically require at least 65%).",
                        "A strong mathematical foundation, covering both Algebra and Calculus.",
                        "At least 32 credits at second-year or third-year level in quantitative modules: Mathematics, Applied Mathematics, Physics, Mathematical Statistics, Bioinformatics, Operations Research, GIT242, or GIT341.",
                        "Practical programming experience — the Honours degree has a strong focus on programming.",
                      ].map((req, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3"
                          style={{
                            background: "rgba(97,34,59,0.04)",
                            borderRadius: "0.75rem",
                            padding: "0.65rem 1rem",
                          }}
                        >
                          <span
                            className="font-black shrink-0"
                            style={{
                              color: "#caa258",
                              fontSize: "0.8rem",
                              minWidth: "1.2rem",
                            }}
                          >
                            •
                          </span>
                          <span className="text-sm leading-relaxed">{req}</span>
                        </div>
                      ))}
                    </div>
                    <p
                      className="text-sm mt-3 italic"
                      style={{ color: "#61223b" }}
                    >
                      Meeting the minimum requirements means you will be
                      considered for selection, but does not guarantee
                      admission.
                    </p>
                  </div>

                  {/* Other levels */}
                  <div className="flex flex-col" style={{ gap: "0.6rem" }}>
                    {[
                      {
                        label: "Individual PG modules",
                        text: "You need either a degree in Computer Science or must have already fulfilled all the requirements to obtain one and receive it at the next scheduled graduation ceremony. The same mathematics, programming, and CS background as needed for Honours is required.",
                      },
                      {
                        label: "Masters in Computer Science",
                        text: "A degree in Computer Science and an Honours degree.",
                      },
                      {
                        label: "Doctoral in Computer Science",
                        text: "A thesis-based Masters degree and a degree that covers the required Computer Science background.",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl flex gap-4 items-start"
                        style={{
                          background: "#faf8f5",
                          padding: "1.25rem 1.5rem",
                        }}
                      >
                        <span
                          className="font-black shrink-0 rounded-lg px-3 py-1 text-xs whitespace-nowrap"
                          style={{
                            background: "#61223b",
                            color: "#caa258",
                            fontFamily: "SU Raleway, sans-serif",
                          }}
                        >
                          {item.label}
                        </span>
                        <p className="text-sm leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* How to apply */}
            <section id="apply" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Applications
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  How do I apply?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <div
                    className="rounded-2xl flex gap-4 items-start"
                    style={{ background: "#faf8f5", padding: "1.25rem 1.5rem" }}
                  >
                    <span
                      className="font-black shrink-0 rounded-lg px-3 py-1 text-xs"
                      style={{
                        background: "#61223b",
                        color: "#caa258",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      Step 1
                    </span>
                    <p className="text-sm leading-relaxed">
                      <strong style={{ color: "#61223b" }}>
                        Masters &amp; Doctoral students only.
                      </strong>{" "}
                      You need the agreement of a staff member to supervise your
                      thesis. Browse through our{" "}
                      <Link
                        href="/research"
                        className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                        style={{
                          color: "#caa258",
                          textDecorationColor: "rgba(202,162,88,0.5)",
                        }}
                      >
                        Research pages
                      </Link>{" "}
                      and read more about the kind of work we do. Look at our
                      staff&apos;s publications to get an idea of the topics
                      they are interested in. If you have found an area that
                      interests you, contact the responsible staff member to
                      discuss potential topics. It is not essential to agree on
                      a specific topic at this stage, but it is very important
                      to obtain the staff member&apos;s agreement to be your
                      supervisor. If at all possible, make an appointment for a
                      face-to-face meeting.
                    </p>
                  </div>
                  <div
                    className="rounded-2xl flex gap-4 items-start"
                    style={{ background: "#faf8f5", padding: "1.25rem 1.5rem" }}
                  >
                    <span
                      className="font-black shrink-0 rounded-lg px-3 py-1 text-xs"
                      style={{
                        background: "#61223b",
                        color: "#caa258",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      Step 2
                    </span>
                    <div
                      className="text-sm leading-relaxed flex flex-col"
                      style={{ gap: "0.5rem" }}
                    >
                      <p>
                        <strong style={{ color: "#61223b" }}>
                          All Honours, Masters &amp; Doctoral students.
                        </strong>{" "}
                        Apply by completing the application forms and uploading
                        all required documentation. Links are available via:
                      </p>
                      <ul
                        className="flex flex-col"
                        style={{ gap: "0.35rem", paddingLeft: "0.5rem" }}
                      >
                        {[
                          "The Stellenbosch University website — under Students menu, choose Prospective Postgraduate Students.",
                          "The Science Faculty website — under What can I study?, click Postgraduate Programmes.",
                          "The Postgraduate Studies website — links available on the page and under Application to SU.",
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: "#caa258", fontWeight: 700 }}>
                              ›
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl"
                    style={{
                      background: "rgba(202,162,88,0.08)",
                      border: "1.5px solid rgba(202,162,88,0.3)",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#61223b" }}
                    >
                      Closing dates: Honours — end of October · Masters &amp;
                      Doctoral — end of September. Please check the Science
                      Faculty site for the specific date each year.
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Part-time / foreign */}
            <section id="parttime" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Part-time &amp; International
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What about part-time / foreign students?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    The university allows students to enter as part-time
                    students. The degree then extends over more years — the
                    Honours degree can be extended to a maximum of two
                    consecutive years; a part-time Masters extends over three to
                    four years. Generally speaking, this is a much harder
                    alternative and requires self-discipline and dedication.
                  </p>
                  <div
                    className="rounded-2xl"
                    style={{
                      border: "1.5px solid rgba(97,34,59,0.12)",
                      padding: "1.5rem",
                    }}
                  >
                    <h3
                      className="font-black mb-3 text-base"
                      style={{
                        color: "#61223b",
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      Part-time Honours students should note:
                    </h3>
                    <div className="flex flex-col" style={{ gap: "0.4rem" }}>
                      {[
                        "The project must be completed within either the first or the second year.",
                        "You must complete 6 semester-modules in total, but can choose which to complete in which year.",
                        "All modules are presented during working hours — there is no after-hours option. You will need to arrange with your employer to attend lectures.",
                      ].map((note, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span
                            style={{
                              color: "#caa258",
                              fontWeight: 700,
                              flexShrink: 0,
                            }}
                          >
                            ›
                          </span>
                          <span>{note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p>
                    We also welcome applications from foreign students. In
                    addition to the steps above, contact the university&apos;s
                    Postgraduate Office for administrative details. Stellenbosch
                    University has many partnership agreements with foreign
                    universities, making student exchanges easy to arrange. Our
                    16-credit modules are equivalent to 8 ECTS credits, and all
                    modules are presented in English.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Costs & funding */}
            <section id="costs" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Funding
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What about the costs and financial support?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    Computer Science does not offer any direct support for
                    students, but the university as a whole does, and there are
                    many external bursaries available. The university&apos;s
                    portal for prospective students is a good source of
                    information about bursaries and up-to-date tuition fees.
                    International students should also look at the
                    &ldquo;Student fees and funding &rsaquo; Funding&rdquo;
                    section of the Postgraduate Office website.
                  </p>
                  <p>
                    Most of our undergraduate modules require teaching
                    assistants and we expect students who have completed them to
                    get involved with at least one such module. While it will
                    not provide enough income to support your studies, these
                    positions can provide some supplemental income — and more
                    than that, becoming a teaching assistant is a wonderful way
                    to help the next generation of CS students and consolidate
                    your own knowledge.
                  </p>
                  <p>
                    Some supervisors also have research funds available to
                    support Masters or Doctoral students, but this may not cover
                    all expenses. You cannot rely on this and must talk directly
                    to your supervisor about this option.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Module prerequisites */}
            <section id="prerequisites" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Prerequisites
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What are the prerequisites for individual PG modules?
                </h2>
                <div className="flex flex-col" style={{ gap: "0.75rem" }}>
                  {[
                    {
                      title: "All Honours modules",
                      reqs: [
                        "The four core third-year Computer Science modules.",
                        "Mathematics and Probability Theory & Statistics (Applied Mathematics) up to first year.",
                        "Preferably at least one of Mathematics or Applied Mathematics up to second year.",
                      ],
                    },
                    {
                      title: "Digital Image Processing",
                      reqs: [
                        "A working knowledge of Fourier Analysis — covered in Applied Maths 364.",
                      ],
                    },
                    {
                      title: "Computer Vision",
                      reqs: [
                        "Linear algebra — covered in Applied Mathematics 214 and Mathematics 214.",
                      ],
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl"
                      style={{
                        border: "1.5px solid rgba(97,34,59,0.12)",
                        padding: "1.25rem 1.5rem",
                      }}
                    >
                      <h3
                        className="font-black mb-3 text-base"
                        style={{
                          color: "#61223b",
                          fontFamily: "SU Raleway, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <div className="flex flex-col" style={{ gap: "0.35rem" }}>
                        {item.reqs.map((r, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "#4a4847" }}
                          >
                            <span
                              style={{
                                color: "#caa258",
                                fontWeight: 700,
                                flexShrink: 0,
                              }}
                            >
                              ›
                            </span>
                            <span>{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Structured MSc */}
            <section id="mlai" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Structured MSc
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  One-year structured MSc in ML and AI
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#4a4847" }}
                >
                  For information about and the application procedure for the
                  structured MSc in Machine Learning and Artificial
                  Intelligence, see{" "}
                  <a
                    href="https://mlai.sun.ac.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    mlai.sun.ac.za
                  </a>
                  .
                </p>
                <a
                  href="https://mlai.sun.ac.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
                  style={{
                    background: "#61223b",
                    color: "#caa258",
                    padding: "0.9rem 2rem",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Visit mlai.sun.ac.za <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </section>

            {/* More info */}
            <section id="more-info" style={{ scrollMarginTop: "160px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span
                  className="block font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#caa258", fontSize: "0.8rem" }}
                >
                  Contact
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Where can I find more information?
                </h2>
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{ color: "#4a4847" }}
                >
                  If you have specific questions, please feel free to contact
                  our postgraduate coordinator by sending an email to{" "}
                  <a
                    href="mailto:postgrad@cs.sun.ac.za"
                    className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    postgrad@cs.sun.ac.za
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/teaching/PG"
                    className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
                    style={{
                      background: "#61223b",
                      color: "#caa258",
                      padding: "0.9rem 2rem",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    All PG Programmes <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:shadow-md"
                    style={{
                      background: "white",
                      color: "#61223b",
                      border: "1.5px solid rgba(97,34,59,0.18)",
                      padding: "0.9rem 2rem",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
