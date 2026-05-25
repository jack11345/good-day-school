type Color = "maroon" | "gold" | "sage" | "amber" | "danger";

const colors: Record<Color, { bg: string; text: string; sub: string }> = {
  maroon: { bg: "bg-[#4A1313]/8",  text: "text-[#4A1313]", sub: "text-[#7A6A5A]" },
  gold:   { bg: "bg-[#C9A961]/12", text: "text-[#8B6B1A]", sub: "text-[#7A6A5A]" },
  sage:   { bg: "bg-[#3A6B45]/10", text: "text-[#3A6B45]", sub: "text-[#7A6A5A]" },
  amber:  { bg: "bg-[#D4851A]/10", text: "text-[#D4851A]", sub: "text-[#7A6A5A]" },
  danger: { bg: "bg-[#C0392B]/8",  text: "text-[#C0392B]", sub: "text-[#7A6A5A]" },
};

export default function StatCard({
  label,
  value,
  sub,
  color = "maroon",
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: Color;
}) {
  const c = colors[color];
  return (
    <div className={`${c.bg} rounded-2xl p-5`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-[#7A6A5A]">{label}</p>
      <p className={`text-3xl font-bold mt-1 ${c.text}`}>{value}</p>
      {sub && <p className={`text-xs mt-0.5 ${c.sub}`}>{sub}</p>}
    </div>
  );
}
