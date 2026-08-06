import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "../assets/images/merehan2.jpeg";
import profile from "../data/profile";
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-cyan-400 text-lg mb-3">
                👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                {profile.name}
            </h1>

            <h2 className="text-2xl text-slate-400 mt-5">
                {profile.title}
            </h2>

            <p className="text-slate-400 mt-8 leading-8 max-w-2xl">
                {profile.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

            <a
                href="/CV.pdf"
                download
                className="bg-cyan-500 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 transition-all duration-300 hover:scale-105"
            >
                Download CV
            </a>

            <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-slate-950 transition-all duration-300 hover:scale-105"
            >
                Contact Me
            </a>

            </div>

            {/* 👇 Social Icons تتحط هنا */}
            <div className="flex gap-6 mt-10 text-2xl">

                <a
                href= {profile.github}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaGithub className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125" />
                </a>

                <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaLinkedin className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125" />
                </a>

                <a
                href={profile.email}
                target="_blank"
                rel="noopener noreferrer"
                >
                <FaEnvelope className="text-slate-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125" />
                </a>

            </div>

            </motion.div>

          {/* Right Side */}

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <div className="relative">
                <div className="absolute -inset-0 rounded-full bg-cyan-400 blur-3xl opacity-20"></div>
                <img
                src={profileImg}
                alt="Merehan Ibraheem"
                className="relative w-72 h-72 md:w-80 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl transition-all duration-500 hover:scale-105"
                />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;