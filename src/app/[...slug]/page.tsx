import { redirect } from "next/navigation";

import { buildLocalizedPath, routing } from "@/i18n/routing";

export default async function LocaleFallbackRedirect({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const path = slug.length > 0 ? `/${slug.join("/")}` : "/";

  redirect(buildLocalizedPath(routing.defaultLocale, path));
}
