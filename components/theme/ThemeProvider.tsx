"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-theme";

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
    >
      {children}
    </NextThemesProvider>
  );
}