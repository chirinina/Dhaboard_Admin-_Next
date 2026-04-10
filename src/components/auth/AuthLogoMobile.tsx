import { Link } from "@/i18n/navigation";

export const AuthLogoMobile = () => {
  return (
    <div className="w-24 h-24">
      <Link
        href="/"
        aria-label="Diolay - home"
        className="w-full h-full rounded-full bg-authPageLogoCircleBg border border-mainBorder flex items-center justify-center text-logoBg"
      >
        <div className="w-14 h-14 flex items-center justify-center">
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
