import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Layout from "./components/Layout/Layout"
import ProjectDetailPage from "./pages/ProjectsDetail"

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
              <Layout
                showHero={true}
                containerClassName="flex-1 w-full py-0"
              >
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

          <Route
          path="/projects/:slug"
          element={
            <Layout containerClassName="flex-1 w-full px-0 py-20">
              <ProjectDetailPage theme={theme} setTheme={setTheme} />
            </Layout>
          }
        />
        </Routes>
      </div>
    </BrowserRouter>
  )
}