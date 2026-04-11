"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/common/shadcn/avatar";
import { Badge } from "@/components/common/shadcn/badge";
import { Input } from "@/components/common/shadcn/input";
import { SearchIcon } from "@/assets/icons/SearchIcon";
import { Conversation } from "./types";
import { useTranslations } from "next-intl";

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const ChatSidebar = ({ conversations, activeId, onSelect }: ChatSidebarProps) => {
  const [search, setSearch] = useState("");
  const t = useTranslations("chat");
  const tMenu = useTranslations("sideMenu");

  const filteredConversations = conversations.filter((c) =>
    `${c.customer.firstName} ${c.customer.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full sm:w-80 border-r border-mainBorder bg-navigationBg/20 flex flex-col h-full">
      <div className="p-4 md:p-6 border-b border-mainBorder bg-primaryBg/40">
        <h2 className="text-2xl font-bold mb-5 bg-gradient-to-r from-primaryAccent to-primaryAccent/60 bg-clip-text text-transparent">
          {tMenu("chat")}
        </h2>
        <div className="relative group">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-secondaryText group-focus-within:text-primaryAccent transition-colors">
            <SearchIcon />
          </span>
          <Input
            placeholder={t("searchPlaceholder")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-11 bg-secondaryBg/40 border-mainBorder focus:border-primaryAccent focus:ring-1 focus:ring-primaryAccent/20 transition-all rounded-xl"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-2 scrollbar-hide space-y-1 px-2">
        {filteredConversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={`w-full p-3 flex items-center gap-3 transition-all relative rounded-xl group ${
              activeId === conv.id 
                ? "bg-primaryAccent/10 border border-primaryAccent/20" 
                : "hover:bg-primaryAccent/5 border border-transparent"
            }`}
          >
            <div className="relative">
              <Avatar className="h-12 w-12 border border-mainBorder shadow-sm group-hover:scale-105 transition-transform duration-300">
                <AvatarImage src={conv.customer.photo} alt={conv.customer.firstName} />
                <AvatarFallback className="bg-primaryAccent/20 text-primaryAccent font-bold">
                  {conv.customer.firstName[0]}
                </AvatarFallback>
              </Avatar>
              <span
                className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-primaryBg transition-colors duration-300 ${
                  conv.status === "online" 
                    ? "bg-green-500" 
                    : conv.status === "busy" 
                      ? "bg-amber-500" 
                      : "bg-gray-400"
                }`}
              />
            </div>
            
            <div className="flex-1 min-w-0 text-left">
              <div className="flex justify-between items-center mb-0.5">
                <span className={`font-semibold text-sm truncate ${activeId === conv.id ? "text-primaryAccent" : "text-primaryText"}`}>
                  {conv.customer.firstName} {conv.customer.lastName}
                </span>
                <span className="text-[10px] text-secondaryText tabular-nums font-medium opacity-70">
                  {new Date(conv.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-xs text-secondaryText truncate leading-tight opacity-70 group-hover:opacity-100 transition-opacity">
                {conv.lastMessage}
              </p>
            </div>

            {conv.unreadCount > 0 && (
              <Badge className="bg-primaryAccent text-white h-5 min-w-[20px] p-1 flex items-center justify-center rounded-full text-[10px] shadow-sm animate-pulse">
                {conv.unreadCount}
              </Badge>
            )}
          </button>
        ))}
        {filteredConversations.length === 0 && (
          <div className="p-8 text-center opacity-40">
            <p className="text-xs font-medium italic">{t("noConversations")}</p>
          </div>
        )}
      </div>
    </div>
  );
};
