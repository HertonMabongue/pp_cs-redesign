"use client";

import Link from "next/link";
import { NewsArticle } from "@/types";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  "awards-milestones": "Awards & Milestones",
  "media-release": "Media Release",
  "institutional-news": "Institutional News",
  events: "Events",
  "opinion-features": "Opinion & Features",
  news: "News",
  announcement: "Announcement",
  achievement: "Awards & Milestones",
  press: "Press Release",
};

const CATEGORY_COLOURS: Record<string, { bg: string; text: string }> = {
  "awards-milestones": { bg: "#caa258", text: "#1e0812" },
  "media-release": { bg: "#61223b", text: "#fff" },
  "institutional-news": { bg: "#3b5e61", text: "#fff" },
  events: { bg: "#4a3b61", text: "#fff" },
  "opinion-features": { bg: "#4a4847", text: "#fff" },
  news: { bg: "#61223b", text: "#fff" },
  announcement: { bg: "#3b5e61", text: "#fff" },
  achievement: { bg: "#caa258", text: "#1e0812" },
  press: { bg: "#4a4847", text: "#fff" },
};

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const catColour = CATEGORY_COLOURS[article.category] ?? {
    bg: "#61223b",
    text: "#fff",
  };
  const catLabel = CATEGORY_LABELS[article.category] ?? article.category;
  const hasImage = !!article.image;

  return (
    <article
      className={`group flex bg-white overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl ${
        featured ? "flex-col md:flex-row" : "flex-col"
      }`}
      style={{ borderRadius: "14px", border: "1.5px solid #e8e0d8" }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden shrink-0 ${
          featured ? "md:w-2/5 h-56 md:h-auto" : ""
        }`}
        style={{
          aspectRatio: featured ? undefined : "16 / 9",
          background: "linear-gradient(135deg, #61223b18 0%, #caa25818 100%)",
          minHeight: featured ? undefined : "180px",
        }}
      >
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              background:
                "linear-gradient(135deg, #61223b22 0%, #caa25822 50%, #61223b18 100%)",
            }}
          />
        )}
        {/* Category pill overlay */}
        <span
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            padding: "0.2rem 0.7rem",
            borderRadius: "9999px",
            fontSize: "0.7rem",
            fontWeight: 800,
            background: catColour.bg,
            color: catColour.text,
            letterSpacing: "0.04em",
            zIndex: 1,
          }}
        >
          {catLabel}
        </span>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col flex-1 justify-between gap-3 ${
          featured ? "p-7" : "p-5"
        }`}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          {/* Title */}
          <h3
            className={`font-bold leading-snug group-hover:text-maroon transition-colors duration-200 ${
              featured ? "text-2xl" : "text-base"
            }`}
            style={{ color: "#1e0812" }}
          >
            <Link
              href={`/news/${article.id}`}
              className="hover:underline underline-offset-2"
            >
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p
            className="text-sm leading-relaxed line-clamp-3"
            style={{ color: "#4a4847" }}
          >
            {article.excerpt}
          </p>
        </div>

        {/* Footer row */}
        <div
          className="flex items-center justify-between"
          style={{ paddingTop: "0.5rem", borderTop: "1px solid #f0e8e0" }}
        >
          <span style={{ fontSize: "0.78rem", color: "#9e8c7e" }}>
            {formattedDate}
          </span>
          <Link
            href={`/news/${article.id}`}
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              color: "#caa258",
              textDecoration: "none",
            }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}
