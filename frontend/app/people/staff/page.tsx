"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Search } from "lucide-react";
import { useState, useMemo, useRef } from "react";
import { staffMembers } from "@/data/staff";
import type { StaffMember } from "@/types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { id: "academic", label: "Academic Staff" },
  { id: "support", label: "Support Staff" },
  { id: "extraordinary", label: "Extraordinary & Associates" },
];

function getInitials(name: string) {
  return name
    .replace(/^(Prof|Dr)\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function StaffCard({ member, index }: { member: StaffMember; index: number }) {
  return (
    <div
      className="group flex flex-col rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl"
      style={{ border: "1.5px solid rgba(97,34,59,0.10)", background: "white" }}
    >
      {/* Photo */}
      <div
        className="relative w-full shrink-0 overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-3xl font-black"
            style={{
              background: "linear-gradient(135deg, #61223b 0%, #7a3050 100%)",
              color: "#caa258",
              fontFamily: "SU Raleway, sans-serif",
            }}
          >
            {getInitials(member.name)}
          </div>
        )}
        {/* Gold top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1 group-hover:h-1.5 transition-all duration-300"
          style={{ background: "#caa258" }}
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-col flex-1"
        style={{ padding: "1.4rem 1.6rem" }}
      >
        <h3
          className="font-black text-xl leading-tight"
          style={{ color: "#61223b", fontFamily: "SU Raleway, sans-serif" }}
        >
          {member.name}
        </h3>
        <p className="font-bold text-base mt-1" style={{ color: "#caa258" }}>
          {member.role}
        </p>

        {member.affiliation && (
          <p
            className="text-sm mt-1.5 leading-snug"
            style={{ color: "#4a4847" }}
          >
            {member.affiliation}
          </p>
        )}

        {/* Research areas — plain text */}
        {member.researchAreas && member.researchAreas.length > 0 && (
          <p
            className="text-sm leading-relaxed mt-3"
            style={{ color: "#4a4847" }}
          >
            {member.researchAreas.join("; ")}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Contact */}
        <div
          className="flex flex-col gap-2 mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(97,34,59,0.08)" }}
        >
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#61223b] group/link"
              style={{ color: "#4a4847" }}
            >
              <Mail className="w-4 h-4 shrink-0" style={{ color: "#caa258" }} />
              <span className="truncate">{member.email}</span>
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#61223b]"
              style={{ color: "#4a4847" }}
            >
              <Phone
                className="w-4 h-4 shrink-0"
                style={{ color: "#caa258" }}
              />
              <span>{member.phone}</span>
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#61223b]"
              style={{ color: "#4a4847" }}
            >
              <Globe
                className="w-4 h-4 shrink-0"
                style={{ color: "#caa258" }}
              />
              <span>Personal Website</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function StaffPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  const filtered = useMemo(() => {
    return staffMembers.filter((m) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.researchAreas?.some((a) => a.toLowerCase().includes(q));
      const matchesCategory = !activeCategory || m.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const grouped = useMemo(() => {
    return CATEGORIES.map((cat) => ({
      ...cat,
      members: filtered.filter((m) => m.category === cat.id),
    })).filter((g) => g.members.length > 0);
  }, [filtered]);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{ height: "55vh", minHeight: "380px" }}
      >
        <Image
          src="/assets/doctorate_hero.jpeg"
          alt="CS Staff at Stellenbosch"
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
                  href="/people"
                  className="hover:text-white transition-colors"
                >
                  People
                </Link>
                <span style={{ color: "rgba(202,162,88,0.7)" }}>/</span>
                <span style={{ color: "#caa258" }}>Staff</span>
              </nav>
              <h1
                className="text-4xl md:text-6xl font-black leading-tight mb-4"
                style={{
                  color: "#caa258",
                  fontFamily: "SU Raleway, sans-serif",
                }}
              >
                Our Staff
              </h1>
              <p
                className="text-base md:text-lg max-w-2xl"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Meet the academics, researchers, and support staff of the
                Computer Science Division.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SPACER + STICKY FILTER BAR ── */}
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
          <div className="flex items-center gap-3 py-3">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                style={{ color: "rgba(97,34,59,0.4)" }}
              />
              <input
                type="text"
                placeholder="Search staff…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-lg text-sm focus:outline-none focus:ring-2"
                style={
                  {
                    border: "1.5px solid rgba(97,34,59,0.15)",
                    padding: "0.4rem 0.85rem 0.4rem 2.2rem",
                    color: "#4a4847",
                    background: "rgba(97,34,59,0.03)",
                    "--tw-ring-color": "#caa258",
                  } as React.CSSProperties
                }
              />
            </div>

            {/* Category filter arrows + pills */}
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
                <button
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center whitespace-nowrap rounded-lg font-semibold transition-all duration-150"
                  style={{
                    fontSize: "0.78rem",
                    padding: "0.35rem 0.85rem",
                    color: activeCategory === null ? "white" : "#61223b",
                    background:
                      activeCategory === null
                        ? "#61223b"
                        : "rgba(97,34,59,0.06)",
                  }}
                >
                  All
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex items-center whitespace-nowrap rounded-lg font-semibold transition-all duration-150"
                    style={{
                      fontSize: "0.78rem",
                      padding: "0.35rem 0.85rem",
                      color: activeCategory === cat.id ? "white" : "#61223b",
                      background:
                        activeCategory === cat.id
                          ? "#61223b"
                          : "rgba(97,34,59,0.06)",
                    }}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
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
      </div>

      {/* ── STAFF SECTIONS ── */}
      <div style={{ background: "#faf8f5", paddingBottom: "5rem" }}>
        <div className="container-narrow mx-auto px-6">
          {grouped.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-lg" style={{ color: "#4a4847" }}>
                No staff members found matching your search.
              </p>
            </div>
          ) : (
            grouped.map((group) => (
              <div key={group.id} style={{ paddingTop: "3.5rem" }}>
                {/* Section heading */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(97,34,59,0.15)" }}
                  />
                  <h2
                    className="text-2xl font-black whitespace-nowrap"
                    style={{
                      color: "#61223b",
                      fontFamily: "SU Raleway, sans-serif",
                    }}
                  >
                    {group.label}
                  </h2>
                  <div
                    className="h-px flex-1"
                    style={{ background: "rgba(97,34,59,0.15)" }}
                  />
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member, i) => (
                    <StaffCard key={member.id} member={member} index={i} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
