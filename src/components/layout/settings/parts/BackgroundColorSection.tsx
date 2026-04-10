"use client";

import { useTranslations } from "next-intl";

import { Label } from "@/components/common/shadcn/label";
import { AppBackground, useLayoutStore } from "@/store/layoutStore";

const APP_BACKGROUNDS: {
  id: AppBackground;
  label: string;
  light: string;
  dark: string;
}[] = [
  { id: "default", label: "Por defecto", light: "#f7f7f7", dark: "#141416" },
  { id: "slate", label: "Pizarra", light: "#f8fafc", dark: "#020617" },
  { id: "zinc", label: "Zinc", light: "#fafafa", dark: "#09090b" },
  { id: "stone", label: "Piedra", light: "#fafaf9", dark: "#0c0a09" },
  { id: "blue", label: "Azul suave", light: "#eff6ff", dark: "#0e1829" },
];

export const BackgroundColorSection = () => {
  const t = useTranslations("settings");
  const appBackground = useLayoutStore((s) => s.appBackground);
  const setAppBackground = useLayoutStore((s) => s.setAppBackground);

  return (
    <div className="px-5 py-4 border-b border-settingsDrawerDivider">
      <div className="mb-3">
        <Label className="text-xs font-medium tracking-wide uppercase text-settingsDrawerSectionTitle">
          Color de fondo
        </Label>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {APP_BACKGROUNDS.map((bg) => {
          const isSelected = appBackground === bg.id;
          return (
            <button
              key={bg.id}
              onClick={() => setAppBackground(bg.id)}
              aria-label={bg.label}
              aria-pressed={isSelected}
              title={bg.label}
              className={`relative group flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all duration-150 ${
                isSelected
                  ? "border-mainColor bg-primaryBg shadow-sm"
                  : "border-settingsButtonBorder bg-primaryBg hover:border-mainBorderHover"
              }`}
            >
              {/* Color swatch */}
              <span
                className="w-6 h-6 rounded-md block shadow-sm ring-1 ring-mainBorder transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${bg.light} 50%, ${bg.dark} 50%)`,
                }}
              />
              <span className="text-[9px] font-medium text-settingsDrawerLabelText leading-none text-center truncate w-full">
                {bg.label}
              </span>
              {isSelected && (
                <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-mainColor flex items-center justify-center shadow-sm">
                  <svg
                    width="7"
                    height="5"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4.5L4.5 8L11 1"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
