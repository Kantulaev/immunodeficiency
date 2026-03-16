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
    <section
      id="course"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-medical-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Featured Course
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Definitive{" "}
            <span className="gradient-text">Video Course</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            A comprehensive, modular curriculum designed by world-renowned
            immunologists for medical professionals at every career stage.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Video placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="video-glow relative rounded-2xl overflow-hidden bg-navy-700/30 border border-white/10 aspect-video transition-all duration-500 group cursor-pointer">
              {/* Video thumbnail gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-800 to-medical-900/50" />

              {/* Decorative grid */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(6,182,212,0.3) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse-slow" />
                  <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-medical-600 shadow-2xl shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-shadow">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </motion.div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-navy-900/90 to-transparent">
                <p className="text-sm font-medium text-white">
                  Immunodeficiency Master Course
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  44 lessons · 13 hours · Updated 2025
                </p>
              </div>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mt-5">
              {features.map((f) => (
                <div
                  key={f}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/5 rounded-full"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Course modules */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
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
                whileHover={{ x: 6 }}
                className="group flex items-start gap-4 p-5 bg-navy-800/40 border border-white/5 rounded-xl hover:border-cyan-500/20 hover:bg-navy-700/40 transition-all duration-300 cursor-pointer"
              >
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <mod.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white group-hover:text-cyan-100 transition-colors">
                      {mod.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                  <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                    {mod.description}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                    <span>{mod.lessons} lessons</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
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
              className="pt-4"
            >
              <a
                href="#"
                className="pulse-cta relative inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-cyan-500 to-medical-600 rounded-full hover:from-cyan-400 hover:to-medical-500 transition-all duration-300 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
              >
                Access Full Video Course
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
