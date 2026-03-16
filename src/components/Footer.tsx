import { motion } from "framer-motion";
import { Shield, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  Resources: [
    { label: "Video Course", href: "#course" },
    { label: "Research Library", href: "#" },
    { label: "Clinical Guidelines", href: "#" },
    { label: "CME Credits", href: "#" },
  ],
  Organization: [
    { label: "About Us", href: "#about" },
    { label: "Faculty", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-navy-900 border-t border-white/5">
      {/* Top glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <Shield className="w-7 h-7 text-cyan-400" />
              <span className="text-lg font-bold">
                <span className="text-white">Immuno</span>
                <span className="text-cyan-400">Global</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Empowering healthcare professionals worldwide with comprehensive
              education on immunodeficiency disorders. Building bridges between
              research and clinical practice.
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-cyan-500/50" />
              <span>Geneva, Switzerland</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-500 mt-2">
              <Mail className="w-4 h-4 text-cyan-500/50" />
              <a
                href="mailto:info@immunoglobal.org"
                className="hover:text-cyan-400 transition-colors"
              >
                info@immunoglobal.org
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-cyan-400 transition-colors group"
                    >
                      {link.label}
                      {link.href === "#" && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5">
          {/* Medical disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 p-4 bg-amber-500/5 border border-amber-500/10 rounded-xl"
          >
            <p className="text-xs text-amber-200/60 leading-relaxed">
              <span className="font-semibold text-amber-300/70">
                Medical Disclaimer:
              </span>{" "}
              The content on this website is intended for educational purposes
              only and does not constitute medical advice, diagnosis, or
              treatment. Always consult a qualified healthcare provider for
              clinical decision-making. ImmunoGlobal is not responsible for any
              actions taken based on the information provided on this platform.
            </p>
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} ImmunoGlobal. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a
                href="#"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a
                href="#"
                className="hover:text-slate-300 transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
