"use client";

import { Camera, MessageCircle, ArrowUpRight } from "lucide-react";

const navColumns = [
  {
    heading: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Why Kōdo", href: "#why" },
      { label: "Contests", href: "#contest" },
      { label: "Community", href: "#community" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Mentors", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "hello@kodoschool.in", href: "mailto:hello@kodoschool.in" },
      { label: "WhatsApp Community", href: "https://wa.me/message/kodoschool" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{`
        .footer-link {
          color: rgba(232,234,245,0.6);
          text-decoration: none;
          font-size: 0.88rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #e8eaf5;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--dark-surface);
          border: 1px solid var(--dark-border);
          color: rgba(232,234,245,0.6);
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .footer-social-btn:hover {
          color: #e8eaf5;
          border-color: rgba(232,234,245,0.3);
        }
      `}</style>
      <footer
        style={{
          background: "var(--dark)",
          borderTop: "1px solid var(--dark-border)",
          paddingTop: 64,
          paddingBottom: 40,
        }}
        aria-label="Site footer"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-0.5 mb-4">
                <span className="font-display text-xl" style={{ color: "#e8eaf5" }}>Kō</span>
                <span className="font-display text-xl" style={{ color: "var(--primary)" }}>do</span>
                <span className="font-display text-xl" style={{ color: "#e8eaf5" }}>{" "}School</span>
              </div>

              <p
                style={{
                  color: "rgba(232,234,245,0.55)",
                  fontSize: "0.88rem",
                  lineHeight: 1.7,
                  maxWidth: 220,
                  marginBottom: 20,
                }}
              >
                School of AI. Built for people who want to actually get hired.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/kodoschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @kodoschool"
                  className="footer-social-btn"
                  id="footer-instagram"
                >
                  <Camera size={16} />
                </a>
                <a
                  href="https://wa.me/message/kodoschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Community"
                  className="footer-social-btn"
                  id="footer-whatsapp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

            {/* Nav columns */}
            {navColumns.map((col) => (
              <div key={col.heading}>
                <p
                  className="font-mono uppercase"
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: "rgba(232,234,245,0.35)",
                    marginBottom: 16,
                  }}
                >
                  {col.heading}
                </p>
                <ul className="list-none m-0 p-0 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <button
                          onClick={() => scrollTo(link.href)}
                          className="footer-link bg-transparent border-0 cursor-pointer p-0 text-left"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="footer-link"
                        >
                          {link.label}
                          {link.href.startsWith("http") && (
                            <ArrowUpRight size={12} style={{ opacity: 0.5 }} />
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid var(--dark-border)" }}
          >
            <p className="font-mono" style={{ fontSize: "0.75rem", color: "rgba(232,234,245,0.3)" }}>
              © 2026 Kōdo School. All rights reserved.
            </p>
            <p className="font-mono" style={{ fontSize: "0.75rem", color: "rgba(232,234,245,0.3)" }}>
              Made with ☕ in India · Batches start October 2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
