// TaskHistoryCard.tsx
interface TaskHistoryCardProps {
  emberType: string;
  taskInstructions: string;
}

export default function TaskHistoryCard({
  emberType,
  taskInstructions,
}: TaskHistoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full flex items-center">
      <div className="flex-shrink-0 mr-4">
        <div className="w-2 h-full bg-custom-orange rounded-full"></div>
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-gray-500">{emberType} 🗹</h3>
        <p className="text-base font-semibold text-gray-800">
          {taskInstructions}
        </p>
      </div>
    </div>
  );
}
