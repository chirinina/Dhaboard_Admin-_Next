"use client";

import React from "react";
import { Message } from "./types";

interface MessageItemProps {
  message: Message;
}

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <div
      className={`flex w-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out ${
        message.isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] md:max-w-[70%] px-5 py-3 rounded-2xl relative group transition-all duration-300 ${
          message.isMe
            ? "bg-gradient-to-br from-primaryAccent to-primaryAccent/80 text-white rounded-br-none shadow-[0_8px_16px_rgba(var(--color-primaryAccent-rgb),0.2)]"
            : "bg-white/[0.03] backdrop-blur-md border border-white/10 text-primaryText rounded-bl-none shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
        }`}
      >
        {message.imageUrl && (
          <div className="mb-3 overflow-hidden rounded-xl border border-white/5 shadow-2xl relative group/img">
            <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300 z-10" />
            <img 
              src={message.imageUrl} 
              alt="Uploaded" 
              className="w-full h-auto object-cover max-h-[350px] group-hover/img:scale-105 transition-transform duration-1000 ease-out cursor-pointer relative z-0"
              loading="lazy"
            />
          </div>
        )}
        
        {message.text && (
          <p className="whitespace-pre-wrap leading-relaxed text-[15px] font-medium tracking-tight">
            {message.text}
          </p>
        )}

        <div
          className={`text-[10px] mt-2 flex items-center gap-1.5 opacity-40 font-semibold uppercase tracking-widest ${
            message.isMe ? "justify-end" : "justify-start"
          }`}
        >
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          {message.isMe && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3 text-white">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
