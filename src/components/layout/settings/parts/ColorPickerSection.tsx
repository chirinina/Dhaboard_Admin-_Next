"use client";

import { useTranslations } from "next-intl";

import { Label } from "@/components/common/shadcn/label";
import { AccentColor, useLayoutStore } from "@/store/layoutStore";

const ACCENT_COLORS: {
  id: AccentColor;
  label: string;
  light: string;
  dark: string;
}[] = [
  { id: "blue", label: "Azul", light: "#4f8ef7", dark: "#3d86e8" },
  { id: "violet", label: "Violeta", light: "#8b5cf6", dark: "#7c3aed" },
  { id: "emerald", label: "Esmeralda", light: "#10b981", dark: "#059669" },
  { id: "rose", label: "Rosa", light: "#f43f5e", dark: "#e11d48" },
  { id: "amber", label: "Ámbar", light: "#f59e0b", dark: "#d97706" },
  { id: "cyan", label: "Cian", light: "#06b6d4", dark: "#0891b2" },
  { id: "orange", label: "Naranja", light: "#f97316", dark: "#ea6c0a" },
  { id: "indigo", label: "Índigo", light: "#6366f1", dark: "#4f46e5" },
  { id: "teal", label: "Verde azulado", light: "#14b8a6", dark: "#0d9488" },
];

export const ColorPickerSection = () => {
  const t = useTranslations("settings");
  const accentColor = useLayoutStore((s) => s.accentColor);
  const setAccentColor = useLayoutStore((s) => s.setAccentColor);

  return (
    <div className="px-5 py-4 border-b border-settingsDrawerDivider">
      <div className="mb-3">
        <Label className="text-xs font-medium tracking-wide uppercase text-settingsDrawerSectionTitle">
          {t("accentColor")}
        </Label>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {ACCENT_COLORS.map((color) => {
          const isSelected = accentColor === color.id;
          return (
            <button
              key={color.id}
              onClick={() => setAccentColor(color.id)}
              aria-label={color.label}
              aria-pressed={isSelected}
              title={color.label}
              className={`relative group flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all duration-150 ${
                isSelected
                  ? "border-mainColor bg-primaryBg shadow-sm"
                  : "border-settingsButtonBorder bg-primaryBg hover:border-mainBorderHover"
              }`}
            >
              {/* Color swatch */}
              <span
                className="w-7 h-7 rounded-full block shadow-sm ring-2 ring-offset-2 ring-offset-primaryBg transition-transform group-hover:scale-110"
                style={
                  {
                    backgroundColor: color.light,
                    "--tw-ring-color": isSelected ? color.light : "transparent",
                  } as React.CSSProperties
                }
              />
              <span className="text-[10px] font-medium text-settingsDrawerLabelText leading-none text-center">
                {color.label}
              </span>
              {isSelected && (
                <span className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-mainColor flex items-center justify-center">
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
