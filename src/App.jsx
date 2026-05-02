import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <ErrorBoundary>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </ErrorBoundary>
  )
}

export default App
