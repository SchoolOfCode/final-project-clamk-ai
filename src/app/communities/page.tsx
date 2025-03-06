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
}

export default function Communities() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {communities.map((community) => (
              <CommunityCard
                key={community.id}
                name={community.name}
                purpose={community.purpose}
                url={community.link}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
