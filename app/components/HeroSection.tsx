"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Trophy, TrendingUp } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Priya S.", prize: "₹2,000", color: "#FFD400", barH: 100 },
  { rank: 2, name: "Rohan M.", prize: "₹1,500", color: "#a8b4ff", barH: 80 },
  { rank: 3, name: "Aditya R.", prize: "₹1,000", color: "#f0a060", barH: 65 },
];

const rankMedals = ["🥇", "🥈", "🥉"];

function LeaderboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 1.5 }}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative select-none"
      style={{ maxWidth: 360 }}
    >
      {/* Glow ring */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(43,78,255,0.18) 0%, transparent 70%)",
          transform: "scale(1.08)",
          zIndex: 0,
        }}
      />

      <div
        className="relative rounded-3xl p-6"
        style={{
          background: "#ffffff",
          border: "1px solid var(--border)",
          boxShadow: "0 20px 60px rgba(17,18,40,0.14), 0 2px 8px rgba(17,18,40,0.06)",
          zIndex: 1,
        }}
      >
        {/* Card header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Trophy size={16} style={{ color: "var(--accent-yellow)" }} />
              <span
                className="font-mono text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--ink-muted)" }}
              >
                Python Module
              </span>
            </div>
            <p
              className="font-semibold text-sm"
              style={{ color: "var(--ink)" }}
            >
              Module Contest Results
            </p>
          </div>
          <span
            className="tag tag-yellow"
            style={{ fontSize: "0.7rem" }}
          >
            Illustrative Example
          </span>
        </div>

        {/* Podium bars */}
        <div className="flex items-end justify-center gap-3 mb-5" style={{ height: 100 }}>
          {[leaderboardData[1], leaderboardData[0], leaderboardData[2]].map(
            (item, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={item.rank}
                  className="flex flex-col items-center gap-1"
                  style={{ flex: 1 }}
                >
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ink)" }}>
                    {item.prize}
                  </span>
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      delay: 0.9 + i * 0.12,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      width: "100%",
                      height: isCenter ? item.barH : item.barH,
                      background: item.color,
                      borderRadius: "8px 8px 4px 4px",
                      transformOrigin: "bottom",
                      opacity: 0.9,
                    }}
                  />
                  <span style={{ fontSize: "0.7rem", color: "var(--ink-muted)", fontWeight: 600 }}>
                    {rankMedals[item.rank - 1]} {item.name}
                  </span>
                </motion.div>
              );
            }
          )}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)", margin: "0 -4px 14px" }} />

        {/* Bottom stats */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <TrendingUp size={14} style={{ color: "var(--accent-green)" }} />
            <span className="text-xs font-semibold" style={{ color: "var(--ink-muted)" }}>
              24 students competed
            </span>
          </div>
          <span
            className="font-mono text-xs font-semibold"
            style={{ color: "var(--accent-green)", background: "var(--accent-green-bg)", padding: "3px 8px", borderRadius: "var(--radius-full)" }}
          >
            Total: ₹4,500
          </span>
        </div>

        {/* Floating sparkles */}
        <div className="absolute -top-3 -right-2 animate-sparkle" style={{ fontSize: "1.2rem" }}>✦</div>
        <div className="absolute top-8 -left-3 animate-bob" style={{ fontSize: "0.9rem", color: "var(--accent-yellow)", animationDelay: "0.8s" }}>✦</div>
        <div
          className="absolute -bottom-2 right-8 animate-float-up"
          style={{ fontSize: "1rem", animationDelay: "0.4s" }}
        >
          💰
        </div>
      </div>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 136, paddingBottom: 80 }}
      aria-label="Hero"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className="tag tag-primary"
                style={{ fontSize: "0.8rem" }}
              >
                Data &amp; AI only · Gen-Z + working pros
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display uppercase leading-none mb-5"
              style={{
                fontSize: "clamp(3.2rem, 8vw, 6rem)",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              Padhai bhi.{" "}
              <br />
              <span style={{ color: "var(--primary)" }}>Prize bhi.</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.1rem",
                color: "var(--ink-muted)",
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              No boring lectures, no gyaan overload. Learn{" "}
              <strong style={{ color: "var(--ink)" }}>Data Analytics</strong>,{" "}
              <strong style={{ color: "var(--ink)" }}>Data Science</strong> &amp;{" "}
              <strong style={{ color: "var(--ink)" }}>GenAI</strong> with trainers
              who actually vibe with you — and win real cash after every single
              module.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#courses"
                className="btn btn-primary"
                id="hero-explore-courses"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Courses
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/message/kodoschool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                id="hero-join-whatsapp"
              >
                <MessageCircle size={16} />
                Join WhatsApp Community
              </a>
            </motion.div>

            {/* Social proof mini strip */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 mt-8 flex-wrap"
            >
              {[
                { icon: "🎯", text: "100% Guaranteed Internship" },
                { icon: "🏆", text: "Cash prizes every module" },
                { icon: "📅", text: "Batches start October" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-1.5"
                  style={{ fontSize: "0.82rem", color: "var(--ink-muted)", fontWeight: 500 }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: leaderboard card */}
          <div className="flex justify-center lg:justify-end items-center">
            <LeaderboardCard />
          </div>
        </div>
      </div>
    </section>
  );
}
