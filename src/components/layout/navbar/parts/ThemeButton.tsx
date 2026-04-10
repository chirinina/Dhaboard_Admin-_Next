import { MoonIcon } from "@/assets/icons/MoonIcon";
import { SunIcon } from "@/assets/icons/SunIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/common/shadcn/tooltip";

import { useThemeChange } from "../hooks/useThemeChange";
import { NAVBAR_TOOLTIPS_ENABLED, ThemeButtonProps } from "../types";

export const ThemeButton = ({
  theme,
  selectTheme,
  userDropdown,
  languageDropdown,
  notificationsDropdown,
  t,
}: Omit<ThemeButtonProps, "themeTooltip">) => {
  const {
    isMounted,
    currentTheme,
    suppressTooltipRef,
    tooltipOpen,
    setTooltipOpen,
    toggleTheme,
    isAnyDropdownOpen,
  } = useThemeChange({
    theme,
    selectTheme,
    userDropdown,
    languageDropdown,
    notificationsDropdown,
  });

  return (
    <Tooltip
      delayDuration={200}
      open={tooltipOpen}
      onOpenChange={(open) => {
        if (open && suppressTooltipRef.current) return;
        if (open && isAnyDropdownOpen) return;
        setTooltipOpen(open);
      }}
    >
      <TooltipTrigger asChild>
        <div
          className="group relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-mainBorder text-primaryText transition-all duration-300 ease-out hover:border-primary hover:bg-navbarIconButtonBgHover hover:shadow-md active:scale-95"
          onPointerMove={() => {
            suppressTooltipRef.current = false;
          }}
          onFocus={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.matches(":focus-visible")
            ) {
              suppressTooltipRef.current = false;
              const wrapper = e.currentTarget;
              setTimeout(() => {
                if (wrapper.contains(document.activeElement)) {
                  setTooltipOpen(true);
                }
              }, 0);
            }
          }}
          onClick={() => {
            setTooltipOpen(false);
            suppressTooltipRef.current = true;
            toggleTheme();
          }}
          role="button"
          aria-label={t("changeTheme")}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setTooltipOpen(false);
              suppressTooltipRef.current = true;
              toggleTheme();
            }
          }}
        >
          <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden">
            {isMounted && (
              <>
                <span
                  className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ease-in-out ${
                    currentTheme === "dark"
                      ? "translate-y-0 rotate-0 opacity-100"
                      : "-translate-y-8 rotate-90 opacity-0"
                  }`}
                >
                  <MoonIcon />
                </span>

                <span
                  className={`absolute inset-0 flex items-center justify-center transform transition-all duration-500 ease-in-out ${
                    currentTheme === "light"
                      ? "translate-y-0 rotate-0 opacity-100"
                      : "translate-y-8 -rotate-90 opacity-0"
                  }`}
                >
                  <SunIcon />
                </span>
              </>
            )}
          </div>
        </div>
      </TooltipTrigger>

      {NAVBAR_TOOLTIPS_ENABLED && !isAnyDropdownOpen && (
        <TooltipContent
          side="bottom"
          align="start"
          alignOffset={-20}
          className="hidden xl:block"
        >
          {t("changeTheme")}
        </TooltipContent>
      )}
    </Tooltip>
  );
};
