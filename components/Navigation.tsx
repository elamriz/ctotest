"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { colorPalettes, ThemeName } from "@/lib/config";
import { getPhoneLink, getWhatsAppLink } from "@/lib/utils";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#realisations", label: "Réalisations" },
    { href: "#zones", label: "Zones" },
    { href: "#temoignages", label: "Témoignages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-dark)]/95 backdrop-blur-sm border-b border-[var(--color-bg-light)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg lg:text-xl font-bold text-[var(--color-text)]">
              Électricien Bruxelles
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            {/* Theme Switcher Button */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="p-2 rounded-lg bg-[var(--color-bg-medium)] hover:bg-[var(--color-bg-light)] transition-colors"
                aria-label="Changer de thème"
              >
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[var(--color-bg-medium)] border border-[var(--color-bg-light)] rounded-lg shadow-xl overflow-hidden">
                  {(Object.keys(colorPalettes) as ThemeName[]).map((themeName) => (
                    <button
                      key={themeName}
                      onClick={() => {
                        setTheme(themeName);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-[var(--color-bg-light)] transition-colors ${
                        theme === themeName ? "bg-[var(--color-bg-light)]" : ""
                      }`}
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: colorPalettes[themeName].primary }}
                      />
                      <span className="text-sm text-[var(--color-text)]">
                        {colorPalettes[themeName].name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={getPhoneLink()}
              className="px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-semibold rounded-lg transition-colors"
            >
              Appelez-nous
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text)]"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[var(--color-bg-light)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-[var(--color-bg-light)]">
              <p className="text-xs text-[var(--color-text-muted)] mb-3">Changer de thème:</p>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(colorPalettes) as ThemeName[]).map((themeName) => (
                  <button
                    key={themeName}
                    onClick={() => {
                      setTheme(themeName);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2 text-left flex items-center space-x-2 rounded-lg transition-colors ${
                      theme === themeName
                        ? "bg-[var(--color-bg-light)]"
                        : "bg-[var(--color-bg-medium)] hover:bg-[var(--color-bg-light)]"
                    }`}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: colorPalettes[themeName].primary }}
                    />
                    <span className="text-xs text-[var(--color-text)]">
                      {colorPalettes[themeName].name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <a
                href={getPhoneLink()}
                className="block w-full px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-semibold rounded-lg text-center transition-colors"
              >
                Appelez-nous
              </a>
              <a
                href={getWhatsAppLink("Bonjour, j'aimerais avoir plus d'informations. Merci!")}
                className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
