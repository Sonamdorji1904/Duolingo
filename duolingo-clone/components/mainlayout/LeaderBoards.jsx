// app/leaderboard/page.jsx (or wherever you route this)
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Leaderboard() {0
  const router = useRouter();

  const handleStartLesson = () => {
    // Navigate to lessons page or start a specific lesson
    router.push("/lessons");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-center">
      <div className="relative w-65 h-40 mb-6">
        <Image
          src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg" // Make sure to put your image in the public/images folder or adjust accordingly
          alt="Leaderboard Locked"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Unlock Leaderboards!</h1>
      <p className="text-gray-600 mb-6">
        Complete <span className="font-semibold">9 more lessons</span> to start competing
      </p>
      <button
        onClick={handleStartLesson}
        className="bg-white text-blue-500 hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg border border-gray-300 shadow"
      >
        START A LESSON
      </button>


      {/* Fake leaderboard preview below */}
      <div className="mt-10 space-y-4 w-full max-w-md">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-100 opacity-50"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full" />
              <div className="w-24 h-4 bg-gray-300 rounded" />
            </div>
            <div className="w-10 h-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
