import { getDisplayNamebySlug } from "@/lib/categories";
import { getAllModels } from "@/lib/models";
import ModelsGrid from "../../components/ModelsGrid";

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const categoryName = getDisplayNamebySlug(categorySlug);

  const modelsData = await getAllModels(categorySlug || "");
  return <ModelsGrid displayModels={modelsData} title={categoryName} />;
}

export default CategoryPage;
