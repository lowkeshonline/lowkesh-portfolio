import type { ReactNode } from "react";

export default function SectionHeading({
  id,
  number,
  title,
  count,
  description,
}: {
  id?: string;
  number: string;
  title: string;
  count?: ReactNode;
  description?: ReactNode;
}) {
  return (
    <header className="section-head">
      <div className="section-label">
        <span className="section-number" aria-hidden="true">{number}</span>
        <span className="section-slash" aria-hidden="true">·</span>
        <h2 className="section-name" id={id}>{title}</h2>
        <span className="section-line" aria-hidden="true" />
        {count ? <span className="section-count">{count}</span> : null}
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}
