import React from "react";
import { cn } from "../../lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "glass";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Card({
  className,
  variant = "default",
  padding = "md",
  hover = false,
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-bg-card border border-border",
    elevated: "bg-bg-elevated border border-border",
    glass: "glass border border-white/10",
  };

  const paddings = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-200",
        variants[variant],
        paddings[padding],
        hover && "hover:border-border-hover hover:shadow-lg hover:shadow-accent/5 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
