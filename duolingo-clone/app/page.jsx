'use client';

import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export default function Home() {
  const pathname = usePathname(); // Get the current pathname

  // Logic to determine which page component to import based on the pathname
  const getPageComponent = () => {
    switch (pathname) {
      case "/learn":
        return "Learn";
      case "/letters":
        return "Letters";
      case "/leaderboards":
        return "Leaderboards";
      case "/quests":
        return "Quests";
      case "/shop":
        return "Shop";
      case "/profile":
        return "Profile";
      default:
        return "Learn"; // Default fallback
    }
  };

  // Dynamically import the component for the current route
  const PageComponent = dynamic(() => import(`@/components/mainlayout/${getPageComponent()}.jsx`), {
    ssr: false, // Disable SSR for this dynamic import
  });

  return (
    <main className="flex min-h-screen font-sans bg-white">
      {/* Sidebar is always visible */}
      <Sidebar />
      
      {/* Dynamically loaded content */}
      <div className="flex-1">
        <PageComponent />
      </div>

      {/* RightSidebar is always visible */}
      <RightSidebar />
    </main>
  );
}
