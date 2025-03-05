"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase.js"; // Make sure supabase client is set up correctly
import { useRouter } from "next/navigation"; // Use next/navigation for client-side routing
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const router = useRouter(); // Use next/navigation

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser(); // Check for active session

      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(user);
      }

      setLoading(false); // After checking, stop the loading state
    };

    fetchUser(); // Fetch user data
  }, [router]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      router.push("/auth/signin"); // Redirect to SignIn page after logout
    }
  };

  // Show loading screen until authentication is checked
  if (loading) return <div>Loading...</div>; // Show loading if authentication is in progress

  if (!user) {
    router.push("/auth/signin"); // Redirect to SignIn page if no user
    return null; // Ensure nothing is rendered if user is not authenticated
  }

  // Render home page content only if the user is authenticated
  return (
    <div className="bg-custom-green text-white">
      <Header />
      <Navbar />
      <Carousel />
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Logout
      </button>
      <Footer />
    </div>
  );
};

export default Home;
