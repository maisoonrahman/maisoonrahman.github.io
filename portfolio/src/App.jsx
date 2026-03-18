import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Layout from "./components/Layout/Layout"

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "latte"
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--bg-app)] text-[var(--text-main)]">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
              <HomePage theme={theme} setTheme={setTheme} />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
              <ProjectsPage theme={theme} setTheme={setTheme} />
              </Layout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}