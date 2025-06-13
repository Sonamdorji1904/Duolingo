# Duolingo Clone

A full-stack Duolingo-inspired language learning app built with **Next.js (App Router)**, **Supabase Auth**, and **Tailwind CSS**.

---

## 🚀 Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/Sonamdorji1904/Duolingo.git
cd Duolingo
```

### 2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

### 3. **Set Up Environment Variables**

Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. **Configure Supabase**

- Go to [Supabase](https://app.supabase.com/) and create a new project.
- Enable **Email/Password** and **Google** authentication providers in the **Authentication > Providers** section.
- Set your **Site URL** (e.g., `http://localhost:3000`) and add `http://localhost:3000/reset-password` to **Redirect URLs** in **Authentication > URL Configuration**.

### 5. **Run the Development Server**

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Folder Structure

```
duolingo-clone/
├── app/                  # Next.js App Router pages
│   ├── [[...slug]]/      # Dynamic routing for main content
│   ├── reset-password/   # Password reset page
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── mainlayout/       # Main UI components (Profile, Login, Quizzes, etc.)
│   ├── Sidebar.jsx       # Sidebar navigation
│   └── RightSidebar.jsx  # Right sidebar
├── lib/
│   ├── supabaseClient.js # Supabase client setup
│   └── axios.js          # Axios instance for API calls
├── public/               # Static assets (images, icons)
├── .env.local            # Environment variables
├── package.json
└── README.md
```

---

## ✨ Features

- **User Authentication:** Email/password and Google OAuth via Supabase.
- **Profile Management:** Create and edit user profiles with display name and avatar.
- **Password Reset:** Secure password reset flow with custom `/reset-password` page.
- **Sidebar Navigation:** Responsive sidebar with dropdown and conditional options.
- **Quizzes & Lessons:** Interactive quizzes for language learning.
- **Leaderboards:** Track user progress and compare with others.
- **Shop:** Buy power-ups and streak freezes.
- **Friends & Social:** Following/followers tabs, add/invite friends.
- **Daily Quests:** Gamified daily challenges.

---

## 🔮 Future Scope

- **Multi-language Support:** Add more languages and lessons.
- **Real-time Leaderboards:** Live updates using Supabase Realtime.
- **Achievements & Badges:** Reward system for milestones.
- **Social Feed:** Activity feed for friends.
- **Push Notifications:** Reminders for daily streaks and quests.
- **Admin Dashboard:** Manage content and users.
- **API Integration:** Connect with external dictionary or translation APIs.
- **Accessibility Improvements:** Enhanced support for screen readers and keyboard navigation.

---

## 📝 License

MIT

---

## 👨‍💻 Author

- **Sonam Dorji**
- **Jigden Shakya**
- GitHub: [Sonamdorji1904-Frontend](https://github.com/Sonamdorji1904/Duolingo.git)
- GitHub: [Jigden18-Backend](https://github.com/Jigden18/Duolingo_Backend.git)
