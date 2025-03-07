"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js"; // Import the User type
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import PositiveQuotes from "./components/PositiveQuotes";

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  ember_preferences: string;
};

const Home = () => {
  const [user, setUser] = useState<User | null>(null); // Fix here
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;

    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      const user = data?.session?.user || null;

      if (error) {
        console.error("Error fetching user:", error);
      }

      if (isMounted) {
        setUser(user);
        setLoading(false);
      }
    };

    fetchUser();

    return () => {
      isMounted = false;
    };
  }, [router]);

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        const { data } = await supabase
          .from("profiles")
          .select()
          .eq("id", user.id);
        if (data && data.length > 0) {
          const profileData = data[0] as Profile;
          setProfile(profileData);
        }
      }
    };
    checkUser();
  }, [user]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      router.replace("/auth/signin");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!user && !profile) {
    router.replace("/auth/signin");
    return null;
  }
  // const tasks: Task[] = []; // Initialize with an empty array
  // const selectedEmbers: string[] = []; // Initialize with an empty array
  console.log(profile);
  return (
    <div className="bg-custom-green text-white min-h-screen">
      <Header />
      <PositiveQuotes />
      <Carousel userProfile={profile as Profile} />
      <div className="absolute top-4 left-4">
        <button
          onClick={handleLogout}
          className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
