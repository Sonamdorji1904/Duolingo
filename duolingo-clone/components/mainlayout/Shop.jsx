import Image from "next/image";

export default function MainContent() {
  return (
    <section className="flex-1 p-6 bg-white overflow-y-auto flex justify-center">
      <div className="w-full max-w-xl">
        {/* Hearts Section Title */}
        <h2 className="text-lg font-bold mb-4">Hearts</h2>


        {/* Refill Hearts */}
        <div className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/547ffcf0e6256af421ad1a32c26b8f1a.svg"
              alt="Refill Hearts"
              width={60}
              height={60}
            />
            <div>
              <p className="font-bold text-lg">Refill Hearts</p>
              <p className="text-gray-500 text-sm">Get full hearts so you can worry less about<br></br> making mistakes in a lesson</p>
            </div>
          </div>
          <button className="w-28 border border-gray-300 text-gray-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm text-center">
            Full
          </button>
        </div>

        <hr className="border-gray-300 my-4" />

                {/* Unlimited Hearts */}
                <div className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-4">
            <Image src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/4f3842c690acf9bf0d4b06e6ab2fffcf.svg" alt="Unlimited Hearts" width={60} height={60} />
            <div>
              <p className="font-bold text-lg">Unlimited Hearts</p>
              <p className="text-gray-500 text-sm">Never run out of hearts with Super!</p>
            </div>
          </div>
          <button className="w-28 border border-gray-300 text-[#a259ff] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm text-center">
            Free Trial
          </button>
        </div>

        <hr className="border-gray-300 my-4" />

        {/* Power-ups Section Title */}
        <h2 className="text-lg font-bold mb-4">Power-ups</h2>
        <div className="flex items-center justify-between px-2 pb-4">
          <div className="flex items-center gap-4">
            <Image
              src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/216ddc11afcbb98f44e53d565ccf479e.svg"
              alt="Streak Freeze"
              width={60}
              height={60}
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <p className="font-bold text-lg">Streak Freeze</p>
                <span className="bg-[#58cc02] text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                  2/2 Equipped
                </span>
              </div>
              <p className="text-gray-500 text-sm">
              Streak Freeze allows your streak to<br></br> remain in place for one full day of inactivity.
              </p>
            </div>
          </div>
          <button className="w-28 border border-gray-300 text-gray-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition text-sm text-center">
            Equipped
          </button>
        </div>
      </div>
    </section>
  );
}
