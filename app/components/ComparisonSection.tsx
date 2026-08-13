import { X, Check } from "lucide-react";

const rows = [
  {
    others: "Pre-recorded videos, watch alone at 2am",
    kodo: "Live classes with real-time trainer interaction",
  },
  {
    others: "Exam pressure and attendance percentages",
    kodo: "Cash contests you actually want to participate in",
  },
  {
    others: '"Placement assistance" (read: a job board link)',
    kodo: "Guaranteed 3-month internship. Actual guarantee.",
  },
  {
    others: "Zero industry connection",
    kodo: "Guest mentors from Cognizant, NI, Numerator & more",
  },
  {
    others: "Certificate with no real-world project experience",
    kodo: "Live projects, module contests, real portfolio work",
  },
  {
    others: "Support ends when the course ends",
    kodo: "Placement support for up to 1 year post-completion",
  },
];

export default function ComparisonSection() {
  return (
    <section className="section" style={{ background: "#ffffff" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow mb-3">The honest comparison</p>
          <h2
            className="font-display uppercase"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              color: "var(--ink)",
              lineHeight: 1.08,
            }}
          >
            Traditional institute
            <br />
            <span style={{ color: "var(--ink-muted)", fontFamily: "var(--font-display)" }}>
              vs.{" "}
            </span>
            <span style={{ color: "var(--primary)" }}>Kōdo School</span>
          </h2>
        </div>

        {/* Table */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-2">
            <div
              className="py-4 px-6 text-center font-semibold text-sm"
              style={{
                background: "var(--surface)",
                borderBottom: "1px solid var(--border)",
                borderRight: "1px solid var(--border)",
                color: "var(--ink-muted)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <X size={16} style={{ color: "#e03030" }} />
                Traditional Institute
              </span>
            </div>
            <div
              className="py-4 px-6 text-center font-semibold text-sm"
              style={{
                background: "var(--primary-light)",
                borderBottom: "1px solid var(--border)",
                color: "var(--primary)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <Check size={16} style={{ color: "var(--primary)" }} />
                Kōdo School
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2"
              style={{
                borderBottom:
                  i < rows.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Others column */}
              <div
                className="py-4 px-6 flex items-start gap-3"
                style={{
                  background: i % 2 === 0 ? "#ffffff" : "var(--surface)",
                  borderRight: "1px solid var(--border)",
                }}
              >
                <X
                  size={16}
                  style={{
                    color: "#e03030",
                    flexShrink: 0,
                    marginTop: 2,
                    opacity: 0.7,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {row.others}
                </span>
              </div>

              {/* Kōdo column */}
              <div
                className="py-4 px-6 flex items-start gap-3"
                style={{
                  background: i % 2 === 0 ? "var(--primary-light)" : "#eceffe",
                }}
              >
                <Check
                  size={16}
                  style={{
                    color: "var(--primary)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink)",
                    fontWeight: 500,
                    lineHeight: 1.6,
                  }}
                >
                  {row.kodo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
