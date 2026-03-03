"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRef } from "react";

const researchSections = [
  { id: "automata", label: "Automata & Grammars" },
  { id: "sev", label: "Software Engineering & Verification" },
  { id: "mlai", label: "ML & AI" },
  { id: "telkom", label: "Telkom-Siemens CoE" },
];

type Member = {
  name: string;
  url: string;
  initials: string;
  role: string;
  photo?: string;
};

const groups: {
  id: string;
  title: string;
  description: string;
  members: Member[];
  quickLinks?: { label: string; url: string }[];
}[] = [
  {
    id: "automata",
    title: "Theory and Applications of Automata and Grammars",
    description:
      "We are interested in the theory of nondeterministic finite automata (NFA), and in particular the descriptional complexity of symmetric difference NFA. More generally, we also consider the application of automata and grammars to a wide selection of problems, such as pattern layout optimization with cellular automata, image processing with cellular automata, music generation in the style of a given composer using probabilistic automata, and using probabilistic automata on parse trees of English sentences for automatic grammar correction of English text.\n\nAutomata and grammars have a rich and well-developed body of theory that can be applied, but often practice dictates that the theory should be extended in novel ways. For the pattern layout optimisation problem, for example, cellular automata with cell clustering, i.e., cellular automata with changes in neighborhood topology over time, were defined and shown to be advantageous in practical applications.",
    members: [
      {
        name: "Prof Brink van der Merwe",
        url: "http://www.cs.sun.ac.za/~abvdm/",
        initials: "BvM",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/abvdmjpg.jpg",
      },
      {
        name: "Prof Lynette van Zijl",
        url: "https://cs.sun.ac.za/~lvzijl/",
        initials: "LvZ",
        role: "Distinguished Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/lynette-van-zijljpg.jpg",
      },
      {
        name: "Willem Bester",
        url: "http://www.cs.sun.ac.za/~whkbester/",
        initials: "WB",
        role: "Senior Lecturer",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/willem-bester-squarejpg.jpg",
      },
    ],
  },
  {
    id: "sev",
    title: "Software Engineering and Verification",
    description:
      "The Software Engineering and Verification group at the University of Stellenbosch has been involved in the development of operating system kernels, protocols, and verification tools since 1990. We investigate the development of highly reliable system software by using a combination of computer-aided verification of designs, systematic testing, and defensive programming techniques.",
    members: [
      {
        name: "Prof Bernd Fischer",
        url: "http://www.cs.sun.ac.za/~bfischer/",
        initials: "BF",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/bernd-fischer-squarejpg.jpg",
      },
      {
        name: "Prof Willem Visser",
        url: "https://cs.sun.ac.za/~wvisser/",
        initials: "WV",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/willem-visser-squarejpg.jpg",
      },
      {
        name: "Prof Jaco Geldenhuys",
        url: "http://www.meteck.org/",
        initials: "JG",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/jaco-geldenhuys-squarejpg.jpg",
      },
      {
        name: "Dr Cornelia Inggs",
        url: "https://cinggs.pages.cs.sun.ac.za/",
        initials: "CI",
        role: "Lecturer",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/cornelia-inggs-squarejpg.jpg",
      },
    ],
    quickLinks: [
      { label: "COASTAL", url: "https://deepseaplatform.github.io/coastal/" },
      { label: "ESBMC", url: "https://esbmc.github.io/" },
      { label: "Cseq", url: "https://www.southampton.ac.uk/~gp1y10/cseq/" },
    ],
  },
  {
    id: "mlai",
    title: "Machine Learning and Artificial Intelligence",
    description:
      "This group considers almost any aspect of the general decision-making problem, including sequential decision-making under uncertainty. Major sub-problems we consider are planning, machine learning, and search algorithms. Our approach is grounded in probability theory and game theory for managing uncertainty and multi-agent systems. We also investigate the combination of machine learning and big data, and specifically data from earth observation satellite sensors and radio interferometers.",
    members: [
      {
        name: "Prof Steve Kroon",
        url: "http://www.cs.sun.ac.za/~kroon/",
        initials: "SK",
        role: "Associate Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/steve-kroon-squarejpg.jpg",
      },
      {
        name: "Dr Trienko Grobler",
        url: "https://cs.sun.ac.za/~tgrobler/",
        initials: "TG",
        role: "Senior Lecturer",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/tlgroblerjpg.jpg",
      },
    ],
  },
  {
    id: "telkom",
    title:
      "Telkom-Siemens CoE in ATM and Broadband Networks and their Applications",
    description:
      "The University of Stellenbosch Unit of the Telkom-Siemens Centre of Excellence in ATM and Broadband Networks and their Applications aims to promote research and development in broadband technologies and their applications and to train postgraduate students and professionals in the expertise required in this field of telecommunications.",
    members: [
      {
        name: "Prof Anthony Krzesinski",
        url: "https://cs.sun.ac.za/~krzesinski/",
        initials: "AK",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/aek1jpg.jpg",
      },
      {
        name: "Prof Willem Visser",
        url: "https://cs.sun.ac.za/~wvisser/",
        initials: "WV",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/willem-visserjpg.jpg",
      },
      {
        name: "Prof Jaco Geldenhuys",
        url: "http://www.meteck.org/",
        initials: "JG",
        role: "Professor",
        photo:
          "https://files.su.ac.za/public/computer-science-division/images/2026-02/jaco-geldenhuys-squarejpg.jpg",
      },
    ],
  },
];

export default function ResearchPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/doctorate_hero.jpeg"
          alt="Research at CS Stellenbosch"
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
                <span style={{ color: "#caa258" }}>Research</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Research
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Advancing knowledge in computer science and its applications
                across mathematics, engineering, and technology.
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
          <div className="flex items-center gap-2 py-2.5">
            {/* Label */}
            <span
              className="text-xs font-black uppercase tracking-widest whitespace-nowrap shrink-0"
              style={{ color: "#caa258" }}
            >
              Jump to
            </span>
            {/* Left arrow */}
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="shrink-0 rounded-lg flex items-center justify-center transition-all duration-150 hover:bg-[#61223b] hover:text-white"
              style={{
                width: "28px",
                height: "28px",
                color: "#61223b",
                background: "rgba(97,34,59,0.06)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {/* Scrollable pills with fade edges */}
            <div className="relative flex-1 overflow-hidden">
              <div
                className="absolute left-0 top-0 bottom-0 w-6 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to right, white, transparent)",
                }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to left, white, transparent)",
                }}
              />
              <div
                ref={scrollRef}
                className="flex gap-1.5 overflow-x-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {researchSections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center whitespace-nowrap rounded-lg font-semibold transition-all duration-150 hover:bg-[#61223b] hover:text-white"
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.35rem 0.85rem",
                      color: "#61223b",
                      background: "rgba(97,34,59,0.06)",
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            {/* Right arrow */}
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="shrink-0 rounded-lg flex items-center justify-center transition-all duration-150 hover:bg-[#61223b] hover:text-white"
              style={{
                width: "28px",
                height: "28px",
                color: "#61223b",
                background: "rgba(97,34,59,0.06)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── INTRO ── */}
      <div className="bg-white">
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}
        >
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            {/* Text */}
            <div className="flex-1">
              <p
                className="text-base leading-relaxed"
                style={{ color: "#4a4847" }}
              >
                Mathematics and computational science are utilised in almost
                every discipline of science, engineering, industry and
                technology. With nearly 50 full-time researchers and a large
                cohort of postgraduate students, the Department of Mathematical
                Sciences (which includes the Mathematics, Applied Mathematics,
                and Computer Science Divisions) strives to enhance the
                enrichment and transfer of knowledge to empower society to
                analyse and solve complex problems.
              </p>
              <p
                className="text-base leading-relaxed mt-4 font-semibold"
                style={{ color: "#61223b" }}
              >
                Below is an overview of research focus areas in the Computer
                Science Division.
              </p>
            </div>
            {/* Quick links panel */}
            <div
              className="shrink-0 rounded-2xl flex flex-col"
              style={{
                border: "1.5px solid rgba(97,34,59,0.12)",
                padding: "1.25rem 1.5rem",
                minWidth: "220px",
                gap: "0.6rem",
              }}
            >
              <p
                className="text-xs font-black uppercase tracking-widest mb-1"
                style={{ color: "#caa258" }}
              >
                Quick links
              </p>
              {[
                {
                  label: "Publications",
                  url: "https://scholar.sun.ac.za/handle/10019.1/96340",
                },
                {
                  label: "Doctoral degrees",
                  url: "https://scholar.sun.ac.za/handle/10019.1/96338",
                },
                {
                  label: "Masters' degrees",
                  url: "https://scholar.sun.ac.za/handle/10019.1/96339",
                },
              ].map((ql) => (
                <a
                  key={ql.label}
                  href={ql.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold rounded-lg transition-all duration-150 hover:bg-[#61223b] hover:text-white group"
                  style={{
                    color: "#61223b",
                    background: "rgba(97,34,59,0.05)",
                    padding: "0.5rem 0.85rem",
                    fontSize: "0.83rem",
                  }}
                >
                  <ExternalLink className="w-3 h-3 shrink-0" />
                  {ql.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── GROUPS ── */}
      <div className="bg-white">
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingBottom: "5rem" }}
        >
          <div
            className="max-w-3xl mx-auto flex flex-col"
            style={{ gap: "4rem" }}
          >
            {groups.map((group, idx) => (
              <section
                key={group.id}
                id={group.id}
                style={{ scrollMarginTop: "160px" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                      background: idx % 2 === 0 ? "white" : "#faf8f5",
                      border: "1.5px solid rgba(97,34,59,0.10)",
                    }}
                  >
                    <div
                      style={{
                        background: "#61223b",
                        padding: "1.25rem 1.75rem",
                      }}
                    >
                      <h2
                        className="text-lg md:text-xl font-black leading-snug"
                        style={{
                          color: "#caa258",
                          fontFamily: "SU Raleway, sans-serif",
                        }}
                      >
                        {group.title}
                      </h2>
                    </div>
                    <div
                      className="flex flex-col"
                      style={{ gap: "1.5rem", padding: "1.75rem" }}
                    >
                      {group.description.split("\n\n").map((para, i) => (
                        <p
                          key={i}
                          className="text-base leading-relaxed"
                          style={{ color: "#4a4847" }}
                        >
                          {para}
                        </p>
                      ))}

                      {/* Quick links */}
                      {group.quickLinks && (
                        <div>
                          <p
                            className="text-xs font-bold uppercase tracking-widest mb-2"
                            style={{ color: "#caa258" }}
                          >
                            Quick links
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.quickLinks.map((ql) => (
                              <a
                                key={ql.label}
                                href={ql.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 font-semibold rounded-lg transition-all duration-150 hover:opacity-80"
                                style={{
                                  background: "rgba(97,34,59,0.07)",
                                  color: "#61223b",
                                  padding: "0.4rem 0.9rem",
                                  fontSize: "0.82rem",
                                }}
                              >
                                {ql.label}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Members */}
                      <div>
                        <p
                          className="text-xs font-bold uppercase tracking-widest mb-3"
                          style={{ color: "#caa258" }}
                        >
                          Current members
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {group.members.map((m) => (
                            <a
                              key={m.name}
                              href={m.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                              style={{
                                background: "white",
                                border: "1.5px solid rgba(97,34,59,0.12)",
                                padding: "0.75rem 1.1rem 0.75rem 0.75rem",
                              }}
                            >
                              {/* Avatar */}
                              <div
                                className="rounded-xl overflow-hidden shrink-0 relative"
                                style={{
                                  width: "clamp(80px, 10vw, 200px)",
                                  height: "clamp(80px, 10vw, 200px)",
                                }}
                              >
                                {m.photo ? (
                                  <Image
                                    src={m.photo}
                                    alt={m.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-300 hover:scale-110"
                                  />
                                ) : (
                                  <div
                                    className="w-full h-full flex items-center justify-center font-black text-base"
                                    style={{
                                      background:
                                        "linear-gradient(135deg, #61223b 0%, #7a3050 100%)",
                                      color: "#caa258",
                                      fontFamily: "SU Raleway, sans-serif",
                                    }}
                                  >
                                    {m.initials}
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col leading-tight">
                                <span
                                  className="font-bold text-sm"
                                  style={{
                                    color: "#61223b",
                                    fontFamily: "SU Raleway, sans-serif",
                                  }}
                                >
                                  {m.name}
                                </span>
                                <span
                                  className="text-xs mt-0.5"
                                  style={{ color: "#4a4847" }}
                                >
                                  {m.role}
                                </span>
                              </div>
                              <ExternalLink
                                className="w-3 h-3 shrink-0 ml-1"
                                style={{ color: "rgba(97,34,59,0.35)" }}
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOOTER CTA ── */}
      <div
        style={{
          background: "#61223b",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="container-narrow mx-auto">
          <h2
            className="text-2xl md:text-3xl font-black mb-4"
            style={{ color: "#caa258", fontFamily: "SU Raleway, sans-serif" }}
          >
            Interested in Postgraduate Research?
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Find out how to join one of our research groups as a postgraduate
            student.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/teaching/prospectivePG"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:opacity-85 hover:shadow-lg"
              style={{
                background: "#caa258",
                color: "#61223b",
                padding: "0.9rem 2rem",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Prospective PG Students <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-150 hover:shadow-md"
              style={{
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.3)",
                padding: "0.9rem 2rem",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
