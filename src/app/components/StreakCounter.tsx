//import {useStreak} from "use-streak"; 

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
  </div> 
  ); 
  }
  