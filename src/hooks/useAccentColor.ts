"use client";

import { useEffect } from "react";

import { AccentColor, useLayoutStore } from "@/store/layoutStore";

// Maps each accent → the CSS custom-property overrides applied to :root
// We override only the "primary action" colour tokens so the rest of the design
// keeps its neutral appearance while buttons, badges, nav active states, etc.
// all change together.
const ACCENT_CSS: Record<
  AccentColor,
  {
    mainColor: string;
    mainColorHover: string;
    containedButtonBg: string;
    containedButtonBgHover: string;
    badgeDefaultBg: string;
    badgeDefaultBgHover: string;
    navItemTextActive: string;
    navItemIconActive: string;
    chartPrimaryBg: string;
    chartPrimaryFill: string;
    chartPrimaryInverted: string;
    logoBg: string;
    calendarMainColor: string;
    notificationBadgeBg: string;
    notificationBadgeBgHover: string;
    progressIndicator: string;
    focusVisibleBorder: string;
    loaderCircleBg: string;
    tabLineActiveBorder: string;
    tabLineActiveText: string;
    navbarButtonBg?: string;
    navbarButtonBgHover?: string;
  }
> = {
  blue: {
    mainColor: "rgb(96, 165, 250)",
    mainColorHover: "rgb(147, 197, 253)",
    containedButtonBg: "rgb(37, 99, 235)",
    containedButtonBgHover: "rgb(29, 78, 216)",
    badgeDefaultBg: "rgb(37, 99, 235)",
    badgeDefaultBgHover: "rgb(29, 78, 216)",
    navItemTextActive: "rgb(59, 130, 246)",
    navItemIconActive: "rgb(96, 165, 250)",
    chartPrimaryBg: "rgb(96, 165, 250)",
    chartPrimaryFill: "rgb(59, 130, 246)",
    chartPrimaryInverted: "rgb(96, 165, 250)",
    logoBg: "rgb(37, 99, 235)",
    calendarMainColor: "rgb(37, 99, 235)",
    notificationBadgeBg: "rgb(59, 130, 246)",
    notificationBadgeBgHover: "rgb(37, 99, 235)",
    progressIndicator: "rgb(59, 130, 246)",
    focusVisibleBorder: "rgb(59, 130, 246)",
    loaderCircleBg: "rgb(37, 99, 235)",
    tabLineActiveBorder: "rgb(37, 99, 235)",
    tabLineActiveText: "rgb(37, 99, 235)",
  },
  violet: {
    mainColor: "rgb(167, 139, 250)",
    mainColorHover: "rgb(196, 181, 253)",
    containedButtonBg: "rgb(124, 58, 237)",
    containedButtonBgHover: "rgb(109, 40, 217)",
    badgeDefaultBg: "rgb(124, 58, 237)",
    badgeDefaultBgHover: "rgb(109, 40, 217)",
    navItemTextActive: "rgb(139, 92, 246)",
    navItemIconActive: "rgb(167, 139, 250)",
    chartPrimaryBg: "rgb(167, 139, 250)",
    chartPrimaryFill: "rgb(139, 92, 246)",
    chartPrimaryInverted: "rgb(167, 139, 250)",
    logoBg: "rgb(124, 58, 237)",
    calendarMainColor: "rgb(124, 58, 237)",
    notificationBadgeBg: "rgb(139, 92, 246)",
    notificationBadgeBgHover: "rgb(124, 58, 237)",
    progressIndicator: "rgb(139, 92, 246)",
    focusVisibleBorder: "rgb(139, 92, 246)",
    loaderCircleBg: "rgb(124, 58, 237)",
    tabLineActiveBorder: "rgb(124, 58, 237)",
    tabLineActiveText: "rgb(124, 58, 237)",
  },
  emerald: {
    mainColor: "rgb(52, 211, 153)",
    mainColorHover: "rgb(110, 231, 183)",
    containedButtonBg: "rgb(16, 185, 129)",
    containedButtonBgHover: "rgb(5, 150, 105)",
    badgeDefaultBg: "rgb(16, 185, 129)",
    badgeDefaultBgHover: "rgb(5, 150, 105)",
    navItemTextActive: "rgb(16, 185, 129)",
    navItemIconActive: "rgb(52, 211, 153)",
    chartPrimaryBg: "rgb(52, 211, 153)",
    chartPrimaryFill: "rgb(16, 185, 129)",
    chartPrimaryInverted: "rgb(52, 211, 153)",
    logoBg: "rgb(5, 150, 105)",
    calendarMainColor: "rgb(5, 150, 105)",
    notificationBadgeBg: "rgb(16, 185, 129)",
    notificationBadgeBgHover: "rgb(5, 150, 105)",
    progressIndicator: "rgb(16, 185, 129)",
    focusVisibleBorder: "rgb(16, 185, 129)",
    loaderCircleBg: "rgb(5, 150, 105)",
    tabLineActiveBorder: "rgb(5, 150, 105)",
    tabLineActiveText: "rgb(5, 150, 105)",
  },
  rose: {
    mainColor: "rgb(251, 113, 133)",
    mainColorHover: "rgb(253, 164, 175)",
    containedButtonBg: "rgb(244, 63, 94)",
    containedButtonBgHover: "rgb(225, 29, 72)",
    badgeDefaultBg: "rgb(244, 63, 94)",
    badgeDefaultBgHover: "rgb(225, 29, 72)",
    navItemTextActive: "rgb(244, 63, 94)",
    navItemIconActive: "rgb(251, 113, 133)",
    chartPrimaryBg: "rgb(251, 113, 133)",
    chartPrimaryFill: "rgb(244, 63, 94)",
    chartPrimaryInverted: "rgb(251, 113, 133)",
    logoBg: "rgb(225, 29, 72)",
    calendarMainColor: "rgb(225, 29, 72)",
    notificationBadgeBg: "rgb(244, 63, 94)",
    notificationBadgeBgHover: "rgb(225, 29, 72)",
    progressIndicator: "rgb(244, 63, 94)",
    focusVisibleBorder: "rgb(244, 63, 94)",
    loaderCircleBg: "rgb(225, 29, 72)",
    tabLineActiveBorder: "rgb(225, 29, 72)",
    tabLineActiveText: "rgb(225, 29, 72)",
  },
  amber: {
    mainColor: "rgb(251, 191, 36)",
    mainColorHover: "rgb(252, 211, 77)",
    containedButtonBg: "rgb(245, 158, 11)",
    containedButtonBgHover: "rgb(217, 119, 6)",
    badgeDefaultBg: "rgb(245, 158, 11)",
    badgeDefaultBgHover: "rgb(217, 119, 6)",
    navItemTextActive: "rgb(245, 158, 11)",
    navItemIconActive: "rgb(251, 191, 36)",
    chartPrimaryBg: "rgb(251, 191, 36)",
    chartPrimaryFill: "rgb(245, 158, 11)",
    chartPrimaryInverted: "rgb(251, 191, 36)",
    logoBg: "rgb(217, 119, 6)",
    calendarMainColor: "rgb(217, 119, 6)",
    notificationBadgeBg: "rgb(245, 158, 11)",
    notificationBadgeBgHover: "rgb(217, 119, 6)",
    progressIndicator: "rgb(245, 158, 11)",
    focusVisibleBorder: "rgb(245, 158, 11)",
    loaderCircleBg: "rgb(217, 119, 6)",
    tabLineActiveBorder: "rgb(217, 119, 6)",
    tabLineActiveText: "rgb(217, 119, 6)",
  },
  cyan: {
    mainColor: "rgb(34, 211, 238)",
    mainColorHover: "rgb(103, 232, 249)",
    containedButtonBg: "rgb(6, 182, 212)",
    containedButtonBgHover: "rgb(8, 145, 178)",
    badgeDefaultBg: "rgb(6, 182, 212)",
    badgeDefaultBgHover: "rgb(8, 145, 178)",
    navItemTextActive: "rgb(6, 182, 212)",
    navItemIconActive: "rgb(34, 211, 238)",
    chartPrimaryBg: "rgb(34, 211, 238)",
    chartPrimaryFill: "rgb(6, 182, 212)",
    chartPrimaryInverted: "rgb(34, 211, 238)",
    logoBg: "rgb(8, 145, 178)",
    calendarMainColor: "rgb(8, 145, 178)",
    notificationBadgeBg: "rgb(6, 182, 212)",
    notificationBadgeBgHover: "rgb(8, 145, 178)",
    progressIndicator: "rgb(6, 182, 212)",
    focusVisibleBorder: "rgb(6, 182, 212)",
    loaderCircleBg: "rgb(8, 145, 178)",
    tabLineActiveBorder: "rgb(8, 145, 178)",
    tabLineActiveText: "rgb(8, 145, 178)",
  },
  orange: {
    mainColor: "rgb(251, 146, 60)",
    mainColorHover: "rgb(253, 186, 116)",
    containedButtonBg: "rgb(249, 115, 22)",
    containedButtonBgHover: "rgb(234, 88, 12)",
    badgeDefaultBg: "rgb(249, 115, 22)",
    badgeDefaultBgHover: "rgb(234, 88, 12)",
    navItemTextActive: "rgb(249, 115, 22)",
    navItemIconActive: "rgb(251, 146, 60)",
    chartPrimaryBg: "rgb(251, 146, 60)",
    chartPrimaryFill: "rgb(249, 115, 22)",
    chartPrimaryInverted: "rgb(251, 146, 60)",
    logoBg: "rgb(234, 88, 12)",
    calendarMainColor: "rgb(234, 88, 12)",
    notificationBadgeBg: "rgb(249, 115, 22)",
    notificationBadgeBgHover: "rgb(234, 88, 12)",
    progressIndicator: "rgb(249, 115, 22)",
    focusVisibleBorder: "rgb(249, 115, 22)",
    loaderCircleBg: "rgb(234, 88, 12)",
    tabLineActiveBorder: "rgb(234, 88, 12)",
    tabLineActiveText: "rgb(234, 88, 12)",
  },
  indigo: {
    mainColor: "rgb(129, 140, 248)",
    mainColorHover: "rgb(165, 180, 252)",
    containedButtonBg: "rgb(99, 102, 241)",
    containedButtonBgHover: "rgb(79, 70, 229)",
    badgeDefaultBg: "rgb(99, 102, 241)",
    badgeDefaultBgHover: "rgb(79, 70, 229)",
    navItemTextActive: "rgb(99, 102, 241)",
    navItemIconActive: "rgb(129, 140, 248)",
    chartPrimaryBg: "rgb(129, 140, 248)",
    chartPrimaryFill: "rgb(99, 102, 241)",
    chartPrimaryInverted: "rgb(129, 140, 248)",
    logoBg: "rgb(79, 70, 229)",
    calendarMainColor: "rgb(79, 70, 229)",
    notificationBadgeBg: "rgb(99, 102, 241)",
    notificationBadgeBgHover: "rgb(79, 70, 229)",
    progressIndicator: "rgb(99, 102, 241)",
    focusVisibleBorder: "rgb(99, 102, 241)",
    loaderCircleBg: "rgb(79, 70, 229)",
    tabLineActiveBorder: "rgb(79, 70, 229)",
    tabLineActiveText: "rgb(79, 70, 229)",
  },
  teal: {
    mainColor: "rgb(45, 212, 191)",
    mainColorHover: "rgb(94, 234, 212)",
    containedButtonBg: "rgb(20, 184, 166)",
    containedButtonBgHover: "rgb(13, 148, 136)",
    badgeDefaultBg: "rgb(20, 184, 166)",
    badgeDefaultBgHover: "rgb(13, 148, 136)",
    navItemTextActive: "rgb(20, 184, 166)",
    navItemIconActive: "rgb(45, 212, 191)",
    chartPrimaryBg: "rgb(45, 212, 191)",
    chartPrimaryFill: "rgb(20, 184, 166)",
    chartPrimaryInverted: "rgb(45, 212, 191)",
    logoBg: "rgb(13, 148, 136)",
    calendarMainColor: "rgb(13, 148, 136)",
    notificationBadgeBg: "rgb(20, 184, 166)",
    notificationBadgeBgHover: "rgb(13, 148, 136)",
    progressIndicator: "rgb(20, 184, 166)",
    focusVisibleBorder: "rgb(20, 184, 166)",
    loaderCircleBg: "rgb(13, 148, 136)",
    tabLineActiveBorder: "rgb(13, 148, 136)",
    tabLineActiveText: "rgb(13, 148, 136)",
  },
};

/**
 * Injects CSS variable overrides into the <html> element based on the
 * selected accent color.  Runs on the client after hydration and every
 * time accentColor changes.
 */
export const useAccentColor = () => {
  const accentColor = useLayoutStore((s) => s.accentColor);

  useEffect(() => {
    const tokens = ACCENT_CSS[accentColor] ?? ACCENT_CSS["blue"];
    const root = document.documentElement;

    const mainColorTransparent = tokens.mainColor
      .replace("rgb(", "rgba(")
      .replace(")", ", 0.12)");

    root.style.setProperty("--color-mainColor", tokens.mainColor);
    root.style.setProperty(
      "--color-progressIndicator",
      tokens.progressIndicator,
    );
    root.style.setProperty(
      "--color-containedButtonBg",
      tokens.containedButtonBg,
    );
    root.style.setProperty(
      "--color-containedButtonBgHover",
      tokens.containedButtonBgHover,
    );
    root.style.setProperty("--color-badgeDefaultBg", tokens.badgeDefaultBg);
    root.style.setProperty(
      "--color-badgeDefaultBgHover",
      tokens.badgeDefaultBgHover,
    );
    root.style.setProperty(
      "--color-navItemTextActive",
      tokens.navItemTextActive,
    );
    root.style.setProperty(
      "--color-navItemIconActive",
      tokens.navItemIconActive,
    );
    root.style.setProperty("--color-chartPrimaryBg", tokens.chartPrimaryBg);
    root.style.setProperty("--color-chartPrimaryFill", tokens.chartPrimaryFill);
    root.style.setProperty(
      "--color-chartPrimaryInverted",
      tokens.chartPrimaryInverted,
    );
    root.style.setProperty("--color-logoBg", tokens.logoBg);
    root.style.setProperty(
      "--color-calendarMainColor",
      tokens.calendarMainColor,
    );
    root.style.setProperty(
      "--color-notificationBadgeBg",
      tokens.notificationBadgeBg,
    );
    root.style.setProperty(
      "--color-notificationBadgeBgHover",
      tokens.notificationBadgeBgHover,
    );
    root.style.setProperty(
      "--color-focusVisibleBorder",
      tokens.focusVisibleBorder,
    );
    root.style.setProperty("--color-loaderCircleBg", tokens.loaderCircleBg);
    root.style.setProperty(
      "--color-tabLineActiveBorder",
      tokens.tabLineActiveBorder,
    );
    root.style.setProperty(
      "--color-tabLineActiveText",
      tokens.tabLineActiveText,
    );
    root.style.setProperty(
      "--color-navbarButtonBg",
      tokens.navbarButtonBg ?? tokens.mainColor,
    );
    root.style.setProperty(
      "--color-navbarButtonBgHover",
      tokens.navbarButtonBgHover ?? tokens.mainColorHover,
    );

    // Apply primary color with transparency to all standard hover states
    root.style.setProperty("--color-navItemBgHover", mainColorTransparent);
    root.style.setProperty("--color-tableRowBgHover", mainColorTransparent);
    root.style.setProperty("--color-tableHeaderBgHover", mainColorTransparent);
    root.style.setProperty("--color-dropdownBgHover", mainColorTransparent);
    root.style.setProperty("--color-chipBgHover", mainColorTransparent);
    root.style.setProperty("--color-selectBgHover", mainColorTransparent);
    root.style.setProperty(
      "--color-settingsButtonBgHover",
      mainColorTransparent,
    );
    root.style.setProperty(
      "--color-notificationItemBgHover",
      mainColorTransparent,
    );
    root.style.setProperty("--color-activeProductBg", mainColorTransparent);
    root.style.setProperty(
      "--color-calendarEventBgHover",
      mainColorTransparent,
    );
    root.style.setProperty(
      "--color-outlinedButtonBgHover",
      mainColorTransparent,
    );
    root.style.setProperty(
      "--color-secondaryButtonBgHover",
      mainColorTransparent,
    );
    root.style.setProperty(
      "--color-sideMenuButtonBgHover",
      mainColorTransparent,
    );
    // Navbar icon buttons (theme toggle, notifications, user profile)
    root.style.setProperty(
      "--color-navbarIconButtonBgHover",
      mainColorTransparent,
    );
  }, [accentColor]);
};
