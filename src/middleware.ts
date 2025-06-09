import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  if (pathname !== "/") {
    return next();
  }

  const acceptLanguage = context.request.headers.get("accept-language") || "";
  const lang = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase() || "fr";

  const supported = ["fr", "en"];
  const redirectLang = supported.includes(lang) ? lang : "fr";

  return context.redirect(`/${redirectLang}`, 302);
});
