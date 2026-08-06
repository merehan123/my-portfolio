import profile from "../data/profile";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FadeInSection from "../components/FadeInSection";

function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20">
      <FadeInSection>
        <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Feel free to reach out for internships, collaborations, or AI projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Left */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8">

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <a
                  href={profile.email}
                  className="text-slate-300 hover:text-cyan-400"
                >
                    {profile.emailText}
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-cyan-400 text-2xl" />
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-cyan-400 text-2xl" />
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span className="text-slate-300">
                  Giza, Egypt
                </span>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-slate-900/70 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition-all duration-300">

            <h3 className="text-3xl font-bold text-white mb-6">
              Let's Work Together 🚀
            </h3>

            <p className="text-slate-400 leading-8">
              I'm currently looking for internships and opportunities in
              Artificial Intelligence, Machine Learning, NLP, and Data Engineering.
              If you have an exciting project or opportunity, I'd love to hear from you.
            </p>

            <a
              href={profile.email}
                className="mt-8 inline-flex items-center justify-center bg-cyan-400 text-slate-950 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition-all duration-300 hover:scale-105 self-start"
            >
              Send Email
            </a>

          </div>

        </div>

      </div>
    </FadeInSection>
    </section>
  );
}

export default Contact;