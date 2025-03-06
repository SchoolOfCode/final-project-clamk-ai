"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";

export default function Profile() {
  return (
    <div className="bg-custom-green text-white">
      <Header />
      <UserProfile />
      <Footer />
    </div>
  );
}
