import { Model } from "@/types";
import ModelCard from "./modelCard";

interface ModelsGridProps {
  displayModels: Model[];
  title?: string;
}

async function ModelsGrid({ displayModels, title }: ModelsGridProps) {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold md:text-3xl">{title ? title : "3D Models"}</h1>
      <div className="grid grid-auto-fill-md  gap-5">
        {displayModels.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </>
  );
}

export default ModelsGrid;
