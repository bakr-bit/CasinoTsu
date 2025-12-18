import { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type SectionTitleProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  mascot?: string; // image URL
  mascotAlt?: string;
  as?: HeadingTag; // heading level, default h2
  align?: "start" | "center"; // default start
  className?: string;
  imageClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  mascot,
  mascotAlt = "Mascot",
  as = "h2",
  align = "start",
  className = "",
  imageClassName = "h-16 w-auto",
  titleClassName = "text-2xl font-extrabold text-gray-800",
  subtitleClassName = "text-brand font-bold text-sm",
}: SectionTitleProps) {
  const Heading = as;
  const isCenter = align === "center";

  return (
    <div className={`flex items-center gap-4 mb-6 ${isCenter ? "justify-center text-center" : ""} ${className}`}>
      {mascot ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={mascot} alt={mascotAlt} className={imageClassName} loading="lazy" decoding="async" />
      ) : null}
      <div>
        {subtitle ? <span className={subtitleClassName}>{subtitle}</span> : null}
        <Heading className={titleClassName}>{title}</Heading>
      </div>
    </div>
  );
}
