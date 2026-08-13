"use client";

import { motion } from "framer-motion";
import { Clock, ArrowRight, MessageCircle, Sparkles } from "lucide-react";

const courses = [
  {
    id: "data-analytics",
    duration: "4 months",
    title: "Data Analytics with GenAI",
    tagline:
      "From zero to job-ready analyst. Excel to Python to SQL to Power BI — with GenAI tools woven through every step.",
    tags: ["Excel", "Python", "NumPy", "Pandas", "SQL", "Power BI", "GenAI"],
    color: "#2b4eff",
    bgLight: "#eef1ff",
    icon: "📊",
    includes: ["Mock interviews", "Resume building", "Guaranteed 3-month internship"],
  },
  {
    id: "data-science",
    duration: "6 months",
    title: "Data Science",
    tagline:
      "Statistics, machine learning, deep learning, NLP — the full stack of data science. Built for people who want to actually understand the math.",
    tags: ["Python", "Statistics", "ML", "Deep Learning", "NLP", "Real projects"],
    color: "#18c967",
    bgLight: "#edfbf3",
    icon: "🧬",
    includes: ["Mock interviews", "Resume building", "Guaranteed 3-month internship"],
  },
  {
    id: "genai-agentic",
    duration: "6 months",
    title: "GenAI + Agentic AI",
    tagline:
      "Build actual AI agents. LLMs, prompt engineering, LangChain, LangGraph — from fundamentals to full autonomous workflows.",
    tags: ["Python", "LLMs", "Prompt Eng.", "LangChain", "LangGraph", "Agents"],
    color: "#7c3aed",
    bgLight: "#f3f0ff",
    icon: "🤖",
    includes: ["Mock interviews", "Resume building", "Guaranteed 3-month internship"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CoursesSection() {
  return (
    <section id="courses" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">The tracks</p>
          <h2
            className="font-display uppercase"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "var(--ink)",
              lineHeight: 1.06,
              marginBottom: 14,
            }}
          >
            Three tracks.
            <br />
            <span style={{ color: "var(--primary)" }}>One goal: get hired.</span>
          </h2>
          <p
            style={{
              color: "var(--ink-muted)",
              fontSize: "1rem",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            All three tracks are Data &amp; AI only. Pick your depth. All include
            the same internship, placement support, and contest system.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.article
              key={course.id}
              id={`course-${course.id}`}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.22 } }}
              className="card flex flex-col p-7"
              aria-label={`Course: ${course.title}`}
            >
              {/* Top: icon + duration + batch badge */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="flex items-center justify-center text-2xl"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: course.bgLight,
                  }}
                >
                  {course.icon}
                </div>
                <span
                  className="tag tag-yellow"
                  style={{ fontSize: "0.7rem" }}
                >
                  Batch starts October
                </span>
              </div>

              {/* Duration */}
              <div
                className="flex items-center gap-1.5 mb-3"
                style={{ color: "var(--ink-muted)" }}
              >
                <Clock size={13} />
                <span
                  className="font-mono"
                  style={{ fontSize: "0.78rem", fontWeight: 600 }}
                >
                  {course.duration}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-display uppercase mb-3"
                style={{
                  fontSize: "1.35rem",
                  color: "var(--ink)",
                  lineHeight: 1.15,
                }}
              >
                {course.title}
              </h3>

              {/* Tagline */}
              <p
                style={{
                  color: "var(--ink-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: 16,
                  flexGrow: 1,
                }}
              >
                {course.tagline}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: course.bgLight,
                      color: course.color,
                      fontSize: "0.7rem",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Includes */}
              <div
                className="rounded-xl p-3.5 mb-5"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="font-mono mb-2"
                  style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--ink-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Included with every track
                </p>
                <ul className="list-none m-0 p-0 flex flex-col gap-1">
                  {course.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                      style={{ fontSize: "0.82rem", color: "var(--ink)", fontWeight: 500 }}
                    >
                      <Sparkles size={12} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-mono text-xs" style={{ color: "var(--ink-muted)", marginBottom: 2 }}>
                    Course fee
                  </p>
                  <p
                    className="font-mono font-semibold"
                    style={{ fontSize: "1.1rem", color: "var(--ink)" }}
                  >
                    TBA
                  </p>
                </div>
                <a
                  href="https://wa.me/message/kodoschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  id={`notify-me-${course.id}`}
                >
                  <MessageCircle size={14} />
                  Notify me
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center mt-8"
          style={{ color: "var(--ink-muted)", fontSize: "0.85rem" }}
        >
          Not sure which track? Come join the community — we&apos;ll help you figure it out.
        </p>
      </div>
    </section>
  );
}
