/**
 * Check if a route should be marked as active.
 *
 * Handles:
 * - exact match  (/posts === /posts)
 * - nested routes (/posts/123, /posts/edit/1)
 */

export function isActivePath(pathname: string, path: string) {
  return pathname === path || pathname.startsWith(`${path}/`);
}
