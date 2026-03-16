import { motion } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Dna,
  Microscope,
  Syringe,
  HeartPulse,
} from "lucide-react";

const cards = [
  {
    icon: ShieldAlert,
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10",
    title: "Primary Immunodeficiencies (PID)",
    description:
      "Inherited genetic disorders affecting the immune system's development or function. Over 450 distinct forms have been identified, ranging from severe combined immunodeficiency (SCID) to selective antibody deficiencies.",
    tags: ["Genetic", "Congenital", "450+ Types"],
  },
  {
    icon: ShieldCheck,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10",
    title: "Secondary Immunodeficiencies (SID)",
    description:
      "Acquired conditions resulting from external factors such as infections (HIV/AIDS), malnutrition, medications, or environmental exposures. SID represents the most common form of immunodeficiency globally.",
    tags: ["Acquired", "Environmental", "Treatable"],
  },
  {
    icon: Dna,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10",
    title: "Genetic Mechanisms",
    description:
      "Modern genomics has revolutionized our understanding of immunodeficiency. Next-generation sequencing enables rapid identification of pathogenic variants across hundreds of immune-related genes.",
    tags: ["Genomics", "NGS", "Variants"],
  },
  {
    icon: Microscope,
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    title: "Diagnostic Advances",
    description:
      "From flow cytometry to functional assays, modern diagnostics enable precise immunophenotyping. Early diagnosis dramatically improves outcomes through timely intervention and targeted therapies.",
    tags: ["Flow Cytometry", "Biomarkers", "Early Detection"],
  },
  {
    icon: Syringe,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    title: "Treatment Modalities",
    description:
      "Therapeutic options range from immunoglobulin replacement therapy and prophylactic antibiotics to hematopoietic stem cell transplantation and emerging gene therapy approaches.",
    tags: ["HSCT", "Ig Therapy", "Gene Therapy"],
  },
  {
    icon: HeartPulse,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10",
    title: "Patient Care & Quality of Life",
    description:
      "Comprehensive management extends beyond treatment to include psychological support, infection prevention strategies, and long-term monitoring to ensure optimal quality of life for patients.",
    tags: ["Holistic Care", "Monitoring", "Support"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function InfoGrid() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-navy-900">
      {/* Subtle top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 text-xs font-semibold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4">
            Knowledge Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Understanding the{" "}
            <span className="gradient-text">Immune Landscape</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400 text-lg">
            Explore the fundamental concepts behind primary and secondary
            immunodeficiencies and the cutting-edge science driving modern care.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
              className="group relative p-6 bg-navy-800/50 border border-white/5 rounded-2xl hover:border-cyan-500/20 hover:bg-navy-700/50 transition-colors duration-300 cursor-default"
            >
              {/* Top glow on hover */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/0 to-transparent group-hover:via-cyan-500/40 transition-all duration-500" />

              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-5`}
              >
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-[11px] font-medium text-slate-400 bg-white/5 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
