import CursorGradient from "./components/CursorGradient";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/AboutSection/AboutSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container flex flex-col gap-36 my-24 mx-auto px-12 z-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />

      <CursorGradient />
    </main>
  );
}
