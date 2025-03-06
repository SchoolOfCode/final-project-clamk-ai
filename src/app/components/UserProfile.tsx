"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase"; // Import the initialized client
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";

const emberOptions = [
  "Self-Awareness and Mindset",
  "Emotional Intelligence and Relationships",
  "Skill Development and Knowledge",
  "Health and Well-Being",
  "Purpose and Goal-Setting",
];

type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  ember_preferences: string;
};

export default function UserProfile() {
  const [selectedEmbers, setSelectedEmbers] = useState<string[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // We can safely perform our logic after the component is mounted on the client
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("profiles")
          .select()
          .eq("id", user.id);
        if (data && data.length > 0) {
          const profileData = data[0] as Profile;
          setProfile(profileData);
          setFirstName(profileData.first_name);
          setLastName(profileData.last_name);
          setEmail(profileData.email);
          setSelectedEmbers(profileData.ember_preferences.split(","));
        }
      }
    };
    checkUser();
  }, []);

  const handleCheckboxChange = (emberType: string) => {
    setSelectedEmbers((prevSelected) =>
      prevSelected.includes(emberType)
        ? prevSelected.filter((type) => type !== emberType)
        : [...prevSelected, emberType]
    );
  };

  const handleTextInputChange = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "firstName") {
      setFirstName(e.currentTarget.value);
    }

    if (e.currentTarget.name === "lastName") {
      setLastName(e.currentTarget.value);
    }

    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    }
    console.log(e.currentTarget.name, e.currentTarget.value);
  };

  const handleFormSubmit = async () => {
    const updateData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      ember_preferences: selectedEmbers.join(","),
    };

    const { error } = await supabase
      .from("profiles")
      .update(updateData)
      .eq("id", profile?.id);

    if (!error) {
      toast("Updated!");
    }
  };

  console.log(selectedEmbers);

  if (!profile) {
    return <></>;
  }
  return (
    <div className="bg-custom-green min-h-screen pt-20">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white/20 rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-custom-white mb-6">
            User Profile
          </h1>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200"
                  onChange={handleTextInputChange}
                  value={firstName}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  className="text-gray-800 p-2 bg-custom-green/50 rounded border border-custom-white"
                  onChange={handleTextInputChange}
                  value={lastName}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                name="email"
                type="text"
                className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200"
                onChange={handleTextInputChange}
                value={email}
              />
            </div>
            {/* 
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200"
                value={profile.phone}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200"
                value={profile.location}
              />
            </div> */}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-custom-white mb-4">
              Ember Options
            </h2>
            {emberOptions.map((option) => (
              <div key={option} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={option}
                  checked={selectedEmbers.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="mr-2"
                />
                <label htmlFor={option} className="text-custom-white">
                  {option}
                </label>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <button
              className="w-full py-2 px-4 rounded bg-green-200 text-gray-700 font-medium shadow-sm hover:text-custom-white hover:bg-custom-green"
              onClick={handleFormSubmit}
            >
              Edit Profile
            </button>
          </div>
          {/* 
          <div className="mt-8">
            <h2 className="text-xl font-bold text-custom-white mb-4">Tasks</h2>
            {tasks.length > 0 ? (
              <ul>
                {tasks.map((task) => (
                  <li key={task.id} className="text-custom-white mb-2">
                    {task.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-custom-white">No tasks available</p>
            )}
          </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
