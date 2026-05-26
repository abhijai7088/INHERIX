import { Badge } from "./Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, text, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Badge tone="violet">{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-normal text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-graphite">{text}</p> : null}
    </div>
  );
}
