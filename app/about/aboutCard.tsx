import { IconType } from "react-icons";

interface AboutCardProps {
  cardData: {
    title: string;
    body: string;
    Icon: IconType;
  };
}

function AboutCard({ cardData }: AboutCardProps) {
  return (
    <article className="p-2">
      <div className="text-xl font-semibold flex items-center gap-2 mb-2">
        <cardData.Icon />
        <h3>{cardData.title}</h3>
      </div>
      <p className="text-secondary">{cardData.body}</p>
    </article>
  );
}

export default AboutCard;
