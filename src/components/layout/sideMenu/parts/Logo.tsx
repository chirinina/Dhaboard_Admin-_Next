import { LogoIcon } from "@/assets/icons/LogoIcon";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Link } from "@/i18n/navigation";
import { useLayoutStore } from "@/store/layoutStore";
import { BREAKPOINTS } from "@/styles/breakpoints";

export const Logo = () => {
  const isSideMenuOpen = useLayoutStore((s) => s.isSideMenuOpen);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`);

  const isCollapsed = !isSideMenuOpen && isDesktop;
  return (
    <Link
      href="/"
      tabIndex={0}
      ref={(el: HTMLAnchorElement | null) => {
        if (el) el.setAttribute("tabindex", "0");
      }}
      aria-label="Diolay - home"
      className="flex items-center text-2xl xl:text-xl 1xl:text-[1.3rem] 3xl:text-[1.4rem] font-medium"
    >
      <div className="menuItemLogo text-logoBg flex-shrink-0 transition-all duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="none"
          className="w-10 h-10 xl:w-9 xl:h-9"
        >
          <path
            d="M12 28L32 18L52 28"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 31V40C18 45 24 49 32 49C40 49 46 45 46 40V31"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 28V40"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="52" cy="44" r="3" fill="currentColor" />
        </svg>
      </div>

      <div
        className={`flex whitespace-nowrap overflow-hidden transition-all duration-200 ease-in-out ${
          isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
        }`}
        style={{ fontFamily: "var(--font-outfit)" }}
      >
        <div className="ml-[0.7rem] xl:ml-[0.55rem] text-logoBasicText mr-px tracking-wider">
          Diolay
        </div>
      </div>
    </Link>
  );
};
