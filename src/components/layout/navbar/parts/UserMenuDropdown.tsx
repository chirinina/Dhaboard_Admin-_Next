import Link from "next/link";

import { CheckIcon } from "@/assets/icons/CheckIcon";
import { DashboardIcon } from "@/assets/icons/DashboardIcon";
import { HistoryIcon } from "@/assets/icons/HistoryIcon";
import { InfoIcon } from "@/assets/icons/InfoIcon";
import { LanguageIcon } from "@/assets/icons/LanguageIcon";
import { LogoutIcon } from "@/assets/icons/LogoutIcon";
import { PaletteIcon } from "@/assets/icons/PaletteIcon";
import { SettingsIcon } from "@/assets/icons/SettingsIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import { UsersIcon } from "@/assets/icons/UsersIcon";
import { Link as NavigationLink } from "@/i18n/navigation";

import { UserMenuDropdownProps } from "../types";
import { DropdownMenuItem } from "./DropdownMenuItem";

export const UserMenuDropdown = ({
  menuRef,
  handleMenuKeyDown,
  suppressTooltipRef,
  t,
  pathname,
  currentLanguage,
  currentTheme,
  subMenuState,
  userDropdown,
  modalActions,
  selectTheme,
  session,
}: UserMenuDropdownProps) => {
  const isLoggedIn = session?.isLoggedIn;
  const username = session?.username || "Guest";

  return (
    <div
      ref={menuRef}
      id="user-dropdown-menu"
      role="menu"
      aria-label="User menu"
      onKeyDown={handleMenuKeyDown}
      className="absolute right-2 xl:right-0 top-10 xl:top-12 mt-2 w-64 border border-mainBorder bg-dropdownBg/80 backdrop-blur-xl text-primaryText rounded-xl shadow-2xl animate-navbar-dropdown overflow-hidden z-50"
    >
      {/* User Header */}
      <div className="px-4 py-4 border-b border-mainBorder bg-primaryBg/30 flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-mainColor/20 flex items-center justify-center text-mainColor shrink-0 shadow-inner">
          <UserIcon />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-bold text-sm truncate leading-tight">
            {username}
          </span>
          <span className="text-[11px] text-secondaryText truncate uppercase tracking-wider font-medium opacity-70">
            {isLoggedIn ? t("auth") : "Nellavio User"}
          </span>
        </div>
      </div>

      <div className="py-1.5">
        {/* Dashboard / Panel */}
        <Link
          href="/"
          className="px-4 py-2.5 flex items-center hover:bg-mainColor/10 transition-colors cursor-pointer group"
          onClick={() => userDropdown.close()}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-mainColor transition-colors">
            <DashboardIcon />
          </div>
          <span className="font-medium group-hover:text-mainColor transition-colors">
            {t("dashboard")}
          </span>
        </Link>

        {/* About */}
        <div
          tabIndex={-1}
          role="menuitem"
          className="px-4 py-2.5 flex items-center hover:bg-mainColor/10 transition-colors cursor-pointer group"
          onPointerDown={() => {
            suppressTooltipRef.current = true;
          }}
          onClick={() => {
            userDropdown.close();
            modalActions.showAbout();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              userDropdown.close();
              modalActions.showAbout();
            }
          }}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-mainColor transition-colors">
            <InfoIcon />
          </div>
          <span className="font-medium group-hover:text-mainColor transition-colors">
            {t("about")}
          </span>
        </div>

        {/* Changelog */}
        <div
          tabIndex={-1}
          role="menuitem"
          className="px-4 py-2.5 flex items-center hover:bg-mainColor/10 transition-colors cursor-pointer group"
          onPointerDown={() => {
            suppressTooltipRef.current = true;
          }}
          onClick={() => {
            userDropdown.close();
            modalActions.showChangelog();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              userDropdown.close();
              modalActions.showChangelog();
            }
          }}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-mainColor transition-colors">
            <HistoryIcon />
          </div>
          <span className="font-medium group-hover:text-mainColor transition-colors">
            {t("changelog")}
          </span>
        </div>

        {/* Contributing */}
        <div
          tabIndex={-1}
          role="menuitem"
          className="px-4 py-2.5 flex items-center hover:bg-mainColor/10 transition-colors cursor-pointer group"
          onPointerDown={() => {
            suppressTooltipRef.current = true;
          }}
          onClick={() => {
            userDropdown.close();
            modalActions.showContributing();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              userDropdown.close();
              modalActions.showContributing();
            }
          }}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-mainColor transition-colors stroke-grayIcon fill-grayIcon group-hover:stroke-mainColor group-hover:fill-mainColor">
            <UsersIcon />
          </div>
          <span className="font-medium group-hover:text-mainColor transition-colors">
            {t("contributing")}
          </span>
        </div>
      </div>

      <div className="border-t border-mainBorder/50"></div>

      <div className="py-1.5">
        {/* Language Section */}
        <DropdownMenuItem
          icon={<LanguageIcon />}
          label={t("language")}
          isOpen={subMenuState.isLanguageMenuOpen}
          onToggle={() =>
            subMenuState.setIsLanguageMenuOpen(!subMenuState.isLanguageMenuOpen)
          }
        >
          <NavigationLink
            href={pathname}
            locale="en"
            className="py-2 pr-5 pl-12 flex hover:bg-mainColor/10 cursor-pointer justify-between items-center text-sm transition-colors group"
            role="menuitem"
            tabIndex={-1}
          >
            <span
              className={
                currentLanguage === "en"
                  ? "font-bold text-mainColor"
                  : "group-hover:text-mainColor"
              }
            >
              {t("english")}
            </span>
            {currentLanguage === "en" && (
              <div className="text-mainColor scale-90">
                <CheckIcon />
              </div>
            )}
          </NavigationLink>
          <NavigationLink
            href={pathname}
            locale="es"
            className="py-2 pr-5 pl-12 flex hover:bg-mainColor/10 cursor-pointer justify-between items-center text-sm transition-colors group"
            role="menuitem"
            tabIndex={-1}
          >
            <span
              className={
                currentLanguage === "es"
                  ? "font-bold text-mainColor"
                  : "group-hover:text-mainColor"
              }
            >
              {t("spanish")}
            </span>
            {currentLanguage === "es" && (
              <div className="text-mainColor scale-90">
                <CheckIcon />
              </div>
            )}
          </NavigationLink>
        </DropdownMenuItem>

        {/* Theme Section (Mobile only) */}
        <div className="xl:hidden">
          <DropdownMenuItem
            icon={<PaletteIcon />}
            label={t("theme")}
            isOpen={subMenuState.isThemeMenuOpen}
            onToggle={() =>
              subMenuState.setIsThemeMenuOpen(!subMenuState.isThemeMenuOpen)
            }
          >
            <div
              tabIndex={-1}
              role="menuitem"
              className="py-2 pr-5 pl-12 flex hover:bg-mainColor/10 cursor-pointer justify-between items-center text-sm transition-colors group"
              onClick={() => selectTheme("light")}
            >
              <span
                className={
                  currentTheme === "light"
                    ? "font-bold text-mainColor"
                    : "group-hover:text-mainColor"
                }
              >
                {t("light")}
              </span>
              {currentTheme === "light" && (
                <div className="text-mainColor scale-90">
                  <CheckIcon />
                </div>
              )}
            </div>
            <div
              tabIndex={-1}
              role="menuitem"
              className="py-2 pr-5 pl-12 flex hover:bg-mainColor/10 cursor-pointer justify-between items-center text-sm transition-colors group"
              onClick={() => selectTheme("dark")}
            >
              <span
                className={
                  currentTheme === "dark"
                    ? "font-bold text-mainColor"
                    : "group-hover:text-mainColor"
                }
              >
                {t("dark")}
              </span>
              {currentTheme === "dark" && (
                <div className="text-mainColor scale-90">
                  <CheckIcon />
                </div>
              )}
            </div>
          </DropdownMenuItem>
        </div>

        {/* Settings / Configuration */}
        <div
          tabIndex={-1}
          role="menuitem"
          className="px-4 py-2.5 flex items-center hover:bg-mainColor/10 transition-colors cursor-pointer group"
          onClick={() => {
            userDropdown.close();
            subMenuState.setIsSettingsDrawerOpen(true);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              userDropdown.close();
              subMenuState.setIsSettingsDrawerOpen(true);
            }
          }}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-mainColor transition-colors">
            <SettingsIcon />
          </div>
          <span className="font-medium group-hover:text-mainColor transition-colors">
            {t("settings")}
          </span>
        </div>
      </div>

      <div className="border-t border-mainBorder/50"></div>

      <div className="py-1.5">
        {/* Sign Out */}
        <div
          tabIndex={-1}
          role="menuitem"
          className="px-4 py-2.5 flex items-center hover:bg-destructive/10 transition-colors cursor-pointer group"
          onPointerDown={() => {
            suppressTooltipRef.current = true;
          }}
          onClick={() => {
            userDropdown.close();
            modalActions.showLogout();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              userDropdown.close();
              modalActions.showLogout();
            }
          }}
        >
          <div className="w-5 flex justify-center items-center text-grayIcon mr-3 group-hover:text-red-500 transition-colors stroke-grayIcon group-hover:stroke-red-500">
            <LogoutIcon />
          </div>
          <span className="font-medium group-hover:text-red-500 transition-colors">
            {t("signOut")}
          </span>
        </div>
      </div>
    </div>
  );
};
