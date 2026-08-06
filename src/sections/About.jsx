import profile from "../data/profile";
import FadeInSection from "../components/FadeInSection";

function About() {
  return (
    <section id="about" className="min-h-screen py-20">
      <FadeInSection>

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-white mb-6">
            About Me
          </h2>

          <p className="text-slate-400 text-center max-w-3xl mx-auto leading-8">
            {profile.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Education
              </h3>

              <p className="text-white font-medium">
                Faculty of Computers and Artificial Intelligence
              </p>

              <p className="text-slate-400">
                Cairo University
              </p>

              <p className="text-slate-500 mt-2">
                2023 – 2027
              </p>
            </div>

            <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                Interests
              </h3>

              <ul className="space-y-2 text-slate-300">
                <li>• Artificial Intelligence</li>
                <li>• Machine Learning</li>
                <li>• Deep Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Data Engineering</li>
                <li>• Large Language Models (LLMs)</li>
              </ul>
            </div>

          </div>

        </div>

      </FadeInSection>
    </section>
  );
}

export default About;