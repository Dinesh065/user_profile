import React, { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-3xl"></div>

      <div className="absolute w-80 h-80 bg-indigo-500 rounded-full opacity-20 blur-3xl top-20 left-10"></div>
      <div className="absolute w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl bottom-10 right-10"></div>

      {user ? (
        <ProfileCard user={user} />
      ) : (
        <p className="text-white text-xl font-semibold animate-pulse">Loading...</p>
      )}
    </div>
  );
};

export default Home;
