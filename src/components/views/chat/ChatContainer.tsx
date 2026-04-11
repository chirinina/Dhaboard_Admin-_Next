"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Customer } from "../customers/types";
import { ChatSidebar } from "./ChatSidebar";
import { ChatWindow } from "./ChatWindow";
import { Conversation, Message } from "./types";
import { useTranslations } from "next-intl";

interface ChatContainerProps {
  initialCustomers: Customer[];
}

export const ChatContainer = ({ initialCustomers }: ChatContainerProps) => {
  const t = useTranslations("chat");
  const [showSidebar, setShowSidebar] = useState(true);

  const [conversations, setConversations] = useState<Conversation[]>([]);

  // Initialize conversations when translation is available
  useEffect(() => {
    const baseTime = Date.now();
    const generated = initialCustomers.slice(0, 10).map((customer, index) => ({
      id: `conv-${index}`,
      customer,
      lastMessage:
        index === 0 ? t("mock.lastMessage_0") : t("mock.lastMessage_default"),
      timestamp: new Date(baseTime - index * 3600000).toISOString(),
      unreadCount: index === 0 ? 2 : 0,
      status: index % 3 === 0 ? "online" : index % 3 === 1 ? "busy" : "offline",
      messages: [
        {
          id: "m1",
          senderId: "customer",
          text: t("mock.m1"),
          timestamp: new Date(baseTime - index * 3600000).toISOString(),
          isMe: false,
        },
        ...(index === 0
          ? [
              {
                id: "m_img",
                senderId: "customer",
                imageUrl: "/laptop.png",
                text: t("mock.m_img"),
                timestamp: new Date(
                  baseTime - index * 3600000 + 300000
                ).toISOString(),
                isMe: false,
              },
            ]
          : []),
        {
          id: "m2",
          senderId: "me",
          text: t("mock.m2"),
          timestamp: new Date(
            baseTime - index * 3600000 + 600000
          ).toISOString(),
          isMe: true,
        },
        {
          id: "m3",
          senderId: "customer",
          text: t("mock.m3"),
          timestamp: new Date(
            baseTime - index * 3600000 + 1200000
          ).toISOString(),
          isMe: false,
        },
      ],
    }));
    setConversations(generated);
  }, [initialCustomers, t]);

  const [activeConversationId, setActiveConversationId] = useState<string>(
    ""
  );

  // Set initial active conversation on desktop only
  useEffect(() => {
    if (conversations.length > 0 && !activeConversationId && window.innerWidth >= 640) {
      setActiveConversationId(conversations[0].id);
    }
  }, [conversations, activeConversationId]);

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeConversationId),
    [conversations, activeConversationId]
  );

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    if (window.innerWidth < 640) {
      setShowSidebar(false);
    }
  };

  const handleSendMessage = (text?: string, imageUrl?: string) => {
    if (!activeConversationId || (!text && !imageUrl)) return;

    setConversations((prev) =>
      prev.map((c) => {
        if (c.id === activeConversationId) {
          const newMessage: Message = {
            id: Date.now().toString(),
            senderId: "me",
            text,
            imageUrl,
            timestamp: new Date().toISOString(),
            isMe: true,
          };
          return {
            ...c,
            lastMessage: text || (imageUrl ? (t("lastMessage") + " (Image)") : ""),
            timestamp: newMessage.timestamp,
            messages: [...c.messages, newMessage],
          };
        }
        return c;
      })
    );
  };

  return (
    <div className="flex h-[calc(100vh-140px)] w-full overflow-hidden bg-primaryBg/40 backdrop-blur-md border border-mainBorder rounded-2xl shadow-premium animate-in fade-in zoom-in-95 duration-700 relative">
      <div className={`absolute inset-0 sm:relative flex h-full w-full`}>
        {/* Sidebar */}
        <div className={`
          ${showSidebar ? "translate-x-0" : "-translate-x-full sm:translate-x-0"} 
          transition-transform duration-300 ease-in-out
          w-full sm:w-80 h-full flex-shrink-0 z-20 bg-primaryBg sm:bg-transparent
        `}>
          <ChatSidebar
            conversations={conversations}
            activeId={activeConversationId}
            onSelect={handleSelectConversation}
          />
        </div>

        {/* Chat Window */}
        <div className={`
          flex-1 h-full min-w-0 flex flex-col
          ${!showSidebar ? "translate-x-0" : "translate-x-full sm:translate-x-0"}
          transition-transform duration-300 ease-in-out
          absolute inset-0 sm:relative z-10 bg-primaryBg sm:bg-transparent
        `}>
          {activeConversation ? (
            <ChatWindow
              conversation={activeConversation}
              onSendMessage={handleSendMessage}
              onBack={() => setShowSidebar(true)}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-secondaryText opacity-50 bg-white/5">
              <div className="p-6 rounded-full bg-primaryAccent/10 mb-4 scale-110">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-primaryAccent">
                  <path d="M21 15a2 2 0 0 1-2 2H7l4-4V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10z"></path>
                </svg>
              </div>
              <p className="text-xl font-medium px-6 text-center">{t("selectConversation")}</p>
              <p className="text-sm mt-2 opacity-70 px-6 text-center">{t("connecting")}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
