import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => {
  return (
    <div
      className={cn(
        "bg-[#0d1b3e]/70 font-hero text-xs tracking-widest uppercase inline-flex items-center justify-center gap-3 px-4 h-8 border border-primary/30 rounded-full backdrop-blur-sm text-foreground/70",
        className
      )}
    >
      {String(children)
        .split("•")
        .map((part, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span className="inline-block size-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(59,130,246,0.8)] shrink-0" />
            <span>{part.trim()}</span>
          </span>
        ))}
    </div>
  );
};
