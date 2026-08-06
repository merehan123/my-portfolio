import experience from "../data/experience";
import FadeInSection from "../components/FadeInSection";

function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Experience
        </h2>

        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          My education, internships, and professional journey.
        </p>

        <div className="relative border-l-2 border-cyan-400 ml-4">

          {experience.map((item) => (

            <div
              key={item.id}
              className="mb-12 ml-8 relative"
            >

              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-950 transition-all duration-300 hover:scale-125"></div>

              {/* Card */}
              <div className="bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {item.company}
                </p>

                <p className="text-slate-500 text-sm mt-1">
                  {item.period}
                </p>

                <p className="text-slate-300 mt-4 leading-7">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </FadeInSection>
    </section>
  );
}

export default Experience;