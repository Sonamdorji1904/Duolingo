'use client';

import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

export default function DynamicPage() {
  const pathname = usePathname();

  // Get route name (e.g., "learn", "shop")
  const currentPage = pathname.split("/")[1] || "learn";

  // Capitalize to match filename (e.g., Learn.jsx)
  const PageComponent = dynamic(() =>
    import(`@/components/mainlayout/${capitalize(currentPage)}.jsx`).catch(() =>
      import("@/components/mainlayout/Learn.jsx") // fallback
    ), {
      ssr: false,
    }
  );

  // Hide sidebars for profile page
  const isProfilePage = currentPage === "profile";

  return (
    <main className={`flex min-h-screen font-sans bg-white ${!isProfilePage ? 'ml-60' : ''}`}>
      {!isProfilePage && <Sidebar />}
      <div className="flex-1">
        <PageComponent />
      </div>
      {!isProfilePage && <RightSidebar />}
    </main>

  );
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
