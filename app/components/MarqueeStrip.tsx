"use client";

const items = [
  "CASH CONTEST EVERY MODULE",
  "100% GUARANTEED INTERNSHIP",
  "MENTORS FROM COGNIZANT, NI & MORE",
  "BATCHES START OCTOBER",
  "LIVE CLASSES ONLY",
  "PLACEMENT SUPPORT UP TO 1 YEAR",
  "CASH CONTEST EVERY MODULE",
  "100% GUARANTEED INTERNSHIP",
  "MENTORS FROM COGNIZANT, NI & MORE",
  "BATCHES START OCTOBER",
  "LIVE CLASSES ONLY",
  "PLACEMENT SUPPORT UP TO 1 YEAR",
];

export default function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "var(--dark)",
        borderTop: "1px solid var(--dark-border)",
        borderBottom: "1px solid var(--dark-border)",
        padding: "14px 0",
      }}
      aria-label="Key features ticker"
    >
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: 80,
          background: "linear-gradient(to right, var(--dark), transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
        style={{
          width: 80,
          background: "linear-gradient(to left, var(--dark), transparent)",
        }}
      />

      <div className="flex whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6"
            style={{
              fontFamily: "var(--font-mono), monospace",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: i % 3 === 0 ? "var(--accent-yellow)" : "rgba(232,234,245,0.75)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: i % 3 === 0 ? "var(--accent-yellow)" : "rgba(232,234,245,0.4)",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
