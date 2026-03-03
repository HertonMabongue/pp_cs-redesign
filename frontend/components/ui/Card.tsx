import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  icon?: React.ReactNode;
  image?: string;
  tag?: string;
  footer?: React.ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  href,
  icon,
  image,
  tag,
  footer,
  className,
}: CardProps) {
  const content = (
    <div
      className={clsx(
        "bg-white rounded-2xl border border-border overflow-hidden card-hover group h-full flex flex-col",
        className
      )}
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-bg-cream">
          <div className="w-full h-full bg-gradient-to-br from-maroon/20 to-gold/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-maroon/10 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gold/40" />
            </div>
          </div>
          {tag && (
            <span className="absolute top-3 left-3 px-3 py-1 bg-maroon text-white text-xs font-semibold rounded-full">
              {tag}
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {icon && !image && (
          <div className="w-12 h-12 rounded-xl bg-maroon/5 flex items-center justify-center text-maroon mb-4 group-hover:bg-maroon/10 transition-colors">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-maroon mb-2 group-hover:text-maroon-light transition-colors">
          {title}
        </h3>
        <p className="text-sm text-body-light leading-relaxed flex-1">
          {description}
        </p>
        {footer && (
          <div className="mt-4 pt-4 border-t border-border">{footer}</div>
        )}
        {href && (
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:text-maroon transition-colors">
            Learn more
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
