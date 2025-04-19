"use client";

import Image from "next/image";

export default function Quests() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-purple-400 text-white rounded-2xl p-4 w-full h-50 flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-1">Welcome!</h2>
          <p className="text-xl">Complete quests to earn rewards! <br /> Quests refresh every day.</p>
        </div>
        <div className="w-40 h-40">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/64d0bbcd8f4e6d5018502540f1e0094b.svg"
            alt="Duo mascot"
          />
        </div>
      </div>


      {/* Daily Quests Title */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-800">Daily Quests</h3>
        <div className="text-orange-500 font-semibold text-sm flex items-center space-x-1">
          <span>⏰</span>
          <span>1 HOUR</span>
        </div>
      </div>

      {/* Completed Quest */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg" alt="" />
          <div>
            <p className="font-semibold text-gray-700">Earn 10 XP</p>
            <div className="bg-yellow-200 h-4 rounded-full w-100 mt-1 relative">
              <div className="bg-yellow-500 h-4 rounded-full w-full absolute top-0 left-0" />
              <p className="text-xs text-yellow-800 text-center relative z-10">10 / 10</p>
            </div>
          </div>
        </div>
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/33af8ba58d22f3ea21279e9a84756833.svg" alt=""/> {/* Replace with a suitcase image if needed */}
      </div>

      {/* Locked Quest */}
      <div className="bg-gray-100 border border-gray-200 rounded-xl p-4 flex items-center text-gray-400">
        <img src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/b4d50b5a518e587420bed74bcb381ac4.svg" alt="" /><br /><br />
        <p className="font-medium">More quests unlock soon</p>
      </div>
    </div>
  );
}
