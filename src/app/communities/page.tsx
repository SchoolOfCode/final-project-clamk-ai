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

  // DO NOT REMOVE USEEFFECT- THIS STOPS IT SENDING ABOUT 4000000000 REQUESTS TO THE SERVER THANKS
  useEffect(() => {
    async function fetchCommunities() {
      try {
        setIsLoading(true);
        // Use the proper API endpoint path
        const response = await fetch("/api/data");

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
          ? "bg-custom-green text-white"
          : "bg-white text-custom-green"
      } 
      hover:bg-custom-green hover:text-white transition-colors duration-300 ease-in-out
    `;
  };

  return (
    <div className="bg-custom-green min-h-screen text-white">
      <Header />
      <div className="container mx-auto py-6 px-4 pt-30 pb-30">
        <h2 className="text-2xl text-custom-white font-bold mb-4">
          Communities
        </h2>

        {isLoading && <p>Loading communities...</p>}
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
                Self-Awareness and Mindset
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
