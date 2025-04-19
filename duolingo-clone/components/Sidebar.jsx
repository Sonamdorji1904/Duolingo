const menu = [
    { label: "Learn", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg" },
    { label: "Letters", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/6793432722e61b6dd0e3ffd4d0fd0115.svg" },
    { label: "Leaderboards", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg" },
    { label: "Quests", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg"},
    { label: "Shop", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg" },
    { label: "Profile", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg" },
    { label: "More", iconUrl: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg" },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-60 border-r border-gray-200 bg-white p-4">
        <h1 className="text-3xl font-bold text-green-600 mb-6">duolingo</h1>
        <nav className="space-y-3">
          {menu.map(({ label, iconUrl }) => (
            <div
              key={label}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100 cursor-pointer ${
                label === 'Learn' ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
              }`}
            >
              <img src={iconUrl} alt={label} className="w-8 h-8" />
              <span className="text-xl">{label}</span> {/* Increased text size */}
            </div>
          ))}
        </nav>
      </aside>
    );
  }