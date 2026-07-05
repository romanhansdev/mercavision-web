export function SectionHeading({
  eyebrow,
  title,
  children,
  inverted = false
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${inverted ? "text-accent" : "text-brand"}`}>{eyebrow}</p> : null}
      <h2 className={`text-3xl font-semibold tracking-normal md:text-5xl ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      {children ? <p className={`mt-5 text-base leading-7 md:text-lg ${inverted ? "text-white/72" : "text-steel"}`}>{children}</p> : null}
    </div>
  );
}
