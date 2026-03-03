"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const doctoral = [
  {
    name: "Willem Bester",
    supervisor: "Brink van der Merwe",
    topic:
      "The pathology, amelioration and cure of catastrophic backtracking in extended regular expressions",
  },
  {
    name: "Dirko Coetsee",
    supervisor: "McElory Hoffmann, Steve Kroon",
    topic: "Automated spreadsheet integration",
  },
  {
    name: "Jordan Masakuna",
    supervisor: "Dr Simukai Utete, Steve Kroon",
    topic: "Robot games with randomisation",
  },
  {
    name: "Adekunle Adekoya",
    supervisor: "Andries Engelbrecht",
    topic:
      "Multi-Objective Optimization for Dynamic Incremental Machine Learning Algorithms",
  },
  {
    name: "Winston Anderson",
    supervisor: "Lynette van Zijl",
    topic:
      "The Role of Multilingual Semantic and Semantic Web Technologies in Automated Assessment",
  },
  {
    name: "Dave Bockus",
    supervisor: "Andries Engelbrecht",
    topic: "High Dimensional Fitness Landscape Analysis",
  },
  {
    name: "Taivvo Omomule",
    supervisor: "Andries Engelbrecht",
    topic: "Mixtures of Heterogeneous Experts",
  },
  {
    name: "Moeketsi Raselimo",
    supervisor: "Bernd Fischer",
    topic: "Fault Localization and Repair for Grammarware",
  },
  {
    name: "Amani Saad",
    supervisor: "Andries Engelbrecht",
    topic: "Differential Evolution and optimal Population Sizes",
  },
];

const masters = [
  {
    name: "Albertus Aribeb",
    supervisor: "Andries Engelbrecht",
    topic: "Time Series Data Clustering",
  },
  {
    name: "David Baker Effendi",
    supervisor: "Brink van der Merwe, Willem Visser",
    topic:
      "Applications of Graph Technology in Spatio-Temporal Data Modelling, Program Analysis and Natural Language Processing",
  },
  {
    name: "Chelsea Barraball",
    supervisor: "Andries Engelbrecht",
    topic:
      "Co-Evolutionary Particle Swarm Optimization in Dynamic Environments",
  },
  {
    name: "Burger Becker",
    supervisor: "Trienko Grobler",
    topic: "Classification of Radio Galaxies",
  },
  {
    name: "Neil Burger",
    supervisor: "Trienko Grobler, Waldo Kleynhans",
    topic:
      "Trajectory Mining and Prediction Algorithms for Vessels using AIS Data",
  },
  {
    name: "Rohan Chhipa",
    supervisor: "Andries Engelbrecht",
    topic:
      "Community Detection in Social Networks using Set-based Particle Swarm",
  },
  {
    name: "Heinrich Cilliers",
    supervisor: "Andries Engelbrecht",
    topic: "Adaptive Gaussian Mixture Models",
  },
  {
    name: "Chris Coetzee",
    supervisor: "Willem Bester, Bernd Fischer",
    topic:
      "Application of static binary instrumentation to recovering data structures and their types",
  },
  {
    name: "Andrew Collett",
    supervisor: "Brink van der Merwe, Willem Visser",
    topic: "Software Stack Architectures and their Performance",
  },
  {
    name: "Jordan Daubinet",
    supervisor: "Andries Engelbrecht",
    topic: "Multi-Agent Reinforcement Learning for Financial Trading",
  },
  {
    name: "Nicole Du Toit",
    supervisor: "Cornelia Inggs",
    topic: "Linearization Checking of Concurrent Non-blocking Data Structures",
  },
  {
    name: "Kyle Erwin",
    supervisor: "Andries Engelbrecht",
    topic: "Set-base PSO for Portfolio Optimization",
  },
  {
    name: "Ignazio Ferreira",
    supervisor: "Andries Engelbrecht",
    topic: "Neural Network Ensembles and Concept Drift",
  },
  {
    name: "Manfred Habeck",
    supervisor: "Trienko Grobler, Lynette van Zijl / Jaco Geldenhuys",
    topic: "Box-repetition Free Words",
  },
  {
    name: "Jason Jackson",
    supervisor: "Trienko Grobler, Danie Ludick",
    topic: "Interferometry Imaging and Calibration Artefacts",
  },
  {
    name: "Ryan Lang",
    supervisor: "Andries Engelbrecht",
    topic: "Landscape-aware Hyper-heuristics",
  },
  {
    name: "Fidelis Mnkandla",
    supervisor: "Andries Engelbrecht",
    topic:
      "Training support vector machines under the presence of concept drift using particle swarm optimization",
  },
  {
    name: "Zhunaid Mohamed",
    supervisor: "Willem Visser",
    topic: "Interpreting and explaining Rural Networks",
  },
  {
    name: "Werner Mostert",
    supervisor: "Andries Engelbrecht",
    topic: "Feature Selection Fitness Landscape Analysis",
  },
  {
    name: "Muhammed Rahman",
    supervisor: "Andries Engelbrecht",
    topic:
      "Genetic Programming to Induce Decision Trees in Dynamic Environments",
  },
  {
    name: "Cian Steenkamp",
    supervisor: "Andries Engelbrecht",
    topic:
      "Multi-Guide Particle Swarm Optimization for Many-Objective Optimization Problems",
  },
  {
    name: "Charl Steyl",
    supervisor: "McElory Hoffmann, Trienko Grobler",
    topic: "Deep Learning Framework to Predictive Maintenance",
  },
  {
    name: "Benjamin Strelitz",
    supervisor: "Andries Engelbrecht",
    topic:
      "Constrained multi-modal optimization using particle swarm optimization",
  },
  {
    name: "Stefan Strydom",
    supervisor: "Brink van der Merwe",
    topic:
      "Automatic assignment of diagnosis codes to free-form text medical notes",
  },
  {
    name: "Aksel Thele",
    supervisor: "Andries Engelbrecht",
    topic: "Honey Bee Optimization for Dynamic Environments",
  },
  {
    name: "Elan van Biljon",
    supervisor: "Steve Kroon",
    topic: "Initialisation of Noise-Regularised Neural Networks",
  },
  {
    name: "Phillip van Heerden",
    supervisor: "Willem Visser, Bernd Fischer",
    topic: "Automatic Input Language Learning with Symbolic Methods",
  },
  {
    name: "Steyn van Litsenborgh",
    supervisor: "Brink van der Merwe",
    topic: "Learning Practical Regular Expressions",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StudentRow({
  student,
  index,
}: {
  student: { name: string; supervisor: string; topic: string };
  index: number;
}) {
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-2xl transition-all duration-200 hover:shadow-md"
      style={{
        background: index % 2 === 0 ? "white" : "#faf8f5",
        border: "1.5px solid rgba(97,34,59,0.08)",
        padding: "1rem 1.25rem",
      }}
    >
      {/* Avatar */}
      <div
        className="shrink-0 rounded-xl flex items-center justify-center font-black text-sm"
        style={{
          width: "44px",
          height: "44px",
          background: "linear-gradient(135deg, #61223b 0%, #7a3050 100%)",
          color: "#caa258",
          fontFamily: "SU Raleway, sans-serif",
        }}
      >
        {getInitials(student.name)}
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="font-black text-base leading-tight"
          style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
        >
          {student.name}
        </p>
        <p
          className="text-sm font-semibold mt-0.5"
          style={{ color: "#caa258" }}
        >
          Supervisor: {student.supervisor}
        </p>
        <p className="text-sm leading-snug mt-1" style={{ color: "#4a4847" }}>
          {student.topic}
        </p>
      </div>
    </div>
  );
}

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"doctoral" | "masters">("doctoral");

  const filtered = useMemo(() => {
    const list = tab === "doctoral" ? doctoral : masters;
    if (!search.trim()) return list;
    const q = search.toLowerCase();
    return list.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.supervisor.toLowerCase().includes(q) ||
        s.topic.toLowerCase().includes(q)
    );
  }, [search, tab]);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/doctorate_hero.jpeg"
          alt="Postgraduate students"
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
                  href="/people/staff"
                  className="hover:text-white transition-colors"
                >
                  People
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Students</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Postgraduate Students
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Our doctoral and masters students conducting research across all
                divisions of Computer Science.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPACER + STICKY CONTROLS ── */}
      <div style={{ height: "2rem" }} className="bg-white" />
      <div
        className="bg-white border-b"
        style={{
          borderColor: "rgba(97,34,59,0.1)",
          position: "sticky",
          top: "80px",
          zIndex: 30,
        }}
      >
        <div className="container-narrow mx-auto px-6">
          <div className="flex items-center gap-3 py-3 flex-wrap">
            {/* Tabs */}
            <div className="flex gap-1.5">
              {(["doctoral", "masters"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="whitespace-nowrap rounded-lg font-semibold transition-all duration-150"
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.35rem 0.85rem",
                    color: tab === t ? "white" : "#61223b",
                    background: tab === t ? "#61223b" : "rgba(97,34,59,0.06)",
                  }}
                >
                  {t === "doctoral"
                    ? `Doctoral (${doctoral.length})`
                    : `Masters (${masters.length})`}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-xs ml-auto">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                style={{ color: "rgba(97,34,59,0.4)" }}
              />
              <input
                type="text"
                placeholder="Search by name, supervisor or topic…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg text-sm focus:outline-none focus:ring-2"
                style={
                  {
                    border: "1.5px solid rgba(97,34,59,0.15)",
                    padding: "0.4rem 0.85rem 0.4rem 2.2rem",
                    color: "#4a4847",
                    background: "rgba(97,34,59,0.03)",
                  } as React.CSSProperties
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── LIST ── */}
      <div style={{ background: "#faf8f5", paddingBottom: "5rem" }}>
        <div
          className="container-narrow mx-auto px-6"
          style={{ paddingTop: "3rem" }}
        >
          {/* Section heading */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="h-px flex-1"
              style={{ background: "rgba(97,34,59,0.15)" }}
            />
            <h2
              className="text-2xl font-black whitespace-nowrap"
              style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
            >
              {tab === "doctoral" ? "Doctoral Students" : "Masters Students"}
            </h2>
            <div
              className="h-px flex-1"
              style={{ background: "rgba(97,34,59,0.15)" }}
            />
          </div>

          {filtered.length === 0 ? (
            <p
              className="text-center py-16 text-base"
              style={{ color: "#4a4847" }}
            >
              No students found matching your search.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((s, i) => (
                <StudentRow key={s.name} student={s} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
