"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  MapPin,
  Users,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  BookOpen,
  Wrench,
  Trophy,
  PartyPopper,
  AlertCircle,
  Presentation,
} from "lucide-react";
import { events } from "@/data/events";
import type { Event } from "@/types";

const TYPE_CONFIG: Record<
  string,
  { label: string; bg: string; text: string; icon: React.ElementType }
> = {
  seminar: {
    label: "Seminar",
    bg: "#61223b",
    text: "#fff",
    icon: Presentation,
  },
  workshop: { label: "Workshop", bg: "#3b5e61", text: "#fff", icon: Wrench },
  conference: {
    label: "Conference",
    bg: "#4a3b61",
    text: "#fff",
    icon: Trophy,
  },
  social: {
    label: "Social",
    bg: "#caa258",
    text: "#1e0812",
    icon: PartyPopper,
  },
  deadline: {
    label: "Deadline",
    bg: "#c0392b",
    text: "#fff",
    icon: AlertCircle,
  },
  lecture: { label: "Lecture", bg: "#4a4847", text: "#fff", icon: BookOpen },
};

const FILTERS = [
  { key: "all", label: "All Events" },
  { key: "seminar", label: "Seminars" },
  { key: "workshop", label: "Workshops" },
  { key: "conference", label: "Conferences" },
  { key: "social", label: "Social" },
  { key: "deadline", label: "Deadlines" },
];

function formatEventDate(dateStr: string, endDate?: string) {
  const d = new Date(dateStr);
  const formatted = d.toLocaleDateString("en-ZA", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  if (endDate && endDate !== dateStr) {
    const e = new Date(endDate);
    const endFormatted = e.toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "long",
    });
    return `${formatted} – ${endFormatted}`;
  }
  return formatted;
}

function getDayMonth(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day: d.toLocaleDateString("en-ZA", { day: "2-digit" }),
    month: d.toLocaleDateString("en-ZA", { month: "short" }).toUpperCase(),
  };
}

function EventCard({ event }: { event: Event }) {
  const cfg = TYPE_CONFIG[event.type] ?? TYPE_CONFIG.seminar;
  const Icon = cfg.icon;
  const { day, month } = getDayMonth(event.date);
  const isOnline =
    event.location.toLowerCase().includes("online") ||
    event.location.toLowerCase().includes("virtual") ||
    event.location.toLowerCase().includes("zoom");

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(97,34,59,0.07)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Top accent */}
      <div style={{ height: "4px", background: cfg.bg, flexShrink: 0 }} />

      <div
        style={{
          padding: "1.6rem 1.6rem 1.8rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          gap: "0.95rem",
        }}
      >
        {/* Header: calendar block + type pill */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          {/* Calendar date block */}
          <div
            style={{
              flexShrink: 0,
              width: 54,
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(97,34,59,0.12)",
              border: "1px solid #e8e0d8",
            }}
          >
            <div
              style={{
                background: cfg.bg,
                padding: "0.2rem 0",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color:
                    cfg.text === "#fff"
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(30,8,18,0.7)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {month}
              </span>
            </div>
            <div
              style={{
                background: "#fff",
                padding: "0.15rem 0 0.25rem",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  color: "#1e0812",
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                {day}
              </span>
            </div>
          </div>

          {/* Type pill */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              padding: "0.3rem 0.85rem",
              borderRadius: "9999px",
              fontSize: "0.75rem",
              fontWeight: 800,
              background: cfg.bg,
              color: cfg.text,
              flexShrink: 0,
            }}
          >
            <Icon style={{ width: 12, height: 12 }} />
            {cfg.label}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            color: "#61223b",
            fontWeight: 800,
            fontSize: "1.05rem",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#4a4847",
            fontSize: "0.88rem",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {event.description}
        </p>

        {/* Meta rows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.83rem",
              color: "#4a4847",
            }}
          >
            <Calendar
              style={{ width: 14, height: 14, color: "#caa258", flexShrink: 0 }}
            />
            <span>{formatEventDate(event.date, event.endDate)}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.83rem",
              color: "#4a4847",
            }}
          >
            <Clock
              style={{ width: 14, height: 14, color: "#caa258", flexShrink: 0 }}
            />
            <span>{event.time}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.83rem",
              color: "#4a4847",
            }}
          >
            {isOnline ? (
              <ExternalLink
                style={{
                  width: 14,
                  height: 14,
                  color: "#caa258",
                  flexShrink: 0,
                }}
              />
            ) : (
              <MapPin
                style={{
                  width: 14,
                  height: 14,
                  color: "#caa258",
                  flexShrink: 0,
                }}
              />
            )}
            <span>{event.location}</span>
          </div>
          {event.speaker && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.83rem",
                color: "#4a4847",
              }}
            >
              <Users
                style={{
                  width: 14,
                  height: 14,
                  color: "#caa258",
                  flexShrink: 0,
                }}
              />
              <span>
                {event.speaker}
                {event.speakerAffiliation && (
                  <span style={{ color: "#9e8c7e" }}>
                    {" "}
                    · {event.speakerAffiliation}
                  </span>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Registration link */}
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              marginTop: "0.5rem",
              background: "#61223b",
              color: "#fff",
              fontWeight: 800,
              fontSize: "0.82rem",
              padding: "0.45rem 1rem",
              borderRadius: "9999px",
              textDecoration: "none",
              alignSelf: "flex-start",
            }}
          >
            Register <ExternalLink style={{ width: 12, height: 12 }} />
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const now = new Date();
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const pillsRef = useRef<HTMLDivElement>(null);

  const scrollPills = (dir: "left" | "right") => {
    if (pillsRef.current)
      pillsRef.current.scrollBy({
        left: dir === "left" ? -160 : 160,
        behavior: "smooth",
      });
  };

  const upcoming = events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const pool = activeTab === "upcoming" ? upcoming : past;

  const filtered = pool.filter((e) => {
    const matchType = activeType === "all" || e.type === activeType;
    const matchSearch =
      !search ||
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase()) ||
      (e.speaker ?? "").toLowerCase().includes(search.toLowerCase()) ||
      e.location.toLowerCase().includes(search.toLowerCase());
    const matchFrom = !dateFrom || e.date >= dateFrom;
    const matchTo = !dateTo || e.date <= dateTo;
    return matchType && matchSearch && matchFrom && matchTo;
  });

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
          src="https://files.su.ac.za/public/styles/image_row_4_5/public/stellenbosch-university/images/2026-01/welcome-home-socials-2jpg.jpg?itok=e1IgrEiX"
          alt="Events hero"
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
              Events
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
            Events &amp; Seminars
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "520px",
            }}
          >
            Seminars, workshops, conferences, and department activities — all in
            one place.
          </p>
        </motion.div>
      </section>

      {/* ── Sticky filter bar ── */}
      <div
        style={{
          position: "sticky",
          top: "80px",
          zIndex: 30,
          background: "#ffffff",
          borderBottom: "2px solid #61223b",
          padding: "0.85rem 0",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Tab + search + date row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            {/* Upcoming / Past tabs */}
            <div
              style={{
                display: "flex",
                borderRadius: "9999px",
                border: "1.5px solid #d6cdc4",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {(["upcoming", "past"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: "0.42rem 1.1rem",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    fontFamily: "SU Raleway, sans-serif",
                    cursor: "pointer",
                    border: "none",
                    background: activeTab === tab ? "#61223b" : "#fff",
                    color: activeTab === tab ? "#fff" : "#4a4847",
                    transition: "all 0.15s",
                  }}
                >
                  {tab === "upcoming"
                    ? `Upcoming (${upcoming.length})`
                    : `Past (${past.length})`}
                </button>
              ))}
            </div>

            {/* Search */}
            <div
              style={{
                position: "relative",
                flex: 1,
                minWidth: "200px",
                maxWidth: "340px",
              }}
            >
              <Search
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9e8c7e",
                  width: 17,
                  height: 17,
                }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search events…"
                style={{
                  width: "100%",
                  paddingLeft: "2.3rem",
                  paddingRight: search ? "2.3rem" : "0.75rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  border: "1.5px solid #d6cdc4",
                  borderRadius: "9999px",
                  fontSize: "0.9rem",
                  outline: "none",
                  background: "#faf8f5",
                  color: "#4a4847",
                  fontFamily: "SU Raleway, sans-serif",
                  boxSizing: "border-box",
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: "#9e8c7e",
                  }}
                >
                  <X style={{ width: 15, height: 15 }} />
                </button>
              )}
            </div>

            {/* Date range */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <label
                style={{
                  fontSize: "0.78rem",
                  color: "#9e8c7e",
                  fontWeight: 600,
                }}
              >
                From
              </label>
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                style={{
                  border: "1.5px solid #d6cdc4",
                  borderRadius: "8px",
                  padding: "0.38rem 0.55rem",
                  fontSize: "0.82rem",
                  color: "#4a4847",
                  background: "#faf8f5",
                  fontFamily: "SU Raleway, sans-serif",
                  outline: "none",
                }}
              />
              <label
                style={{
                  fontSize: "0.78rem",
                  color: "#9e8c7e",
                  fontWeight: 600,
                }}
              >
                To
              </label>
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                style={{
                  border: "1.5px solid #d6cdc4",
                  borderRadius: "8px",
                  padding: "0.38rem 0.55rem",
                  fontSize: "0.82rem",
                  color: "#4a4847",
                  background: "#faf8f5",
                  fontFamily: "SU Raleway, sans-serif",
                  outline: "none",
                }}
              />
              {(dateFrom || dateTo) && (
                <button
                  onClick={() => {
                    setDateFrom("");
                    setDateTo("");
                  }}
                  style={{
                    fontSize: "0.78rem",
                    color: "#61223b",
                    fontWeight: 700,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Type pills */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <button
              onClick={() => scrollPills("left")}
              style={{
                flexShrink: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9e8c7e",
                padding: "0.2rem",
              }}
            >
              <ChevronLeft style={{ width: 18, height: 18 }} />
            </button>
            <div
              ref={pillsRef}
              style={{
                display: "flex",
                gap: "0.45rem",
                overflowX: "auto",
                scrollbarWidth: "none",
                flex: 1,
              }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveType(f.key)}
                  style={{
                    flexShrink: 0,
                    padding: "0.4rem 1.1rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    fontFamily: "SU Raleway, sans-serif",
                    cursor: "pointer",
                    border:
                      activeType === f.key
                        ? "2px solid #61223b"
                        : "2px solid #d6cdc4",
                    background: activeType === f.key ? "#61223b" : "#ffffff",
                    color: activeType === f.key ? "#ffffff" : "#4a4847",
                    transition: "all 0.15s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollPills("right")}
              style={{
                flexShrink: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#9e8c7e",
                padding: "0.2rem",
              }}
            >
              <ChevronRight style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div
        style={{
          background: "#faf8f5",
          minHeight: "60vh",
          padding: "3rem 0 5rem",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
        >
          {/* Section heading */}
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
                fontSize: "1.6rem",
                margin: 0,
              }}
            >
              {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"}
            </h2>
            <span
              style={{ color: "#9e8c7e", fontSize: "0.9rem", fontWeight: 600 }}
            >
              {filtered.length} {filtered.length === 1 ? "event" : "events"}
            </span>
            <div style={{ flex: 1, height: "1px", background: "#e8e0d8" }} />
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 0",
                color: "#9e8c7e",
              }}
            >
              <Calendar
                style={{
                  width: 48,
                  height: 48,
                  margin: "0 auto 1rem",
                  opacity: 0.4,
                }}
              />
              <p style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                No events found.
              </p>
              <p style={{ fontSize: "0.92rem", marginTop: "0.4rem" }}>
                Try adjusting your search or filters.
              </p>
            </div>
          )}

          {/* Cards grid */}
          {filtered.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
                gap: "1.75rem",
              }}
            >
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
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
            Want to present at a seminar?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginBottom: "1.8rem",
            }}
          >
            We welcome speakers from industry and academia. Get in touch with
            our department.
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
              href="/research"
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
              Our Research
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
