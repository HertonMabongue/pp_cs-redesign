"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import {
  Target,
  Eye,
  Award,
  Users,
  GraduationCap,
  Globe,
  BookOpen,
  FlaskConical,
  TrendingUp,
  Calendar,
} from "lucide-react";

const values = [
  {
    icon: <Award className="w-7 h-7" />,
    title: "Excellence",
    description:
      "We strive for excellence in teaching, research, and community engagement.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Inclusivity",
    description:
      "We foster a diverse and inclusive environment where every student can thrive.",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Innovation",
    description:
      "We embrace innovative approaches to education and push the boundaries of knowledge.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Impact",
    description:
      "We create research and graduates that make a meaningful impact in Africa and the world.",
  },
];

const stats = [
  {
    value: "1972",
    label: "Since",
    icon: <Calendar className="w-6 h-6" />,
  },
  { value: "11", label: "Academic Staff", icon: <Users className="w-6 h-6" /> },
  {
    value: "300+",
    label: "Students",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    value: "50+",
    label: "Years of Excellence",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    value: "4+",
    label: "Research Areas",
    icon: <FlaskConical className="w-6 h-6" />,
  },
  {
    value: "100+",
    label: "Publications",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

const milestones = [
  {
    year: "1972",
    title: "Department Founded",
    description:
      "The Department of Computer Science was established at Stellenbosch University, beginning a legacy of computing education in Africa.",
  },
  {
    year: "1985",
    title: "First MSc Awarded",
    description:
      "The first Master of Science in Computer Science was awarded, marking the department's commitment to postgraduate excellence.",
  },
  {
    year: "1995",
    title: "Dedicated Research Lab",
    description:
      "Launch of the first dedicated Computer Science research laboratory, fostering cutting-edge algorithmic and systems research.",
  },
  {
    year: "2005",
    title: "BSc Data Science",
    description:
      "Introduction of the BSc Data Science programme, positioning the department at the forefront of the data revolution.",
  },
  {
    year: "2015",
    title: "SARChI AI Chair",
    description:
      "Establishment of the SARChI Chair in Artificial Intelligence, cementing the department's role in African AI research.",
  },
  {
    year: "2020",
    title: "HPC Facility Opens",
    description:
      "Opening of the High-Performance Computing Facility, providing world-class infrastructure for research and teaching.",
  },
  {
    year: "2024",
    title: "Computer Science Division",
    description:
      "The department merges with Mathematics and Applied Mathematics to form the Computer Science Division within the Department of Mathematical Sciences.",
  },
];

const researchAreas = [
  "Automata Theory & Formal Languages",
  "Machine Learning & NLP",
  "Software Engineering & Testing",
  "Broadband & Mobile Networks",
  "Robotics",
  "Program Verification",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/assets/honours_about_hero.jpg"
          alt="About hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(30,8,18,0.72) 0%, rgba(97,34,59,0.28) 55%, rgba(0,0,0,0.10) 100%)",
          }}
        />
        {/* gold bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[4px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #caa258 20%, #d4b474 50%, #caa258 80%, transparent 100%)",
          }}
        />
        <div className="relative w-full container-narrow mx-auto px-6 pt-36 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-6xl md:text-8xl font-black text-white leading-none mb-6"
              style={{ color: "#caa258", fontFamily: "SU Raleway, sans-serif" }}
            >
              About the
              <br />
              <span style={{ color: "#caa258" }}>Division</span>
            </h1>
            <p
              className="text-xl max-w-xl font-semibold"
              style={{
                color: "rgba(255,255,255,0.88)",
                fontFamily: "SU Raleway, sans-serif",
              }}
            >
              A leading centre for computing education and research worldwide,
              dedicated to shaping tomorrow's innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SLOGAN + INTRO ── */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Slogan image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Image
                src="/assets/SU_slogan_white.jpg"
                alt="Stellenbosch University slogan"
                width={420}
                height={160}
                className="w-full max-w-sm"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span
                className="block text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: "#caa258" }}
              >
                Who We Are
              </span>
              <h2
                className="text-4xl md:text-5xl font-black mb-6"
                style={{
                  color: "#61223b",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Computer Science Division
              </h2>
              <div
                className="space-y-5 text-lg leading-relaxed"
                style={{ color: "#4a4847" }}
              >
                <p>
                  Founded in <strong style={{ color: "#61223b" }}>1972</strong>,
                  the Department of Computer Science has grown into a vibrant
                  centre of education and research. We have recently merged with
                  Mathematics and Applied Mathematics to form the{" "}
                  <strong style={{ color: "#61223b" }}>
                    Computer Science Division
                  </strong>{" "}
                  within the Department of Mathematical Sciences at Stellenbosch
                  University.
                </p>
                <p>
                  We currently have{" "}
                  <strong style={{ color: "#61223b" }}>
                    11 full members of academic staff
                  </strong>{" "}
                  whose research spans Automata Theory, Broadband Networks,
                  Software Engineering, Program Verification, Robotics, NLP, and
                  Machine Learning.
                </p>
              </div>
              {/* Research tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {researchAreas.map((area) => (
                  <span
                    key={area}
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(97,34,59,0.07)",
                      color: "#61223b",
                      border: "1px solid rgba(97,34,59,0.18)",
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: "#61223b" }}>
        <div className="container-narrow mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(202,162,88,0.18)",
                    color: "#caa258",
                  }}
                >
                  {s.icon}
                </div>
                <span
                  className="text-3xl font-black"
                  style={{
                    color: "#caa258",
                    fontFamily: "SU Raleway, sans-serif",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION, VISION, VALUES ── */}
      <section style={{ background: "#faf8f5", padding: "5rem 1.5rem" }}>
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <span
              style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#caa258",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "0.6rem",
              }}
            >
              What Drives Us
            </span>
            <h2
              style={{
                color: "#61223b",
                fontFamily: "SU Raleway, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                margin: 0,
              }}
            >
              Mission, Vision &amp; Values
            </h2>
          </motion.div>

          {/* Mission + Vision */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.75rem",
              marginBottom: "4rem",
            }}
          >
            {[
              {
                icon: <Target className="w-8 h-8" />,
                label: "Our Mission",
                text: "To provide world-class computer science education, conduct cutting-edge research that contributes to global knowledge, and engage with industry and community to drive technological innovation and socioeconomic development in South Africa.",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                label: "Our Vision",
                text: "To be a globally recognised department that leads in computing education, produces impactful research, and develops graduates who are innovative, ethical, and prepared to address the challenges of the digital age in Africa and beyond.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  border: "1.5px solid #e8e0d8",
                  borderTop: "4px solid #caa258",
                  boxShadow: "0 4px 20px rgba(97,34,59,0.06)",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: "rgba(97,34,59,0.07)",
                    color: "#61223b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                    fontWeight: 900,
                    fontSize: "1.25rem",
                    marginBottom: "0.85rem",
                  }}
                >
                  {item.label}
                </h3>
                <p style={{ color: "#4a4847", lineHeight: 1.75, margin: 0 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Values heading */}
          <div style={{ marginBottom: "2rem" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#caa258",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "0.4rem",
              }}
            >
              Core Values
            </span>
            <div
              style={{
                width: 48,
                height: 3,
                background: "#caa258",
                borderRadius: "9999px",
              }}
            />
          </div>

          {/* Values */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  background: "#ffffff",
                  borderRadius: "18px",
                  padding: "2rem 1.75rem",
                  border: "1.5px solid #e8e0d8",
                  borderBottom: "3px solid #caa258",
                  boxShadow: "0 2px 10px rgba(97,34,59,0.05)",
                  textAlign: "center",
                  cursor: "default",
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
                    "0 2px 10px rgba(97,34,59,0.05)";
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "rgba(97,34,59,0.07)",
                    color: "#61223b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "#61223b";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(97,34,59,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "#61223b";
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    color: "#61223b",
                    fontFamily: "SU Raleway, sans-serif",
                    fontWeight: 900,
                    fontSize: "1.05rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  style={{
                    color: "#4a4847",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: "#caa258" }}
            >
              Our Journey
            </span>
            <h2
              className="text-4xl md:text-5xl font-black mt-3"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              Milestones that{" "}
              <em
                className="font-semibold not-italic"
                style={{ color: "#caa258" }}
              >
                define us
              </em>
            </h2>
          </motion.div>

          {/* ── Mobile timeline (single column, left-aligned) ── */}
          <div className="block md:hidden">
            <div className="relative" style={{ paddingLeft: "2.5rem" }}>
              {/* Vertical line */}
              <div
                className="absolute top-0 bottom-0"
                style={{
                  left: "9px",
                  width: "2px",
                  background:
                    "linear-gradient(to bottom, #caa25830, #caa258, #caa25830)",
                }}
              />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{ position: "relative", marginBottom: "1.75rem" }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-2.5rem",
                      top: "1.1rem",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#caa258",
                      boxShadow:
                        "0 0 0 3px white, 0 0 0 5px rgba(202,162,88,0.4)",
                      zIndex: 10,
                    }}
                  />
                  <div
                    style={{
                      background: "#faf8f5",
                      borderRadius: "14px",
                      padding: "1.25rem 1.5rem",
                      border: "1.5px solid #e8e0d8",
                      borderLeft: "3px solid #caa258",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "1.4rem",
                        fontWeight: 900,
                        color: "#caa258",
                        fontFamily: "SU Raleway, sans-serif",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {m.year}
                    </span>
                    <h3
                      style={{
                        color: "#1e0812",
                        fontFamily: "SU Raleway, sans-serif",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {m.title}
                    </h3>
                    <p
                      style={{
                        color: "#4a4847",
                        fontSize: "0.85rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Desktop timeline (alternating) ── */}
          <div className="hidden md:block">
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical centre line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #caa25830, #caa258, #caa25830)",
                }}
              />
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: i * 0.08 }}
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: isLeft ? "row" : "row-reverse",
                      alignItems: "flex-start",
                      marginBottom: i < milestones.length - 1 ? "4rem" : 0,
                    }}
                  >
                    {/* Dot */}
                    <div
                      style={{
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                        top: "1.25rem",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#caa258",
                        boxShadow:
                          "0 0 0 3px white, 0 0 0 5px rgba(202,162,88,0.4)",
                        zIndex: 10,
                      }}
                    />
                    {/* Content card */}
                    <div
                      style={{
                        width: "calc(50% - 2.5rem)",
                        marginRight: isLeft ? "2.5rem" : 0,
                        marginLeft: isLeft ? 0 : "2.5rem",
                      }}
                    >
                      <div
                        style={{
                          background: "#faf8f5",
                          borderRadius: "14px",
                          padding: "1.5rem 1.75rem",
                          border: "1.5px solid #e8e0d8",
                          borderLeft: isLeft ? "3px solid #caa258" : undefined,
                          borderRight: !isLeft
                            ? "3px solid #caa258"
                            : undefined,
                          transition: "box-shadow 0.2s",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "0 6px 20px rgba(97,34,59,0.10)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.boxShadow =
                            "none";
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            fontSize: "1.6rem",
                            fontWeight: 900,
                            color: "#caa258",
                            fontFamily: "SU Raleway, sans-serif",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {m.year}
                        </span>
                        <h3
                          style={{
                            color: "#1e0812",
                            fontFamily: "SU Raleway, sans-serif",
                            fontWeight: 800,
                            fontSize: "1rem",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {m.title}
                        </h3>
                        <p
                          style={{
                            color: "#4a4847",
                            fontSize: "0.875rem",
                            lineHeight: 1.65,
                            margin: 0,
                          }}
                        >
                          {m.description}
                        </p>
                      </div>
                    </div>
                    {/* Spacer */}
                    <div style={{ width: "calc(50% - 2.5rem)" }} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
