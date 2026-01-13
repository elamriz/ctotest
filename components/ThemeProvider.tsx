"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { colorPalettes, ThemeName } from "@/lib/config";

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  currentColors: typeof colorPalettes.darkPurple;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("electrician-theme") as ThemeName;
      if (stored && colorPalettes[stored]) {
        return stored;
      }
    }
    return "darkPurple";
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const colors = colorPalettes[theme];
    document.documentElement.style.setProperty("--color-primary", colors.primary);
    document.documentElement.style.setProperty("--color-secondary", colors.secondary);
    document.documentElement.style.setProperty("--color-accent", colors.accent);
    document.documentElement.style.setProperty("--color-bg-dark", colors.bgDark);
    document.documentElement.style.setProperty("--color-bg-medium", colors.bgMedium);
    document.documentElement.style.setProperty("--color-bg-light", colors.bgLight);
    document.documentElement.style.setProperty("--color-text", colors.text);
    document.documentElement.style.setProperty("--color-text-muted", colors.textMuted);
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem("electrician-theme", newTheme);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentColors: colorPalettes[theme],
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
