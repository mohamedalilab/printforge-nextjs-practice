interface PillProps {
  title: string;
}
function Pill({ title }: PillProps) {
  return (
    <span className="tag min-w-15 w-fit text-base text-primary capitalize text-center py-1 px-2 border border-main-br rounded-2xl">
      {title}
    </span>
  );
}

export default Pill;
