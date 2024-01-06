import CursorGradient from "./components/CursorGradient";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-[#121212] overflow-hidden">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4 z-10">
        <HeroSection />
      </div>

      <CursorGradient />
    </main>
  );
}
