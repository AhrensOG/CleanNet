import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  const supported = ["fr", "en"];
  const acceptLanguage = context.request.headers.get("accept-language") || "";
  const headerLang = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();

  // Leer cookie (si existe)
  const cookieLang = context.cookies.get("preferred_lang")?.value;
  const isValidCookieLang = cookieLang && supported.includes(cookieLang);
  const lang = isValidCookieLang
    ? cookieLang!
    : supported.includes(headerLang) ? headerLang : "fr";

  const redirectLang = supported.includes(lang) ? lang : "fr";

  const validPaths = [
    "/fr/",
    "/fr/services/",
    "/fr/contact/",
    "/fr/404/",
    "/en/",
    "/en/services/",
    "/en/contact/",
    "/en/404/",
  ];

  if (pathname === "/") {
    return context.redirect(`/${redirectLang}/`, 302);
  }

  if (pathname.startsWith("/es/")) {
    const newPath = pathname.replace(/^\/es/, `/${redirectLang}`);
    return context.redirect(newPath, 302);
  }

  if (pathname === `/${redirectLang}/404` || pathname === `/${redirectLang}/404/`) {
    return next();
  }

  if (!validPaths.includes(pathname.endsWith("/") ? pathname : pathname + "/")) {
    return context.redirect(`/${redirectLang}/404/`, 302);
  }

  return next();
});
