import { Model } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import Pill from "./pill";

interface ModelCardProps {
  model: Model;
}

function ModelCard({ model }: ModelCardProps) {
  return (
    <Link href={`/3d-models/${model.id}`}>
      <div className="model-card card bg-main-body h-full flex flex-col border border-main-br rounded-lg overflow-hidden">
        <div className="img-container relative aspect-square">
          <Image
            src="/model.png"
            alt={model.name}
            fill
            className="inset-0 object-contain"
          />
        </div>
        <div className="card-content flex flex-col gap-2 p-3.75 grow">
          <h3 className="text-xl">{model.name}</h3>
          <p className="text-sm grow">{model.description}</p>
          {/* <Pill className="category block min-w-15 w-fit text-base text-primary text-center py-1 px-2 border border-main-br rounded-2xl"> */}
          <Pill title={model.category} />
          <div className="foot">
            <button
              type="button"
              className="likes flex-center gap-1.5 text-sm text-secondary"
            >
              <FaRegHeart />
              {model.likes}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ModelCard;
