"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

import { AppBackground, useLayoutStore } from "@/store/layoutStore";

/** Each background palette defines all derived dark-mode surface tokens so the
 *  custom colour applies everywhere: navbar, sidebar, dropdowns, modals,
 *  inputs, tooltips, settings drawer, notifications, datepicker, etc. */
const BG_CSS: Record<
  AppBackground,
  {
    /* Core surfaces */
    primaryBg: string;
    secondaryBg: string;
    navigationBg: string;
    authPageBg: string;
    errorPageBg: string;

    /* Tabs */
    tabsBg: string;
    tabListBg: string;
    tabActiveBg: string;
    tabActiveBgHover: string;
    revenueTabActiveBg: string;
    revenueTabActiveBgHover: string;
    /* Inputs / selects */
    inputBg: string;
    selectBg: string;
    toggleSwitchBg: string;
    /* Buttons */
    outlinedButtonBg: string;
    secondaryButtonBg: string;
    buttonActiveBg: string;
    floatingMenuButtonBg: string;
    floatingMenuButtonBgHover: string;
    themeToggleBg: string;
    themeToggleBgHover: string;
    themeToggleActiveBg: string;
    themeToggleActiveBgHover: string;
    /* Dropdowns / menus */
    dropdownBg: string;
    /* Modals */
    modalBg: string;
    loginModalBg: string;
    /* Overlays / misc */
    loaderBg: string;
    tooltipBg: string;
    mutedBg: string;
    chipBg: string;
    skeletonBg: string;
    infoAlertBg: string;
    destructiveAlertBg: string;
    successAlertBg: string;
    /* Navbar */
    navbarSearchInputBg: string;
    /* Notifications */
    notificationHeaderBg: string;
    notificationItemBg: string;
    /* Settings drawer */
    settingsDrawerHeaderBg: string;
    settingsDrawerGithubBg: string;
    settingsDrawerGithubBgHover: string;
    /* Calendar / datepicker */
    datepickerHeaderBg: string;
    /* Scrollbar */
    scrollbarBg: string;
    scrollbarPlaceholderBg: string;
    /* Asset performance bar */
    assetPerformanceBarBg: string;
    /* User button */
    userButtonBg: string;
    /* Auth tooltip */
    authErrorTooltipBg: string;
    /* Profile header */
    profileHeaderBg: string;
    /* Side menu */
    sideMenuButtonBg: string;
  } | null
> = {
  default: null,

  slate: {
    primaryBg: "#020617",
    secondaryBg: "#0f172a",
    navigationBg: "#020617",
    authPageBg: "#020617",
    errorPageBg: "#020617",

    tabsBg: "#080f1e",
    tabListBg: "#020617",
    tabActiveBg: "#0d1530",
    tabActiveBgHover: "#121b38",
    revenueTabActiveBg: "#0d1530",
    revenueTabActiveBgHover: "#121b38",
    inputBg: "rgba(255,255,255,0.05)",
    selectBg: "rgba(255,255,255,0.05)",
    toggleSwitchBg: "rgba(255,255,255,0.08)",
    outlinedButtonBg: "rgba(255,255,255,0.05)",
    secondaryButtonBg: "rgba(255,255,255,0.05)",
    buttonActiveBg: "#0a1020",
    floatingMenuButtonBg: "#0d1530",
    floatingMenuButtonBgHover: "#121b38",
    themeToggleBg: "#090f1e",
    themeToggleBgHover: "#0e1530",
    themeToggleActiveBg: "#0d1530",
    themeToggleActiveBgHover: "#121b38",
    dropdownBg: "#0b1226",
    modalBg: "#0a1020",
    loginModalBg: "#0a1020",
    loaderBg: "#0b1226",
    tooltipBg: "#0f1a30",
    mutedBg: "#0b1226",
    chipBg: "rgba(255,255,255,0.07)",
    skeletonBg: "#0e1830",
    infoAlertBg: "#0d1530",
    destructiveAlertBg: "#0d1530",
    successAlertBg: "#0d1530",
    navbarSearchInputBg: "rgba(255,255,255,0.01)",
    notificationHeaderBg: "#020617",
    notificationItemBg: "#0b1226",
    settingsDrawerHeaderBg: "#020617",
    settingsDrawerGithubBg: "#020617",
    settingsDrawerGithubBgHover: "#0a1020",
    datepickerHeaderBg: "#0d1530",
    scrollbarBg: "#060d1a",
    scrollbarPlaceholderBg: "#040b18",
    assetPerformanceBarBg: "#020617",
    userButtonBg: "#040c1c",
    authErrorTooltipBg: "#0b1226",
    profileHeaderBg: "rgba(0,0,0,0.09)",
    sideMenuButtonBg: "rgba(255,255,255,0.02)",
  },

  zinc: {
    primaryBg: "#09090b",
    secondaryBg: "#18181b",
    navigationBg: "#09090b",
    authPageBg: "#09090b",
    errorPageBg: "#09090b",

    tabsBg: "#111113",
    tabListBg: "#09090b",
    tabActiveBg: "#1a1a1e",
    tabActiveBgHover: "#222226",
    revenueTabActiveBg: "#1a1a1e",
    revenueTabActiveBgHover: "#222226",
    inputBg: "rgba(255,255,255,0.05)",
    selectBg: "rgba(255,255,255,0.05)",
    toggleSwitchBg: "rgba(255,255,255,0.08)",
    outlinedButtonBg: "rgba(255,255,255,0.05)",
    secondaryButtonBg: "rgba(255,255,255,0.05)",
    buttonActiveBg: "#131317",
    floatingMenuButtonBg: "#1a1a1e",
    floatingMenuButtonBgHover: "#222226",
    themeToggleBg: "#101012",
    themeToggleBgHover: "#18181c",
    themeToggleActiveBg: "#1a1a1e",
    themeToggleActiveBgHover: "#222226",
    dropdownBg: "#111115",
    modalBg: "#111115",
    loginModalBg: "#111115",
    loaderBg: "#111115",
    tooltipBg: "#1a1a1e",
    mutedBg: "#111115",
    chipBg: "rgba(255,255,255,0.07)",
    skeletonBg: "#17171a",
    infoAlertBg: "#1a1a1e",
    destructiveAlertBg: "#1a1a1e",
    successAlertBg: "#1a1a1e",
    navbarSearchInputBg: "rgba(255,255,255,0.01)",
    notificationHeaderBg: "#09090b",
    notificationItemBg: "#111115",
    settingsDrawerHeaderBg: "#09090b",
    settingsDrawerGithubBg: "#09090b",
    settingsDrawerGithubBgHover: "#111115",
    datepickerHeaderBg: "#1a1a1e",
    scrollbarBg: "#0c0c0e",
    scrollbarPlaceholderBg: "#070709",
    assetPerformanceBarBg: "#09090b",
    userButtonBg: "#060608",
    authErrorTooltipBg: "#111115",
    profileHeaderBg: "rgba(0,0,0,0.09)",
    sideMenuButtonBg: "rgba(255,255,255,0.02)",
  },

  stone: {
    primaryBg: "#0c0a09",
    secondaryBg: "#1c1917",
    navigationBg: "#0c0a09",
    authPageBg: "#0c0a09",
    errorPageBg: "#0c0a09",

    tabsBg: "#141210",
    tabListBg: "#0c0a09",
    tabActiveBg: "#1e1b19",
    tabActiveBgHover: "#262320",
    revenueTabActiveBg: "#1e1b19",
    revenueTabActiveBgHover: "#262320",
    inputBg: "rgba(255,255,255,0.05)",
    selectBg: "rgba(255,255,255,0.05)",
    toggleSwitchBg: "rgba(255,255,255,0.08)",
    outlinedButtonBg: "rgba(255,255,255,0.05)",
    secondaryButtonBg: "rgba(255,255,255,0.05)",
    buttonActiveBg: "#151310",
    floatingMenuButtonBg: "#1e1b19",
    floatingMenuButtonBgHover: "#262320",
    themeToggleBg: "#13100e",
    themeToggleBgHover: "#1a1714",
    themeToggleActiveBg: "#1e1b19",
    themeToggleActiveBgHover: "#262320",
    dropdownBg: "#141210",
    modalBg: "#141210",
    loginModalBg: "#141210",
    loaderBg: "#141210",
    tooltipBg: "#1e1b19",
    mutedBg: "#141210",
    chipBg: "rgba(255,255,255,0.07)",
    skeletonBg: "#1a1714",
    infoAlertBg: "#1e1b19",
    destructiveAlertBg: "#1e1b19",
    successAlertBg: "#1e1b19",
    navbarSearchInputBg: "rgba(255,255,255,0.01)",
    notificationHeaderBg: "#0c0a09",
    notificationItemBg: "#141210",
    settingsDrawerHeaderBg: "#0c0a09",
    settingsDrawerGithubBg: "#0c0a09",
    settingsDrawerGithubBgHover: "#141210",
    datepickerHeaderBg: "#1e1b19",
    scrollbarBg: "#0f0d0b",
    scrollbarPlaceholderBg: "#0a0907",
    assetPerformanceBarBg: "#0c0a09",
    userButtonBg: "#090706",
    authErrorTooltipBg: "#141210",
    profileHeaderBg: "rgba(0,0,0,0.09)",
    sideMenuButtonBg: "rgba(255,255,255,0.02)",
  },

  blue: {
    primaryBg: "#0e1829",
    secondaryBg: "#172554",
    navigationBg: "#0e1829",
    authPageBg: "#0e1829",
    errorPageBg: "#0e1829",

    tabsBg: "#101d30",
    tabListBg: "#0e1829",
    tabActiveBg: "#152038",
    tabActiveBgHover: "#1b2a47",
    revenueTabActiveBg: "#152038",
    revenueTabActiveBgHover: "#1b2a47",
    inputBg: "rgba(255,255,255,0.05)",
    selectBg: "rgba(255,255,255,0.05)",
    toggleSwitchBg: "rgba(255,255,255,0.08)",
    outlinedButtonBg: "rgba(255,255,255,0.05)",
    secondaryButtonBg: "rgba(255,255,255,0.05)",
    buttonActiveBg: "#0e1b33",
    floatingMenuButtonBg: "#152038",
    floatingMenuButtonBgHover: "#1b2a47",
    themeToggleBg: "#0c1625",
    themeToggleBgHover: "#121e32",
    themeToggleActiveBg: "#152038",
    themeToggleActiveBgHover: "#1b2a47",
    dropdownBg: "#111e34",
    modalBg: "#0e1b33",
    loginModalBg: "#0e1b33",
    loaderBg: "#111e34",
    tooltipBg: "#152038",
    mutedBg: "#111e34",
    chipBg: "rgba(255,255,255,0.07)",
    skeletonBg: "#13203a",
    infoAlertBg: "#152038",
    destructiveAlertBg: "#152038",
    successAlertBg: "#152038",
    navbarSearchInputBg: "rgba(255,255,255,0.01)",
    notificationHeaderBg: "#0e1829",
    notificationItemBg: "#111e34",
    settingsDrawerHeaderBg: "#0e1829",
    settingsDrawerGithubBg: "#0e1829",
    settingsDrawerGithubBgHover: "#0e1b33",
    datepickerHeaderBg: "#152038",
    scrollbarBg: "#0b1520",
    scrollbarPlaceholderBg: "#091220",
    assetPerformanceBarBg: "#0e1829",
    userButtonBg: "#0a1220",
    authErrorTooltipBg: "#111e34",
    profileHeaderBg: "rgba(0,0,0,0.09)",
    sideMenuButtonBg: "rgba(255,255,255,0.02)",
  },
};

export const useAppBackground = () => {
  const appBackground = useLayoutStore((s) => s.appBackground);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;

    if (resolvedTheme !== "dark" || appBackground === "default") {
      // Remove all custom overrides to restore CSS-file defaults
      const props = [
        "--color-primaryBg",
        "--color-secondaryBg",
        "--color-navigationBg",
        "--color-authPageBg",
        "--color-errorPageBg",

        "--color-tabsBg",
        "--color-tabListBg",
        "--color-tabActiveBg",
        "--color-tabActiveBgHover",
        "--color-revenueTabActiveBg",
        "--color-revenueTabActiveBgHover",
        "--color-inputBg",
        "--color-selectBg",
        "--color-toggleSwitchBg",
        "--color-outlinedButtonBg",
        "--color-secondaryButtonBg",
        "--color-buttonActiveBg",
        "--color-floatingMenuButtonBg",
        "--color-floatingMenuButtonBgHover",
        "--color-themeToggleBg",
        "--color-themeToggleBgHover",
        "--color-themeToggleActiveBg",
        "--color-themeToggleActiveBgHover",
        "--color-dropdownBg",
        "--color-modalBg",
        "--color-loginModalBg",
        "--color-loaderBg",
        "--color-tooltipBg",
        "--color-mutedBg",
        "--color-chipBg",
        "--color-skeletonBg",
        "--color-infoAlertBg",
        "--color-destructiveAlertBg",
        "--color-successAlertBg",
        "--color-navbarSearchInputBg",
        "--color-notificationHeaderBg",
        "--color-notificationItemBg",
        "--color-settingsDrawerHeaderBg",
        "--color-settingsDrawerGithubBg",
        "--color-settingsDrawerGithubBgHover",
        "--color-datepickerHeaderBg",
        "--color-scrollbarBg",
        "--color-scrollbarPlaceholderBg",
        "--color-assetPerformanceBarBg",
        "--color-userButtonBg",
        "--color-authErrorTooltipBg",
        "--color-profileHeaderBg",
        "--color-sideMenuButtonBg",
      ];
      props.forEach((p) => root.style.removeProperty(p));
      return;
    }

    const tokens = BG_CSS[appBackground];
    if (!tokens) return;

    // Core surfaces
    root.style.setProperty("--color-primaryBg", tokens.primaryBg);
    root.style.setProperty("--color-secondaryBg", tokens.secondaryBg);
    root.style.setProperty("--color-navigationBg", tokens.navigationBg);
    root.style.setProperty("--color-authPageBg", tokens.authPageBg);
    root.style.setProperty("--color-errorPageBg", tokens.errorPageBg);

    // Tabs
    root.style.setProperty("--color-tabsBg", tokens.tabsBg);
    root.style.setProperty("--color-tabListBg", tokens.tabListBg);
    root.style.setProperty("--color-tabActiveBg", tokens.tabActiveBg);
    root.style.setProperty("--color-tabActiveBgHover", tokens.tabActiveBgHover);
    root.style.setProperty(
      "--color-revenueTabActiveBg",
      tokens.revenueTabActiveBg,
    );
    root.style.setProperty(
      "--color-revenueTabActiveBgHover",
      tokens.revenueTabActiveBgHover,
    );

    // Inputs / selects
    root.style.setProperty("--color-inputBg", tokens.inputBg);
    root.style.setProperty("--color-selectBg", tokens.selectBg);
    root.style.setProperty("--color-toggleSwitchBg", tokens.toggleSwitchBg);

    // Buttons
    root.style.setProperty("--color-outlinedButtonBg", tokens.outlinedButtonBg);
    root.style.setProperty(
      "--color-secondaryButtonBg",
      tokens.secondaryButtonBg,
    );
    root.style.setProperty("--color-buttonActiveBg", tokens.buttonActiveBg);
    root.style.setProperty(
      "--color-floatingMenuButtonBg",
      tokens.floatingMenuButtonBg,
    );
    root.style.setProperty(
      "--color-floatingMenuButtonBgHover",
      tokens.floatingMenuButtonBgHover,
    );
    root.style.setProperty("--color-themeToggleBg", tokens.themeToggleBg);
    root.style.setProperty(
      "--color-themeToggleBgHover",
      tokens.themeToggleBgHover,
    );
    root.style.setProperty(
      "--color-themeToggleActiveBg",
      tokens.themeToggleActiveBg,
    );
    root.style.setProperty(
      "--color-themeToggleActiveBgHover",
      tokens.themeToggleActiveBgHover,
    );

    // Dropdowns / menus
    root.style.setProperty("--color-dropdownBg", tokens.dropdownBg);

    // Modals
    root.style.setProperty("--color-modalBg", tokens.modalBg);
    root.style.setProperty("--color-loginModalBg", tokens.loginModalBg);

    // Misc surfaces
    root.style.setProperty("--color-loaderBg", tokens.loaderBg);
    root.style.setProperty("--color-tooltipBg", tokens.tooltipBg);
    root.style.setProperty("--color-mutedBg", tokens.mutedBg);
    root.style.setProperty("--color-chipBg", tokens.chipBg);
    root.style.setProperty("--color-skeletonBg", tokens.skeletonBg);
    root.style.setProperty("--color-infoAlertBg", tokens.infoAlertBg);
    root.style.setProperty(
      "--color-destructiveAlertBg",
      tokens.destructiveAlertBg,
    );
    root.style.setProperty("--color-successAlertBg", tokens.successAlertBg);

    // Navbar
    root.style.setProperty(
      "--color-navbarSearchInputBg",
      tokens.navbarSearchInputBg,
    );

    // Notifications
    root.style.setProperty(
      "--color-notificationHeaderBg",
      tokens.notificationHeaderBg,
    );
    root.style.setProperty(
      "--color-notificationItemBg",
      tokens.notificationItemBg,
    );

    // Settings drawer
    root.style.setProperty(
      "--color-settingsDrawerHeaderBg",
      tokens.settingsDrawerHeaderBg,
    );
    root.style.setProperty(
      "--color-settingsDrawerGithubBg",
      tokens.settingsDrawerGithubBg,
    );
    root.style.setProperty(
      "--color-settingsDrawerGithubBgHover",
      tokens.settingsDrawerGithubBgHover,
    );

    // Calendar / datepicker
    root.style.setProperty(
      "--color-datepickerHeaderBg",
      tokens.datepickerHeaderBg,
    );

    // Scrollbar
    root.style.setProperty("--color-scrollbarBg", tokens.scrollbarBg);
    root.style.setProperty(
      "--color-scrollbarPlaceholderBg",
      tokens.scrollbarPlaceholderBg,
    );

    // Misc
    root.style.setProperty(
      "--color-assetPerformanceBarBg",
      tokens.assetPerformanceBarBg,
    );
    root.style.setProperty("--color-userButtonBg", tokens.userButtonBg);
    root.style.setProperty(
      "--color-authErrorTooltipBg",
      tokens.authErrorTooltipBg,
    );
    root.style.setProperty("--color-profileHeaderBg", tokens.profileHeaderBg);
    root.style.setProperty("--color-sideMenuButtonBg", tokens.sideMenuButtonBg);
  }, [appBackground, resolvedTheme]);
};
