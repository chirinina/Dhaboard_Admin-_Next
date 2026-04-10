import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

interface Messages {
  [key: string]: string | Messages;
}

const isMessageRecord = (value: unknown): value is Messages =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const mergeMessages = (base: Messages, overrides: Messages): Messages => {
  const merged: Messages = { ...base };

  for (const [key, overrideValue] of Object.entries(overrides)) {
    const baseValue = merged[key];

    if (isMessageRecord(baseValue) && isMessageRecord(overrideValue)) {
      merged[key] = mergeMessages(baseValue, overrideValue);
      continue;
    }

    merged[key] = overrideValue;
  }

  return merged;
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const baseMessages = (await import("../../messages/en.json"))
    .default as Messages;

  if (locale === "en") {
    return {
      locale,
      messages: baseMessages,
    };
  }

  const localeMessages = (await import(`../../messages/${locale}.json`))
    .default as Messages;

  return {
    locale,
    messages: mergeMessages(baseMessages, localeMessages),
  };
});
