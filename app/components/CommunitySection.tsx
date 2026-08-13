import { MessageCircle } from "lucide-react";

const sampleCards = [
  {
    id: "sample-1",
    initials: "A",
    color: "#2b4eff",
    name: "Sample Student",
    role: "Data Analyst, [Company TBD]",
    quote:
      '"The contest format made me actually study hard. And winning cash? That was just the cherry on top."',
    track: "Data Analytics with GenAI",
  },
  {
    id: "sample-2",
    initials: "R",
    color: "#18c967",
    name: "Sample Student",
    role: "ML Engineer, [Company TBD]",
    quote:
      '"I had zero ML background. Six months later I was shipping models at my internship. The mentors made the difference."',
    track: "Data Science",
  },
  {
    id: "sample-3",
    initials: "S",
    color: "#7c3aed",
    name: "Sample Student",
    role: "AI Developer, [Company TBD]",
    quote:
      '"LangGraph clicked in week 3. By week 12 I had a working AI agent running in production."',
    track: "GenAI + Agentic AI",
  },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="section"
      style={{ background: "#ffffff" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="section-eyebrow mb-3">Student wins</p>
          <h2
            className="font-display uppercase"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              color: "var(--ink)",
              lineHeight: 1.08,
              marginBottom: 12,
            }}
          >
            Real students.
            <br />
            <span style={{ color: "var(--primary)" }}>Real wins.</span>
          </h2>
          <p
            style={{
              color: "var(--ink-muted)",
              fontSize: "0.95rem",
              maxWidth: 440,
              margin: "0 auto 6px",
              lineHeight: 1.7,
            }}
          >
            Batch #1 kicks off October 2026. These cards will be real stories
            soon — for now, here&apos;s what they&apos;ll look like.
          </p>
        </div>

        {/* Sample label banner */}
        <div className="flex justify-center mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "var(--accent-yellow-bg)",
              border: "1px solid var(--accent-yellow)",
            }}
          >
            <span style={{ fontSize: "0.85rem" }}>⚠️</span>
            <span
              className="font-mono font-semibold"
              style={{ fontSize: "0.75rem", color: "#856800" }}
            >
              Sample cards — real stories added after Batch #1
            </span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {sampleCards.map((card) => (
            <div
              key={card.id}
              id={`testimonial-${card.id}`}
              className="card p-6 flex flex-col"
              style={{ opacity: 0.75 }}
            >
              {/* Sample badge */}
              <div className="flex justify-end mb-4">
                <span
                  className="tag"
                  style={{
                    background: "var(--accent-yellow-bg)",
                    color: "#856800",
                    border: "1px solid rgba(255,212,0,0.4)",
                    fontSize: "0.65rem",
                  }}
                >
                  Sample — not a real review
                </span>
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontSize: "0.92rem",
                  color: "var(--ink-muted)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 20,
                  flexGrow: 1,
                }}
              >
                {card.quote}
              </blockquote>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center font-display text-white text-base"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: card.color,
                    flexShrink: 0,
                  }}
                >
                  {card.initials}
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontSize: "0.88rem", color: "var(--ink)", marginBottom: 1 }}
                  >
                    {card.name}
                  </p>
                  <p style={{ fontSize: "0.78rem", color: "var(--ink-muted)" }}>
                    {card.role}
                  </p>
                </div>
                <span
                  className="tag ml-auto"
                  style={{
                    background: "var(--surface)",
                    color: "var(--ink-muted)",
                    fontSize: "0.65rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  {card.track}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p
            className="font-display uppercase"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              color: "var(--ink)",
              marginBottom: 8,
            }}
          >
            Be the first cohort.
          </p>
          <p
            style={{
              color: "var(--ink-muted)",
              marginBottom: 24,
              fontSize: "1rem",
            }}
          >
            Shape Kōdo&apos;s story. Your story will be up here after Batch #1.
          </p>
          <a
            href="https://wa.me/message/kodoschool"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            id="community-join-whatsapp"
          >
            <MessageCircle size={16} />
            Join the WhatsApp Community
          </a>
        </div>
      </div>
    </section>
  );
}
