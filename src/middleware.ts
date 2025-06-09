import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  const acceptLanguage = context.request.headers.get("accept-language") || "";
  const lang = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase() || "fr";
  const supported = ["fr", "en"];
  const redirectLang = supported.includes(lang) ? lang : "fr";

  if (pathname === "/") {
    return context.redirect(`/${redirectLang}`, 302);
  }

  if (pathname.startsWith("/es/")) {
    const newPath = pathname.replace(/^\/es/, `/${redirectLang}`);
    return context.redirect(newPath, 302);
  }

  if (pathname === "/404") {
    return context.redirect(`/${redirectLang}/404`, 302);
  }

  return next();
});
