export const SUPPORTED_LANGS = ["fr", "en"] as const;

export function getLangFromPath(path: string): string {
  const firstSegment = path.split("/").filter(Boolean)[0];
  return SUPPORTED_LANGS.includes(firstSegment as any) ? firstSegment : "fr";
}

export function buildHreflangs(currentPath: string) {
  const cleanPath = currentPath.replace(/^\/(fr|en)/, "");
  return SUPPORTED_LANGS.map((code) => ({
    code,
    url: `https://www.clean-net.ch/${code}${cleanPath || "/"}`
  }));
}