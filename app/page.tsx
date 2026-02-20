import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import SkillsEducation from "@/components/SkillsEducation";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen text-white">
      {/* Scrollytelling Section */}
      <section className="relative">
        <ScrollyCanvas />
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      {/* Skills & Education Section */}
      <SkillsEducation />

      {/* Footer / Contact */}
      <footer className="py-24 px-6 text-center text-gray-500">
        <div className="flex flex-col items-center gap-4 mb-8">
          <a href="mailto:priyaprasad93719@gmail.com" className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
            priyaprasad93719@gmail.com
          </a>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/priya-prasad1312/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Priya Prasad. All rights reserved.</p>
      </footer>
    </main>
  );
}
