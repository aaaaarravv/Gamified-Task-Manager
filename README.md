# TaskQuest — Gamified Task Manager

A productivity app that turns your daily tasks into a game. Complete tasks to earn XP, level up, unlock badges, and maintain streaks.

## Live Demo

https://gamified-task-manager-aarav.netlify.app

---

## Project Report

[Project Documentation.pdf](https://github.com/user-attachments/files/27306630/Project.Documentation.pdf)

[Content available below]

---

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | React 19 (Vite) |
| Language | JavaScript ES6+ |
| Routing | React Router v7 |
| State Management | Context API |
| Styling | CSS Modules |
| HTTP Client | Fetch API |
| Persistence | localStorage |
| Deployment | Netlify |

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
- Called via a Netlify serverless function (`netlify/functions/advice.js`) to handle CORS
- Frontend calls `/api/advice` → Netlify function fetches from the API server-side and returns the response

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
netlify/
└── functions/
    └── advice.js             # Serverless function — proxies Advice Slip API
netlify.toml                  # Netlify build + functions config
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



---
<br>
<br>
<br>
<br>
<br>
<br>


# Project Report Content

# TaskQuest  
## A Gamified Task Management Platform  

### Project Documentation  

**Submitted in partial fulfilment of the requirements for the degree of**  
Bachelor of Technology  
in  
Computer Science & Engineering (Data Science)  

**K. R. Mangalam University**  

---

### Project URL  
https://gamified-task-manager-aarav.netlify.app  

### GitHub Repository  
https://github.com/aaaaarravv/Gamified-Task-Manager  

---

### Submitted By  
Aarav Chauhan – 2501420027  

### Under the Supervision of  
Mr. Mohd Shadav  

---

## Table of Contents  

1. Introduction  
2. Objectives  
3. Problem Statement  
4. Literature Review  
5. System Overview  
6. Technology Stack  
7. State Management  
8. API Integration  
9. CRUD Operations  
10. Core Features  
11. Performance Optimization  
12. Error Handling  
13. Deployment  
14. Project Structure  
15. Gamification Logic  
16. Advantages  
17. Limitations  
18. Future Scope  
19. Conclusion  
20. References  

---

## 1. Introduction  

In today’s fast-paced digital environment, managing daily tasks efficiently remains a significant challenge. While many task management applications exist, they often fail to engage users effectively, leading to inconsistent productivity.  

TaskQuest is a gamified task management application designed to transform productivity into an engaging experience. It incorporates elements such as XP, levels, streaks, and badges to motivate users and improve consistency.  

**Domain:** Human Resources (Productivity & Task Management)  

---

## 2. Objectives  

- To develop an interactive task management system  
- To enhance productivity using gamification techniques  
- To implement efficient state management using React  
- To design a responsive and user-friendly interface  
- To deploy a scalable web application  

---

## 3. Problem Statement  

Most existing task management applications are functionally robust but lack user engagement. As a result, users often discontinue usage over time.  

This leads to:  

- Low task completion rates  
- Poor habit formation  
- Reduced productivity consistency  

TaskQuest addresses this issue by integrating gamification principles into task management.  

---

## 4. Literature Review  

Existing productivity tools focus on task organization but often lack engaging interfaces. Research in gamification indicates that reward-based systems such as points, badges, and levels significantly improve user engagement and retention.  

TaskQuest builds upon these concepts by combining simplicity, performance, and interactive design.  

---

## 5. System Overview  

TaskQuest is a single-page application built using React.  

### 5.1 Architecture  

User → React UI → Context API → Local Storage
                      ↓
               Netlify Function → External API

### 5.2 Main Features  

#### Home Page (/)  

- Task creation and management  
- XP and level tracking  
- Streak display  
- Search, filter, and sort  

#### Dashboard (/dashboard)  

- Task statistics  
- Completion rate  
- XP visualization  
- Badge achievements  

---

## 6. Technology Stack  

| Category   | Technology        |
|------------|------------------|
| Frontend   | React (Vite)     |
| Language   | JavaScript (ES6+)|
| Routing    | React Router     |
| State      | Context API      |
| Styling    | CSS Modules      |
| API        | Fetch API        |
| Storage    | localStorage     |
| Deployment | Netlify          |

---

## 7. State Management  

Global state is managed using React Context API.  

### State Variables  

- tasks  
- stats  
- darkMode  
- earnedBadges  
- level  
- xpProgress  

### Core Functions  

- addTask()  
- completeTask()  
- deleteTask()  

---

## 8. API Integration  

- API Used: Advice Slip API  
- Endpoint: https://api.adviceslip.com/advice  

Uses a Netlify serverless function to handle requests and avoid CORS issues.  

---

## 9. CRUD Operations  

| Operation | Description            |
|----------|------------------------|
| Create   | Add new task           |
| Read     | Display tasks          |
| Update   | Mark task complete     |
| Delete   | Remove task            |

---

## 10. Core Features  

- Dark mode (stored in localStorage)  
- Search, filter, and sorting  
- Error Boundary for stability  
- Responsive UI design  

---

## 11. Performance Optimization  

- useMemo for optimized rendering  
- Efficient component updates  
- Vite for fast builds  

---

## 12. Error Handling  

- Error Boundary implementation  
- API error fallback  
- Form validation  

---

## 13. Deployment  

- Platform: Netlify  
- Build Command: npm run build  
- Output Directory: dist  

---

## 14. Project Structure  

```bash
Gamified-Task-Manager/
├── netlify/
│   └── functions/
│       └── advice.js
├── public/
│   └── _redirects
├── src/
│   ├── context/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify.toml
├── vite.config.js
└── package.json
```


---

## 15. Gamification Logic  

- XP: Low (10), Medium (20), High (30)  
- Level: Math.floor(totalXP / 50) + 1  
- Progress: totalXP % 50  
- Streak system  
- Badge achievements  

---

## 16. Advantages  

- Lightweight and fast  
- Engaging user interface  
- Easy to use  
- Fully responsive  

---

## 17. Limitations  

- No cloud synchronization  
- Data stored locally  
- No authentication system  
- Limited scalability  

---

## 18. Future Scope  

- Backend integration (Node.js + MongoDB)  
- User authentication  
- Push notifications  
- Leaderboards  
- AI-based task prioritization  

---

## 19. Conclusion  

TaskQuest successfully demonstrates the implementation of a modern web application using React, incorporating state management, API integration, and deployment practices.  

The project highlights how gamification can significantly enhance user engagement and productivity, making it a practical solution in task management.  

---

## 20. References  

1. https://react.dev/  
2. https://vitejs.dev/  
3. https://reactrouter.com/  
4. https://docs.netlify.com/  
5. https://api.adviceslip.com/  
6. https://developer.mozilla.org/  
7. https://www.ecma-international.org/  
8. https://www.interaction-design.org/literature/topics/gamification  
9. https://github.com/css-modules/css-modules  
