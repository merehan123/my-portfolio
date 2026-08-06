import skills from "../data/skills";
import FadeInSection from "../components/FadeInSection";

function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20">
        <FadeInSection>

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          My Skills
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I use to build AI applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((category) => (

            <div
              key={category.title}
              className="bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >

              <h3 className="text-2xl font-bold text-white mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (

                  <span
                    key={skill}
                    className="bg-cyan-500/10 text-cyan-400 text-sm px-4 py-2 rounded-full transition-all duration-300 hover:bg-cyan-500/20 hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </FadeInSection>
    </section>
  );
}

export default Skills;