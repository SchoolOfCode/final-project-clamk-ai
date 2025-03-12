//import {useStreak} from "use-streak";
import { startTutorial } from "./Carousel";

export default function StreakCounter() {
  // const today = new Date();
  // const { currentCount } = useStreak(localStorage, today);
  return (
    <div className="text-center">
      <h2 className="text-xl mb-4">Current Streak </h2>
      <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-green-500 rounded-full">
        <span className="text-3xl" role="img" aria-label="green heart emoji">
          💚
        </span>
      </div>
      <p className="mt-2 text-lg">
        3 days
        {/* {currentCount} day{currentCount > 1 ? "s" : ""} */}
      </p>
      <button
        onClick={startTutorial}
        className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 py-2 px-6 rounded-xl transition-colors text-2xl"
      >
        Tutorial
      </button>
    </div>
  );
}
