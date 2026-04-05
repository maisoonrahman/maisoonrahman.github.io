import FooterBar from "./FooterBar"
import HeroBanner from "./HeroBanner/HeroBanner"
import Navbar from "./Navbar"

export default function Layout({
  children,
  showHero = false,
  containerClassName = "flex-1 mx-auto w-full max-w-6xl px-6 py-8",
  theme,
  setTheme,
  language,
  setLanguage,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />
      {showHero && <HeroBanner />}

      <main className={containerClassName}>
        {children}
      </main>

      <FooterBar />
    </div>
  )
}