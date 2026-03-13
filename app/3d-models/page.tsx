import type { Metadata } from "next";
import Form from "next/form";
import { getAllModels } from "../../lib/models";
import ModelsGrid from "./components/ModelsGrid";

export const metadata: Metadata = {
  title: "3d models",
};

interface ModelsListPageProps {
  searchParams: {
    search?: string;
  };
}

async function ModelsListPage({ searchParams }: ModelsListPageProps) {
  const search = (await searchParams)?.search?.toLowerCase() || "";
  const modelsData = await getAllModels();

  const displayModels = search
    ? modelsData.filter((model) => model.name.toLowerCase().includes(search))
    : modelsData;

  return (
    <>
      <Form
        action="/3d-models"
        className="w-50 px-5 absolute right-0 md:w-60"
        formMethod="POST"
      >
        <input
          type="text"
          name="search"
          placeholder="Search.."
          autoComplete="off"
          defaultValue={search}
          className="w-full py-2 px-2 text-sm placeholder-gray-500 border-b border-secondary md:text-base"
        />
      </Form>
      <ModelsGrid displayModels={displayModels} />
    </>
  );
}

export default ModelsListPage;
