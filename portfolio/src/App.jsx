import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/Home/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Layout from "./components/Layout/Layout"
import ProjectDetailPage from "./pages/ProjectsDetail"
import AboutPage from "./pages/AboutPage"

export default function App() {
  const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem("theme")
  return saved === "mocha" ? "mocha" : "latte"
})

const [language, setLanguage] = useState("EN")

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
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
              >
                <HomePage/>
              </Layout>
            }
          />

          <Route
            path="/projects"
            element={
              <Layout
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
                >
                <ProjectsPage/>
              </Layout>
            }
          />

          <Route
          path="/projects/:slug"
          element={
            <Layout 
                containerClassName="flex-1 w-full px-0 py-20"
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
                >
              <ProjectDetailPage/>
            </Layout>
          }
        />

        <Route
            path="/about"
            element={
              <Layout
                theme={theme}
                setTheme={setTheme}
                language={language}
                setLanguage={setLanguage}
                >
                <AboutPage/>
              </Layout>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  )
}