import { motion } from "framer-motion";
import { Globe, Users, Award, TrendingUp } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  target: number;
  suffix: string;
  label: string;
  description: string;
  delay: number;
}

function StatCard({ icon: Icon, target, suffix, label, description, delay }: StatCardProps) {
  const { ref, display } = useCountUp(target, 2200, "", suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className="relative text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/10 mb-6 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/20 transition-all duration-300">
        <Icon className="w-7 h-7 text-cyan-400" />
      </div>
      <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tabular-nums">
        {display}
      </div>
      <div className="text-base font-semibold text-slate-200 mb-1">{label}</div>
      <p className="text-sm text-slate-500 max-w-[220px] mx-auto">{description}</p>
    </motion.div>
  );
}

const stats = [
  {
    icon: Globe,
    target: 50,
    suffix: "+",
    label: "Countries",
    description: "Learners from every continent engaging with our platform.",
    delay: 0,
  },
  {
    icon: Users,
    target: 10000,
    suffix: "+",
    label: "Professionals",
    description: "Physicians, researchers, and students advancing their expertise.",
    delay: 0.15,
  },
  {
    icon: Award,
    target: 35,
    suffix: "+",
    label: "Expert Faculty",
    description: "World-leading immunologists contributing to the curriculum.",
    delay: 0.3,
  },
  {
    icon: TrendingUp,
    target: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Consistently top-rated by medical education accreditation bodies.",
    delay: 0.45,
  },
];

export default function GlobalImpact() {
  return (
    <section id="impact" className="relative py-24 sm:py-32 bg-navy-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/[0.02] rounded-full blur-[100px]" />
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
            Global Reach
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Making an{" "}
            <span className="gradient-text">Impact Worldwide</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            Our mission is to democratize immunodeficiency education, empowering
            healthcare professionals across every region to deliver exceptional
            patient care.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-medium">
            Trusted by leading institutions worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {[
              "Johns Hopkins",
              "Karolinska Institute",
              "Oxford University",
              "NIH",
              "Charité Berlin",
            ].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-slate-600 hover:text-slate-400 transition-colors cursor-default tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
