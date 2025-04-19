import Image from "next/image";

export default function MainContent() {
  return (
    <section className="flex-1 p-6 bg-white overflow-y-auto">
      {/* Green Header */}
      <div className="bg-[#58cc02] text-white p-4 rounded-xl mb-8 flex flex-col items-start gap-1">
        <span className="text-sm font-bold">← SECTION 1, UNIT 1</span>
        <span className="text-xl font-bold">Learn Korean vowels</span>
      </div>

      {/* Lesson Path */}
      <div className="flex flex-col items-center gap-8 mt-12 relative">
        {/* Start button + Lesson 1 */}
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-8 z-10 bg-white text-[#58cc02] text-sm font-bold px-3 py-1 rounded-full shadow">
            START
          </div>
          <div className="w-16 h-16 rounded-full bg-[#58cc02] flex items-center justify-center shadow-xl border-[6px] border-white">
            <span className="text-white text-xl">★</span>
          </div>
        </div>

        {/* Inactive Lessons */}
        {[1, 2].map((n) => (
          <div
            key={n}
            className="w-14 h-14 rounded-full bg-gray-200 shadow-md flex items-center justify-center text-2xl text-gray-500"
          >
            ★
          </div>
        ))}

        {/* Locked Chest */}
        <div className="w-16 h-16 bg-gray-300 rounded-lg shadow-inner flex items-center justify-center">
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/b841637c196f5be786d8b8578a42ffbf.svg" // place your chest image in /public
            alt="Locked Chest"
            width={30}
            height={30}
          />
        </div>

        {/* Trophy Icon (inactive) */}
        <div className="w-14 h-14 rounded-full bg-gray-200 shadow-md flex items-center justify-center">
          <Image
            src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7d84afaa096ff1f1d3f8c86d6c2c9542.svg" // place your trophy image in /public
            alt="Trophy"
            width={28}
            height={28}
          />
        </div>

        {/* Owl */}
        <div className="absolute right-[150px] top-[180px]">
          <Image
            src="/owl.png" // place your Duolingo owl image in /public
            alt="Owl"
            width={70}
            height={70}
          />
        </div>
      </div>
    </section>
  );
}