import About from "./Components/main/About";
import Hero from "./Components/main/Hero";
import RecentProjects from "./Components/main/RecentProjects";
import Services from "./Components/main/Services";
import ServicesBg from "./Components/main/ServicesBg";
import SkillsBg from "./Components/main/ServicesBg";
import Skills from "./Components/sub/SkillsContent";
import { AuroraBackground } from "./Components/ui/aurora-background";
import { BackgroundBeams } from "./Components/ui/background-beams";



export default function Home() {
  return (
    <main className=" h-full w-full">
      <section className=" h-screen w-full">
        <div className="h-full w-full overflow-auto">
          <Hero />
        </div>
      </section>
      <section className=" h-screen w-full">
        <div className="h-full w-full overflow-auto">
          <About />
        </div>
      </section>
      <section className=" h-full w-full">
        <div className="h-full w-full text-center bg-black-900  overflow-auto">
          <Skills />
        </div>
      </section>
      <section className=" h-full w-full">
        <div className="h-full w-full overflow-auto">
          <ServicesBg />
        </div>
      </section>
      <section className=" h-full w-full">
        <div className="h-full w-full text-center overflow-auto">
            <RecentProjects />
        </div>
      </section>
    </main>
  );
}
