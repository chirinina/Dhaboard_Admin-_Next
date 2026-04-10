import { redirect } from "next/navigation";

import { buildLocalizedPath, routing } from "@/i18n/routing";

export default function RootRedirect() {
  redirect(buildLocalizedPath(routing.defaultLocale, "/"));
}
