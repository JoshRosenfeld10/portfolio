import CursorGradient from "./components/CursorGradient";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container flex flex-col gap-16 mt-24 mx-auto px-12 py-4  z-10">
        <HeroSection />
        <AboutSection />
      </div>

      <CursorGradient />
    </main>
  );
}
