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
      whileHover={{ y: -8 }}
      className="relative text-center group bg-white p-8 rounded-[2rem] border border-slate-100 card-shadow hover:shadow-2xl transition-all duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ring-4 ring-slate-50">
        <Icon className="w-8 h-8" />
      </div>
      <div className="text-4xl sm:text-5xl font-black text-slate-900 mb-3 tabular-nums tracking-tight">
        {display}
      </div>
      <div className="text-base font-bold text-blue-700 mb-2 uppercase tracking-wide">{label}</div>
      <p className="text-slate-500 font-medium max-w-[220px] mx-auto">{description}</p>
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
    description: "Physicians, researchers, and students advancing expertise.",
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
    <section id="impact" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-100/50 border border-blue-200 rounded-full mb-6">
            Global Reach
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Making an{" "}
            <span className="gradient-text">Impact Worldwide</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg sm:text-xl font-medium">
            Our mission is to democratize immunodeficiency education, empowering
            healthcare professionals across every region to deliver exceptional
            patient care.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          className="mt-24 pt-10 border-t border-slate-200 text-center"
        >
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by leading institutions worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              "Johns Hopkins",
              "Karolinska Institute",
              "Oxford University",
              "NIH",
              "Charité Berlin",
            ].map((name) => (
              <span
                key={name}
                className="text-lg sm:text-xl font-black text-slate-300 hover:text-blue-500 transition-colors cursor-default tracking-wide"
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
