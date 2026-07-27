// Turns a club/team name into a URL-safe slug, e.g.
// "Manchester City" -> "manchester-city". Used both when linking
// to a tag page and when generating the tag pages themselves, so
// they always agree on the same URL for a given tag name.
export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
