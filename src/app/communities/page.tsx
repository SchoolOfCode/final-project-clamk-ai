"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunityCard from "../components/CommunityCard";
import { useState, useEffect } from "react";

interface Community {
  id: number;
  name: string;
  purpose: string;
  link: string;
  ember_type: string;
}

export default function Communities() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [selectedEmberType, setSelectedEmberType] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCommunities() {
      try {
        setIsLoading(true);
        // Use the proper API endpoint path
        const response = await fetch("/api/communities");

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setCommunities(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch communities"
        );
        console.error("Failed to fetch communities:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCommunities();
  }, []);

  const filteredCommunities = selectedEmberType
    ? communities.filter(
        (community) => community.ember_type === selectedEmberType
      )
    : communities;

  const getButtonClasses = (type: string) => {
    return `
      py-2 px-4 rounded-md 
      ${
        selectedEmberType === type
          ? "bg-emerald-800 text-white"
          : "bg-custom-white text-custom-green"
      } 
      hover:bg-emerald-800 hover:text-white transition-colors duration-300 ease-in-out
    `;
  };

  return (
    <div className="bg-custom-green min-h-screen text-white">
      <Header />
      <div className="container mx-auto py-6 px-4 pt-30 pb-30">
        <h2 className="text-3xl text-center text-custom-white font-bold mb-4">
          Communities
        </h2>

        {isLoading && (
          <div
            className="flex justify-center items-center absolute inset-0"
            role="status"
          >
            <svg
              aria-hidden="true"
              className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        {error && <p className="text-red-400">Error: {error}</p>}

        {!isLoading && !error && (
          <>
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                className={getButtonClasses("Self-Awareness and Mindset")}
                onClick={() =>
                  setSelectedEmberType("Self-Awareness and Mindset")
                }
              >
                Self Awareness and Mindset
              </button>
              <button
                className={getButtonClasses(
                  "Emotional Intelligence and Relationships"
                )}
                onClick={() =>
                  setSelectedEmberType(
                    "Emotional Intelligence and Relationships"
                  )
                }
              >
                Emotional Intelligence and Relationships
              </button>
              <button
                className={getButtonClasses("Skill Development and Knowledge")}
                onClick={() =>
                  setSelectedEmberType("Skill Development and Knowledge")
                }
              >
                Skill Development and Knowledge
              </button>
              <button
                className={getButtonClasses("Health and Wellbeing")}
                onClick={() => setSelectedEmberType("Health and Wellbeing")}
              >
                Health and Wellbeing
              </button>
              <button
                className={getButtonClasses("Purpose and Goal Setting")}
                onClick={() => setSelectedEmberType("Purpose and Goal Setting")}
              >
                Purpose and Goal Setting
              </button>
              <button
                className={getButtonClasses("")}
                onClick={() => setSelectedEmberType("")}
              >
                Clear Filter
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCommunities.map((community) => (
                <CommunityCard
                  key={community.id}
                  name={community.name}
                  purpose={community.purpose}
                  url={community.link}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
