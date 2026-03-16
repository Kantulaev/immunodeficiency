import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 4,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 4 + 6,
  delay: Math.random() * 3,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-light">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft radial blooms */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-blue-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[600px] h-[500px] bg-cyan-300/20 rounded-full blur-[100px]" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(15,23,42,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-gradient-to-br from-blue-400/40 to-cyan-300/40 backdrop-blur-sm border border-white/40 shadow-sm"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}

        {/* Decorative DNA helix lines abstraction */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[800px] h-[800px] border border-blue-200/50 rounded-full border-dashed"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] border border-cyan-200/50 rounded-full border-dashed"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 text-sm font-semibold text-blue-800 bg-white/60 border border-blue-100 rounded-full backdrop-blur-md shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          International Medical Education Platform
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.1] tracking-tight text-slate-900"
        >
          Understanding
          <br />
          <span className="gradient-text">Immunodeficiencies</span>
          <br />
          <span className="text-slate-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-2 block">
            A Global Perspective
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed font-medium"
        >
          Dive into the world's most comprehensive video course on primary and
          secondary immunodeficiencies. Built by leading immunologists for
          clinicians, researchers, and students worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#course"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-blue-500/25 w-full sm:w-auto justify-center"
          >
            Explore the Course
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-200 hover:bg-slate-50 transition-all duration-300 shadow-sm w-full sm:w-auto justify-center"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 shadow-sm"
          >
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
