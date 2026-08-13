"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      className="section"
      style={{ background: "var(--surface)" }}
      aria-label="Final call to action"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-center"
          style={{
            background: "var(--primary)",
          }}
        >
          {/* Subtle internal texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)",
            }}
          />

          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            {/* Eyebrow */}
            <div className="flex justify-center mb-5">
              <span
                className="tag"
                style={{
                  background: "rgba(255,212,0,0.18)",
                  color: "var(--accent-yellow)",
                  border: "1px solid rgba(255,212,0,0.35)",
                  fontSize: "0.78rem",
                }}
              >
                📅 Batches open October 2026
              </span>
            </div>

            {/* Headline */}
            <h2
              className="font-display uppercase text-white"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                lineHeight: 1.04,
                marginBottom: 16,
              }}
            >
              Batches open October.
            </h2>

            {/* Subhead */}
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "1.1rem",
                lineHeight: 1.7,
                maxWidth: 520,
                margin: "0 auto 36px",
              }}
            >
              Doubtful? Just come hang in the community first. Zero pressure,
              zero sales pitch. Get a feel for the vibe before you decide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/message/kodoschool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white"
                id="final-cta-join-whatsapp"
              >
                <MessageCircle size={16} />
                Join WhatsApp Community
                <ArrowRight size={16} />
              </a>
              <a
                href="#courses"
                className="btn"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  padding: "14px 28px",
                  borderRadius: "var(--radius-full)",
                }}
                id="final-cta-explore-courses"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#courses")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse Courses
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
