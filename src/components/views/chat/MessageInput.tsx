"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/common/shadcn/button";
import { Textarea } from "@/components/common/shadcn/textarea";
import { useTranslations } from "next-intl";

interface MessageInputProps {
  onSend: (text?: string, imageUrl?: string) => void;
}

export const MessageInput = ({ onSend }: MessageInputProps) => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const t = useTranslations("chat");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  const handleSendImage = () => {
    // Simulated image sending with a random beautiful Unsplash image
    const images = [
      "/image.png",
      "/image-1.png",
      "/laptop.png",
      "/phone.png",
      "/tablet.png"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    onSend(undefined, randomImage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [text]);

  return (
    <div className="p-4 md:p-6 bg-primaryBg/80 backdrop-blur-3xl border-t border-white/5 flex items-end gap-3 md:gap-4 z-10 shadow-[0_-8px_32px_rgba(0,0,0,0.2)]">
      <div className="flex gap-1 mb-0.5">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleSendImage}
          className="h-11 w-11 text-secondaryText hover:text-primaryAccent hover:bg-primaryAccent/10 rounded-2xl transition-all duration-300"
          title="Send Image (Local Asset)"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
        </Button>
      </div>

      <div className="flex-1 relative group">
        <Textarea
          ref={textareaRef}
          placeholder={t("placeholder")}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-[48px] max-h-[140px] py-3.5 pr-4 bg-white/5 border-white/5 focus:border-primaryAccent/30 focus:ring-4 focus:ring-primaryAccent/5 transition-all resize-none shadow-inner rounded-2xl text-[15px] font-medium tracking-tight placeholder:text-secondaryText/40 scrollbar-hide"
        />
      </div>

      <Button
        onClick={handleSend}
        disabled={!text.trim()}
        className={`h-12 p-0 rounded-2xl transition-all duration-500 w-14 flex-shrink-0 relative overflow-hidden group/send ${text.trim()
            ? "bg-primaryAccent hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(var(--color-primaryAccent-rgb),0.3)] text-white"
            : "bg-white/5 text-secondaryText/20 opacity-50 cursor-not-allowed"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/send:opacity-100 transition-opacity duration-500" />
        <span className="w-5 h-5 flex items-center justify-center relative z-10">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={`w-5 h-5 transition-all duration-500 ${text.trim() ? "translate-x-0.5 -translate-y-0.5 scale-110" : ""}`}>
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </span>
      </Button>
    </div>
  );
};
