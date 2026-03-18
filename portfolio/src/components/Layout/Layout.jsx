import FooterBar from "./FooterBar"
import HeroBanner from "./HeroBanner/HeroBanner"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Top (global) */}
      <Navbar />
      <HeroBanner />

      {/* Page Content */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-8">
        {children}
      </main>

      {/* Bottom (global) */}
      <FooterBar />

    </div>
  )
}