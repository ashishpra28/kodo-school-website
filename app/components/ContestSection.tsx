"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, TrendingUp, Star } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "Priya Sharma", score: 98, prize: "₹2,000", medal: "🥇" },
  { rank: 2, name: "Rohan Mehta", score: 91, prize: "₹1,500", medal: "🥈" },
  { rank: 3, name: "Aditya Rao", score: 87, prize: "₹1,000", medal: "🥉" },
  { rank: 4, name: "Sneha Patel", score: 79, prize: "—", medal: null },
  { rank: 5, name: "Arjun Nair", score: 74, prize: "—", medal: null },
];

const moduleSteps = [
  "Python Fundamentals",
  "Pandas & NumPy",
  "SQL Mastery",
  "Power BI",
  "GenAI Tools",
];

function AnimatedBar({ height, delay }: { height: number; delay: number }) {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        transformOrigin: "bottom",
        width: "100%",
        height,
        borderRadius: "6px 6px 3px 3px",
      }}
    />
  );
}

export default function ContestSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="contest"
      className="dark-section section relative overflow-hidden"
      aria-label="Contest system"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(43,78,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,212,0,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="container relative" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <p
                className="font-mono uppercase tracking-widest mb-4"
                style={{ fontSize: "0.78rem", color: "var(--accent-yellow)", fontWeight: 600 }}
              >
                The Kōdo Difference
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="font-display uppercase"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "#ffffff",
                lineHeight: 1.06,
                marginBottom: 20,
              }}
            >
              Every module is
              <br />a contest.{" "}
              <span style={{ color: "var(--accent-yellow)" }}>Every contest</span>
              <br />
              pays real cash.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              style={{
                color: "rgba(232,234,245,0.75)",
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: 28,
                maxWidth: 440,
              }}
            >
              Top 3 performers in each module win real money. This isn&apos;t a
              gimmick or a gamification badge — it&apos;s an actual cash transfer.
              Perform well across every module and you could earn back your entire
              course fee.
            </motion.p>

            {/* Module steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mb-8"
            >
              <p
                className="font-mono mb-3"
                style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(232,234,245,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                Example: Data Analytics Track
              </p>
              <div className="flex flex-wrap gap-2">
                {moduleSteps.map((step, i) => (
                  <motion.span
                    key={step}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-1.5"
                    style={{
                      background: "var(--dark-surface)",
                      border: "1px solid var(--dark-border)",
                      borderRadius: "var(--radius-full)",
                      padding: "5px 12px",
                      fontSize: "0.78rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      color: "rgba(232,234,245,0.85)",
                    }}
                  >
                    <Star size={11} style={{ color: "var(--accent-yellow)" }} />
                    {step}
                    <span
                      style={{
                        marginLeft: 4,
                        fontSize: "0.68rem",
                        color: "var(--accent-green)",
                        fontWeight: 700,
                      }}
                    >
                      +Prize
                    </span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="flex items-start gap-3 rounded-xl p-4"
              style={{
                background: "rgba(255,212,0,0.08)",
                border: "1px solid rgba(255,212,0,0.2)",
              }}
            >
              <Trophy size={18} style={{ color: "var(--accent-yellow)", flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontSize: "0.88rem", color: "rgba(232,234,245,0.85)", lineHeight: 1.65 }}>
                <strong style={{ color: "var(--accent-yellow)" }}>Win back your course fee.</strong>{" "}
                A student who places top-3 in every module can earn back the full
                cost of the course. That&apos;s accountability — for you and for us.
              </p>
            </motion.div>
          </div>

          {/* Right: animated leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Illustrative label */}
            <div className="flex justify-center mb-4">
              <span
                className="tag"
                style={{
                  background: "rgba(255,212,0,0.1)",
                  color: "rgba(232,234,245,0.6)",
                  border: "1px solid rgba(255,212,0,0.2)",
                  fontSize: "0.7rem",
                }}
              >
                Illustrative example — actual prizes TBD
              </span>
            </div>

            <div
              className="rounded-2xl p-6"
              style={{
                background: "var(--dark-surface)",
                border: "1px solid var(--dark-border)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p
                    className="font-mono uppercase"
                    style={{ fontSize: "0.7rem", fontWeight: 600, color: "rgba(232,234,245,0.5)", letterSpacing: "0.1em", marginBottom: 4 }}
                  >
                    Python Module
                  </p>
                  <p
                    className="font-semibold"
                    style={{ color: "#e8eaf5", fontSize: "1rem" }}
                  >
                    Module Contest — Batch #1
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={13} style={{ color: "var(--accent-green)" }} />
                  <span className="font-mono" style={{ fontSize: "0.72rem", color: "var(--accent-green)", fontWeight: 600 }}>
                    24 competed
                  </span>
                </div>
              </div>

              {/* Podium bars */}
              {isInView && (
                <div className="flex items-end justify-center gap-4 mb-6" style={{ height: 120 }}>
                  {[
                    { color: "#5875ff", barH: 80, name: "Rohan M.", prize: "₹1,500", delay: 0.5 },
                    { color: "#ffd400", barH: 120, name: "Priya S.", prize: "₹2,000", delay: 0.4 },
                    { color: "#f0a060", barH: 64, name: "Aditya R.", prize: "₹1,000", delay: 0.6 },
                  ].map((bar, i) => (
                    <div key={i} className="flex flex-col items-center gap-1" style={{ flex: 1 }}>
                      <span className="font-mono" style={{ fontSize: "0.72rem", fontWeight: 700, color: bar.color }}>{bar.prize}</span>
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: bar.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          transformOrigin: "bottom",
                          width: "100%",
                          height: bar.barH,
                          background: bar.color,
                          borderRadius: "8px 8px 4px 4px",
                          opacity: 0.9,
                        }}
                      />
                      <span style={{ fontSize: "0.65rem", color: "rgba(232,234,245,0.55)", fontWeight: 500 }}>{bar.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Leaderboard rows */}
              <div className="flex flex-col gap-1">
                {leaderboard.map((entry, i) => (
                  <motion.div
                    key={entry.rank}
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.65 + i * 0.08 }}
                    className="flex items-center justify-between rounded-xl px-4 py-2.5"
                    style={{
                      background:
                        i < 3
                          ? "rgba(43,78,255,0.12)"
                          : "transparent",
                      border: i < 3 ? "1px solid rgba(43,78,255,0.2)" : "1px solid transparent",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span style={{ fontSize: "1rem", width: 20, textAlign: "center" }}>
                        {entry.medal ?? <span className="font-mono" style={{ fontSize: "0.75rem", color: "rgba(232,234,245,0.4)" }}>#{entry.rank}</span>}
                      </span>
                      <span style={{ fontSize: "0.88rem", color: i < 3 ? "#e8eaf5" : "rgba(232,234,245,0.55)", fontWeight: i < 3 ? 600 : 400 }}>
                        {entry.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono" style={{ fontSize: "0.78rem", color: "rgba(232,234,245,0.4)" }}>
                        {entry.score}/100
                      </span>
                      <span
                        className="font-mono font-semibold"
                        style={{
                          fontSize: "0.82rem",
                          color: i < 3 ? "var(--accent-green)" : "rgba(232,234,245,0.3)",
                          minWidth: 56,
                          textAlign: "right",
                        }}
                      >
                        {entry.prize}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total prizes */}
              <div
                className="flex items-center justify-between mt-4 pt-4"
                style={{ borderTop: "1px solid var(--dark-border)" }}
              >
                <span className="font-mono" style={{ fontSize: "0.78rem", color: "rgba(232,234,245,0.5)" }}>
                  Total prizes this module
                </span>
                <span
                  className="font-mono font-semibold"
                  style={{ fontSize: "1rem", color: "var(--accent-yellow)" }}
                >
                  ₹4,500
                </span>
              </div>
            </div>

            {/* Floating sparkle decorations */}
            <div
              className="absolute -top-4 -right-4 animate-sparkle"
              style={{ fontSize: "1.4rem", color: "var(--accent-yellow)" }}
            >
              ✦
            </div>
            <div
              className="absolute -bottom-4 -left-4 animate-float-up"
              style={{ fontSize: "1.2rem", animationDelay: "1s" }}
            >
              💰
            </div>
            <div
              className="absolute top-1/2 -right-6 animate-bob"
              style={{ fontSize: "1rem", animationDelay: "0.5s" }}
            >
              🏆
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
