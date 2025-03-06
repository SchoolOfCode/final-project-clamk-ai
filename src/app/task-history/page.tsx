import Header from "../components/Header";
import Footer from "../components/Footer";
import TaskHistoryCard from "../components/TaskHistoryCard";


interface CompletedTasks {
  id: number;
  emberType: string;
  taskInstructions: string;
}

const completedTasks: CompletedTasks[] = [
  {
    id: 1,
    emberType: "Self-Awareness & Mindset",
    taskInstructions: "Write down one thing you're proud of today."
  },
  {
    id: 2,
    emberType: "Self-Awareness & Mindset",
    taskInstructions: "Take 5 minutes for a mindfulness exercise to connect with your thoughts."
  },
  {
    id: 3,
    emberType: "Self-Awareness & Mindset",
    taskInstructions: "Reflect on a challenging situation today—what did you learn from it?"
  }
];

export default function TaskHistory() {
  return (
    <div className="bg-custom-green min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <h2 className="text-2xl text-custom-white font-bold text-center mt-20 mb-4">
          Completed Tasks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {completedTasks.map((completedTask: CompletedTasks) => (
            <TaskHistoryCard
              key={completedTask.id}
              emberType={completedTask.emberType}
              taskInstructions={completedTask.taskInstructions}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}