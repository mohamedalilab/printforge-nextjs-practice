import Image from "next/image";
import { getModelById } from "@/lib/models";
import { FaRegHeart } from "react-icons/fa";
import Pill from "../components/pill";

interface ModelPageProps {
  params: Promise<{ modelId: string }>;
}

async function ModelPage({ params }: ModelPageProps) {
  const { modelId } = await params;
  const modelData = await getModelById(modelId);
  const dateAdded = new Date(modelData.dateAdded).toDateString();

  return (
    <div className="flex flex-col justify-center gap-5 lg:flex-row lg:items-center lg:gap-10">
      <figure className="img-container relative aspect-square overflow-hidden rounded-lg w-full lg:w-120">
        <Image
          className="object-cover"
          src="/model.png"
          alt={modelData.name}
          fill
          priority
        />
      </figure>
      <section className="model-info flex flex-col gap-2.5 lg:gap-5">
        <div className="likes-btn">
          <button
            type="button"
            className="flex-center gap-2 text-xl text-secondary"
          >
            <FaRegHeart />
            {modelData.likes}
          </button>
        </div>
        <h2 className="text-3xl">{modelData.name}</h2>
        <div className="model-tags flex gap-2.5">
          <Pill title={modelData.category} />
          <Pill title=" upgrade" />
        </div>
        <p className="text-xl">{modelData.description}</p>
        <div className="date mt-5">Added on {dateAdded}</div>
      </section>
    </div>
  );
}

export default ModelPage;
