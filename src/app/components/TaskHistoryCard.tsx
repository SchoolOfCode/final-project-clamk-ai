interface TaskHistoryCardProps {
  emberType: string;
  taskInstructions: string;
}
export default function TaskHistoryCard({
  emberType,
  taskInstructions,
}: TaskHistoryCardProps) {
  return (
    <div className="bg-white text-custom-green rounded-md shadow p-4 m-2 hover:scale-103 hover:shadow-xl hover:rotate-1 transition-scale-shadow duration-100 ease-out h-80 w-64 flex flex-col justify-between">
      <h3 className="font-bold text-black text-center p-3">{emberType}</h3>
      <p className="text-black text-center p-3 flex-grow">{taskInstructions}</p>
    </div>
  );
}
