# TaskQuest — Gamified Task Manager

A productivity app that turns your daily tasks into a game. Complete tasks to earn XP, level up, unlock badges, and maintain streaks.

## Live Demo

https://gamified-task-manager-aarav.netlify.app

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 19 (Vite) |
| Language | JavaScript ES6+ |
| Routing | React Router v7 |
| State Management | Context API |
| Styling | CSS Modules |
| HTTP Client | Axios |
| Persistence | localStorage |
| Deployment | Vercel / Netlify |

---

## Features

- **Gamification** — Tasks reward XP based on priority (Low: 10, Medium: 20, High: 30). Earn levels every 50 XP and maintain daily streaks.
- **Badges** — Unlock 5 badges based on completions and XP milestones.
- **Search + Filter + Sort** — Search tasks by name, filter by status or priority, sort by date or XP.
- **Dark Mode** — Toggle between light and dark theme. Preference persists across sessions.
- **Error Boundary** — Catches runtime errors and shows a fallback UI instead of a blank screen.
- **Daily Tip** — Fetches a productivity tip from the Advice Slip API on load with a manual refresh option.
- **Persistent Storage** — All tasks, XP, streaks, and stats are saved in localStorage and restored on reload.
- **Dashboard** — View stats, level progress bar, completion rate, priority breakdown, and earned badges.

---

## Pages

- `/` — Home: Add tasks, view task list with search/filter/sort, XP bar, streak, and daily tip
- `/dashboard` — Dashboard: Stats overview, progress bars, priority chart, badges

---

## API Integration

**Advice Slip API** — `https://api.adviceslip.com/advice`

- Free, no API key required
- Returns a random productivity/life advice tip
- Called via Axios through a Vite dev proxy to handle CORS

---

## Project Structure

```
src/
├── context/
│   └── TaskContext.jsx       # Global state (tasks, XP, streaks, dark mode)
├── components/
│   ├── Navbar/               # Navigation + dark mode toggle
│   ├── TaskForm/             # Add task form with priority selector
│   ├── TaskCard/             # Individual task with complete/delete
│   ├── TaskList/             # Search, filter, sort + renders TaskCards
│   ├── Dashboard/            # Stats, progress bars, badges
│   ├── AdviceTip/            # Daily tip from Advice Slip API
│   └── ErrorBoundary/        # Class component for error catching
├── pages/
│   ├── Home.jsx              # Tasks page
│   └── DashboardPage.jsx     # Dashboard page
├── App.jsx                   # Routes + providers
├── main.jsx                  # Entry point
└── index.css                 # CSS variables (light/dark theme)
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## How localStorage Works

Tasks and stats persist across browser sessions using the browser's built-in `localStorage`. No backend or database is needed. Data is saved automatically on every state change and restored when the app loads.

To clear all data: DevTools → Application → Local Storage → `localhost:5173` → Clear.

---

## Capstone Details

- **Domain:** Human Resources (Productivity)
- **API:** Advice Slip API
- **Advanced Features:** Dark mode toggle, Error boundary implementation, Search + filter + sort
