import React from "react";
import { PageWrapper } from "@/components/common/PageWrapper";
import { ChatContainer } from "@/components/views/chat/ChatContainer";
import { getData } from "@/services/getData";

export default async function ChatPage() {
  const customers = await getData("customers");

  return (
    <PageWrapper pageName="Chat">
      <ChatContainer initialCustomers={customers} />
    </PageWrapper>
  );
}
