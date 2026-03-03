import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/data/news";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

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

const CATEGORY_LABELS: Record<string, string> = {
  "awards-milestones": "Awards & Milestones",
  "media-release": "Media Release",
  "institutional-news": "Institutional News",
  events: "Events",
  "opinion-features": "Opinion & Features",
  news: "News",
  announcement: "Announcement",
  achievement: "Achievement",
  press: "Press",
};

export async function generateStaticParams() {
  return newsArticles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = newsArticles.find((a) => a.id === id);
  return { title: article?.title || "News Article" };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params;
  const article = newsArticles.find((a) => a.id === id);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString("en-ZA", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const catColour = CATEGORY_COLOURS[article.category] ?? {
    bg: "#61223b",
    text: "#ffffff",
  };
  const catLabel = CATEGORY_LABELS[article.category] ?? article.category;

  return (
    <main
      className="pt-20 lg:pt-36"
      style={{
        fontFamily: "SU Raleway, sans-serif",
        background: "#faf8f5",
        minHeight: "100vh",
      }}
    >
      {/* ── Hero banner ── */}
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
          alt="News article hero"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(30,8,18,0.95) 0%, rgba(97,34,59,0.55) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: 0,
            right: 0,
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.82rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
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
            <Link
              href="/news"
              style={{
                color: "#caa258",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              News
            </Link>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>/</span>
            <span style={{ color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
              Article
            </span>
          </p>
          {/* Category pill — big */}
          <span
            style={{
              display: "inline-block",
              padding: "0.45rem 1.4rem",
              borderRadius: "9999px",
              fontSize: "0.9rem",
              fontWeight: 800,
              background: catColour.bg,
              color: catColour.text,
              marginBottom: "1rem",
              letterSpacing: "0.04em",
            }}
          >
            {catLabel}
          </span>
          <h1
            style={{
              color: "#ffffff",
              fontWeight: 900,
              fontSize: "clamp(1.5rem, 4vw, 2.6rem)",
              lineHeight: 1.15,
              marginBottom: "1.1rem",
            }}
          >
            {article.title}
          </h1>
          {/* Date + author row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.85)",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              <Calendar style={{ width: 18, height: 18, color: "#caa258" }} />
              {formattedDate}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "rgba(255,255,255,0.75)",
                fontSize: "1rem",
              }}
            >
              <User style={{ width: 17, height: 17, color: "#caa258" }} />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "3rem 1.5rem 5rem",
        }}
      >
        <Link
          href="/news"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            color: "#61223b",
            fontWeight: 700,
            fontSize: "0.95rem",
            textDecoration: "none",
            marginBottom: "2.5rem",
          }}
        >
          <ArrowLeft style={{ width: 17, height: 17 }} /> Back to News
        </Link>

        {/* Article image */}
        <div
          style={{
            width: "100%",
            height: "320px",
            background: "linear-gradient(135deg, #61223b 0%, #3a1524 100%)",
            borderRadius: "16px",
            marginBottom: "2.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {article.image && article.image.startsWith("http") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={article.image}
              alt={article.title}
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
                  background: "rgba(202,162,88,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "rgba(202,162,88,0.35)",
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Content card */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "2.5rem",
            boxShadow: "0 2px 16px rgba(97,34,59,0.07)",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              color: "#4a4847",
              fontSize: "1.12rem",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            {article.content}
          </p>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          <Tag style={{ width: 17, height: 17, color: "#9e8c7e" }} />
          {article.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "0.38rem 1.1rem",
                background: "rgba(97,34,59,0.07)",
                color: "#61223b",
                fontSize: "0.88rem",
                fontWeight: 700,
                borderRadius: "9999px",
                border: "1.5px solid rgba(97,34,59,0.12)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Back link bottom */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #e8e0d8",
          }}
        >
          <Link
            href="/news"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "#61223b",
              color: "#ffffff",
              fontWeight: 800,
              padding: "0.75rem 1.8rem",
              borderRadius: "9999px",
              fontSize: "0.95rem",
              textDecoration: "none",
            }}
          >
            <ArrowLeft style={{ width: 16, height: 16 }} /> All News
          </Link>
        </div>
      </div>
    </main>
  );
}
