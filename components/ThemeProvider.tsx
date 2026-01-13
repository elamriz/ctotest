"use client";

import { createContext, useContext, useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "dark" | "light" | "cyberpunk" | "neon" | "matrix";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "cyberpunk",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("light", "dark", "cyberpunk", "neon", "matrix");
    
    if (theme === "cyberpunk") {
      root.classList.add("cyberpunk");
      root.style.setProperty("--color-primary", "#00ffff");
      root.style.setProperty("--color-secondary", "#ff00ff");
      root.style.setProperty("--color-accent", "#ffff00");
      root.style.setProperty("--color-bg-dark", "#000000");
      root.style.setProperty("--color-bg-medium", "#0a0a0a");
      root.style.setProperty("--color-bg-light", "#1a1a1a");
      root.style.setProperty("--color-text", "#ffffff");
      root.style.setProperty("--color-text-muted", "#888888");
    } else if (theme === "neon") {
      root.classList.add("neon");
      root.style.setProperty("--color-primary", "#39ff14");
      root.style.setProperty("--color-secondary", "#00bfff");
      root.style.setProperty("--color-accent", "#ff1493");
      root.style.setProperty("--color-bg-dark", "#000000");
      root.style.setProperty("--color-bg-medium", "#0d1117");
      root.style.setProperty("--color-bg-light", "#161b22");
      root.style.setProperty("--color-text", "#f0f6fc");
      root.style.setProperty("--color-text-muted", "#8b949e");
    } else if (theme === "matrix") {
      root.classList.add("matrix");
      root.style.setProperty("--color-primary", "#00ff41");
      root.style.setProperty("--color-secondary", "#00ff88");
      root.style.setProperty("--color-accent", "#88ff00");
      root.style.setProperty("--color-bg-dark", "#000000");
      root.style.setProperty("--color-bg-medium", "#001100");
      root.style.setProperty("--color-bg-light", "#003300");
      root.style.setProperty("--color-text", "#00ff41");
      root.style.setProperty("--color-text-muted", "#008800");
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};