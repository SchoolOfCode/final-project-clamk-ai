"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import "intro.js/introjs.css";
import introJs, { IntroJs } from "intro.js";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState([false, false, false]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

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
    if (currentIndex === 2) {
      setIsTransitioning(true);
      // First set to an intermediate position
      setCurrentIndex(3);

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

      // After animation completes, reset to position 2 without animation
      setTimeout(() => {
        setSkipAnimation(true);
        setCurrentIndex(2);

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

  // Card content
  const cards = [
    {
      title: "First Task",
      content: "This is the content for the first task in the carousel",
    },
    {
      title: "Second Task",
      content: "This is the content for the second task in the carousel",
    },
    {
      title: "Third Task",
      content: "This is the content for the third task in the carousel",
    },
  ];

  // starts intro tut
  useEffect(() => {
    const intro: IntroJs = introJs();
    intro.setOptions({
      steps: [
        {
          element: document.getElementById("hero") as HTMLElement,
          intro: "This is where your tasks are located.",
          position: "top",
        },
        {
          element: document.getElementById("complete") as HTMLElement,
          intro: "Click here to mark the task as completed.",
          position: "top",
        },
        {
          element: document.getElementById("prevBtn") as HTMLElement,
          intro: "Use this button to navigate to the previous task.",
          position: "left",
        },
        {
          element: document.getElementById("nextBtn") as HTMLElement,
          intro: "Click here to move to the next task!",
          position: "right",
        },
      ],
      showProgress: true,
      nextLabel: "Next",
      prevLabel: "Back",
      skipLabel: "Skip",
    });

    intro.start();
  }, []); // the tut only runs on mount

  return (
    <div className="pb-40 w-full flex flex-col items-center justify-center bg-custom-green overflow-hidden">
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
          {/* Generate all three cards */}
          {cards.map((card, index) => {
            const radius = 265; // Distance from center - cards are closer together
            const isActive = index === currentIndex % 3;

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
                    {card.title}
                  </h2>
                  <p className="text-center" id="hero">
                    {card.content}
                  </p>
                </div>
                <button
                  id="complete"
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
          id="prevBtn"
          onClick={handlePrev}
          disabled={isTransitioning}
          className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-emerald-400 py-2 px-6 rounded-full transition-colors"
        >
          Previous
        </button>
        <button
          id="nextBtn"
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
