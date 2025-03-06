"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase"; // Import the initialized client

const emberOptions = [
  "Self-Awareness & Mindset",
  "Emotional Intelligence & Relationships",
  "Skill Development & Knowledge",
  "Health & Well-Being",
  "Purpose & Goal-Setting",
];

type Task = {
  id: number;
  name: string;
  content: string; // Add other fields as needed
};

export default function UserProfile() {
  const user = {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
  };

  const [selectedEmbers, setSelectedEmbers] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleCheckboxChange = (emberType: string) => {
    setSelectedEmbers((prevSelected) =>
      prevSelected.includes(emberType)
        ? prevSelected.filter((type) => type !== emberType)
        : [...prevSelected, emberType]
    );
  };

  useEffect(() => {
    // const fetchTasks = async () => {
    //   if (selectedEmbers.length === 0) {
    //     setTasks([]);
    //     return;
    //   }

    //   const { data, error } = await supabase
    //     .from("Tasks")
    //     .select("*")
    //     .in("Ember Type", selectedEmbers);
    //   console.log(data);
    //   if (error) {
    //     console.error("Error fetching tasks:", error);
    //   } else {
    //     setTasks(data as Task[]);
    //     localStorage.setItem("tasks", JSON.stringify(data))
    //   }
    // };

    // fetchTasks();
    localStorage.setItem("embers", JSON.stringify(selectedEmbers));
  }, [selectedEmbers]);

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
                <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                  {user.firstName}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-custom-white">
                  {user.lastName}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                {user.email}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                {user.phone}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <p className="text-gray-800 p-2 bg-custom-green/50 rounded border border-gray-200">
                {user.location}
              </p>
            </div>
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
            <button className="w-full py-2 px-4 rounded bg-green-200 text-gray-700 font-medium shadow-sm hover:text-custom-white hover:bg-custom-green">
              Edit Profile
            </button>
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}
