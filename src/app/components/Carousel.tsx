"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { supabase } from "../../lib/supabase"; // Import the initialized client

type Task = {
  id: number;
  name: string;
  content: string; // Add other fields as needed
};

const Carousel = ({
  tasks,
  selectedEmbers,
}: {
  tasks: Task[];
  selectedEmbers: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(
    new Array(tasks.length).fill(false)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const [cards, setCards] = useState<Task[]>(tasks);

  useEffect(() => {
    const fetchTasks = async () => {
      if (selectedEmbers.length === 0) {
        setCards([]);
        return;
      }

      const { data, error } = await supabase
        .from("Tasks")
        .select("*")
        .in("Ember Type", selectedEmbers);

      if (error) {
        console.error("Error fetching tasks:", error);
      } else {
        setCards(data as Task[]);
      }
    };

    fetchTasks();
  }, [selectedEmbers]);

  // Handle card completion
  const handleComplete = (index: number) => {
    const newCompleted = [...completed];
    newCompleted[index] = true;
    setCompleted(newCompleted);
  };

  // Move to next card
  const handleNext = () => {
    if (isTransitioning) return;

    // Handle transition from last to first card
    if (currentIndex === cards.length - 1) {
      setIsTransitioning(true);
      // First set to an intermediate position
      setCurrentIndex(cards.length);

      // After animation completes, reset to position 0 without animation
      setTimeout(() => {
        setSkipAnimation(true);
        setCurrentIndex(0);

        // Re-enable animations after the reset
        setTimeout(() => {
          setSkipAnimation(false);
          setIsTransitioning(false);
        }, 50);
      }, 700);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Move to previous card
  const handlePrev = () => {
    if (isTransitioning) return;

    // Handle transition from first to last card
    if (currentIndex === 0) {
      setIsTransitioning(true);
      // First set to an intermediate position
      setCurrentIndex(-1);

      // After animation completes, reset to position cards.length - 1 without animation
      setTimeout(() => {
        setSkipAnimation(true);
        setCurrentIndex(cards.length - 1);

        // Re-enable animations after the reset
        setTimeout(() => {
          setSkipAnimation(false);
          setIsTransitioning(false);
        }, 50);
      }, 700);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="pb-40 h-screen w-full flex flex-col items-center justify-center bg-custom-green overflow-hidden">
      <div className="relative w-full h-96 perspective">
        {/* Carousel container */}
        <div
          className={`absolute w-full h-full ${
            skipAnimation ? "" : "transition-transform duration-700 ease-out"
          }`}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentIndex * -120}deg)`,
          }}
        >
          {/* Generate all cards */}
          {cards.map((task, index) => {
            const radius = 265; // Distance from center - cards are closer together
            const isActive = index === currentIndex % cards.length;

            return (
              <div
                key={index}
                className={`absolute border-3 border-custom-white top-0 left-0 right-0 mx-auto w-80 h-100 rounded-full shadow-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  completed[index]
                    ? "bg-radial from-emerald-700 from-40% to-emerald-900"
                    : "bg-radial from-green-200 from-40% to-custom-green text-gray-600"
                }`}
                style={{
                  transform: `rotateY(${
                    index * 120
                  }deg) translateZ(${radius}px)`,
                  opacity: isActive ? 1 : 0.2, // Active card has full opacity, others slightly dimmed
                }}
              >
                <div>
                  <h2 className="text-2xl font-bold pt-25 text-center mb-3">
                    {task.name}
                  </h2>
                  <p className="text-center">{task.content}</p>
                </div>
                <button
                  onClick={() => handleComplete(index)}
                  disabled={completed[index]}
                  className={`mt-4 py-3 px-6 rounded-lg self-center transition-all duration-300 
                    ${
                      completed[index]
                        ? "bg-green-100 text-green-800 cursor-not-allowed"
                        : "bg-custom-white hover:bg-gray-100 text-gray-800"
                    } font-semibold flex items-center gap-2`}
                >
                  {completed[index] ? (
                    <>
                      <Check className="text-green-600" size={20} />
                      <span>Completed</span>
                    </>
                  ) : (
                    "Complete"
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="mt-12 flex gap-6">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 py-2 px-6 rounded-full transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 py-2 px-6 rounded-full transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
