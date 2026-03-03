"use client";

import HeroSection from "@/components/ui/HeroSection";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import { events } from "@/data/events";
import NewsCard from "@/components/ui/NewsCard";
import {
  GraduationCap,
  FlaskConical,
  Users,
  Award,
  BookOpen,
  Globe,
  Lightbulb,
  ArrowRight,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    value: "300+",
    label: "Students",
    description:
      "Undergraduate and postgraduate students from across Africa and beyond.",
  },
  {
    icon: FlaskConical,
    value: "4",
    label: "Research Groups",
    description:
      "Dedicated labs pushing the boundaries of AI, automata, software engineering, and networks.",
  },
  {
    icon: Users,
    value: "20+",
    label: "Faculty Members",
    description:
      "World-class researchers and educators committed to excellence.",
  },
  {
    icon: Award,
    value: "NRF A",
    label: "Rated Research",
    description: "Multiple NRF-rated researchers.",
  },
];

const quickLinks = [
  {
    icon: BookOpen,
    title: "Programmes",
    description:
      "Explore our undergraduate, honours, masters, and PhD programmes in computer science.",
    href: "/teaching/UG",
    color: "#61223b",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "Discover our four research groups across automata, ML/AI, software engineering, and networks.",
    href: "/research",
    color: "#3b5e61",
  },
  {
    icon: Globe,
    title: "Courses",
    description:
      "Browse our full course catalogue with modules from first year to postgraduate level.",
    href: "/courses/artificial-intelligence",
    color: "#4a3b61",
  },
  {
    icon: Lightbulb,
    title: "Student Resources",
    description:
      "Access FAQs, forms, useful links, and everything you need as a CS student.",
    href: "/resources",
    color: "#caa258",
  },
];

const researchPreviews = [
  {
    id: "automata",
    title: "Automata & Grammars",
    description:
      "Theory of nondeterministic finite automata, cellular automata, and applications to image processing, music generation, and grammar correction.",
    lead: "Prof Brink van der Merwe & Prof Lynette van Zijl",
    href: "/research#automata",
    accent: "#61223b",
  },
  {
    id: "sev",
    title: "Software Engineering & Verification",
    description:
      "Development of highly reliable system software using computer-aided verification, systematic testing, and defensive programming techniques since 1990.",
    lead: "Prof Bernd Fischer, Prof Willem Visser & Prof Jaco Geldenhuys",
    href: "/research#sev",
    accent: "#61223b",
  },
  {
    id: "mlai",
    title: "Machine Learning & AI",
    description:
      "Sequential decision-making, planning, machine learning, and search — grounded in probability theory, game theory, and earth observation data.",
    lead: "Prof Steve Kroon & Dr Trienko Grobler",
    href: "/research#mlai",
    accent: "#61223b",
  },
  {
    id: "telkom",
    title: "Telkom-Siemens CoE",
    description:
      "Research and development in broadband technologies, ATM networks, and training postgraduate professionals in advanced telecommunications.",
    lead: "Prof Anthony Krzesinski",
    href: "/research#telkom",
    accent: "#61223b",
  },
];

function formatEventDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  const latestNews = newsArticles.slice(0, 3);
  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);

  return (
    <main style={{ fontFamily: "SU Raleway, sans-serif" }}>
      {/* Hero */}
      <HeroSection
        title="Computer Science Division"
        menuButtons={[
          { label: "Undergraduate", href: "/teaching/UG" },
          { label: "Postgraduate", href: "/teaching/PG" },
          { label: "Research", href: "/research" },
          { label: "Staff", href: "/people/staff" },
        ]}
      />

      {/* ── Highlights bar — lowered, floated below hero ── */}
      <section style={{ background: "#faf8f5", padding: "3.5rem 1.5rem 4rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    border: "1.5px solid #e8e0d8",
                    borderTop: "4px solid #caa258",
                    padding: "1.6rem 1.5rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    boxShadow: "0 2px 12px rgba(97,34,59,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      background: "rgba(97,34,59,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon style={{ width: 22, height: 22, color: "#61223b" }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "1.6rem",
                        fontWeight: 900,
                        color: "#61223b",
                        lineHeight: 1.1,
                      }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        color: "#caa258",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "0.3rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <p
                      style={{
                        color: "#4a4847",
                        fontSize: "0.83rem",
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Welcome / About ── */}
      <section style={{ background: "#ffffff", padding: "5rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#caa258",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              About the Division
            </p>
            <h2
              style={{
                color: "#61223b",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Welcome to Computer Science
            </h2>
            <p
              style={{
                color: "#4a4847",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "1rem",
              }}
            >
              The Computer Science Division at Stellenbosch University is part
              of the Department of Mathematical Sciences, home to
              internationally recognised researchers, award-winning lecturers,
              and a diverse student body.
            </p>
            <p
              style={{
                color: "#4a4847",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "2rem",
              }}
            >
              We offer programmes from undergraduate to doctoral level, covering
              theoretical foundations to cutting-edge machine learning and AI —
              situated in the heart of the beautiful Stellenbosch winelands.
            </p>
            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#61223b",
                color: "#fff",
                fontWeight: 800,
                padding: "0.75rem 1.75rem",
                borderRadius: "9999px",
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              Learn More About Us{" "}
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1.5px solid #e8e0d8",
              boxShadow: "0 4px 24px rgba(97,34,59,0.10)",
              height: "360px",
              position: "relative",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/welcome_rooiplein.jpg"
              alt="Rooiplein at Stellenbosch University"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Explore Our Department — modern cards ── */}
      <section style={{ background: "#faf8f5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#caa258",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              What We Offer
            </p>
            <h2
              style={{
                color: "#61223b",
                fontWeight: 900,
                fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                margin: 0,
              }}
            >
              Explore Our Department
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="group"
                    style={{
                      background: "#ffffff",
                      borderRadius: "18px",
                      border: "1.5px solid #e8e0d8",
                      padding: "2rem 1.75rem 1.75rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      height: "100%",
                      boxShadow: "0 2px 8px rgba(97,34,59,0.05)",
                      transition: "box-shadow 0.2s, transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 8px 28px rgba(97,34,59,0.14)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 2px 8px rgba(97,34,59,0.05)";
                      (e.currentTarget as HTMLDivElement).style.transform =
                        "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        background: `${link.color}14`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        style={{ width: 24, height: 24, color: link.color }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          color: "#1e0812",
                          fontWeight: 900,
                          fontSize: "1.1rem",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {link.title}
                      </h3>
                      <p
                        style={{
                          color: "#4a4847",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {link.description}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        color: "#caa258",
                        fontSize: "0.85rem",
                        fontWeight: 800,
                      }}
                    >
                      Explore <ChevronRight style={{ width: 16, height: 16 }} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Research Excellence ── */}
      <section style={{ background: "#ffffff", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#caa258",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                Our Focus Areas
              </p>
              <h2
                style={{
                  color: "#61223b",
                  fontWeight: 900,
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  margin: 0,
                }}
              >
                Research Excellence
              </h2>
            </div>
            <Link
              href="/research"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#61223b",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1.5px solid #61223b",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
              }}
            >
              All Research Groups{" "}
              <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {researchPreviews.map((group) => (
              <Link
                key={group.id}
                href={group.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#faf8f5",
                    borderRadius: "16px",
                    border: "1.5px solid #e8e0d8",
                    borderTop: `4px solid ${group.accent}`,
                    padding: "1.75rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    boxShadow: "0 2px 8px rgba(97,34,59,0.05)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 8px 28px rgba(97,34,59,0.12)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "0 2px 8px rgba(97,34,59,0.05)";
                    (e.currentTarget as HTMLDivElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  <h3
                    style={{
                      color: group.accent,
                      fontWeight: 900,
                      fontSize: "1rem",
                      margin: 0,
                    }}
                  >
                    {group.title}
                  </h3>
                  <p
                    style={{
                      color: "#4a4847",
                      fontSize: "0.87rem",
                      lineHeight: 1.65,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {group.description}
                  </p>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#9e8c7e",
                      borderTop: "1px solid #e8e0d8",
                      paddingTop: "0.75rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "#61223b" }}>
                      Led by:{" "}
                    </span>
                    {group.lead}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest News ── */}
      <section style={{ background: "#faf8f5", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#caa258",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                Stay Updated
              </p>
              <h2
                style={{
                  color: "#61223b",
                  fontWeight: 900,
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  margin: 0,
                }}
              >
                Latest News
              </h2>
            </div>
            <Link
              href="/news"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#61223b",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1.5px solid #61223b",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
              }}
            >
              All News <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {latestNews.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section style={{ background: "#ffffff", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  color: "#caa258",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                }}
              >
                Seminars & Workshops
              </p>
              <h2
                style={{
                  color: "#61223b",
                  fontWeight: 900,
                  fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
                  margin: 0,
                }}
              >
                Upcoming Events
              </h2>
            </div>
            <Link
              href="/events"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#61223b",
                fontWeight: 800,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "1.5px solid #61223b",
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
              }}
            >
              Full Calendar <ArrowRight style={{ width: 15, height: 15 }} />
            </Link>
          </div>
          {upcomingEvents.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {upcomingEvents.map((event) => {
                const d = new Date(event.date);
                const day = d.toLocaleDateString("en-ZA", { day: "2-digit" });
                const month = d
                  .toLocaleDateString("en-ZA", { month: "short" })
                  .toUpperCase();
                return (
                  <div
                    key={event.id}
                    style={{
                      background: "#faf8f5",
                      borderRadius: "14px",
                      border: "1.5px solid #e8e0d8",
                      padding: "1.5rem",
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Date block */}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 52,
                        borderRadius: "10px",
                        overflow: "hidden",
                        border: "1.5px solid #e8e0d8",
                      }}
                    >
                      <div
                        style={{
                          background: "#61223b",
                          textAlign: "center",
                          padding: "0.2rem 0",
                        }}
                      >
                        <span
                          style={{
                            color: "#caa258",
                            fontSize: "0.6rem",
                            fontWeight: 800,
                            letterSpacing: "0.06em",
                          }}
                        >
                          {month}
                        </span>
                      </div>
                      <div
                        style={{
                          background: "#fff",
                          textAlign: "center",
                          padding: "0.25rem 0",
                        }}
                      >
                        <span
                          style={{
                            color: "#1e0812",
                            fontSize: "1.4rem",
                            fontWeight: 900,
                            lineHeight: 1,
                          }}
                        >
                          {day}
                        </span>
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          color: "#1e0812",
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          lineHeight: 1.35,
                          margin: 0,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {event.title}
                      </h3>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.25rem",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.78rem",
                            color: "#4a4847",
                          }}
                        >
                          <Clock
                            style={{
                              width: 12,
                              height: 12,
                              color: "#caa258",
                              flexShrink: 0,
                            }}
                          />
                          {event.time}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.78rem",
                            color: "#4a4847",
                          }}
                        >
                          <MapPin
                            style={{
                              width: 12,
                              height: 12,
                              color: "#caa258",
                              flexShrink: 0,
                            }}
                          />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p style={{ color: "#9e8c7e", fontSize: "0.95rem" }}>
              No upcoming events scheduled.
            </p>
          )}
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <div
        style={{
          background: "#61223b",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              color: "#caa258",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              marginBottom: "0.75rem",
            }}
          >
            Ready to Join Us?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginBottom: "2rem",
            }}
          >
            Whether you are a prospective student, researcher, or industry
            partner — we'd love to hear from you.
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
              href="/teaching/prospectiveUG"
              style={{
                background: "#caa258",
                color: "#1e0812",
                fontWeight: 800,
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
              }}
            >
              Prospective Students
            </Link>
            <Link
              href="/contact"
              style={{
                background: "transparent",
                color: "#fff",
                fontWeight: 800,
                padding: "0.73rem 2rem",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.4)",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
