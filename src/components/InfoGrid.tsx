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
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100/80",
    title: "Primary Immunodeficiencies (PID)",
    description:
      "Inherited genetic disorders affecting the immune system's development or function. Over 450 distinct forms have been identified, ranging from severe combined immunodeficiency (SCID) to selective antibody deficiencies.",
    tags: ["Genetic", "Congenital", "450+ Types"],
  },
  {
    icon: ShieldCheck,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100/80",
    title: "Secondary Immunodeficiencies (SID)",
    description:
      "Acquired conditions resulting from external factors such as infections (HIV/AIDS), malnutrition, medications, or environmental exposures. SID represents the most common form of immunodeficiency globally.",
    tags: ["Acquired", "Environmental", "Treatable"],
  },
  {
    icon: Dna,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100/80",
    title: "Genetic Mechanisms",
    description:
      "Modern genomics has revolutionized our understanding of immunodeficiency. Next-generation sequencing enables rapid identification of pathogenic variants across hundreds of immune-related genes.",
    tags: ["Genomics", "NGS", "Variants"],
  },
  {
    icon: Microscope,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100/80",
    title: "Diagnostic Advances",
    description:
      "From flow cytometry to functional assays, modern diagnostics enable precise immunophenotyping. Early diagnosis dramatically improves outcomes through timely intervention and targeted therapies.",
    tags: ["Flow Cytometry", "Biomarkers", "Early Detection"],
  },
  {
    icon: Syringe,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100/80",
    title: "Treatment Modalities",
    description:
      "Therapeutic options range from immunoglobulin replacement therapy and prophylactic antibiotics to hematopoietic stem cell transplantation and emerging gene therapy approaches.",
    tags: ["HSCT", "Ig Therapy", "Gene Therapy"],
  },
  {
    icon: HeartPulse,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100/80",
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
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function InfoGrid() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-100/50 border border-blue-200 rounded-full mb-6">
            Knowledge Foundation
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
            Understanding the{" "}
            <span className="gradient-text">Immune Landscape</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 text-lg sm:text-xl font-medium">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative p-8 bg-white border border-slate-100 rounded-[2rem] card-shadow hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Subtle accent gradient top border */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-100 via-cyan-100 to-transparent rounded-t-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${card.iconBg} mb-6 ring-4 ring-white shadow-sm`}
              >
                <card.icon className={`w-7 h-7 flex-shrink-0 ${card.iconColor}`} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                {card.title}
              </h3>

              <p className="text-slate-600 leading-relaxed font-medium flex-grow mb-6">
                {card.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-bold text-slate-600 bg-slate-100 rounded-lg group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
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
