"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const sections = [
  { id: "what-is-cs", label: "What is Computer Science?" },
  { id: "why-cs", label: "Why Computer Science?" },
  { id: "why-stellenbosch", label: "Why Stellenbosch?" },
  { id: "course", label: "What is the course all about?" },
  { id: "requirements", label: "Admission requirements" },
  { id: "careers", label: "What can I do after university?" },
  { id: "choose", label: "How do I choose a programme?" },
  { id: "apply", label: "How do I apply?" },
  { id: "same-as", label: "CS vs Computer Literacy / Info Science?" },
  { id: "vs-ee", label: "CS or Electronic Engineering?" },
  { id: "more-info", label: "Where can I find more information?" },
];

export default function ProspectiveUGPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "62vh", minHeight: "420px" }}
      >
        <Image
          src="https://files.su.ac.za/public/styles/responsive_700w/public/students/images/2025-10/students-maties-shop2png.png?itok=GXs3Yhxg"
          alt="Students at Stellenbosch"
          fill
          priority
          className="object-cover object-center"
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
                <span style={{ color: "#caa258" }}>Prospective UG</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Undergraduate
                <br />
                Students
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Everything you need to know about joining one of South
                Africa&apos;s leading Computer Science programmes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STICKY INDEX ── */}
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
            {/* What is CS */}
            <section id="what-is-cs" style={{ scrollMarginTop: "160px" }}>
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
                  Introduction
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What is Computer Science?
                </h2>
                <div
                  className="text-base leading-relaxed"
                  style={{ color: "#4a4847" }}
                >
                  <p>
                    As explained in our{" "}
                    <a
                      href="https://blogs.sun.ac.za/open-day/exhibitions/computer-science/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                      style={{
                        color: "#caa258",
                        textDecorationColor: "rgba(202,162,88,0.5)",
                      }}
                    >
                      information videos, available on the University&apos;s
                      open-day pages
                    </a>
                    , computer science is the{" "}
                    <strong style={{ color: "#61223b" }}>
                      theory and practice of algorithms
                    </strong>
                    . It is a wonderful combination of art (invention and
                    design), science (analysis and experimentation), and
                    engineering to solve problems with computers. Our students
                    learn to program, develop, and manage large software systems
                    in a team, but – most importantly – to frame problems in
                    terms of computational processes.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Why CS */}
            <section id="why-cs" style={{ scrollMarginTop: "160px" }}>
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
                  Why
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Why Computer Science?
                </h2>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: "#4a4847" }}
                >
                  The Association of Computing Machinery (ACM) has developed the
                  following list of top ten reasons to study computer science:
                </p>
                <div className="flex flex-col" style={{ gap: "0.6rem" }}>
                  {[
                    "Computing is part of everything we do!",
                    "Expertise in computing enables you to solve complex, challenging problems.",
                    "Computing enables you to make a positive difference in the world.",
                    "Computing offers many types of lucrative careers.",
                    "Computing jobs are here to stay, regardless of where you are located.",
                    "Expertise in computing helps even if your primary career is something else.",
                    "Computing offers great opportunities for true creativity and innovativeness.",
                    "Computing has space for both collaborative work and individual effort.",
                    "Computing is an essential part of well-rounded academic preparation.",
                    "Future opportunities in computing are without boundaries.",
                  ].map((reason, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl"
                      style={{
                        background: "rgba(97,34,59,0.04)",
                        padding: "0.75rem 1rem",
                      }}
                    >
                      <span
                        className="font-black shrink-0"
                        style={{
                          color: "#caa258",
                          fontSize: "0.85rem",
                          minWidth: "1.4rem",
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "#4a4847" }}
                      >
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>
                <p
                  className="text-base leading-relaxed mt-5 font-semibold"
                  style={{ color: "#61223b" }}
                >
                  We can only add one more &ldquo;fact&rdquo;: Computer Science
                  is <span style={{ color: "#caa258" }}>FUN!</span>
                </p>
              </motion.div>
            </section>

            {/* Why Stellenbosch — with campus image */}
            <section id="why-stellenbosch" style={{ scrollMarginTop: "160px" }}>
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
                  Location
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Why Stellenbosch?
                </h2>
                <div className="flex flex-col" style={{ gap: "1rem" }}>
                  {[
                    {
                      title: "Academic excellence",
                      body: "Stellenbosch University is amongst South Africa's leading tertiary institutions based on research output, student pass rates and rated scientists, and is recognised internationally as an academic institution of excellence.",
                    },
                    {
                      title: "Community",
                      body: "Studying in Stellenbosch is more than just an education; it's a lifestyle. The campus is fully integrated in the beautiful and historic town. Great food and wine, weekend markets, stunning nature, a vibrant music and culture scene, and a host of adventure activities all contribute to a well-balanced student experience as a Matie.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl"
                      style={{
                        border: "1.5px solid rgba(97,34,59,0.12)",
                        padding: "1.5rem",
                      }}
                    >
                      <h3
                        className="font-black mb-2"
                        style={{
                          color: "#61223b",
                          fontFamily: "SU Raleway, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#4a4847" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Campus image */}
                <div
                  className="relative rounded-2xl overflow-hidden mt-6"
                  style={{ height: "300px" }}
                >
                  <Image
                    src="https://cs.sun.ac.za/assets/stbslider/s03.jpg"
                    alt="Stellenbosch campus"
                    fill
                    className="object-cover object-center"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,8,18,0.7) 0%, transparent 100%)",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      Stellenbosch University Campus
                    </span>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Course */}
            <section id="course" style={{ scrollMarginTop: "160px" }}>
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
                  Curriculum
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What is the course all about?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    Computer Science deals with computer systems, both the
                    hardware and the software — but this doesn&apos;t mean we
                    sit around writing programs all day. We take a{" "}
                    <strong style={{ color: "#61223b" }}>
                      scientific approach
                    </strong>
                    , emphasizing the principles of computer systems instead of
                    the nitty-gritty.
                  </p>
                  {[
                    {
                      year: "First Year",
                      text: "The focus is on learning to program. We currently use Java, which is simple enough to master adequately in one year and provides an excellent introduction to other languages like C++ and C.",
                    },
                    {
                      year: "Second Year",
                      text: "Data structures and algorithms — a good knowledge of this important topic is what sets the expert apart from the beginner. The second half covers computer architecture and low-level programming.",
                    },
                    {
                      year: "Third Year",
                      text: "Four core modules: concurrent programming, databases and web-centric computing, computer networks, and software engineering — plus electives in Machine Learning, Automata theory, and Computer Vision.",
                    },
                  ].map((item) => (
                    <div
                      key={item.year}
                      className="rounded-2xl flex gap-4 items-start"
                      style={{
                        background: "#faf8f5",
                        padding: "1.25rem 1.5rem",
                      }}
                    >
                      <span
                        className="font-black shrink-0 rounded-lg px-3 py-1 text-xs"
                        style={{
                          background: "#61223b",
                          color: "#caa258",
                          fontFamily: "SU Raleway, sans-serif",
                        }}
                      >
                        {item.year}
                      </span>
                      <p className="text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                  <p className="text-sm leading-relaxed">
                    We follow the international ACM curriculum recommendations
                    and our courses are moderated annually by experts from other
                    universities. We use both English and Afrikaans in our
                    lectures, with a pragmatic attitude — language has never
                    been an issue in our teaching.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Requirements */}
            <section id="requirements" style={{ scrollMarginTop: "160px" }}>
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
                  What are the admission requirements?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    The minimum admission requirements for degree programmes are
                    listed in the{" "}
                    <strong style={{ color: "#61223b" }}>
                      calendar (yearbook)
                    </strong>{" "}
                    for the home faculty of each degree programme, e.g., the
                    minimum admission requirements for BSc Computer Science are
                    listed in the Science calendar.
                  </p>
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
                      ⚠ Note: Computer Science is popular and meeting the
                      minimum requirements does not guarantee admission. We
                      receive a very high number of applications and space is
                      limited.
                    </p>
                  </div>
                  <p>
                    A list of Computer Science programmes and a few other
                    programmes that include some CS modules is available on the{" "}
                    <Link
                      href="/teaching/UG"
                      className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                      style={{
                        color: "#caa258",
                        textDecorationColor: "rgba(202,162,88,0.5)",
                      }}
                    >
                      Computer Science programmes
                    </Link>{" "}
                    page.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Careers — with graduation image */}
            <section id="careers" style={{ scrollMarginTop: "160px" }}>
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
                  Careers
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  What can I do after university?
                </h2>
                {/* Graduation image */}
                <div
                  className="relative rounded-2xl overflow-hidden mb-6"
                  style={{ height: "280px" }}
                >
                  <Image
                    src="https://cs.sun.ac.za/assets/stbslider/s10.jpg"
                    alt="CS graduation"
                    fill
                    className="object-cover object-top"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex items-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,8,18,0.7) 0%, transparent 100%)",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      CS Graduation Ceremony
                    </span>
                  </div>
                </div>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    We are flooded with requests for qualified students every
                    week. International experts predict a{" "}
                    <strong style={{ color: "#61223b" }}>
                      serious shortage of computer scientists
                    </strong>{" "}
                    in the future — good news for anybody with the right
                    qualification.
                  </p>
                  <p>
                    Some of our students start out as programmers, but most end
                    up as software designers and engineers. Apart from the many
                    local companies that employ our students, there are also
                    many opportunities overseas. South African computer
                    scientists are generally in demand, known as highly
                    qualified and hard workers.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Choose programme */}
            <section id="choose" style={{ scrollMarginTop: "160px" }}>
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
                  Programmes
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  How do I choose a degree that suits me?
                </h2>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#4a4847" }}
                >
                  Different programmes that include Computer Science modules are
                  listed on the{" "}
                  <Link
                    href="/teaching/UG"
                    className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    programmes page
                  </Link>
                  .
                </p>
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
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: "#4a4847" }}
                >
                  You can apply online and find tons of relevant information on{" "}
                  <a
                    href="https://www.maties.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    www.maties.com
                  </a>
                  .
                </p>
                <a
                  href="https://www.maties.com"
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
                  Apply Online <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </section>

            {/* CS vs Literacy / Info Science */}
            <section id="same-as" style={{ scrollMarginTop: "160px" }}>
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
                  Clarification
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Is CS the same as Computer Literacy, or Information Science,
                  or Scientific Computing?
                </h2>
                <div
                  className="flex flex-col text-base leading-relaxed"
                  style={{ color: "#4a4847", gap: "1rem" }}
                >
                  <p>
                    <strong style={{ color: "#61223b" }}>
                      No, not at all.
                    </strong>{" "}
                    <em>Computer Literacy</em> teaches students how to use basic
                    tools (word processors, spreadsheets, presentation tools) as
                    well as more advanced scientific tools.
                  </p>
                  <p>
                    <em>Scientific Computing</em> is a compulsory module for
                    Science students without CS, covering tools such as LaTeX
                    and Python for basic scientific and numerical computing.
                  </p>
                  <p>
                    The <em>Information Science</em> department&apos;s academic
                    offering concerns the dynamic interplay between Information
                    Technology and the organisational or societal contexts in
                    which it is applied.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* CS vs EE */}
            <section id="vs-ee" style={{ scrollMarginTop: "160px" }}>
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
                  Comparison
                </span>
                <h2
                  className="text-2xl md:text-3xl font-black mb-5"
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  Should I study CS or Electronic Engineering?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                  {[
                    {
                      title: "Computer Science",
                      desc: "Specialised, deep focus on software — algorithms and software development. Best if your main interest is developing software solutions.",
                    },
                    {
                      title: "Electronic Engineering",
                      desc: "Focus on both hardware and software for specific engineering applications. Best if your main interest is engineering but you also like programming.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl"
                      style={{
                        border: "1.5px solid rgba(97,34,59,0.12)",
                        padding: "1.5rem",
                      }}
                    >
                      <h3
                        className="font-black mb-2 text-base"
                        style={{
                          color: "#61223b",
                          fontFamily: "SU Raleway, sans-serif",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "#4a4847" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#4a4847" }}
                >
                  Both degrees have a strong mathematical component. If you are
                  struggling to choose, we encourage you to make appointments
                  with staff at both departments to discuss this important
                  decision.
                </p>
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
                  A good place to start is to look around this website. For
                  answers to specific questions, please feel free to send an
                  email to{" "}
                  <a
                    href="mailto:head@cs.sun.ac.za"
                    className="font-semibold underline underline-offset-2 hover:opacity-75 transition-colors"
                    style={{
                      color: "#caa258",
                      textDecorationColor: "rgba(202,162,88,0.5)",
                    }}
                  >
                    head@cs.sun.ac.za
                  </a>
                  .
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/teaching/UG"
                    className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
                    style={{
                      background: "#61223b",
                      color: "#caa258",
                      padding: "0.9rem 2rem",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    UG Programmes <ArrowRight className="w-4 h-4" />
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
