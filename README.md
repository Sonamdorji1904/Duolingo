# 🦉 Duolingo Clone Web App

Welcome to the Duolingo Clone — a fully responsive language learning web application inspired by the Duolingo UI. Built using **Next.js (App Router)** and **Tailwind CSS**, this project focuses on replicating the core layout and navigation experience of Duolingo.

---

## ✨ Features

### ✅ Core Functionality
- **Dynamic Routing** using Next.js App Router for every section (`learn`, `leaderboard`, `shop`, etc.)
- **Sidebar Navigation** with routes that correspond to individual pages
- **Dummy Authentication** — allows users to "log in" using email and password (no real backend yet)
- **Right Sidebar** — added recently to reflect Duolingo’s leaderboard/activity/sidebar components
- **Fixed Sidebar** — main sidebar remains fixed during scroll for improved UX
- **Responsive UI** — optimized for different screen sizes using Tailwind CSS

---

## 🧱 Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** App Router with Dynamic Route Matching
- **Icons:** [Lucide React](https://lucide.dev/)
- **Authentication (Mock):** Custom hook for dummy login (for now)

---

## 📁 Folder Structure

```
duolingo-clone/
├── app/
│   ├── layout.js         # Root layout
│   ├── page.jsx          # Home route
│   ├── globals.css
│   └── [[...slug]]/      # Dynamic pages like /learn, /shop, /leaderboard
│       └── page.jsx
├── components/
│   ├── Sidebar.jsx       # Left sidebar
│   ├── RightSidebar.jsx  # Right sidebar
│   └── mainlayout/       # Individual page UIs
│       ├── Learn.jsx
│       ├── Leaderboard.jsx
│       ├── Shop.jsx
│       └── ...
├── public/
└── ...
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sonamdorji1904/Duolingo.git
cd Duolingo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Dummy Authentication

- Navigate to `/profile`
- Enter any email and password
- The form uses `useState` and client-side validation

---

## 📦 Pages Implemented

- `/learn`
- `/leaderboard`
- `/shop`
- `/profile`
- `/quests`
- `/letters`
- (more can be added easily in `components/mainlayout`)

---

## 🛠 To-Do (Future Enhancements)

- 🔒 Add real backend auth (Firebase, Supabase, or custom API)
- 🧠 Add lesson data and interactive exercises
- 🌍 Multi-language support

---


## 👨‍💻 Author

- **Sonam Dorji**
- **Jigden Shakya**
- GitHub: [Sonamdorji1904](https://github.com/Sonamdorji1904/Duolingo.git)

---
