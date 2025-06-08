'use client';

import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export default function DynamicPage() {
  const pathname = usePathname();

  // Get route name (e.g., "learn", "shop")
  const currentPage = pathname.split("/")[1] || "learn";

  // Map route names to component filenames for case-sensitive imports
  const fileMap = {
    leaderboards: "LeaderBoards",
    profile: "Profile",
    login: "Login",
    learn: "Learn",
    shop: "Shop",
    // add more mappings as needed
  };
  const fileName = fileMap[currentPage] || capitalize(currentPage);

  const PageComponent = dynamic(() =>
    import(`@/components/mainlayout/${fileName}.jsx`).catch(() =>
      import("@/components/mainlayout/Learn.jsx")
    ), {
    ssr: false,
  });

  // Hide sidebars for profile and login pages
  const isProfileOrLoginPage = currentPage === "profile" || currentPage === "login";

  return (
    <main className={`flex min-h-screen font-sans bg-white ${!isProfileOrLoginPage ? 'ml-60' : ''}`}>
      {!isProfileOrLoginPage && <Sidebar />}
      <div className="flex-1">
        <PageComponent />
      </div>
      {!isProfileOrLoginPage && <RightSidebar />}
    </main>
  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
