import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = false,
  className,
  external,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-maroon text-white hover:bg-maroon-light shadow-md hover:shadow-lg",
    secondary:
      "bg-science-red text-white hover:bg-science-red/90 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-maroon text-maroon hover:bg-maroon hover:text-white",
    ghost: "text-maroon hover:bg-maroon/5",
    gold: "bg-gold text-white hover:bg-gold-dark shadow-md hover:shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
          {icon && <ArrowRight className="w-4 h-4" />}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
