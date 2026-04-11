"use client";

import React, { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/shadcn/avatar";
import { MessageItem } from "./MessageItem";
import { MessageInput } from "./MessageInput";
import { Conversation } from "./types";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/common/shadcn/button";

interface ChatWindowProps {
  conversation: Conversation;
  onSendMessage: (text?: string, imageUrl?: string) => void;
  onBack: () => void;
}

export const ChatWindow = ({ conversation, onSendMessage, onBack }: ChatWindowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("chat");
  const locale = useLocale();

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation.messages]);

  return (
    <div className="flex-1 flex flex-col bg-white/[0.01] backdrop-blur-xl overflow-hidden h-full">
      {/* Header */}
      <div className="p-4 md:p-5 border-b border-white/5 bg-primaryBg/80 flex items-center justify-between shadow-xl z-10 backdrop-blur-2xl">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Back Button - Mobile Only */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="sm:hidden -ml-2 h-10 w-10 text-secondaryText hover:text-primaryAccent hover:bg-white/5 rounded-full"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Button>

          <Avatar className="h-10 w-10 md:h-12 md:w-12 shadow-2xl border-2 border-white/5 hover:border-primaryAccent transition-all duration-500 hover:scale-105">
            <AvatarImage src={conversation.customer.photo} alt={conversation.customer.firstName} />
            <AvatarFallback className="bg-gradient-to-br from-primaryAccent/30 to-primaryAccent/10 text-primaryAccent font-bold text-sm md:text-lg">
              {conversation.customer.firstName[0]}
            </AvatarFallback>
          </Avatar>
          
          <div className="min-w-0">
            <h3 className="font-bold text-primaryText leading-none text-base md:text-lg tracking-tight truncate">
              {conversation.customer.firstName} {conversation.customer.lastName}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <span className={`h-2.5 w-2.5 rounded-full ring-4 ring-offset-0 ${
                conversation.status === "online" 
                  ? "bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] ring-green-500/10" 
                  : conversation.status === "busy"
                    ? "bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.6)] ring-amber-500/10"
                    : "bg-gray-400 ring-gray-400/10"
              }`} />
              <span className="text-[10px] md:text-[11px] text-secondaryText font-bold uppercase tracking-[0.1em] opacity-60">
                {t(conversation.status)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-[12px] text-secondaryText hover:text-primaryText hover:bg-white/10 transition-all cursor-default backdrop-blur-md font-semibold tracking-wide">
                {conversation.customer.city}, {conversation.customer.country}
            </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col scroll-smooth scrollbar-hide bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] bg-fixed relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primaryBg/20 via-transparent to-primaryBg/20 pointer-events-none" />
        
        <div className="flex flex-col gap-1 mb-10 relative z-10">
            <div className="mx-auto bg-white/5 text-primaryAccent text-[10px] md:text-[11px] uppercase tracking-[0.2em] px-5 py-2 rounded-full font-black border border-white/10 backdrop-blur-xl shadow-2xl">
                {t("conversationStarted")}
            </div>
            <div className="mx-auto text-[10px] md:text-[11px] text-secondaryText mt-2 font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md opacity-60">
                {new Date(conversation.timestamp).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
        </div>

        <div className="flex flex-col relative z-10">
          {conversation.messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      </div>

      {/* Input */}
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};
