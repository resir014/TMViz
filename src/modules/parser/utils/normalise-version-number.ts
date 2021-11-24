export function normaliseVersionNumber(maybeVersion?: string | string[]): number | undefined {
  if (maybeVersion) {
    return Number(Array.isArray(maybeVersion) ? maybeVersion[0] : maybeVersion);
  }

  return undefined;
}
