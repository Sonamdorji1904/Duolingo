'use client'; // Required for hooks like usePathname in app router

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "Learn",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
    path: "/learn",
  },
  {
    label: "Letters",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/6793432722e61b6dd0e3ffd4d0fd0115.svg",
    path: "/letters",
  },
  {
    label: "Leaderboards",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
    path: "/leaderboards",
  },
  {
    label: "Quests",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
    path: "/quests",
  },
  {
    label: "Shop",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg",
    path: "/shop",
  },
  {
    label: "Profile",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg",
    path: "/profile",
  },
  {
    label: "More",
    iconUrl:
      "https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg",
    path: "#", // Placeholder
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 border-r border-gray-200 bg-white p-4 h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-6">duolingo</h1>
      <nav className="space-y-3">
        {menu.map(({ label, iconUrl, path }) => {
          const isActive = pathname === path;

          return (
            <Link key={label} href={path}>
              <div
                className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
                  isActive
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
