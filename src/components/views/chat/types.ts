import { Customer } from "../customers/types";

export interface Message {
  id: string;
  senderId: string;
  text?: string;
  imageUrl?: string;
  timestamp: string;
  isMe: boolean;
}

export interface Conversation {
  id: string;
  customer: Customer;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  status: "online" | "offline" | "busy";
  messages: Message[];
}
