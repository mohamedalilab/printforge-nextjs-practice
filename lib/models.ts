import modelsData from "../data/models.json";
import type { Model } from "../types";

// returns all models, optionally filtered by category
export async function getAllModels(category?: string): Promise<Model[]> {
  // mock data for testing
  const displayModels = category
    ? modelsData.filter((model: Model) => model.category === category)
    : modelsData;
  return displayModels;
}

// returns a single model by its id
export async function getModelById(id: string | number): Promise<Model> {
  // mock data for testing
  const foundModel = modelsData.find(
    (model: Model) => model.id.toString() === id.toString()
  );
  // throw if not found
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`);
  }
  return foundModel;
}
