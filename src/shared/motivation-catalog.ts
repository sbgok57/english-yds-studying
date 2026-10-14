export const MOTIVATION_CATEGORIES = ["focus", "discipline", "exam-stress", "confidence", "rest", "listening"] as const;
export type MotivationCategory = (typeof MOTIVATION_CATEGORIES)[number];
export type MotivationPlatform = "youtube" | "spotify";

export type MotivationResource = {
  id: string;
  title: string;
  creator: string;
  description: string;
  platform: MotivationPlatform;
  /** YouTube video ID (11 safe chars) or Spotify episode ID (22 alphanumeric chars). */
  embedId: string;
  category: MotivationCategory;
  language: string;
  durationMinutes?: number;
  /** Only curated, checked, authorized entries should be shown as verified. */
  verified: boolean;
};

const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;
const SPOTIFY_EPISODE_ID = /^[A-Za-z0-9]{22}$/;

export function isSafeMotivationResource(resource: MotivationResource): boolean {
  if (!resource.verified || !resource.id.trim() || !resource.title.trim() || !resource.creator.trim()) return false;
  if (!MOTIVATION_CATEGORIES.includes(resource.category)) return false;
  if (resource.durationMinutes !== undefined && (!Number.isFinite(resource.durationMinutes) || resource.durationMinutes < 0 || resource.durationMinutes > 24 * 60)) return false;
  return resource.platform === "youtube"
    ? YOUTUBE_ID.test(resource.embedId)
    : resource.platform === "spotify" && SPOTIFY_EPISODE_ID.test(resource.embedId);
}

export function motivationEmbedUrl(resource: MotivationResource): string | null {
  if (!isSafeMotivationResource(resource)) return null;
  return resource.platform === "youtube"
    ? `https://www.youtube-nocookie.com/embed/${resource.embedId}`
    : `https://open.spotify.com/embed/episode/${resource.embedId}`;
}

export function motivationExternalUrl(resource: MotivationResource): string | null {
  if (!isSafeMotivationResource(resource)) return null;
  return resource.platform === "youtube"
    ? `https://www.youtube.com/watch?v=${resource.embedId}`
    : `https://open.spotify.com/episode/${resource.embedId}`;
}

export function filterMotivationResources(
  resources: readonly MotivationResource[],
  category: MotivationCategory | "all",
  search: string,
): MotivationResource[] {
  const normalizedSearch = search.trim().toLocaleLowerCase("tr-TR");
  return resources.filter((resource) => {
    if (!isSafeMotivationResource(resource)) return false;
    if (category !== "all" && resource.category !== category) return false;
    if (!normalizedSearch) return true;
    return [resource.title, resource.creator, resource.description, resource.language]
      .some((part) => part.toLocaleLowerCase("tr-TR").includes(normalizedSearch));
  });
}
