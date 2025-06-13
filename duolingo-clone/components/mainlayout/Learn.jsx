import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function MainContent() {
  const router = useRouter();
  const [completed, setCompleted] = useState([false, false, false]);

  useEffect(() => {
    const stored = localStorage.getItem("quizCompleted");
    if (stored) {
      setCompleted(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizCompleted", JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    const onStorage = () => {
      const stored = localStorage.getItem("quizCompleted");
      if (stored) setCompleted(JSON.parse(stored));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleStartQuiz = (quizIndex) => {
    if (quizIndex === 0) {
      router.push("/quiz1");
    } else if (quizIndex === 1) {
      router.push("/quiz2");
    } else if (quizIndex === 2) {
      router.push("/quiz3");
    } else if (quizIndex === 0) {
      router.push("/quiz4");
    }
  };

  return (
    <section className="flex-1 p-6 bg-white overflow-y-auto">
      {/* Green Header */}
      <div className="bg-[#58cc02] text-white p-4 rounded-xl mb-8 flex flex-col items-start gap-1">
        <span className="text-sm font-bold">SECTION 1, UNIT 1</span>
        <span className="text-xl font-bold">Learn Korean vowels</span>
      </div>

      {/* Lesson Path */}
      <div className="flex flex-col items-center gap-8 mt-12 relative">
        {/* Star 1 - always green */}
        <div className="relative flex flex-col items-center">
          <button
            className="absolute -top-8 z-10 bg-white text-[#58cc02] text-sm font-bold px-3 py-1 rounded-full shadow transition hover:bg-gray-100"
            onClick={() => handleStartQuiz(0)}
          >
            START
          </button>
          <button
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl border-[6px] border-white focus:outline-none transition hover:scale-105 bg-[#58cc02]"
            onClick={() => handleStartQuiz(0)}
            aria-label="Start Lesson"
          >
            <span className="text-white text-xl">★</span>
          </button>
        </div>

        {/* Star 2 */}
        <button
          className={`w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl transition ${completed[1] ? "bg-[#58cc02] text-white" : "bg-gray-200 text-gray-500"
            }`}
          onClick={() => handleStartQuiz(1)}
        >
          ★
        </button>

        {/* Star 3 */}
        <button
          className="w-14 h-14 rounded-full shadow-md flex items-center justify-center text-2xl bg-gray-200 text-gray-500"
          onClick={() => handleStartQuiz(2)}
        >
          ★
        </button>

        {/* Locked Chest */}
        <div
          className="w-16 h-16 bg-gray-300 rounded-lg shadow-inner flex items-center justify-center cursor-pointer"
          onClick={() => router.push('/quiz4')}
        >
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg"
            alt="Locked Chest"
            width={30}
            height={30}
          />
        </div>

        {/* Trophy Icon (inactive) */}
        <div 
          className="w-14 h-14 rounded-full bg-gray-200 shadow-md flex items-center justify-center"
          onClick={() => router.push('/quiz5')}
        >
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg"
            alt="Trophy"
            width={28}
            height={28}
          />
        </div>

        {/* Owl */}
        <div className="absolute right-[150px] top-[180px]">
          <Image
            src="/owl.png"
            alt="Owl"
            width={70}
            height={70}
          />
        </div>
      </div>
    </section>
  );
}