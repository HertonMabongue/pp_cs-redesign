"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, ChevronRight, X } from "lucide-react";
import { newsArticles } from "@/data/news";

const CATEGORIES = [
  { key: "all", label: "All Stories" },
  { key: "awards-milestones", label: "Awards & Milestones" },
  { key: "media-release", label: "Media Release" },
  { key: "institutional-news", label: "Institutional News" },
  { key: "events", label: "Events" },
  { key: "opinion-features", label: "Opinion & Features" },
];

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "awards-milestones": { bg: "#caa258", text: "#1e0812" },
  "media-release": { bg: "#61223b", text: "#ffffff" },
  "institutional-news": { bg: "#3b5e61", text: "#ffffff" },
  events: { bg: "#4a3b61", text: "#ffffff" },
  "opinion-features": { bg: "#4a4847", text: "#ffffff" },
  news: { bg: "#61223b", text: "#ffffff" },
  announcement: { bg: "#3b5e61", text: "#ffffff" },
  achievement: { bg: "#caa258", text: "#1e0812" },
  press: { bg: "#4a4847", text: "#ffffff" },
};

function categoryLabel(cat: string) {
  return CATEGORIES.find((c) => c.key === cat)?.label ?? cat;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const pillsRef = useRef<HTMLDivElement>(null);

  const filtered = newsArticles.filter((a) => {
    const matchCat = activeCategory === "all" || a.category === activeCategory;
    const matchSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchFrom = !dateFrom || a.date >= dateFrom;
    const matchTo = !dateTo || a.date <= dateTo;
    return matchCat && matchSearch && matchFrom && matchTo;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

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
        <Image
          src="/assets/doctorate_hero.jpeg"
          alt="News hero"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(30,8,18,0.92) 0%, rgba(97,34,59,0.5) 50%, rgba(0,0,0,0.15) 100%)",
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
              News
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
            News &amp; Announcements
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              maxWidth: "520px",
            }}
          >
            Stay updated with the latest from the Department of Computer
            Science.
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
          {/* Search + date row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "0.75rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                position: "relative",
                flex: "1",
                minWidth: "220px",
                maxWidth: "380px",
              }}
            >
              <Search
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9e8c7e",
                  width: 18,
                  height: 18,
                }}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search stories…"
                style={{
                  width: "100%",
                  paddingLeft: "2.4rem",
                  paddingRight: search ? "2.4rem" : "0.75rem",
                  paddingTop: "0.55rem",
                  paddingBottom: "0.55rem",
                  border: "1.5px solid #d6cdc4",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
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
                    color: "#9e8c7e",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <X style={{ width: 16, height: 16 }} />
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
                  fontSize: "0.8rem",
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
                  padding: "0.4rem 0.6rem",
                  fontSize: "0.85rem",
                  color: "#4a4847",
                  background: "#faf8f5",
                  fontFamily: "SU Raleway, sans-serif",
                  outline: "none",
                }}
              />
              <label
                style={{
                  fontSize: "0.8rem",
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
                  padding: "0.4rem 0.6rem",
                  fontSize: "0.85rem",
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
                  Clear dates
                </button>
              )}
            </div>
          </div>

          {/* Category pills */}
          <div
            ref={pillsRef}
            style={{
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              scrollbarWidth: "none",
              paddingBottom: "2px",
            }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                style={{
                  flexShrink: 0,
                  padding: "0.45rem 1.2rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  fontFamily: "SU Raleway, sans-serif",
                  cursor: "pointer",
                  border:
                    activeCategory === cat.key
                      ? "2px solid #61223b"
                      : "2px solid #d6cdc4",
                  background:
                    activeCategory === cat.key ? "#61223b" : "#ffffff",
                  color: activeCategory === cat.key ? "#ffffff" : "#4a4847",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </button>
            ))}
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
          {filtered.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "5rem 0",
                color: "#9e8c7e",
              }}
            >
              <p style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                No stories found.
              </p>
              <p style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
                Try adjusting your search or filters.
              </p>
            </div>
          )}

          {/* Featured card */}
          {featured && (
            <Link
              href={`/news/${featured.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className="group"
                style={{
                  background: "#ffffff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(97,34,59,0.07)",
                  marginBottom: "2.5rem",
                  cursor: "pointer",
                }}
              >
                <div className="featured-card-grid">
                  {/* Image area */}
                  <div
                    className="featured-card-image"
                    style={{
                      position: "relative",
                      minHeight: "260px",
                      background:
                        "linear-gradient(135deg, #61223b 0%, #3a1524 100%)",
                      overflow: "hidden",
                    }}
                  >
                    {featured.image && featured.image.startsWith("http") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={featured.image}
                        alt={featured.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          display: "block",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 90,
                            height: 90,
                            borderRadius: "50%",
                            background: "rgba(202,162,88,0.25)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              width: 45,
                              height: 45,
                              borderRadius: "50%",
                              background: "rgba(202,162,88,0.4)",
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.1rem",
                        left: "1.1rem",
                        background: "#caa258",
                        color: "#1e0812",
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        padding: "0.35rem 1rem",
                        borderRadius: "9999px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Featured
                    </div>
                  </div>
                  {/* Text */}
                  <div
                    style={{
                      padding: "2rem 2rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        marginBottom: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          padding: "0.38rem 1.1rem",
                          borderRadius: "9999px",
                          fontSize: "0.82rem",
                          fontWeight: 800,
                          background:
                            CATEGORY_COLOURS[featured.category]?.bg ??
                            "#61223b",
                          color:
                            CATEGORY_COLOURS[featured.category]?.text ?? "#fff",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {categoryLabel(featured.category)}
                      </span>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.88rem",
                          color: "#9e8c7e",
                        }}
                      >
                        <Calendar style={{ width: 15, height: 15 }} />
                        {formatDate(featured.date)}
                      </span>
                    </div>
                    <h2
                      style={{
                        color: "#61223b",
                        fontWeight: 900,
                        fontSize: "clamp(1.15rem, 2.5vw, 1.7rem)",
                        lineHeight: 1.25,
                        marginBottom: "0.9rem",
                      }}
                    >
                      {featured.title}
                    </h2>
                    <p
                      style={{
                        color: "#4a4847",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        marginBottom: "1.4rem",
                      }}
                    >
                      {featured.excerpt}
                    </p>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        color: "#caa258",
                        fontWeight: 800,
                        fontSize: "0.92rem",
                      }}
                    >
                      Read story{" "}
                      <ChevronRight style={{ width: 16, height: 16 }} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {rest.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="group"
                    style={{
                      background: "#ffffff",
                      borderRadius: "14px",
                      overflow: "hidden",
                      boxShadow: "0 2px 10px rgba(97,34,59,0.06)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                    }}
                  >
                    {/* Card image area */}
                    <div
                      style={{
                        height: "160px",
                        background:
                          "linear-gradient(135deg, #61223b 0%, #3a1524 100%)",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: 52,
                            height: 52,
                            borderRadius: "50%",
                            background: "rgba(202,162,88,0.25)",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background:
                            CATEGORY_COLOURS[article.category]?.bg ?? "#caa258",
                        }}
                      />
                    </div>

                    {/* Body */}
                    <div
                      style={{
                        padding: "1.4rem 1.4rem 1.6rem",
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          marginBottom: "0.85rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            padding: "0.32rem 0.95rem",
                            borderRadius: "9999px",
                            fontSize: "0.8rem",
                            fontWeight: 800,
                            background:
                              CATEGORY_COLOURS[article.category]?.bg ??
                              "#61223b",
                            color:
                              CATEGORY_COLOURS[article.category]?.text ??
                              "#fff",
                          }}
                        >
                          {categoryLabel(article.category)}
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontSize: "0.82rem",
                            color: "#9e8c7e",
                          }}
                        >
                          <Calendar style={{ width: 13, height: 13 }} />
                          {formatDate(article.date)}
                        </span>
                      </div>

                      <h3
                        style={{
                          color: "#61223b",
                          fontWeight: 800,
                          fontSize: "1.08rem",
                          lineHeight: 1.3,
                          marginBottom: "0.65rem",
                        }}
                      >
                        {article.title}
                      </h3>
                      <p
                        style={{
                          color: "#4a4847",
                          fontSize: "0.92rem",
                          lineHeight: 1.65,
                          flex: 1,
                        }}
                      >
                        {article.excerpt}
                      </p>

                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          color: "#caa258",
                          fontWeight: 800,
                          fontSize: "0.88rem",
                          marginTop: "1.1rem",
                        }}
                      >
                        Read more{" "}
                        <ChevronRight style={{ width: 14, height: 14 }} />
                      </span>
                    </div>
                  </div>
                </Link>
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
            Want to stay in the loop?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1rem",
              marginBottom: "1.8rem",
            }}
          >
            Follow our latest research, events, and achievements.
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
              href="/research"
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
              Our Research
            </Link>
            <Link
              href="/contact"
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
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
