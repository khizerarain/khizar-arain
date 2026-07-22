import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import { MnemoFlagship } from "@/components/sections/MnemoFlagship";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { getFeaturedProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getFeaturedProjects();

  return (
    <>
      <Hero />
      <MnemoFlagship />
      <FeaturedProjects projects={projects} />
      <Services />
      <About />
      <Contact />
    </>
  );
}
