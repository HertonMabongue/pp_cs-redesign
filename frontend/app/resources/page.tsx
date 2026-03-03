"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  FileText,
  ExternalLink,
  GraduationCap,
  BookOpen,
  Code2,
  Briefcase,
  Globe,
  MapPin,
  Users,
  Download,
} from "lucide-react";
import { faqs } from "@/data/faqs";

// ── Useful Links ──────────────────────────────────────────────────────────────
const linkCategories = [
  {
    title: "Stellenbosch University",
    icon: GraduationCap,
    links: [
      {
        name: "SU Main Site",
        url: "https://www.sun.ac.za",
        desc: "The university's official website.",
      },
      {
        name: "mySUN Student Portal",
        url: "https://my.sun.ac.za",
        desc: "Academic records, timetable, and more.",
      },
      {
        name: "SU Library",
        url: "https://library.sun.ac.za",
        desc: "Databases, e-journals, and research resources.",
      },
      {
        name: "Faculty of Science",
        url: "https://www.su.ac.za/en/faculties/science",
        desc: "Faculty of Science at Stellenbosch University.",
      },
      {
        name: "NSFAS",
        url: "https://www.nsfas.org.za",
        desc: "National Student Financial Aid Scheme.",
      },
      {
        name: "Interactive Campus Map",
        url: "https://campusmap.sun.ac.za/",
        desc: "Find buildings, venues, and facilities on campus.",
      },
    ],
  },
  {
    title: "CS & Tech Community",
    icon: Code2,
    links: [
      {
        name: "CS Department (Current Site)",
        url: "https://cs.sun.ac.za",
        desc: "The live CS department website.",
      },
      {
        name: "SU Dev Society",
        url: "https://su.devsoc.co.za/",
        desc: "Stellenbosch University's developer community.",
      },
      {
        name: "ACM – Association for Computing Machinery",
        url: "https://www.acm.org",
        desc: "World's largest computing society.",
      },
      {
        name: "IEEE Computer Society",
        url: "https://www.computer.org",
        desc: "Technical community for computing professionals.",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        desc: "Developer Q&A community.",
      },
    ],
  },
  {
    title: "Learning Platforms",
    icon: BookOpen,
    links: [
      {
        name: "MIT OpenCourseWare",
        url: "https://ocw.mit.edu",
        desc: "Free university-level CS courses.",
      },
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org",
        desc: "Free full-stack coding curriculum.",
      },
      {
        name: "Coursera – CS Specialisations",
        url: "https://www.coursera.org",
        desc: "Online degrees and certificates.",
      },
      {
        name: "GitHub Education",
        url: "https://education.github.com",
        desc: "Free developer tools for students.",
      },
      {
        name: "JetBrains Student Licence",
        url: "https://www.jetbrains.com/community/education",
        desc: "Free professional IDEs for students.",
      },
    ],
  },
  {
    title: "Career & Research",
    icon: Briefcase,
    links: [
      {
        name: "Google Scholar",
        url: "https://scholar.google.com",
        desc: "Search scholarly literature.",
      },
      {
        name: "arXiv – Computer Science",
        url: "https://arxiv.org/list/cs/recent",
        desc: "Latest CS preprint research papers.",
      },
      {
        name: "LinkedIn Learning",
        url: "https://www.linkedin.com/learning",
        desc: "Professional development courses.",
      },
      {
        name: "Careers24 – Tech Jobs",
        url: "https://www.careers24.com",
        desc: "South African tech job listings.",
      },
    ],
  },
];

// ── Forms ─────────────────────────────────────────────────────────────────────
const forms = [
  {
    name: "Change of Module Form",
    description: "For adding or dropping modules after registration.",
  },
  {
    name: "Special Assessment Application",
    description:
      "Apply if you missed an exam due to illness or a valid reason.",
  },
  {
    name: "Postgraduate Research Proposal Template",
    description: "Standard template for MSc/PhD research proposals.",
  },
  {
    name: "Bursary Application Form",
    description: "Apply for department and faculty bursaries.",
  },
  {
    name: "Ethics Clearance Form",
    description: "Required for research projects involving human subjects.",
  },
  {
    name: "Leave of Absence Application",
    description: "Apply for a temporary break from your studies.",
  },
];

// ── FAQ Category colours ──────────────────────────────────────────────────────
const CAT_COLOURS: Record<string, { bg: string; text: string }> = {
  Admissions: { bg: "#61223b", text: "#fff" },
  Undergraduate: { bg: "#3b5e61", text: "#fff" },
  Postgraduate: { bg: "#4a3b61", text: "#fff" },
  Financial: { bg: "#caa258", text: "#1e0812" },
  General: { bg: "#4a4847", text: "#fff" },
};

export default function ResourcesPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  const visibleFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <main
      className="pt-20 lg:pt-36"
      style={{ fontFamily: "SU Raleway, sans-serif" }}
    >
      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          height: "55vh",
          minHeight: "380px",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/resources_hero.jpg"
          alt="Resources hero"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(30,8,18,0.93) 0%, rgba(97,34,59,0.52) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.7 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: 0,
            right: 0,
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#caa258",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
              Resources
            </span>
          </p>
          <h1
            style={{
              color: "#caa258",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.1,
              marginBottom: "0.75rem",
            }}
          >
            Student Resources
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "560px",
            }}
          >
            FAQs, forms, campus links, and curated tools to support your journey
            at CS Stellenbosch.
          </p>
        </motion.div>
      </section>

      {/* ── Quick nav pills ── */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "2px solid #61223b",
          padding: "0.75rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {[
            { label: "FAQs", href: "#faqs" },
            { label: "Forms & Documents", href: "#forms" },
            { label: "Useful Links", href: "#links" },
            {
              label: "Campus Map",
              href: "https://campusmap.sun.ac.za/",
              external: true,
            },
          ].map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flexShrink: 0,
                  padding: "0.4rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  border: "2px solid #d6cdc4",
                  color: "#4a4847",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  whiteSpace: "nowrap",
                  background: "#fff",
                }}
              >
                {item.label} <ExternalLink style={{ width: 12, height: 12 }} />
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                style={{
                  flexShrink: 0,
                  padding: "0.4rem 1.1rem",
                  borderRadius: "9999px",
                  fontSize: "0.86rem",
                  fontWeight: 700,
                  border: "2px solid #d6cdc4",
                  color: "#4a4847",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  background: "#fff",
                }}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </div>

      <div style={{ background: "#faf8f5" }}>
        {/* ── FAQs ── */}
        <section
          id="faqs"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          {/* Heading */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                color: "#61223b",
                fontWeight: 900,
                fontSize: "1.7rem",
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
            <div style={{ flex: 1, height: "1px", background: "#e8e0d8" }} />
          </div>

          {/* Category filter */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <button
              onClick={() => setActiveCategory("all")}
              style={{
                padding: "0.38rem 1.05rem",
                borderRadius: "9999px",
                fontSize: "0.84rem",
                fontWeight: 700,
                fontFamily: "SU Raleway, sans-serif",
                cursor: "pointer",
                border:
                  activeCategory === "all"
                    ? "2px solid #61223b"
                    : "2px solid #d6cdc4",
                background: activeCategory === "all" ? "#61223b" : "#fff",
                color: activeCategory === "all" ? "#fff" : "#4a4847",
                transition: "all 0.15s",
              }}
            >
              All
            </button>
            {categories.map((cat) => {
              const c = CAT_COLOURS[cat] ?? { bg: "#61223b", text: "#fff" };
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.38rem 1.05rem",
                    borderRadius: "9999px",
                    fontSize: "0.84rem",
                    fontWeight: 700,
                    fontFamily: "SU Raleway, sans-serif",
                    cursor: "pointer",
                    border: isActive
                      ? `2px solid ${c.bg}`
                      : "2px solid #d6cdc4",
                    background: isActive ? c.bg : "#fff",
                    color: isActive ? c.text : "#4a4847",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Accordion */}
          <div
            style={{
              maxWidth: "820px",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
          >
            {visibleFaqs.map((faq, i) => {
              const globalIndex = faqs.indexOf(faq);
              const isOpen = openFAQ === globalIndex;
              const c = CAT_COLOURS[faq.category] ?? {
                bg: "#61223b",
                text: "#fff",
              };
              return (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: isOpen
                      ? "0 4px 16px rgba(97,34,59,0.09)"
                      : "0 1px 4px rgba(97,34,59,0.06)",
                    border: isOpen
                      ? `1.5px solid ${c.bg}`
                      : "1.5px solid #e8e0d8",
                    transition: "box-shadow 0.2s, border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : globalIndex)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.1rem 1.4rem",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      gap: "1rem",
                    }}
                    aria-expanded={isOpen}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        flex: 1,
                        minWidth: 0,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          padding: "0.2rem 0.65rem",
                          borderRadius: "9999px",
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          background: c.bg,
                          color: c.text,
                          letterSpacing: "0.04em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {faq.category}
                      </span>
                      <span
                        style={{
                          color: "#1e0812",
                          fontWeight: 700,
                          fontSize: "0.97rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      style={{
                        width: 20,
                        height: 20,
                        color: "#9e8c7e",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          style={{
                            padding: "0 1.4rem 1.3rem",
                            borderTop: "1px solid #f0e8e0",
                          }}
                        >
                          <p
                            style={{
                              color: "#4a4847",
                              fontSize: "0.94rem",
                              lineHeight: 1.75,
                              margin: "0.9rem 0 0",
                            }}
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Forms & Documents ── */}
        <section
          id="forms"
          style={{
            background: "#fff",
            borderTop: "1px solid #e8e0d8",
            borderBottom: "1px solid #e8e0d8",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "4rem 1.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <h2
                style={{
                  color: "#61223b",
                  fontWeight: 900,
                  fontSize: "1.7rem",
                  margin: 0,
                }}
              >
                Forms &amp; Documents
              </h2>
              <div style={{ flex: 1, height: "1px", background: "#e8e0d8" }} />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.2rem",
              }}
            >
              {forms.map((form) => (
                <div
                  key={form.name}
                  style={{
                    background: "#faf8f5",
                    borderRadius: "12px",
                    border: "1.5px solid #e8e0d8",
                    padding: "1.3rem 1.4rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 42,
                      height: 42,
                      borderRadius: "10px",
                      background: "rgba(97,34,59,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileText
                      style={{ width: 20, height: 20, color: "#61223b" }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        color: "#61223b",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        margin: 0,
                        marginBottom: "0.3rem",
                      }}
                    >
                      {form.name}
                    </p>
                    <p
                      style={{
                        color: "#9e8c7e",
                        fontSize: "0.83rem",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {form.description}
                    </p>
                    <button
                      style={{
                        marginTop: "0.7rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        color: "#caa258",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        fontFamily: "SU Raleway, sans-serif",
                      }}
                    >
                      <Download style={{ width: 13, height: 13 }} /> Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Useful Links ── */}
        <section
          id="links"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                color: "#61223b",
                fontWeight: 900,
                fontSize: "1.7rem",
                margin: 0,
              }}
            >
              Useful Links
            </h2>
            <div style={{ flex: 1, height: "1px", background: "#e8e0d8" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {linkCategories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div
                  key={cat.title}
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    border: "1.5px solid #e8e0d8",
                    padding: "1.6rem",
                    boxShadow: "0 2px 8px rgba(97,34,59,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "10px",
                        background: "rgba(97,34,59,0.07)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CatIcon
                        style={{ width: 20, height: 20, color: "#61223b" }}
                      />
                    </div>
                    <h3
                      style={{
                        color: "#1e0812",
                        fontWeight: 800,
                        fontSize: "1.02rem",
                        margin: 0,
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.15rem",
                    }}
                  >
                    {cat.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.65rem",
                            padding: "0.65rem 0.5rem",
                            borderRadius: "8px",
                            textDecoration: "none",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "#faf8f5")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "transparent")
                          }
                        >
                          <ExternalLink
                            style={{
                              width: 14,
                              height: 14,
                              color: "#caa258",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          />
                          <div>
                            <span
                              style={{
                                color: "#61223b",
                                fontWeight: 700,
                                fontSize: "0.9rem",
                                display: "block",
                              }}
                            >
                              {link.name}
                            </span>
                            <span
                              style={{ color: "#9e8c7e", fontSize: "0.8rem" }}
                            >
                              {link.desc}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Campus map CTA ── */}
        <section style={{ background: "#fff", borderTop: "1px solid #e8e0d8" }}>
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "3.5rem 1.5rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "14px",
                background: "rgba(97,34,59,0.07)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <MapPin style={{ width: 28, height: 28, color: "#61223b" }} />
            </div>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3
                style={{
                  color: "#61223b",
                  fontWeight: 900,
                  fontSize: "1.2rem",
                  margin: 0,
                  marginBottom: "0.35rem",
                }}
              >
                Find Us on Campus
              </h3>
              <p style={{ color: "#4a4847", fontSize: "0.95rem", margin: 0 }}>
                Use the interactive campus map to locate the CS building,
                lecture halls, and other facilities at Stellenbosch University.
              </p>
            </div>
            <a
              href="https://campusmap.sun.ac.za/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#61223b",
                color: "#fff",
                fontWeight: 800,
                padding: "0.75rem 1.8rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                flexShrink: 0,
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Open Map <ExternalLink style={{ width: 15, height: 15 }} />
            </a>
          </div>
        </section>
      </div>

      {/* ── Footer CTA ── */}
      <div
        style={{
          background: "#61223b",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#caa258",
              fontWeight: 900,
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              marginBottom: "0.75rem",
            }}
          >
            Still have questions?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginBottom: "1.8rem",
            }}
          >
            Our team is happy to help. Reach out via the contact page or visit
            us during office hours.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                background: "#caa258",
                color: "#1e0812",
                fontWeight: 800,
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Contact Us
            </Link>
            <Link
              href="/teaching/prospectiveUG"
              style={{
                background: "transparent",
                color: "#ffffff",
                fontWeight: 800,
                padding: "0.73rem 2rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.5)",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              Prospective Students
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
