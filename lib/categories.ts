import categories from "../data/categories.json";
import { Category } from "../types";

// returns all categories
export function getCategories(): Category[] {
  return categories;
}

// returns a single category by its slug
export function getCategoryBySlug(slug: string): Category {
  const category = categories.find((c: Category) => c.slug === slug);
  if (!category) throw new Error(`Category with slug ${slug} not found`);
  return category;
}

// returns the display name of a category by its slug
export function getDisplayNamebySlug(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category.displayName;
}
