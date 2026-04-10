"use client";

import { useAccentColor } from "@/hooks/useAccentColor";
import { useAppBackground } from "@/hooks/useAppBackground";

/**
 * Mounts the background + accent colour hooks on auth pages so the stored
 * palette is applied even though the dashboard Layout is not rendered.
 */
export const AuthPageBackground = () => {
  useAppBackground();
  useAccentColor();
  return null;
};
