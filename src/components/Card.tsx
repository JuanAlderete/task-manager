interface CardProps {
  className?: string;
  title: string;
  priority: string;
  date: string | Date;
}

function Card(CardProps: CardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border border-[var(--sidebar-border)] rounded-lg p-4 w-fit">
      <h1 className="font-semibold text-pretty">{CardProps.title}</h1>
      <div className="flex justify-between items-center gap-2">
        <div className="flex rounded-full bg-green-200 text-green-500 py-1 px-2 text-sm">
          {CardProps.priority}
        </div>
        <p className="text-gray-400 text-sm">
          {CardProps.date ? new Date(CardProps.date).toDateString() : ""}
        </p>
      </div>
    </div>
  );
}

export default Card;
