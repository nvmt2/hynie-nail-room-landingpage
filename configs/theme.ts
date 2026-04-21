export const themes = {
  default: {
    background: "#ffffff",
    foreground: "#171717",
    primary: "#b08d7d",
    onPrimary: "#ffffff",
    primaryContainer: "#f7f0e9",
    secondary: "#8d7d73",
    onSecondary: "#ffffff",
    onSurface: "#1a1a1a",
    onSurfaceVariant: "#6b6b6b",
    outlineVariant: "#e5e5e5",
    surfaceContainer: "#faf9f6",
  },
  koreaPink: {
    background: "#fff9fb",
    foreground: "#2c181f",
    primary: "#d48197",
    onPrimary: "#ffffff",
    primaryContainer: "#f8e1e7",
    secondary: "#9b7681",
    onSecondary: "#ffffff",
    onSurface: "#3d222b",
    onSurfaceVariant: "#8a6672",
    outlineVariant: "#f0d5db",
    surfaceContainer: "#fdf2f5",
  },
  tetHoliday: {
    background: "#fffaf0",
    foreground: "#2d0a0a",
    primary: "#b91c1c", // Rich Red
    onPrimary: "#ffffff",
    primaryContainer: "#fef2f2",
    secondary: "#b45309", // Warm Gold/Amber
    onSecondary: "#ffffff",
    onSurface: "#450a0a",
    onSurfaceVariant: "#991b1b",
    outlineVariant: "#fee2e2",
    surfaceContainer: "#fff4e5",
  },

};

export type ThemeName = keyof typeof themes;

// Change this constant to switch themes
export const currentTheme: ThemeName = "koreaPink";
