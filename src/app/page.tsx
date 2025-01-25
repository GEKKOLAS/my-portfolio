import About from "./Components/main/About";
import Hero from "./Components/main/Hero";
import RecentProjects from "./Components/main/RecentProjects";
import Skills from "./Components/sub/SkillsContent";
import { AuroraBackground } from "./Components/ui/aurora-background";
import { BackgroundBeams } from "./Components/ui/background-beams";



export default function Home() {
  return (
    <main className=" h-full w-full">
      <section className=" h-screen w-full">
        <div className="h-full w-full">
          <Hero />
        </div>
      </section>
      <section className=" h-screen w-full">
        <div className="h-full w-full">
          <About />
        </div>
      </section>
      <section className=" h-full w-full">
        <div className="h-auto w-auto">
          <Skills />
        </div>
      </section>
      <section className=" h-full w-full">
        <div className="h-full w-full text-center">
          <AuroraBackground>
            <RecentProjects />
          </AuroraBackground>
        </div>
      </section>
    </main>
  );
}
