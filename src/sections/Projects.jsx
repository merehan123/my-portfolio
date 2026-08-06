import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
        <FadeInSection>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h2>

        <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          Here are some of the AI, Machine Learning, Deep Learning, and NLP
          projects I've worked on.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >

              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-white min-h-[64px]">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-500/10 text-cyan-400 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <FaGithub />
                    View on GitHub
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </FadeInSection>
    </section>
  );
}

export default Projects;