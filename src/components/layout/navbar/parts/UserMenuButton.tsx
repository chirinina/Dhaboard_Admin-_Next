import { ArrowDownSimpleIcon } from "@/assets/icons/ArrowDownSimpleIcon";
import { UserIcon } from "@/assets/icons/UserIcon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/common/shadcn/tooltip";
import { SettingsDrawer } from "@/components/layout/settings/SettingsDrawer";
import { useIsFirstRender } from "@/hooks/useIsFirstRender";

import { useUserMenu } from "../hooks/useUserMenu";
import { NAVBAR_TOOLTIPS_ENABLED, UserButtonProps } from "../types";
import { UserMenuDropdown } from "./UserMenuDropdown";

export const UserMenuButton = ({
  userIconBtnRef,
  closeMobileMenu,
  userDropdown,
  navbarDropdowns,
  modalActions,
  session,
  t,
  currentLanguage,
  theme,
  selectTheme,
}: Omit<UserButtonProps, "userTooltip">) => {
  const isFirstRender = useIsFirstRender();

  const {
    isLoggedIn: rawIsLoggedIn,
    pathname,
    subMenuState,
    currentTheme,
    suppressTooltipRef,
    tooltipOpen,
    setTooltipOpen,
    isAnyDropdownOpen,
    menuRef,
    handleTriggerKeyDown,
    handleMenuKeyDown,
  } = useUserMenu({
    userIconBtnRef,
    userDropdown,
    navbarDropdowns,
    session,
    theme,
  });

  const isLoggedIn = isFirstRender ? false : rawIsLoggedIn;
  const safeSession = isFirstRender ? null : session;

  return (
    <div className="relative ml-3 xl:ml-0" ref={userDropdown.ref}>
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
            className={isLoggedIn ? "h-10 w-auto" : "h-10 w-10"}
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
          >
            <button
              ref={userIconBtnRef}
              tabIndex={0}
              onClick={() => {
                setTooltipOpen(false);
                closeMobileMenu();
                userDropdown.toggle();
                navbarDropdowns.closeAllExcept("user");
              }}
              onKeyDown={handleTriggerKeyDown}
              className={`group flex h-10 items-center justify-center overflow-hidden rounded-full border border-mainBorder text-base text-primaryText stroke-grayIcon fill-grayIcon transition-all duration-300 hover:bg-navbarIconButtonBgHover ${
                isLoggedIn && safeSession?.username
                  ? "w-10 sm:w-auto sm:px-2.5 sm:rounded-xl"
                  : "w-10"
              }`}
              type="button"
              aria-label={t("openUserMenu")}
              aria-haspopup="menu"
              aria-expanded={userDropdown.isOpen}
              aria-controls="user-dropdown-menu"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-300 group-hover:text-mainColor">
                <UserIcon />
              </div>

              {isLoggedIn && safeSession?.username && (
                <>
                  <span className="ml-2 hidden whitespace-nowrap text-sm font-semibold text-primaryText transition-colors duration-300 group-hover:text-mainColor sm:inline">
                    {safeSession.username}
                  </span>

                  <div className="ml-1 hidden h-4 w-4 text-secondaryText transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-mainColor/80 sm:block">
                    <ArrowDownSimpleIcon />
                  </div>
                </>
              )}
            </button>
          </div>
        </TooltipTrigger>

        {NAVBAR_TOOLTIPS_ENABLED && !isAnyDropdownOpen && (
          <TooltipContent
            side="bottom"
            align="start"
            alignOffset={-85}
            className="hidden xl:block"
          >
            {t("openUserMenu")}
          </TooltipContent>
        )}
      </Tooltip>

      {userDropdown.isOpen && (
        <UserMenuDropdown
          menuRef={menuRef}
          handleMenuKeyDown={handleMenuKeyDown}
          suppressTooltipRef={suppressTooltipRef}
          t={t}
          pathname={pathname}
          currentLanguage={currentLanguage}
          currentTheme={currentTheme}
          subMenuState={subMenuState}
          userDropdown={userDropdown}
          modalActions={modalActions}
          selectTheme={selectTheme}
          session={safeSession}
        />
      )}

      <SettingsDrawer
        open={subMenuState.isSettingsDrawerOpen}
        onOpenChange={subMenuState.setIsSettingsDrawerOpen}
        returnFocusRef={userIconBtnRef}
      />
    </div>
  );
};
