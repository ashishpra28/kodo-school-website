"use client";

import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "Why Kōdo", href: "#why" },
  { label: "Contests", href: "#contest" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div className="container">
          <nav
            className="flex items-center justify-between"
            style={{ height: 68 }}
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-1 no-underline"
              aria-label="Kōdo School — Home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span
                className="font-display text-2xl select-none"
                style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}
              >
                Kō
              </span>
              <span
                className="font-display text-2xl select-none"
                style={{ color: "var(--primary)" }}
              >
                do
              </span>
              <span
                className="font-display text-2xl select-none"
                style={{ color: "var(--ink)" }}
              >
                {" "}School
              </span>
            </a>

            {/* Desktop nav */}
            <ul
              className="hidden md:flex items-center gap-1 list-none m-0 p-0"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 border-0 bg-transparent cursor-pointer"
                    style={{ color: "var(--ink-muted)", fontFamily: "var(--font-body)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--ink)";
                      (e.currentTarget as HTMLButtonElement).style.background = "var(--surface)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color = "var(--ink-muted)";
                      (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/message/kodoschool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                id="nav-join-community"
              >
                Join Community
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border-0 bg-transparent cursor-pointer"
              style={{ color: "var(--ink)" }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              id="mobile-menu-toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[68px] z-40 md:hidden"
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(17,18,40,0.08)",
            }}
          >
            <div className="container py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 rounded-xl font-semibold text-base border-0 bg-transparent cursor-pointer transition-colors"
                  style={{ color: "var(--ink)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--surface)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                <a
                  href="https://wa.me/message/kodoschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full justify-center mt-2"
                  id="mobile-join-community"
                  onClick={() => setMobileOpen(false)}
                >
                  Join Community
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
