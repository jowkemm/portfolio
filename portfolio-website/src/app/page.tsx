import AboutSection from "./components/AboutSection";
import IntroSection from "./components/IntroSection";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <div className="mx-auto py-4 px-12 w-full my-5">
        <IntroSection/>
        <AboutSection/>
        <ProjectSection/>
      </div>
    </main>
  );
}
