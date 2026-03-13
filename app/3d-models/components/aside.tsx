import { getCategories } from "@/lib/categories";
import AsideLink from "./asideLink";

function Sidebar() {
  return (
    <aside className="sticky top-0 min-w-full h-fit pt-5 sm:min-w-50 scrollbar-hide">
      <div className="relative">
        <nav className="flex gap-2 scrollbar-hide overflow-x-auto md:overflow-visible">
          <ul className="flex gap-2 whitespace-nowrap md:block">
            <AsideLink path="/3d-models">all</AsideLink>
            {getCategories().map((category) => (
              <AsideLink
                key={category.slug}
                path={`/3d-models/categories/${category.slug}`}
              >
                {category.displayName}
              </AsideLink>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
