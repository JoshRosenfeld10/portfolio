import CursorGradient from "./components/CursorGradient";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container flex flex-col gap-36 mt-24 mx-auto px-12 z-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>

      <CursorGradient />
    </main>
  );
}
