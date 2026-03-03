import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string; // optional eyebrow pill
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  label,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && "text-center", className)}>
      {label && (
        <span
          className={clsx(
            "section-label mb-4 inline-flex",
            centered && "mx-auto"
          )}
        >
          {label}
        </span>
      )}
      <div className={clsx("accent-bar mb-4", centered && "mx-auto")} />
      <h2
        className={clsx(
          "text-3xl md:text-4xl font-bold mb-3 tracking-tight",
          light ? "text-white" : "text-maroon"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "text-lg max-w-2xl leading-relaxed",
            light ? "text-white/65" : "text-body-light",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
