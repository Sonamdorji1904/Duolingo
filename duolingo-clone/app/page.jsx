import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/mainlayout/MainContent";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen font-sans bg-white">
      <Sidebar />
      <MainContent />
      <RightSidebar />
    </main>
  );
}
