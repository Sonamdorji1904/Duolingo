export default function RightSidebar() {
  return (
    <aside className="w-80 border-l border-gray-200 bg-white p-4 space-y-6">
      {/* Top Status Bar */}
      <div className="flex justify-between items-center text-sm font-medium mb-6">
        <img src="Korean_flag.webp" alt="flag" className="w-7 h-7" />
        <div className="flex items-center gap-1">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
            alt="streak"
            className="w-6 h-6"
          />
          <span>0</span>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
            alt="gems"
            className="w-6 h-6"
          />
          <span>500</span>
        </div>
        <div className="flex items-center gap-1">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
            alt="hearts"
            className="w-6 h-6"
          />
          <span>5</span>
        </div>
      </div>

      {/* Unlock Leaderboard Section */}
      <div className="border rounded-xl p-4 shadow-sm">
        <h2 className="text-md font-semibold mb-2">Unlock Leaderboards!</h2>
        <div className="flex items-start gap-3">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
            alt="leaderboard-lock"
            className="w-10 h-10"
          />
          <p className="text-sm text-gray-600">
            Complete 10 more lessons to start competing
          </p>
        </div>
      </div>

      {/* Daily Quests */}
      <div className="border rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-md font-semibold">Daily Quests</h3>
          <a href="#" className="text-sm text-blue-500 font-medium">View All</a>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
            alt="lightning"
            className="w-10 h-10"
          />
          <span className="text-sm font-medium">Earn 10 XP</span>
        </div>
        <div className="relative bg-gray-200 rounded-full h-3 mt-1">
          <div className="absolute left-0 top-0 h-3 w-0 bg-green-500 rounded-full"></div>
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-5 text-xs text-gray-700 font-semibold">0 / 10</span>
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg"
            alt="chest"
            className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6"
          />
        </div>
      </div>

      {/* Create Profile */}
      <div className="border rounded-xl p-4 shadow-sm text-center space-y-4">
        <h3 className="text-md font-semibold">Create a profile to save your progress!</h3>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl font-bold shadow-md border-none">
          CREATE A PROFILE
        </button>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-xl font-bold shadow-md border-none">
          SIGN IN
        </button>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center text-xs text-gray-400 gap-x-4 gap-y-2 pt-4 border-t border-gray-100">
        {["ABOUT", "BLOG", "STORE", "EFFICACY", "CAREERS", "INVESTORS", "TERMS", "PRIVACY"].map((link, idx) => (
          <a key={idx} href="#" className="hover:underline">
            {link}
          </a>
        ))}
      </div>
    </aside>
  );
}
