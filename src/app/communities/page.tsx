"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CommunityCard from "../components/CommunityCard";
import { useState, useEffect } from "react";
import { GET } from "../api/data/route";

export default function Communities() {
  const [communities, setCommunities] = useState([]);

  // DO NOT REMOVE USEEFFECT- THIS STOPS IT SENDING ABOUT 4000000000 REQUESTS TO THE SERVER THANKS
  useEffect(() => {
    async function fetchCommunities() {
      const response = await GET();
      const data = await response.json();
      setCommunities(data);
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
      </div>
      <Footer />
    </div>
  );
}
