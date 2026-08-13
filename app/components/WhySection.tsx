"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Trophy,
  Briefcase,
  Users,
} from "lucide-react";

const cards = [
  {
    id: "zero-boring",
    icon: Zap,
    iconColor: "#2b4eff",
    iconBg: "var(--primary-light)",
    title: "Zero Boring Vibes",
    body: "Live classes with trainers who actually engage. No death-by-PowerPoint, no reading from slides. Direct interaction, real doubt-solving, on-demand support sessions you can book anytime.",
    tag: "Live only · 3 days/week",
    tagStyle: "tag-primary",
  },
  {
    id: "win-while-learn",
    icon: Trophy,
    iconColor: "#b08800",
    iconBg: "var(--accent-yellow-bg)",
    title: "Win While You Learn",
    body: "Every module ends in a real contest with real cash prizes. Top performers win ₹1,000–₹2,000 per module. Do well across all modules and you could literally win back your entire course fee.",
    tag: "Guaranteed cash prizes",
    tagStyle: "tag-yellow",
  },
  {
    id: "guaranteed-internship",
    icon: Briefcase,
    iconColor: "#0e9e52",
    iconBg: "var(--accent-green-bg)",
    title: "Guaranteed Internship",
    body: "Not 'placement assistance.' Not 'we'll try our best.' A guaranteed 3-month internship, included. Placement support available for up to a full year after you complete the course.",
    tag: "3-month guarantee",
    tagStyle: "tag-green",
  },
  {
    id: "real-mentors",
    icon: Users,
    iconColor: "#6d28d9",
    iconBg: "#f3f0ff",
    title: "Real Industry Mentors",
    body: "Guest mentors from Cognizant, National Instruments, Numerator and more — people actually working in Data & AI, not just career coaches. Real-world projects. Real feedback.",
    tag: "Cognizant · NI · Numerator",
    tagStyle: "tag-primary",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhySection() {
  return (
    <section id="why" className="section" style={{ background: "var(--surface)" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-eyebrow mb-3">Why Kōdo</p>
          <h2
            className="font-display uppercase"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              color: "var(--ink)",
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Hits different.
            <br />
            <span style={{ color: "var(--primary)" }}>Here&apos;s why.</span>
          </h2>
          <p
            style={{
              color: "var(--ink-muted)",
              fontSize: "1.05rem",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Every other institute promises &quot;industry-ready.&quot; We built
            the thing that actually makes you industry-ready.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                id={`why-card-${card.id}`}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card p-8 cursor-default"
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: card.iconBg,
                  }}
                >
                  <Icon size={24} style={{ color: card.iconColor }} />
                </div>

                {/* Title */}
                <h3
                  className="font-display uppercase mb-3"
                  style={{
                    fontSize: "1.45rem",
                    color: "var(--ink)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {card.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    color: "var(--ink-muted)",
                    lineHeight: 1.75,
                    fontSize: "0.95rem",
                    marginBottom: 20,
                  }}
                >
                  {card.body}
                </p>

                {/* Tag */}
                <span className={`tag ${card.tagStyle}`}>{card.tag}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
