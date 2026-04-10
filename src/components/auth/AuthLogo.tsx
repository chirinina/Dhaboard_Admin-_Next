import { Link } from "@/i18n/navigation";

/* Circle with logo for auth pages */
export const AuthLogo = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 -top-12 1xl:-top-[3.5625rem] z-30 w-24 h-24 1xl:w-28.5 1xl:h-28.5">
      <Link
        href="/"
        aria-label="Diolay - home"
        className="relative w-full h-full rounded-full bg-loginModalBg border border-mainBorder flex items-center justify-center text-logoBg"
      >
        <div className="w-14 h-14 1xl:w-16 1xl:h-16 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="w-full h-full"
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
      </Link>
    </div>
  );
};
