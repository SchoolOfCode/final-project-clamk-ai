interface TaskHistoryCardProps {
    emberType: string;
    taskInstructions: string;
  }
  
  export default function TaskHistoryCard({
    emberType,
    taskInstructions,
  }: TaskHistoryCardProps) {
    return (
      <div className="bg-white text-custom-green rounded-md shadow p-4 m-2 hover:scale-103 hover:shadow-xl hover:rotate-1 transition-scale-shadow duration-100 ease-out">
        <h3 className="font-medium text-center p-3">{emberType}</h3>
        <p className="p-3">{taskInstructions}</p>
      </div>
    );
  }
  