'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { supabase } from "../lib/supabaseClient";

const menu = [
  {
    label: "Learn",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
    path: "/learn",
  },
  {
    label: "Letters",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/6793432722e61b6dd0e3ffd4d0fd0115.svg",
    path: "/letters",
  },
  {
    label: "Leaderboards",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
    path: "/leaderboards",
  },
  {
    label: "Quests",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
    path: "/quests",
  },
  {
    label: "Shop",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg",
    path: "/shop",
  },
  {
    label: "Profile",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg",
    path: "/profile",
  },
  {
    label: "More",
    iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg",
    path: "#",
    isMore: true,
  },
];

const moreDropdownLoggedIn = [
  {
    label: "SCHOOLS",
    iconUrl: "/school.png",
    path: "#",
    bold: true,
  },
  { label: "SETTINGS", path: "#", bold: false },
  { label: "HELP", path: "#", bold: false },
  { label: "LOG OUT", path: "#", bold: false },
];

const moreDropdownLoggedOut = [
  { label: "SCHOOLS", iconUrl: "/school.png", path: "#", bold: false },
  { label: "CREATE PROFILE", path: "/profile", bold: false },
  { label: "SETTINGS", path: "#", bold: false },
  { label: "HELP", path: "#", bold: false },
  { label: "SIGN IN", path: "/login"},
];

export default function Sidebar() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownTimeout = useRef();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
    };
    getUser();
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 150);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <aside className="w-60 h-screen fixed top-0 left-0 z-50 border-r border-gray-200 bg-white p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-6">duolingo</h1>
      <nav className="space-y-3">
        {menu.map(({ label, iconUrl, path, isMore }) => {
          const isActive = pathname === path;

          if (isMore) {
            const dropdownOptions = user ? moreDropdownLoggedIn : moreDropdownLoggedOut;
            return (
              <div
                key={label}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer ${showDropdown
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                    }`}
                >
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-200">
                    <img src={iconUrl} alt={label} className="w-5 h-5" />
                  </span>
                  <span className="text-xl">{label}</span>
                </div>
                {showDropdown && (
                  <div
                    className="absolute left-full top-0 ml-2 w-56 bg-white border border-gray-200 rounded-2xl shadow-lg py-2 z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {dropdownOptions.map((item, idx) => {
                      // LOG OUT button for logged in
                      if (item.label === "LOG OUT") {
                        return (
                          <button
                            key={item.label}
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer font-bold font-normal bg-transparent border-none outline-none"
                          >
                            {item.label}
                          </button>
                        );
                      }
                      // SCHOOLS with icon
                      if (item.label === "SCHOOLS" || item.label === "CREATE PROFILE") {
                        return (
                          <Link key={item.label} href={item.path}>
                            <div
                              className={`flex items-center gap-2 px-4 py-3 ${item.bold ? "font-bold" : "font-normal"} text-gray-600 ${idx === 0 ? "border-b border-gray-200" : ""} hover:bg-gray-100`}
                            >
                              {item.iconUrl && (
                                <img src={item.iconUrl} alt={item.label} className="w-6 h-6" />
                              )}
                              <span>{item.label}</span>
                            </div>
                          </Link>
                        );
                      }
                      // SIGN IN button for logged out
                      if (item.label === "SIGN IN") {
                        return (
                          <Link key={item.label} href={item.path}>
                            <div className="px-4 py-3 font-bold text-gray-600 hover:bg-gray-100">
                              {item.label}
                            </div>
                          </Link>
                        );
                      }
                      // Default
                      return (
                        <Link key={item.label} href={item.path}>
                          <div
                            className={`px-4 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer ${item.bold ? "font-bold" : "font-normal"}`}
                          >
                            {item.label}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link key={label} href={path}>
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700"
                  }`}
              >
                <img src={iconUrl} alt={label} className="w-8 h-8" />
                <span className="text-xl">{label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
