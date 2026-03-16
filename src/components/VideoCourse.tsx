import { motion } from "framer-motion";
import {
  Play,
  BookOpen,
  Microscope,
  Globe,
  Dna,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const modules = [
  {
    icon: Dna,
    title: "Genetics of PID",
    lessons: 12,
    duration: "3.5 hours",
    description: "Deep dive into the genetic architecture of primary immunodeficiency disorders.",
  },
  {
    icon: Microscope,
    title: "Diagnostic Approaches",
    lessons: 10,
    duration: "3 hours",
    description: "Clinical flow cytometry, NGS panels, and functional immune assays.",
  },
  {
    icon: Globe,
    title: "Global Treatment Standards",
    lessons: 14,
    duration: "4 hours",
    description: "Evidence-based treatment protocols adopted by immunology centers worldwide.",
  },
  {
    icon: BookOpen,
    title: "Clinical Case Studies",
    lessons: 8,
    duration: "2.5 hours",
    description: "Real-world patient cases with expert-guided diagnostic reasoning.",
  },
];

const features = [
  "Expert-led video lectures",
  "Downloadable resources",
  "CME-accredited content",
  "Global faculty panel",
];

export default function VideoCourse() {
  return (
    <section id="course" className="py-24 sm:py-32 bg-slate-50 relative z-10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark centerpiece card container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-slate-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-800"
        >
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10 px-6 py-20 sm:p-20 lg:p-24">
            {/* Section header */}
            <div className="text-center mb-16 sm:mb-24">
              <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                Featured Course
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                The Definitive{" "}
                <span className="gradient-text-light">Video Course</span>
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-slate-400 text-lg font-medium">
                A comprehensive, modular curriculum designed by world-renowned
                immunologists for medical professionals at every career stage.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Video placeholder */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  className="video-glow relative rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 aspect-video group cursor-pointer shadow-2xl"
                >
                  {/* Video thumbnail gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950/50 group-hover:scale-105 transition-transform duration-700" />

                  {/* Decorative grid */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                      backgroundSize: "24px 24px",
                    }}
                  />

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl animate-pulse-slow" />
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(6,182,212,0.4)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all duration-300">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-2" fill="white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent">
                    <p className="text-base sm:text-lg font-bold text-white">
                      Immunodeficiency Master Course
                    </p>
                    <p className="text-sm text-slate-300 mt-1 font-medium">
                      44 lessons · 13 hours · Updated 2026
                    </p>
                  </div>
                </motion.div>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {features.map((f, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      key={f}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-300 bg-white/[0.03] border border-white/10 rounded-full backdrop-blur-md"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                      {f}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Course modules */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="space-y-4"
              >
                {modules.map((mod, idx) => (
                  <motion.div
                    key={mod.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="group flex items-start gap-5 p-6 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-colors">
                      <mod.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {mod.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                      <p className="mt-2 text-slate-400 leading-relaxed font-medium">
                        {mod.description}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm font-bold text-slate-500">
                        <span>{mod.lessons} lessons</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                        <span>{mod.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Pulsing CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="pt-6"
                >
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="pulse-cta relative inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl w-full sm:w-auto hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl shadow-cyan-500/20"
                  >
                    Access Full Video Course
                    <ChevronRight className="w-6 h-6" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
